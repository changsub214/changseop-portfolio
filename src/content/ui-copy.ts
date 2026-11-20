import type { Locale, RoleLens } from '@/types/portfolio';

export const roleLensLabels: Record<RoleLens, Record<Locale, { short: string; full: string }>> = {
  all: {
    ko: { short: 'ALL', full: '통합 관점' },
    en: { short: 'ALL', full: 'Unified View' },
  },
  de: {
    ko: { short: 'DE · DATAOPS', full: 'Data Engineer' },
    en: { short: 'DE · DATAOPS', full: 'Data Engineer' },
  },
  ai: {
    ko: { short: 'AI · AGENT', full: 'AI Engineer' },
    en: { short: 'AI · AGENT', full: 'AI Engineer' },
  },
  ax: {
    ko: { short: 'AX · LEAD', full: 'AX Transformation' },
    en: { short: 'AX · LEAD', full: 'AX Transformation' },
  },
};

export const uiCopy = {
  nav: {
    queryTrigger: { ko: 'INDEX QUERY', en: 'INDEX QUERY' },
    copyLensUrl: { ko: '현재 직무 뷰 링크 복사', en: 'Copy Lens URL' },
    copied: { ko: '링크 복사됨', en: 'URL Copied' },
  },
  hero: {
    lensIndicatorPrefix: { ko: 'ACTIVE LENS //', en: 'ACTIVE LENS //' },
    spineTitle: {
      ko: 'ARCHITECTURE SPINE — 클릭하여 계층별 설계 원칙 확인',
      en: 'ARCHITECTURE SPINE — SELECT A LAYER TO INSPECT THESIS',
    },
    deliverableLabel: { ko: '핵심 산출물', en: 'PRIMARY ARTIFACT' },
  },
  projects: {
    sectionTitle: { ko: 'SELECTED SYSTEMS & ARCHITECTURES', en: 'SELECTED SYSTEMS & ARCHITECTURES' },
    sectionNote: {
      ko: '상단 직무 렌즈에 따라 대표 도면 블록과 핵심 지표가 재정렬됩니다.',
      en: 'Flagship blueprints and primary telemetry adapt to the active role lens.',
    },
    flagshipLabel: { ko: 'FLAGSHIP BLUEPRINT', en: 'FLAGSHIP BLUEPRINT' },
    archiveLabel: { ko: 'SYSTEM ARCHIVE INDEX', en: 'SYSTEM ARCHIVE INDEX' },
    inspectAction: { ko: 'INSPECT CASE STUDY ->', en: 'INSPECT CASE STUDY ->' },
    topologyPreviewLabel: { ko: 'TOPOLOGY PREVIEW (CLICK TO OPEN)', en: 'TOPOLOGY PREVIEW (CLICK TO OPEN)' },
    colCode: { ko: 'IDX', en: 'IDX' },
    colTitle: { ko: 'SYSTEM / ARCHITECTURE', en: 'SYSTEM / ARCHITECTURE' },
    colLayers: { ko: 'CORE LAYERS', en: 'CORE LAYERS' },
    colMetric: { ko: 'LENS TELEMETRY', en: 'LENS TELEMETRY' },
    colYear: { ko: 'YEAR', en: 'YEAR' },
  },
  sheet: {
    close: { ko: 'CLOSE [ESC]', en: 'CLOSE [ESC]' },
    asIsLabel: { ko: 'AS-IS // BOTTLENECK & AMBIGUITY', en: 'AS-IS // BOTTLENECK & AMBIGUITY' },
    toBeLabel: { ko: 'TO-BE // GOVERNED ARCHITECTURE', en: 'TO-BE // GOVERNED ARCHITECTURE' },
    topologyHeading: {
      ko: 'INTERACTIVE SYSTEM TOPOLOGY — 노드를 클릭해 설계 근거와 스키마를 확인하세요',
      en: 'INTERACTIVE SYSTEM TOPOLOGY — SELECT ANY NODE TO INSPECT RATIONALE & SPEC',
    },
    whyChosen: { ko: 'DECISION RATIONALE', en: 'DECISION RATIONALE' },
    tradeOff: { ko: 'TRADE-OFF & REJECTED ALTERNATIVE', en: 'TRADE-OFF & REJECTED ALTERNATIVE' },
    specTitle: { ko: 'IMPLEMENTATION / SCHEMA ARTIFACT', en: 'IMPLEMENTATION / SCHEMA ARTIFACT' },
    troubleshootingHeading: {
      ko: 'PRODUCTION BOTTLENECKS & RESOLUTIONS',
      en: 'PRODUCTION BOTTLENECKS & RESOLUTIONS',
    },
  },
  competencies: {
    sectionTitle: { ko: 'ARCHITECTURAL LEDGER & TRAJECTORY', en: 'ARCHITECTURAL LEDGER & TRAJECTORY' },
    domainCol: { ko: 'DOMAIN', en: 'DOMAIN' },
    focusCol: { ko: 'ARCHITECTURAL THESIS', en: 'ARCHITECTURAL THESIS' },
    solvedCol: { ko: 'FAILURE MODE PREVENTED', en: 'FAILURE MODE PREVENTED' },
    stackCol: { ko: 'TOOLCHAIN', en: 'TOOLCHAIN' },
    trajectoryTitle: { ko: 'FIELD & ENGINEERING TRAJECTORY', en: 'FIELD & ENGINEERING TRAJECTORY' },
  },
  cmdk: {
    title: { ko: 'CAREER ONTOLOGY QUERY CONSOLE', en: 'CAREER ONTOLOGY QUERY CONSOLE' },
    placeholder: {
      ko: '역량, 온톨로지 모델링, DataOps, 에이전트 구현 방식 질문 입력...',
      en: 'Query capabilities, ontology modeling, DataOps, or agent builds...',
    },
    runButton: { ko: 'EXECUTE', en: 'EXECUTE' },
    presetsLabel: { ko: 'SUGGESTED QUERIES FOR CURRENT LENS', en: 'SUGGESTED QUERIES FOR CURRENT LENS' },
    traceLabel: { ko: 'MATCHED ONTOLOGY SUBGRAPH', en: 'MATCHED ONTOLOGY SUBGRAPH' },
    synthesisLabel: { ko: 'GROUNDED SYNTHESIS', en: 'GROUNDED SYNTHESIS' },
    evidenceLabel: { ko: 'VERIFIABLE EVIDENCE', en: 'VERIFIABLE EVIDENCE' },
    jumpToProject: { ko: '관련 아키텍처 도면 열기:', en: 'Inspect Referenced System:' },
  },
  footer: {
    sectionTitle: { ko: 'DIRECT CHANNELS & LENS DEEP-LINKS', en: 'DIRECT CHANNELS & LENS DEEP-LINKS' },
    note: {
      ko: 'Stage 1 디자인 검수 프로토타입 — 모든 텍스트·수치·도면 노드는 src/content/ 모듈에서 독립 편집됩니다.',
      en: 'Stage 1 Design Architecture Prototype — All copy, metrics, and topology nodes are isolated in src/content/.',
    },
  },
} as const;
