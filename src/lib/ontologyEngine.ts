import { careerOntologyEntities, careerOntologyRelations } from '@/content/ontology-graph';
import type { MatchedTraceHop, OntologyEntity } from '@/types/ontology';
import type { Locale, RoleLens } from '@/types/portfolio';

export interface SubgraphMatch {
  entities: OntologyEntity[];
  trace: MatchedTraceHop[];
  relatedProjectSlugs: string[];
}

/**
 * Deterministic Career Ontology Subgraph Retriever.
 * Scores entities by query tokens + active RoleLens, then extracts connecting edges.
 */
export function retrieveOntologySubgraph(
  rawQuery: string,
  lens: RoleLens,
  locale: Locale
): SubgraphMatch {
  const normalized = rawQuery.toLowerCase().trim();
  const tokens = normalized.split(/[\s,./?!·-]+/).filter((t) => t.length > 1);

  const scored = careerOntologyEntities.map((entity) => {
    let score = 0;

    if (lens !== 'all' && entity.relatedLens.includes(lens)) {
      score += 2;
    } else if (lens === 'all') {
      score += 1;
    }

    for (const kw of entity.keywords) {
      if (normalized.includes(kw.toLowerCase())) {
        score += 5;
      }
    }

    for (const tok of tokens) {
      if (
        entity.label.ko.toLowerCase().includes(tok) ||
        entity.label.en.toLowerCase().includes(tok) ||
        entity.summary.ko.toLowerCase().includes(tok) ||
        entity.summary.en.toLowerCase().includes(tok)
      ) {
        score += 3;
      }
    }

    return { entity, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const topIds = new Set(scored.slice(0, 4).map((s) => s.entity.id));

  // Expand 1-hop relations connected to top matched entities
  const matchedRelations = careerOntologyRelations.filter(
    (rel) => topIds.has(rel.from) || topIds.has(rel.to)
  );

  for (const rel of matchedRelations.slice(0, 4)) {
    topIds.add(rel.from);
    topIds.add(rel.to);
  }

  const entityMap = new Map(careerOntologyEntities.map((e) => [e.id, e]));

  const trace: MatchedTraceHop[] = matchedRelations.slice(0, 4).flatMap((rel) => {
    const fromEnt = entityMap.get(rel.from);
    const toEnt = entityMap.get(rel.to);
    if (!fromEnt || !toEnt) return [];
    return [
      {
        fromLabel: fromEnt.label[locale],
        fromType: fromEnt.type,
        predicate: rel.predicate,
        toLabel: toEnt.label[locale],
        toType: toEnt.type,
      },
    ];
  });

  const entities = Array.from(topIds)
    .map((id) => entityMap.get(id))
    .filter((e): e is OntologyEntity => Boolean(e));

  const relatedProjectSlugs = entities
    .map((e) => e.projectSlug)
    .filter((slug): slug is string => Boolean(slug));

  return {
    entities,
    trace,
    relatedProjectSlugs: Array.from(new Set(relatedProjectSlugs)),
  };
}
