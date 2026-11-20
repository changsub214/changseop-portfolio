import type { ProfileSpec } from '@/types/portfolio';

export const profileContent: ProfileSpec = {
  name: {
    ko: '신창섭',
    en: 'Changseop Shin',
  },
  handle: 'CHANGSEOP.SHIN',
  currentRoleTag: {
    ko: 'Google Cloud Customer Engineer · DataOps & Ontology · Agent Builder',
    en: 'Google Cloud Customer Engineer · DataOps & Ontology · Agent Builder',
  },
  location: 'SEOUL, KR',
  lensHeadline: {
    all: {
      ko: '비즈니스 도메인을 온톨로지로 구조화하고,\n신뢰할 수 있는 DataOps 위에 작동하는 에이전트를 짓습니다.',
      en: 'Structuring enterprise domains into governed ontologies,\nand shipping reliable AI agents atop production DataOps.',
    },
    de: {
      ko: '단순 적재 파이프라인을 넘어, 분석가와 AI가 동일한 진실을 참조하는\n온톨로지 데이터 모델과 무중단 DataOps 기반을 설계합니다.',
      en: 'Beyond brittle ETL: architecting governed ontology models\nand contract-driven DataOps pipelines for humans and AI.',
    },
    ai: {
      ko: '프롬프트 튜닝만으로는 해결되지 않는 엔터프라이즈 할루시네이션을\n온톨로지 컨텍스트 설계와 초고속 에이전트 엔지니어링으로 제어합니다.',
      en: 'Eliminating enterprise agent hallucinations through ontology context\nengineering and rapid end-to-end agentic system builds.',
    },
    ax: {
      ko: '현업의 분절된 프로세스를 엔터프라이즈 온톨로지로 통합하고,\n장표 기획이 아닌 작동하는 에이전트로 AX 리드타임을 압축합니다.',
      en: 'Compressing AX lead-time from quarters to days by uniting siloed\noperations into actionable ontologies and live software.',
    },
  },
  lensManifesto: {
    all: {
      ko: '구글 클라우드 CE로서 수십 개 엔터프라이즈 아키텍처의 병목을 진단하며 얻은 결론은 명확합니다. AI 전환의 성패는 모델 크기가 아니라 데이터 계약(DataOps)과 비즈니스 의미 계층(Ontology)에 달려 있습니다. 도메인 모델링부터 에이전트 바이브코딩까지 단일 호흡으로 설계·구현합니다.',
      en: 'Across enterprise cloud engagements at Google, one pattern is invariant: AI systems fail at the context boundary, not the model boundary. I bridge raw operational data, semantic ontologies, and full-stack agent execution in a single engineering loop.',
    },
    de: {
      ko: '데이터 계약(Data Contracts), 스키마 진화 제어, 멱등성 보장 파이프라인, 그리고 엔티티 중심 시맨틱/온톨로지 모델링에 집중합니다. 하류 소비자가 BI 대시보드이든 자율 에이전트이든 흔들리지 않는 데이터 플레인을 구축합니다.',
      en: 'Focused on data contracts, schema evolution, idempotent pipelines, and entity-centric semantic modeling—ensuring deterministic data quality whether the downstream consumer is BI or an autonomous agent.',
    },
    ai: {
      ko: '비정형 문서 검색에 그치는 초기 RAG를 넘어, 정형 테이블·메타데이터·도메인 규칙을 그래프 온톨로지로 엮어 에이전트의 추론 경로를 결정론적으로 제한하고 평가(Eval) 파이프라인으로 검증합니다.',
      en: 'Moving beyond naive chunk-RAG: binding relational tables, metadata, and business rules into explicit ontologies so multi-step agents execute with deterministic guardrails and measurable evals.',
    },
    ax: {
      ko: '고객사 C-레벨·현업 인터뷰로 AS-IS 병목을 정의하는 Google CE의 시야에, 온톨로지 설계 및 에이전트 바이브코딩 실행력을 결합했습니다. 수개월 걸리던 외주 PoC 없이 수일 내에 검증 가능한 프로덕션급 AX 워크플로를 직접 인도합니다.',
      en: 'Combining Google CE executive discovery with hands-on ontology modeling and rapid agentic engineering—turning ambiguous organizational pain points into governed, measurable AX workflows in days.',
    },
  },
  spine: [
    {
      code: '01',
      layer: 'dataops',
      title: { ko: 'DataOps Plane', en: 'DataOps Plane' },
      thesis: {
        ko: '스키마 계약(Data Contract)·CI 검증·리니지 추적 없이는 어떤 상위 AI도 신뢰할 수 없습니다.',
        en: 'No downstream intelligence survives silent schema drift or unverified upstream lineage.',
      },
      deliverable: {
        ko: 'Declarative Pipeline CI · Idempotent Ingestion · Automated Anomaly Gate',
        en: 'Declarative Pipeline CI · Idempotent Ingestion · Automated Anomaly Gate',
      },
    },
    {
      code: '02',
      layer: 'ontology',
      title: { ko: 'Domain Ontology', en: 'Domain Ontology' },
      thesis: {
        ko: '원시 테이블을 비즈니스 엔티티·관계·상태 전이 규칙으로 번역해 인간과 에이전트의 공통 언어를 정의합니다.',
        en: 'Translating raw tables into explicit business entities, relations, and permitted state transitions.',
      },
      deliverable: {
        ko: 'Entity-Relation Graph · Headless Semantic Metrics · Tool Action Schema',
        en: 'Entity-Relation Graph · Headless Semantic Metrics · Tool Action Schema',
      },
    },
    {
      code: '03',
      layer: 'agent',
      title: { ko: 'Agentic Vibe-Coding', en: 'Agentic Vibe-Coding' },
      thesis: {
        ko: '정의된 온톨로지 스키마를 가드레일 삼아 백엔드 오케스트레이션부터 운영 UI까지 초고속 구현·반복합니다.',
        en: 'Using explicit ontology schemas as guardrails to ship full-stack agents and operational UIs at high velocity.',
      },
      deliverable: {
        ko: 'Ontology-Grounded Agent Runtime · Eval Harness · Full-Stack Ops Console',
        en: 'Ontology-Grounded Agent Runtime · Eval Harness · Full-Stack Ops Console',
      },
    },
    {
      code: '04',
      layer: 'consumer',
      title: { ko: 'Enterprise AX Impact', en: 'Enterprise AX Impact' },
      thesis: {
        ko: '기술 데모로 끝나지 않도록 보안·거버넌스 기준을 충족하고 정량적 리드타임 단축과 조직 내재화로 완결합니다.',
        en: 'Closing the last mile with enterprise security governance, TCO discipline, and measurable operational ROI.',
      },
      deliverable: {
        ko: 'AS-IS/TO-BE Process Redesign · Governance Spec · Production Adoption',
        en: 'AS-IS/TO-BE Process Redesign · Governance Spec · Production Adoption',
      },
    },
  ],
  channels: [
    { label: 'GITHUB // @changsub214', href: 'https://github.com/changsub214', external: true },
    { label: 'LINKEDIN // CHANGSEOP SHIN', href: 'https://linkedin.com', external: true },
    { label: 'EMAIL // CONTACT', href: 'mailto:changsub214@naver.com' },
  ],
};
