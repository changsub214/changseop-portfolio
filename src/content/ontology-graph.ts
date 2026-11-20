import type { OntologyEntity, OntologyRelation, PresetQueryItem } from '@/types/ontology';

export const careerOntologyEntities: OntologyEntity[] = [
  {
    id: 'role-de',
    type: 'ROLE',
    label: { ko: 'Data Engineer (DataOps/Modeling)', en: 'Data Engineer (DataOps/Modeling)' },
    summary: {
      ko: '선언적 DataOps 파이프라인과 엔터프라이즈 온톨로지·시맨틱 데이터 모델링 역량',
      en: 'Declarative DataOps pipelines and enterprise ontology / semantic data modeling.',
    },
    relatedLens: ['de', 'all'],
    keywords: ['데이터엔지니어', 'de', 'dataops', '파이프라인', '모델링', '스키마', 'dbt', 'bigquery', '리니지', 'lineage', '품질'],
  },
  {
    id: 'role-ai',
    type: 'ROLE',
    label: { ko: 'AI / Agent Systems Engineer', en: 'AI / Agent Systems Engineer' },
    summary: {
      ko: '온톨로지 컨텍스트 엔지니어링과 바이브코딩 기반 풀스택 에이전트 구현·평가 역량',
      en: 'Ontology context engineering and rapid full-stack agent implementation with automated evals.',
    },
    relatedLens: ['ai', 'all'],
    keywords: ['ai', '에이전트', 'agent', 'rag', 'graphrag', '할루시네이션', '환각', '바이브코딩', 'vibe', 'llm', 'eval', '구현', '코딩'],
  },
  {
    id: 'role-ax',
    type: 'ROLE',
    label: { ko: 'Enterprise AX Lead', en: 'Enterprise AX Lead' },
    summary: {
      ko: 'Google CE의 비즈니스 병목 진단력 + 수일 내 작동하는 온톨로지·에이전트 구축으로 조직 AX 견인',
      en: 'Google CE executive discovery paired with rapid ontology-to-agent execution to drive measurable AX ROI.',
    },
    relatedLens: ['ax', 'all'],
    keywords: ['ax', '전환', '비즈니스', 'roi', '거버넌스', '리드', '고객', 'ce', '구글', 'google', '프로세스', '혁신', '도입'],
  },
  {
    id: 'cap-ontology',
    type: 'CAPABILITY',
    label: { ko: 'Enterprise Ontology Compiler', en: 'Enterprise Ontology Compiler' },
    summary: {
      ko: '테이블을 객체·관계·허용 액션 스키마로 추상화해 에이전트 추론의 결정론적 경계를 형성',
      en: 'Abstracts raw tables into object-relation-action schemas for deterministic agent reasoning.',
    },
    relatedLens: ['all', 'de', 'ai', 'ax'],
    keywords: ['온톨로지', 'ontology', '시맨틱', 'semantic', '모델링', 'modeling', '엔티티', '그래프', '컨텍스트'],
  },
  {
    id: 'cap-dataops',
    type: 'CAPABILITY',
    label: { ko: 'Contract-Driven DataOps', en: 'Contract-Driven DataOps' },
    summary: {
      ko: '스키마 계약 CI, 멱등적 백필, 컬럼 레벨 리니지로 상류 장애의 하류 전파 차단',
      en: 'Schema contract CI, idempotent backfills, and column-level lineage preventing downstream drift.',
    },
    relatedLens: ['all', 'de'],
    keywords: ['dataops', '계약', 'contract', 'ci', '테스트', '멱등성', '백필', '장애', '안정성'],
  },
  {
    id: 'cap-vibecoding',
    type: 'CAPABILITY',
    label: { ko: 'Schema-Guided Agent Vibe-Coding', en: 'Schema-Guided Agent Vibe-Coding' },
    summary: {
      ko: '엄격한 타입·온톨로지 명세를 먼저 고정한 뒤 에이전틱 코딩으로 API·평가기·운영 UI를 초고속 배포',
      en: 'Locks strict type and ontology contracts first, then accelerates full-stack API, eval, and UI delivery.',
    },
    relatedLens: ['all', 'ai', 'ax'],
    keywords: ['바이브코딩', 'vibe', '속도', '프로토타이핑', '풀스택', '코드', '핸즈온', '직접', '개발'],
  },
  {
    id: 'proj-01',
    type: 'PROJECT',
    label: { ko: '[SYS-01] Ontology-Grounded Agent Runtime', en: '[SYS-01] Ontology-Grounded Agent Runtime' },
    summary: {
      ko: 'YAML 도메인 온톨로지를 MCP/Tool 스키마와 SQL 가드레일로 자동 변환하는 엔터프라이즈 에이전트 런타임',
      en: 'Compiles YAML domain ontologies into deterministic MCP/tool schemas and SQL guardrails.',
    },
    relatedLens: ['all', 'ai', 'de', 'ax'],
    projectSlug: 'ontology-context-agent',
    keywords: ['sys-01', '런타임', '온톨로지', '가드레일', 'sql', 'hallucination', '환각'],
  },
  {
    id: 'proj-02',
    type: 'PROJECT',
    label: { ko: '[SYS-02] Declarative DataOps Control Plane', en: '[SYS-02] Declarative DataOps Control Plane' },
    summary: {
      ko: '데이터 계약 위반을 PR 단계에서 차단하고 컬럼 리니지 기반으로 선택적 자가 복구 백필을 수행하는 엔진',
      en: 'Blocks breaking schema changes in CI and orchestrates lineage-aware selective backfills.',
    },
    relatedLens: ['de', 'all'],
    projectSlug: 'declarative-dataops-plane',
    keywords: ['sys-02', 'dataops', '리니지', '계약', 'ci', '파이프라인', '백필'],
  },
  {
    id: 'proj-03',
    type: 'PROJECT',
    label: { ko: '[SYS-03] 72h AX Operations Workbench', en: '[SYS-03] 72h AX Operations Workbench' },
    summary: {
      ko: '분절된 현업 승인·조회 프로세스를 온톨로지 액션 모델과 풀스택 운영 콘솔로 72시간 내 전환한 AX 레퍼런스',
      en: 'Turned fragmented manual operations into a governed ontology + agent console within 72 hours.',
    },
    relatedLens: ['ax', 'ai', 'all'],
    projectSlug: 'ax-vibe-workflow-runtime',
    keywords: ['sys-03', 'ax', '워크플로', '자동화', '72시간', '리드타임', '현업', '거버넌스'],
  },
];

