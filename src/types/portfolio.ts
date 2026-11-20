export type RoleLens = 'all' | 'de' | 'ai' | 'ax';
export type Locale = 'ko' | 'en';

export interface LocalizedText {
  ko: string;
  en: string;
}

export interface MetricItem {
  label: LocalizedText;
  value: string;
  delta?: string;
}

export type TopologyLayer = 'source' | 'dataops' | 'ontology' | 'agent' | 'consumer';

export interface ArchitectureNode {
  id: string;
  code: string;
  label: string;
  layer: TopologyLayer;
  x: number; // Normalized 0..1000 SVG coordinate
  y: number; // Normalized 0..360 SVG coordinate
  tech: string[];
  whyChosen: LocalizedText;
  tradeOff: LocalizedText;
  specSnippet: string;
  specLang: 'yaml' | 'sql' | 'ts';
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  protocol?: string;
  dashed?: boolean;
}

export interface TroubleshootingItem {
  code: string;
  bottleneck: LocalizedText;
  resolution: LocalizedText;
  outcome: LocalizedText;
}

export interface ProjectCaseStudy {
  slug: string;
  code: string;
  published: boolean;
  year: string;
  domainTag: string;
  layers: TopologyLayer[];
  title: LocalizedText;
  oneLiner: LocalizedText;
  lensPriority: Record<RoleLens, number>;
  lensSummary: Record<RoleLens, LocalizedText>;
  lensMetrics: Record<RoleLens, MetricItem[]>;
  asIsProblem: LocalizedText;
  toBeArchitecture: LocalizedText;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  troubleshooting: TroubleshootingItem[];
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    doc?: string;
  };
}

export interface SpineStep {
  code: string;
  layer: TopologyLayer;
  title: LocalizedText;
  thesis: LocalizedText;
  deliverable: LocalizedText;
}

export interface CompetencySpec {
  code: string;
  domain: LocalizedText;
  targetLens: RoleLens[];
  architecturalFocus: LocalizedText;
  antiPatternSolved: LocalizedText;
  productionStack: string[];
}

export interface CareerEntry {
  period: string;
  org: string;
  role: LocalizedText;
  scope: LocalizedText;
  keyProofs: LocalizedText[];
}

export interface ProfileSpec {
  name: LocalizedText;
  handle: string;
  currentRoleTag: LocalizedText;
  location: string;
  lensHeadline: Record<RoleLens, LocalizedText>;
  lensManifesto: Record<RoleLens, LocalizedText>;
  spine: SpineStep[];
  channels: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}
