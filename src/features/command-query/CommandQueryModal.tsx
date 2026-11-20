'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MonoTag } from '@/components/primitives/MonoTag';
import { OverlaySheet } from '@/components/primitives/OverlaySheet';
import { presetQueries } from '@/content/ontology-graph';
import { projectRegistry } from '@/content/projects';
import { roleLensLabels, uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import type { OntologyQueryResponse } from '@/types/ontology';
import { OntologyTraceBar } from './OntologyTraceBar';
import styles from './CommandQueryModal.module.css';

function CommandQueryBody({ initialPrefill }: { initialPrefill: string }) {
  const { lens, locale, closeQueryConsole, openProject } = usePortfolio();

  const [input, setInput] = useState(initialPrefill);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<OntologyQueryResponse | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(timer);
  }, []);

  async function runQuery(targetQuery: string) {
    const trimmed = targetQuery.trim();
    if (!trimmed) return;
    setInput(trimmed);
    setLoading(true);
    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: trimmed, lens, locale }),
      });
      if (res.ok) {
        const payload = (await res.json()) as OntologyQueryResponse;
        setResponse(payload);
      }
    } finally {
      setLoading(false);
    }
  }

  const orderedPresets = presetQueries.slice().sort((a, b) => {
    const aHit = a.lens === lens ? 0 : 1;
    const bHit = b.lens === lens ? 0 : 1;
    return aHit - bHit;
  });

  return (
    <div className={styles.console}>
      <div className={styles.topStrip}>
        <div className={styles.topMeta}>
          <MonoTag active>{'CMD // ⌘K'}</MonoTag>
          <span>{uiCopy.cmdk.title[locale]}</span>
          <span className={styles.dim}>
            [{roleLensLabels[lens][locale].short}]
          </span>
        </div>
        <button
          type="button"
          className={styles.escBtn}
          onClick={closeQueryConsole}
        >
          ESC
        </button>
      </div>

      <form
        className={styles.promptRow}
        onSubmit={(e) => {
          e.preventDefault();
          void runQuery(input);
        }}
      >
        <span className={styles.promptCaret} aria-hidden="true">
          &gt;
        </span>
        <input
          ref={inputRef}
          id="ontology-query-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={uiCopy.cmdk.placeholder[locale]}
          className={styles.input}
        />
        <button
          type="submit"
          className={styles.execBtn}
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : uiCopy.cmdk.runButton[locale]}
        </button>
      </form>

      <div className={styles.presetSection}>
        <div className={styles.sectionLabel}>
          {uiCopy.cmdk.presetsLabel[locale]}
        </div>
        <div className={styles.presetList}>
          {orderedPresets.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.presetBtn}
              onClick={() => void runQuery(item.prompt[locale])}
            >
              <span className={styles.presetCode}>
                [{item.lens.toUpperCase()}]
              </span>
              <span>{item.prompt[locale]}</span>
            </button>
          ))}
        </div>
      </div>

      {response ? (
        <div className={styles.resultPane}>
          <OntologyTraceBar
            label={uiCopy.cmdk.traceLabel[locale]}
            trace={response.trace}
          />

          <div className={styles.synthBlock}>
            <div className={styles.sectionLabel}>
              {`${uiCopy.cmdk.synthesisLabel[locale]} // [${response.provider}]`}
            </div>
            <p className={styles.synthText}>{response.synthesis}</p>
          </div>

          <div className={styles.evidenceBlock}>
            <div className={styles.sectionLabel}>
              {uiCopy.cmdk.evidenceLabel[locale]}
            </div>
            <ul className={styles.evidenceList}>
              {response.evidencePoints.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>

          {response.relatedProjectSlugs.length > 0 ? (
            <div className={styles.jumpRow}>
              <span className={styles.jumpLabel}>
                {uiCopy.cmdk.jumpToProject[locale]}
              </span>
              {response.relatedProjectSlugs.map((slug) => {
                const proj = projectRegistry.find((p) => p.slug === slug);
                if (!proj) return null;
                return (
                  <button
                    key={slug}
                    type="button"
                    className={styles.jumpBtn}
                    onClick={() => openProject(slug)}
                  >
                    {`${proj.code} ${proj.title[locale]} ->`}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function CommandQueryModal() {
  const { locale, isQueryOpen, closeQueryConsole, initialQueryPrefill } =
    usePortfolio();

  return (
    <OverlaySheet
      open={isQueryOpen}
      onClose={closeQueryConsole}
      mode="console"
      ariaLabel={uiCopy.cmdk.title[locale]}
    >
      <CommandQueryBody
        key={initialQueryPrefill || 'default'}
        initialPrefill={initialQueryPrefill}
      />
    </OverlaySheet>
  );
}
