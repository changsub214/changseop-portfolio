'use client';

import React from 'react';
import { MonoTag } from '@/components/primitives/MonoTag';
import type { Locale, ProjectCaseStudy, RoleLens } from '@/types/portfolio';
import styles from './ArchiveIndexRow.module.css';

interface ArchiveIndexRowProps {
  project: ProjectCaseStudy;
  lens: RoleLens;
  locale: Locale;
  onInspect: (slug: string) => void;
}

export function ArchiveIndexRow({
  project,
  lens,
  locale,
  onInspect,
}: ArchiveIndexRowProps) {
  const primaryMetric = project.lensMetrics[lens][0];

  return (
    <button
      type="button"
      className={styles.row}
      onClick={() => onInspect(project.slug)}
    >
      <span className={styles.code}>{project.code}</span>

      <span className={styles.titleWrap}>
        <strong className={styles.title}>{project.title[locale]}</strong>
        <span className={styles.oneLiner}>{project.oneLiner[locale]}</span>
      </span>

      <span className={styles.layers}>
        {project.layers.map((layer) => (
          <MonoTag key={layer} subtle>
            {layer}
          </MonoTag>
        ))}
      </span>

      <span className={styles.metric}>
        <span className={styles.metricLabel}>{primaryMetric.label[locale]}</span>
        <span className={styles.metricValue}>{primaryMetric.value}</span>
      </span>

      <span className={styles.yearArrow}>
        <span>{project.year}</span>
        <span className={styles.arrow} aria-hidden="true">
          -&gt;
        </span>
      </span>
    </button>
  );
}
