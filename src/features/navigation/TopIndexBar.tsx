'use client';

import React, { useState } from 'react';
import { Container } from '@/components/primitives/Container';
import {
  SegmentedSwitch,
  type SegmentOption,
} from '@/components/primitives/SegmentedSwitch';
import { profileContent } from '@/content/profile';
import { roleLensLabels, uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import type { Locale, RoleLens } from '@/types/portfolio';
import styles from './TopIndexBar.module.css';

export function TopIndexBar() {
  const { lens, locale, setLens, setLocale, openQueryConsole, buildShareUrl } =
    usePortfolio();
  const [copied, setCopied] = useState(false);

  const lensOptions: SegmentOption<RoleLens>[] = [
    { value: 'all', code: '00', label: roleLensLabels.all[locale].short },
    { value: 'de', code: '01', label: roleLensLabels.de[locale].short },
    { value: 'ai', code: '02', label: roleLensLabels.ai[locale].short },
    { value: 'ax', code: '03', label: roleLensLabels.ax[locale].short },
  ];

  const localeOptions: SegmentOption<Locale>[] = [
    { value: 'ko', label: 'KO' },
    { value: 'en', label: 'EN' },
  ];

  async function handleCopyUrl() {
    const url = buildShareUrl();
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be restricted in non-HTTPS contexts
    }
  }

  return (
    <header className={styles.bar}>
      <Container variant="blueprint" className={styles.inner}>
        <div className={styles.brand}>
          <a href="#top" className={styles.handle}>
            {profileContent.handle}
          </a>
          <span className={styles.sep} aria-hidden="true">
            {'//'}
          </span>
          <span className={styles.loc}>{profileContent.location}</span>
        </div>

        <div className={styles.lensRow}>
          <SegmentedSwitch
            ariaLabel="Role Lens Selector"
            options={lensOptions}
            value={lens}
            onChange={setLens}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            id="cmdk-open-btn"
            className={styles.queryBtn}
            onClick={() => openQueryConsole()}
          >
            <span>{uiCopy.nav.queryTrigger[locale]}</span>
            <kbd className={styles.kbd}>⌘K</kbd>
          </button>

          <button
            type="button"
            id="copy-lens-url-btn"
            className={styles.copyBtn}
            onClick={handleCopyUrl}
            title={uiCopy.nav.copyLensUrl[locale]}
          >
            {copied ? uiCopy.nav.copied[locale] : 'URL ↗'}
          </button>

          <SegmentedSwitch
            ariaLabel="Language Selector"
            options={localeOptions}
            value={locale}
            onChange={setLocale}
            compact
          />
        </div>
      </Container>
    </header>
  );
}
