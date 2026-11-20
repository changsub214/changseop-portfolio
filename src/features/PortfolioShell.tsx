'use client';

import React from 'react';
import { siteLayoutConfig } from '@/config/site-layout.config';
import { projectRegistry } from '@/content/projects';
import { PortfolioProvider, usePortfolio } from '@/context/PortfolioContext';
import { CommandQueryModal } from '@/features/command-query/CommandQueryModal';
import { CompetencySpecSection } from '@/features/competencies/CompetencySpecSection';
import { FooterSection } from '@/features/footer/FooterSection';
import { EditorialHero } from '@/features/hero/EditorialHero';
import { TopIndexBar } from '@/features/navigation/TopIndexBar';
import { CaseStudySheet } from '@/features/projects/CaseStudySheet';
import { ProjectSection } from '@/features/projects/ProjectSection';
import { findProjectBySlug } from '@/lib/lensEngine';
import type { SectionId } from '@/types/design';

const SECTION_RENDERERS: Record<
  SectionId,
  React.ComponentType<{ indexCode: string }>
> = {
  hero: EditorialHero,
  projects: ProjectSection,
  competencies: CompetencySpecSection,
  footer: FooterSection,
};

function PortfolioCanvas() {
  const { lens, locale, activeProjectSlug, closeProject } = usePortfolio();
  const activeProject = findProjectBySlug(projectRegistry, activeProjectSlug);

  return (
    <>
      <TopIndexBar />
      <main>
        {siteLayoutConfig.sections
          .filter((slot) => slot.enabled)
          .map((slot) => {
            const SectionComponent = SECTION_RENDERERS[slot.id];
            return (
              <SectionComponent key={slot.id} indexCode={slot.indexCode} />
            );
          })}
      </main>

      <CaseStudySheet
        key={activeProject?.slug ?? 'closed'}
        project={activeProject}
        lens={lens}
        locale={locale}
        onClose={closeProject}
      />

      <CommandQueryModal />
    </>
  );
}

export function PortfolioShell() {
  return (
    <PortfolioProvider>
      <PortfolioCanvas />
    </PortfolioProvider>
  );
}
