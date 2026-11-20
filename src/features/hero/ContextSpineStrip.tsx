'use client';

import React, { useState } from 'react';
import { profileContent } from '@/content/profile';
import { uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import styles from './ContextSpineStrip.module.css';

export function ContextSpineStrip() {
  const { locale } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default highlight: 02 Domain Ontology

  const activeStep = profileContent.spine[activeIndex] ?? profileContent.spine[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.caption}>{uiCopy.hero.spineTitle[locale]}</div>

      <div className={styles.stepsRow} role="tablist" aria-label="Architecture Spine">
        {profileContent.spine.map((step, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={step.code}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`${styles.stepBtn} ${isSelected ? styles.active : ''}`.trim()}
              onClick={() => setActiveIndex(idx)}
            >
              <span className={styles.stepTop}>
                <span className={styles.code}>{step.code}</span>
                {idx < profileContent.spine.length - 1 ? (
                  <span className={styles.arrow} aria-hidden="true">
                    ───&gt;
                  </span>
                ) : null}
              </span>
              <span className={styles.stepTitle}>{step.title[locale]}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.detailRow}>
        <p className={styles.thesis}>{activeStep.thesis[locale]}</p>
        <div className={styles.deliverable}>
          <span className={styles.delivLabel}>
            {uiCopy.hero.deliverableLabel[locale]}
          </span>
          <span className={styles.delivValue}>
            {activeStep.deliverable[locale]}
          </span>
        </div>
      </div>
    </div>
  );
}
