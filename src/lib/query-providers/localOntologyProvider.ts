import { projectRegistry } from '@/content/projects';
import { retrieveOntologySubgraph } from '@/lib/ontologyEngine';
import type { OntologyQueryResponse } from '@/types/ontology';
import type { QueryProvider, QueryRequestInput } from './types';

/**
 * Deterministic Stage 1 & Keyless Fallback Provider.
 * Synthesizes crisp, zero-fluff engineering answers directly from the matched Career Ontology subgraph.
 */
export class LocalOntologyProvider implements QueryProvider {
  public readonly name = 'local-ontology' as const;

  public async execute(input: QueryRequestInput): Promise<OntologyQueryResponse> {
    const { query, lens, locale } = input;
    const subgraph = retrieveOntologySubgraph(query, lens, locale);

    const matchedProjects = projectRegistry.filter((p) =>
      subgraph.relatedProjectSlugs.includes(p.slug)
    );
    const primaryProjects =
      matchedProjects.length > 0 ? matchedProjects : projectRegistry.slice(0, 2);

    const capSummaries = subgraph.entities
      .filter((e) => e.type === 'CAPABILITY' || e.type === 'ROLE')
      .slice(0, 2)
      .map((e) => e.summary[locale]);

    const synthesis =
      locale === 'ko'
        ? `${capSummaries.join(' ')} 특히 단순 개념 설계(Slide Architecture)에 머물지 않고, 도메인 온톨로지 스키마 정의부터 DataOps 품질 게이트·에이전트 런타임·운영 콘솔까지 단일 코드베이스로 직접 구축하여 검증합니다.`
        : `${capSummaries.join(' ')} Rather than stopping at slide-level architecture, every design is validated end-to-end in code—from declarative DataOps contracts and ontology schemas to agent runtimes and operator UIs.`;

    const evidencePoints = primaryProjects.map((proj) => {
      const m = proj.lensMetrics[lens][0];
      return locale === 'ko'
        ? `${proj.code} ${proj.title.ko}: ${proj.lensSummary[lens].ko} (${m.label.ko}: ${m.value})`
        : `${proj.code} ${proj.title.en}: ${proj.lensSummary[lens].en} (${m.label.en}: ${m.value})`;
    });

    return {
      query,
      lens,
      provider: this.name,
      trace: subgraph.trace,
      synthesis,
      evidencePoints,
      relatedProjectSlugs: primaryProjects.map((p) => p.slug),
    };
  }
}
