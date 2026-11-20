'use client';

import React from 'react';
import { HairlineFrame } from '@/components/primitives/HairlineFrame';
import { MetricReadout } from '@/components/primitives/MetricReadout';
import { MonoTag } from '@/components/primitives/MonoTag';
import { uiCopy } from '@/content/ui-copy';
import { TopologyCanvas } from '@/features/topology/TopologyCanvas';
import type { Locale, ProjectCaseStudy, RoleLens } from '@/types/portfolio';
import styles from './FlagshipSpecBlock.module.css';

interface FlagshipSpecBlockProps {
  project: ProjectCaseStudy;
  lens: RoleLens;
  locale: Locale;
  onInspect: (slug: string) => void;
}

export function FlagshipSpecBlock({
  project,
  lens,
  locale,
  onInspect,
}: FlagshipSpecBlockProps) {
  const metrics = project.lensMetrics[lens];

  return (
    <HairlineFrame
      variant="interactive"
      className={styles.block}
      onClick={() => onInspect(project.slug)}
    >
      <div className={styles.topStrip}>
        <div className={styles.topMeta}>
          <MonoTag active>{project.code}</MonoTag>
          <span className={styles.domain}>{project.domainTag}</span>
        </div>
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.bodyGrid}>
        <div className={styles.specCol}>
          <h3 className={styles.title}>{project.title[locale]}</h3>
          <p className={styles.summary}>{project.lensSummary[lens][locale]}</p>

          <div className={styles.metricsGrid}>
            {metrics.map((m) => (
              <MetricReadout
                key={m.label.en}
                label={m.label[locale]}
                value={m.value}
                delta={m.delta}
              />
            ))}
          </div>

          <div className={styles.footerRow}>
            <div className={styles.stackRow}>
              {project.stack.slice(0, 5).map((tech) => (
                <MonoTag key={tech} subtle>
                  {tech}
                </MonoTag>
              ))}
            </div>
            <span className={styles.inspectCta}>
              {uiCopy.projects.inspectAction[locale]}
            </span>
          </div>
        </div>

        <div className={styles.diagramCol}>
          <div className={styles.diagramCaption}>
            <span>{uiCopy.projects.topologyPreviewLabel[locale]}</span>
            <span>{project.nodes.length} NODES</span>
          </div>
          <TopologyCanvas
            nodes={project.nodes}
            edges={project.edges}
            mode="preview"
          />
        </div>
      </div>
    </HairlineFrame>
  );
}
