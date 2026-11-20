import type { LocalizedText, RoleLens } from './portfolio';

export type OntologyEntityType =
  | 'ROLE'
  | 'CAPABILITY'
  | 'LAYER'
  | 'PROJECT'
  | 'OUTCOME';

export interface OntologyEntity {
  id: string;
  type: OntologyEntityType;
  label: LocalizedText;
  summary: LocalizedText;
  relatedLens: RoleLens[];
  projectSlug?: string;
  keywords: string[];
}

export interface OntologyRelation {
  from: string;
  predicate: string;
  to: string;
}

export interface MatchedTraceHop {
  fromLabel: string;
  fromType: OntologyEntityType;
  predicate: string;
  toLabel: string;
  toType: OntologyEntityType;
}

export interface PresetQueryItem {
  id: string;
  lens: RoleLens;
  prompt: LocalizedText;
}

export interface OntologyQueryResponse {
  query: string;
  lens: RoleLens;
  provider: 'local-ontology' | 'gemini';
  trace: MatchedTraceHop[];
  synthesis: string;
  evidencePoints: string[];
  relatedProjectSlugs: string[];
}