export const careerOntologyRelations: OntologyRelation[] = [
  { from: 'role-de', predicate: 'ANCHORED_BY', to: 'cap-dataops' },
  { from: 'role-de', predicate: 'MODELS_CONTEXT_VIA', to: 'cap-ontology' },
  { from: 'role-ai', predicate: 'ELIMINATES_DRIFT_VIA', to: 'cap-ontology' },
  { from: 'role-ai', predicate: 'SHIPS_PRODUCTION_VIA', to: 'cap-vibecoding' },
  { from: 'role-ax', predicate: 'BRIDGES_SILOS_VIA', to: 'cap-ontology' },
  { from: 'role-ax', predicate: 'COMPRESSES_DELIVERY_VIA', to: 'cap-vibecoding' },
  { from: 'cap-ontology', predicate: 'VERIFIED_IN', to: 'proj-01' },
  { from: 'cap-dataops', predicate: 'VERIFIED_IN', to: 'proj-02' },
  { from: 'cap-vibecoding', predicate: 'VERIFIED_IN', to: 'proj-03' },
];

export const presetQueries: PresetQueryItem[] = [
  {
    id: 'q-ce-hands-on',
    lens: 'all',
    prompt: {
      ko: '구글 CE 출신으로서 아키텍처 설계뿐 아니라 실제 프로덕션 코딩 역량은 어떻게 증명하나요?',
      en: 'As a Google CE, how do you prove hands-on coding depth beyond high-level architecture?',
    },
  },
  {
    id: 'q-de-ontology',
    lens: 'de',
    prompt: {
      ko: '기존 ETL 데이터 엔지니어와 비교해 DataOps·온톨로지 특화 역량은 어떤 차별점이 있나요?',
      en: 'How does DataOps + Ontology specialization differentiate you from traditional ETL engineers?',
    },
  },
  {
    id: 'q-ai-hallucination',
    lens: 'ai',
    prompt: {
      ko: '온톨로지 모델링과 에이전트 바이브코딩을 어떻게 결합해 할루시네이션을 통제하나요?',
      en: 'How do you combine ontology modeling and vibe-coding to control agent hallucinations?',
    },
  },
  {
    id: 'q-ax-roi',
    lens: 'ax',
    prompt: {
      ko: '기업 AX 프로젝트가 PoC에서 멈추지 않고 실제 현업에 안착하게 만드는 전략은 무엇인가요?',
      en: 'What is your strategy for moving enterprise AX initiatives past PoC into real adoption?',
    },
  },
];
