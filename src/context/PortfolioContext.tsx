'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { useGlobalShortcuts } from '@/hooks/useGlobalShortcuts';
import type { Locale, RoleLens } from '@/types/portfolio';

const VALID_LENSES: RoleLens[] = ['all', 'de', 'ai', 'ax'];
const VALID_LOCALES: Locale[] = ['ko', 'en'];

function parseLens(raw: string | null): RoleLens {
  return VALID_LENSES.includes(raw as RoleLens) ? (raw as RoleLens) : 'all';
}

function parseLocale(raw: string | null): Locale {
  return VALID_LOCALES.includes(raw as Locale) ? (raw as Locale) : 'ko';
}

interface PortfolioContextValue {
  lens: RoleLens;
  locale: Locale;
  activeProjectSlug: string | null;
  isQueryOpen: boolean;
  setLens: (next: RoleLens) => void;
  setLocale: (next: Locale) => void;
  openProject: (slug: string) => void;
  closeProject: () => void;
  openQueryConsole: (prefill?: string) => void;
  closeQueryConsole: () => void;
  initialQueryPrefill: string;
  buildShareUrl: (overrideLens?: RoleLens) => string;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

function buildQueryString(
  lens: RoleLens,
  locale: Locale,
  projectSlug: string | null
): string {
  const params = new URLSearchParams();
  if (lens !== 'all') params.set('lens', lens);
  if (locale !== 'ko') params.set('lang', locale);
  if (projectSlug) params.set('project', projectSlug);
  const qs = params.toString();
  return qs ? `?${qs}` : window.location.pathname;
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const [lens, setLensState] = useState<RoleLens>(() =>
    parseLens(searchParams.get('lens'))
  );
  const [locale, setLocaleState] = useState<Locale>(() =>
    parseLocale(searchParams.get('lang'))
  );
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() =>
    searchParams.get('project')
  );
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [initialQueryPrefill, setInitialQueryPrefill] = useState('');

  // Sync browser back/forward button (cdg-portfolio style modal history UX)
  useEffect(() => {
    function handlePopState() {
      const params = new URLSearchParams(window.location.search);
      setLensState(parseLens(params.get('lens')));
      setLocaleState(parseLocale(params.get('lang')));
      setActiveProjectSlug(params.get('project'));
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lock background body scroll whenever any overlay is open
  useEffect(() => {
    const anyOpen = Boolean(activeProjectSlug) || isQueryOpen;
    document.body.dataset.overlayOpen = anyOpen ? 'true' : 'false';
    return () => {
      document.body.dataset.overlayOpen = 'false';
    };
  }, [activeProjectSlug, isQueryOpen]);

  const setLens = useCallback(
    (next: RoleLens) => {
      setLensState(next);
      const nextUrl = buildQueryString(next, locale, activeProjectSlug);
      window.history.replaceState(null, '', nextUrl);
    },
    [locale, activeProjectSlug]
  );

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      const nextUrl = buildQueryString(lens, next, activeProjectSlug);
      window.history.replaceState(null, '', nextUrl);
    },
    [lens, activeProjectSlug]
  );

  const openProject = useCallback(
    (slug: string) => {
      setIsQueryOpen(false);
      setActiveProjectSlug(slug);
      const nextUrl = buildQueryString(lens, locale, slug);
      window.history.pushState({ project: slug }, '', nextUrl);
    },
    [lens, locale]
  );

  const closeProject = useCallback(() => {
    if (!activeProjectSlug) return;
    setActiveProjectSlug(null);
    const nextUrl = buildQueryString(lens, locale, null);
    window.history.pushState(null, '', nextUrl);
  }, [activeProjectSlug, lens, locale]);

  const openQueryConsole = useCallback((prefill = '') => {
    setInitialQueryPrefill(prefill);
    setIsQueryOpen(true);
  }, []);

  const closeQueryConsole = useCallback(() => {
    setIsQueryOpen(false);
  }, []);

  useGlobalShortcuts({
    onToggleCommandQuery: () => setIsQueryOpen((prev) => !prev),
    onEscape: () => {
      if (isQueryOpen) {
        setIsQueryOpen(false);
      } else if (activeProjectSlug) {
        closeProject();
      }
    },
  });

  const buildShareUrl = useCallback(
    (overrideLens?: RoleLens) => {
      if (typeof window === 'undefined') return '';
      const targetLens = overrideLens ?? lens;
      const url = new URL(window.location.origin + window.location.pathname);
      if (targetLens !== 'all') url.searchParams.set('lens', targetLens);
      if (locale !== 'ko') url.searchParams.set('lang', locale);
      return url.toString();
    },
    [lens, locale]
  );

  const value = useMemo<PortfolioContextValue>(
    () => ({
      lens,
      locale,
      activeProjectSlug,
      isQueryOpen,
      setLens,
      setLocale,
      openProject,
      closeProject,
      openQueryConsole,
      closeQueryConsole,
      initialQueryPrefill,
      buildShareUrl,
    }),
    [
      lens,
      locale,
      activeProjectSlug,
      isQueryOpen,
      setLens,
      setLocale,
      openProject,
      closeProject,
      openQueryConsole,
      closeQueryConsole,
      initialQueryPrefill,
      buildShareUrl,
    ]
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error('usePortfolio must be used inside PortfolioProvider');
  }
  return ctx;
}
