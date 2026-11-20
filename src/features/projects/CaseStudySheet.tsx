'use client';

import React, { useState } from 'react';
import { MetricReadout } from '@/components/primitives/MetricReadout';
import { MonoTag } from '@/components/primitives/MonoTag';
import { OverlaySheet } from '@/components/primitives/OverlaySheet';
import { roleLensLabels, uiCopy } from '@/content/ui-copy';
import { NodeSpecInspector } from '@/features/topology/NodeSpecInspector';
import { TopologyCanvas } from '@/features/topology/TopologyCanvas';
import type { Locale, ProjectCaseStudy, RoleLens } from '@/types/portfolio';
import styles from './CaseStudySheet.module.css';

interface CaseStudySheetProps {
  project: ProjectCaseStudy | null;
  lens: RoleLens;
  locale: Locale;
  onClose: () => void;
}

export function CaseStudySheet({
  project,
  lens,
  locale,
  onClose,
}: CaseStudySheetProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');

  if (!project) return null;

  const activeNode =
    project.nodes.find((n) => n.id === selectedNodeId) ?? project.nodes[0];

  return (
    <OverlaySheet
      open={Boolean(project)}
      onClose={onClose}
      mode="sheet"
      ariaLabel={project.title[locale]}
    >
      <div className={styles.sheet}>
        <div className={styles.topBar}>
          <div className={styles.topLeft}>
            <MonoTag active>{project.code}</MonoTag>
            <span className={styles.metaText}>{project.domainTag}</span>
            <span className={styles.metaText}>
              {`// LENS: ${roleLensLabels[lens][locale].short}`}
            </span>
          </div>
          <button
            type="button"
            id="close-case-study-btn"
            className={styles.closeBtn}
            onClick={onClose}
          >
            {uiCopy.sheet.close[locale]}
          </button>
        </div>

        <div className={styles.headerBlock}>
          <h2 className={styles.title}>{project.title[locale]}</h2>
          <p className={styles.oneLiner}>{project.oneLiner[locale]}</p>

          <div className={styles.metricsStrip}>
            {project.lensMetrics[lens].map((m) => (
              <MetricReadout
                key={m.label.en}
                label={m.label[locale]}
                value={m.value}
                delta={m.delta}
              />
            ))}
          </div>
        </div>

        <div className={styles.asIsToBeGrid}>
          <div className={styles.narrativeCell}>
            <span className={styles.cellTag}>{uiCopy.sheet.asIsLabel[locale]}</span>
            <p className={styles.cellBody}>{project.asIsProblem[locale]}</p>
          </div>
          <div className={styles.narrativeCell}>
            <span className={styles.cellTagAccent}>
              {uiCopy.sheet.toBeLabel[locale]}
            </span>
            <p className={styles.cellBody}>{project.toBeArchitecture[locale]}</p>
          </div>
        </div>

        <div className={styles.topologySection}>
          <div className={styles.subHeader}>
            {uiCopy.sheet.topologyHeading[locale]}
          </div>
          <TopologyCanvas
            nodes={project.nodes}
            edges={project.edges}
            mode="interactive"
            selectedNodeId={activeNode?.id}
            onSelectNode={setSelectedNodeId}
          />
          {activeNode ? (
            <NodeSpecInspector node={activeNode} locale={locale} />
          ) : null}
        </div>

        <div className={styles.troubleSection}>
          <div className={styles.subHeader}>
            {uiCopy.sheet.troubleshootingHeading[locale]}
          </div>
          {project.troubleshooting.map((item) => (
            <div key={item.code} className={styles.troubleRow}>
              <MonoTag>{item.code}</MonoTag>
              <div className={styles.troubleCols}>
                <p>
                  <strong className={styles.inlineKey}>BOTTLENECK: </strong>
                  {item.bottleneck[locale]}
                </p>
                <p>
                  <strong className={styles.inlineKey}>RESOLUTION: </strong>
                  {item.resolution[locale]}
                </p>
                <p className={styles.outcomeLine}>
                  <strong className={styles.inlineKeyAccent}>OUTCOME: </strong>
                  {item.outcome[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.stackWrap}>
            {project.stack.map((tech) => (
              <MonoTag key={tech} subtle>
                {tech}
              </MonoTag>
            ))}
          </div>
          <div className={styles.extLinks}>
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className={styles.extLink}
              >
                GITHUB REPO ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </OverlaySheet>
  );
}
