import type { CareerEntry, CompetencySpec } from '@/types/portfolio';

export const competencySpecs: CompetencySpec[] = [
  {
    code: 'CAP-01',
    domain: {
      ko: 'Ontology & Semantic Data Modeling',
      en: 'Ontology & Semantic Data Modeling',
    },
    targetLens: ['all', 'de', 'ai', 'ax'],
    architecturalFocus: {
      ko: '분산된 원천 테이블과 문서를 비즈니스 객체(Entity)·관계(Edge)·액션(Action) 중심의 엔터프라이즈 온톨로지 및 시맨틱 메트릭 계층으로 정규화',
      en: 'Normalizing fragmented tables and documents into object-relation-action ontologies and headless semantic metric definitions.',
    },
    antiPatternSolved: {
      ko: '부서마다 다른 지표 산식 및 Text-to-SQL 에이전트의 조인 경로 환각(Join Hallucination) 원천 차단',
      en: 'Eliminates conflicting KPI math across teams and prevents LLM join-path hallucinations.',
    },
    productionStack: ['dbt Semantic Layer', 'BigQuery', 'Graph/RDF Modeling', 'DataVault / Kimball', 'YAML Schema AST'],
  },
  {
    code: 'CAP-02',
    domain: {
      ko: 'Metadata-Driven DataOps Engineering',
      en: 'Metadata-Driven DataOps Engineering',
    },
    targetLens: ['all', 'de'],
    architecturalFocus: {
      ko: '선언적 데이터 계약(Data Contract), PR 단계 스키마 호환성 검증, 리니지 기반 영향도 분석 및 멱등적(Idempotent) 백필 파이프라인 설계',
      en: 'Declarative data contracts, CI schema compatibility gates, lineage impact analysis, and idempotent backfill orchestration.',
    },
    antiPatternSolved: {
      ko: '원천 스키마 변경으로 인한 심야 배치 연쇄 장애 및 하류 피처/벡터 스토어 오염 방지',
      en: 'Prevents silent upstream breaking changes and corrupted downstream feature/vector stores.',
    },
    productionStack: ['Dataform / dbt', 'Apache Airflow', 'Cloud Composer', 'DataPlex / DataHub', 'Terraform', 'Python'],
  },
  {
    code: 'CAP-03',
    domain: {
      ko: 'Context Engineering & Agentic Vibe-Coding',
      en: 'Context Engineering & Agentic Vibe-Coding',
    },
    targetLens: ['all', 'ai', 'ax'],
    architecturalFocus: {
      ko: '온톨로지 서브그래프를 에이전트의 결정론적 도구 스키마로 컴파일하고, 평가 셋(Eval) 기반 검증과 함께 풀스택 운영 앱을 초고속 구현',
      en: 'Compiling ontology subgraphs into deterministic agent tool schemas while shipping full-stack operational interfaces with automated evals.',
    },
    antiPatternSolved: {
      ko: '장표 기획과 개발 조직 간 수개월의 핸드오프 지연 제거 및 프로덕션 가드레일 없는 데모용 챗봇 한계 극복',
      en: 'Collapses multi-month spec-to-engineering handoffs and replaces fragile chat wrappers with governed workflows.',
    },
    productionStack: ['Vertex AI / Gemini', 'ADK / LangGraph', 'TypeScript / Next.js', 'FastAPI', 'Pydantic', 'Cloud Run'],
  },
  {
    code: 'CAP-04',
    domain: {
      ko: 'Enterprise Architecture & AX Governance',
      en: 'Enterprise Architecture & AX Governance',
    },
    targetLens: ['all', 'ax'],
    architecturalFocus: {
      ko: 'Google Cloud CE로서 대규모 고객사의 보안·규제·TCO 제약 조건 안에서 AS-IS 프로세스를 재설계하고 현업 내재화 로드맵 리딩',
      en: 'Redesigning AS-IS workflows within strict enterprise security, IAM, and TCO boundaries to drive sustained organizational adoption.',
    },
    antiPatternSolved: {
      ko: '비즈니스 ROI 연결 실패 및 보안 심의 장벽으로 인해 PoC 단계에서 폐기되는 AI 과제 구조 개선',
      en: 'Prevents PoC graveyard syndrome caused by missing ROI metrics or unaddressed security/IAM constraints.',
    },
    productionStack: ['GCP Architecture', 'VPC-SC / IAM Governance', 'FinOps & TCO Modeling', 'Executive Discovery', 'Change Enablement'],
  },
];

export const careerTimeline: CareerEntry[] = [
  {
    period: 'CURRENT',
    org: 'GOOGLE CLOUD',
    role: {
      ko: 'Customer Engineer — Data, Analytics & AI Architecture',
      en: 'Customer Engineer — Data, Analytics & AI Architecture',
    },
    scope: {
      ko: '엔터프라이즈 고객의 데이터 플랫폼 현대화, 시맨틱/온톨로지 거버넌스 설계 및 생성형 AI 에이전트 아키텍처 기술 리딩',
      en: 'Leading enterprise data platform modernization, semantic/ontology governance, and production GenAI agent architectures.',
    },
    keyProofs: [
      {
        ko: '복수 산업군 대상 원천 데이터 사일로 진단 → 레이크하우스·시맨틱 계층 통합 및 에이전틱 워크플로 PoC/파일럿 직접 구현',
        en: 'Diagnosed cross-industry data silos and delivered hands-on lakehouse + ontology-backed agent pilots.',
      },
      {
        ko: '보안·권한(IAM/Row-level Security)·토큰 TCO 모델을 포함한 프로덕션 전환 레퍼런스 아키텍처 수립',
        en: 'Authored production transition blueprints encompassing row-level IAM, VPC-SC, and inference TCO optimization.',
      },
    ],
  },
  {
    period: 'PREVIOUS',
    org: 'DATA ENGINEERING & DATAOPS',
    role: {
      ko: 'Data Engineer — Data Modeling, Pipeline & Governance',
      en: 'Data Engineer — Data Modeling, Pipeline & Governance',
    },
    scope: {
      ko: '대용량 배치/스트리밍 파이프라인 운영, 전사 코어 도메인 데이터 모델링 및 메타데이터 기반 DataOps 자동화 구축',
      en: 'Built core domain data models, batch/stream pipelines, and metadata-driven DataOps automation.',
    },
    keyProofs: [
      {
        ko: '핵심 비즈니스 엔티티 표준화 및 선언적 데이터 품질 게이트 도입으로 하류 지표 불일치 이슈 해소',
        en: 'Standardized canonical business entities and declarative quality gates, eliminating downstream metric drift.',
      },
      {
        ko: '파이프라인 배포 자동화(CI/CD) 및 리니지 추적으로 스키마 변경 대응 리드타임 단축',
        en: 'Automated pipeline CI/CD and column-level lineage to slash schema-change recovery time.',
      },
    ],
  },
];
