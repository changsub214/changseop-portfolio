import type { CompetencySpec, ProjectCaseStudy, RoleLens } from '@/types/portfolio';

export interface ResolvedProjectsView {
  flagship: ProjectCaseStudy[];
  archive: ProjectCaseStudy[];
  allOrdered: ProjectCaseStudy[];
}

/**
 * Pure domain resolver: orders published projects for the active RoleLens
 * and partitions them into wide Flagship Blueprint blocks vs. Archive Index rows.
 */
export function resolveProjectsForLens(
  projects: ProjectCaseStudy[],
  lens: RoleLens,
  flagshipCount: number
): ResolvedProjectsView {
  const safeCount = Math.max(0, flagshipCount);
  const allOrdered = projects
    .filter((p) => p.published)
    .slice()
    .sort((a, b) => a.lensPriority[lens] - b.lensPriority[lens]);

  return {
    flagship: allOrdered.slice(0, safeCount),
    archive: allOrdered.slice(safeCount),
    allOrdered,
  };
}

export function findProjectBySlug(
  projects: ProjectCaseStudy[],
  slug: string | null | undefined
): ProjectCaseStudy | null {
  if (!slug) return null;
  return projects.find((p) => p.published && p.slug === slug) ?? null;
}

export function sortCompetenciesForLens(
  competencies: CompetencySpec[],
  lens: RoleLens
): CompetencySpec[] {
  if (lens === 'all') return competencies;
  return competencies.slice().sort((a, b) => {
    const aHit = a.targetLens.includes(lens) ? 0 : 1;
    const bHit = b.targetLens.includes(lens) ? 0 : 1;
    return aHit - bHit;
  });
}
