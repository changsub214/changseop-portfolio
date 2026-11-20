'use client';

import React from 'react';
import { Container } from '@/components/primitives/Container';
import { HairlineFrame } from '@/components/primitives/HairlineFrame';
import { MonoTag } from '@/components/primitives/MonoTag';
import { SectionIndexHeader } from '@/components/primitives/SectionIndexHeader';
import { careerTimeline, competencySpecs } from '@/content/competencies';
import { uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import { sortCompetenciesForLens } from '@/lib/lensEngine';
import styles from './CompetencySpecSection.module.css';

export function CompetencySpecSection({ indexCode }: { indexCode: string }) {
  const { lens, locale } = usePortfolio();
  const orderedSpecs = sortCompetenciesForLens(competencySpecs, lens);

  return (
    <Container
      as="section"
      id="ledger"
      variant="blueprint"
      className={styles.section}
    >
      <SectionIndexHeader
        indexCode={indexCode}
        title={uiCopy.competencies.sectionTitle[locale]}
      />

      <HairlineFrame variant="flush">
        <div className={styles.ledgerHead} aria-hidden="true">
          <span>{uiCopy.competencies.domainCol[locale]}</span>
          <span>{uiCopy.competencies.focusCol[locale]}</span>
          <span>{uiCopy.competencies.solvedCol[locale]}</span>
          <span>{uiCopy.competencies.stackCol[locale]}</span>
        </div>

        {orderedSpecs.map((spec) => {
          const isLensHighlighted =
            lens !== 'all' && spec.targetLens.includes(lens);
          return (
            <div key={spec.code} className={styles.ledgerRow}>
              <div className={styles.domainCell}>
                <MonoTag active={isLensHighlighted}>{spec.code}</MonoTag>
                <h3 className={styles.domainTitle}>{spec.domain[locale]}</h3>
              </div>

              <p className={styles.bodyCell}>{spec.architecturalFocus[locale]}</p>
              <p className={styles.mutedCell}>{spec.antiPatternSolved[locale]}</p>

              <div className={styles.stackCell}>
                {spec.productionStack.map((tool) => (
                  <MonoTag key={tool} subtle>
                    {tool}
                  </MonoTag>
                ))}
              </div>
            </div>
          );
        })}
      </HairlineFrame>

      <div className={styles.trajectoryBlock}>
        <div className={styles.subTitle}>
          {uiCopy.competencies.trajectoryTitle[locale]}
        </div>
        <div className={styles.trajectoryGrid}>
          {careerTimeline.map((entry) => (
            <HairlineFrame key={entry.org} variant="panel" className={styles.careerCard}>
              <div className={styles.careerTop}>
                <MonoTag active={entry.period === 'CURRENT'}>
                  {entry.period}
                </MonoTag>
                <span className={styles.org}>{entry.org}</span>
              </div>
              <h4 className={styles.role}>{entry.role[locale]}</h4>
              <p className={styles.scope}>{entry.scope[locale]}</p>
              <ul className={styles.proofList}>
                {entry.keyProofs.map((proof, idx) => (
                  <li key={idx}>{proof[locale]}</li>
                ))}
              </ul>
            </HairlineFrame>
          ))}
        </div>
      </div>
    </Container>
  );
}
