'use client';

import React from 'react';
import { Container } from '@/components/primitives/Container';
import { HairlineFrame } from '@/components/primitives/HairlineFrame';
import { SectionIndexHeader } from '@/components/primitives/SectionIndexHeader';
import { siteLayoutConfig } from '@/config/site-layout.config';
import { projectRegistry } from '@/content/projects';
import { uiCopy } from '@/content/ui-copy';
import { usePortfolio } from '@/context/PortfolioContext';
import { resolveProjectsForLens } from '@/lib/lensEngine';
import { ArchiveIndexRow } from './ArchiveIndexRow';
import { FlagshipSpecBlock } from './FlagshipSpecBlock';
import styles from './ProjectSection.module.css';

export function ProjectSection({ indexCode }: { indexCode: string }) {
  const { lens, locale, openProject } = usePortfolio();

  const { flagship, archive } = resolveProjectsForLens(
    projectRegistry,
    lens,
    siteLayoutConfig.projects.flagshipCount
  );

  return (
    <Container
      as="section"
      id="systems"
      variant="blueprint"
      className={styles.section}
    >
      <SectionIndexHeader
        indexCode={indexCode}
        title={uiCopy.projects.sectionTitle[locale]}
        note={uiCopy.projects.sectionNote[locale]}
      />

      {/* Zone B-1: Asymmetric Flagship Wide Blueprint Blocks */}
      {flagship.length > 0 ? (
        <div className={styles.flagshipStack}>
          {flagship.map((project) => (
            <FlagshipSpecBlock
              key={project.slug}
              project={project}
              lens={lens}
              locale={locale}
              onInspect={openProject}
            />
          ))}
        </div>
      ) : null}

      {/* Zone B-2: Clean Tabular Archive Index Rows */}
      {archive.length > 0 ? (
        <div className={styles.archiveBlock}>
          <div className={styles.archiveSubLabel}>
            {uiCopy.projects.archiveLabel[locale]}
          </div>
          <HairlineFrame variant="flush">
            <div className={styles.tableHead} aria-hidden="true">
              <span>{uiCopy.projects.colCode[locale]}</span>
              <span>{uiCopy.projects.colTitle[locale]}</span>
              <span className={styles.hideMobile}>
                {uiCopy.projects.colLayers[locale]}
              </span>
              <span className={styles.hideMobile}>
                {uiCopy.projects.colMetric[locale]}
              </span>
              <span className={styles.alignRight}>
                {uiCopy.projects.colYear[locale]}
              </span>
            </div>
            {archive.map((project) => (
              <ArchiveIndexRow
                key={project.slug}
                project={project}
                lens={lens}
                locale={locale}
                onInspect={openProject}
              />
            ))}
          </HairlineFrame>
        </div>
      ) : null}
    </Container>
  );
}
