import type { ProjectCaseStudy } from '@/types/portfolio';

export const project03AxWorkbench: ProjectCaseStudy = {
  slug: 'ax-vibe-workflow-runtime',
  code: 'SYS-03',
  published: true,
  year: '2026',
  domainTag: 'AX TRANSFORMATION // RAPID AGENT BUILD',
  layers: ['ontology', 'agent', 'consumer'],
  title: {
    ko: '72-Hour Enterprise AX Operations Workbench',
    en: '72-Hour Enterprise AX Operations Workbench',
  },
  oneLiner: {
    ko: '이메일·스프레드시트·ERP로 분절된 수작업 운영 프로세스를 액션 온톨로지와 에이전트 바이브코딩으로 72시간 내 풀스택 시스템화한 AX 블루프린트',
    en: 'Turned fragmented email/spreadsheet/ERP manual ops into a governed action-ontology + agent console in 72 hours.',
  },
  lensPriority: { all: 3, ax: 1, ai: 2, de: 4 },
  lensSummary: {
    all: {
      ko: '장표 중심 컨설팅 대신 도메인 상태 머신(Ontology Action Model)을 먼저 설계하고 바이브코딩으로 백엔드·평가·검수 UI까지 일괄 구축했습니다.',
      en: 'Replaced slide-deck consulting by modeling domain state transitions first and shipping backend + HITL UI end-to-end.',
    },
    ax: {
      ko: '현업 담당자의 반복 대조·승인 업무를 Human-in-the-Loop 에이전트 워크플로로 재설계하여 건당 처리 시간을 45분에서 4분으로 압축하고 감사 로그를 100% 내재화했습니다.',
      en: 'Redesigned manual cross-system reconciliation into a Human-in-the-Loop workflow, cutting handling time from 45m to 4m.',
    },
    ai: {
      ko: '자율 에이전트가 임의로 외부 상태를 변경하지 못하도록 온톨로지 Action Precondition 검사와 역할 기반 승인 게이트(HITL)를 런타임에 결합했습니다.',
      en: 'Bound agent tool mutations to explicit Action Preconditions and Human-in-the-Loop state-machine checkpoints.',
    },
    de: {
      ko: '에이전트의 모든 의사결정 초안·인간 수정 내역·최종 상태 전이를 이벤트 소싱 원장으로 적재해 학습·평가용 피드백 루프를 자동 구축했습니다.',
      en: 'Captured every agent draft, human override, and state transition as an immutable event-sourced feedback ledger.',
    },
  },
  lensMetrics: {
    all: [
      { label: { ko: 'CASE LEAD TIME', en: 'CASE LEAD TIME' }, value: '45m -> 4m', delta: '-91%' },
      { label: { ko: 'DELIVERY CYCLE', en: 'DELIVERY CYCLE' }, value: '72 Hours', delta: 'Spec to App' },
      { label: { ko: 'AUDIT COVERAGE', en: 'AUDIT COVERAGE' }, value: '100%', delta: 'Event-Sourced' },
    ],
    ax: [
      { label: { ko: 'OPS THROUGHPUT', en: 'OPS THROUGHPUT' }, value: '6.4x', delta: 'Same Headcount' },
      { label: { ko: 'POC DELIVERY', en: 'POC DELIVERY' }, value: '3 Days', delta: 'vs 12w Agency' },
      { label: { ko: 'OPERATOR ADOPTION', en: 'OPERATOR ADOPTION' }, value: '94%', delta: 'HITL Trust' },
    ],
    ai: [
      { label: { ko: 'UNSAFE MUTATIONS', en: 'UNSAFE MUTATIONS' }, value: '0', delta: 'State-Gated' },
      { label: { ko: 'DRAFT ACCEPTANCE', en: 'DRAFT ACCEPTANCE' }, value: '88.5%', delta: 'Zero-Edit Pass' },
      { label: { ko: 'FEEDBACK LOOP', en: 'FEEDBACK LOOP' }, value: 'Auto-Eval', delta: 'Override Logged' },
    ],
    de: [
      { label: { ko: 'EVENT LEDGER', en: 'EVENT LEDGER' }, value: 'Append-Only', delta: 'Zero Loss' },
      { label: { ko: 'ENTITY RESOLUTION', en: 'ENTITY RESOLUTION' }, value: '99.1%', delta: '3 Silos Joined' },
      { label: { ko: 'SCHEMA CONTRACTS', en: 'SCHEMA CONTRACTS' }, value: 'Zod + SQL', delta: 'End-to-End' },
    ],
  },
  asIsProblem: {
    ko: '기업 내 AX 과제가 흔히 실패하는 이유는 현업 프로세스 재설계 없이 범용 챗봇만 배포하거나, 반대로 거대한 SI 과제로 기획해 6개월간 화면 하나 보지 못하기 때문이었습니다.',
    en: 'Enterprise AX projects stall either by shipping generic chatbots disconnected from workflows or getting trapped in 6-month waterfall specs.',
  },
  toBeArchitecture: {
    ko: '현업 인터뷰 당일 핵심 비즈니스 엔티티와 상태 전이 규칙(Action Ontology)을 확정하고, 타입 안전 에이전트 오케스트레이션과 운영자 검수 콘솔(Diff 승인 UI)을 72시간 내 배포 가능한 모듈형 아키텍처로 구현했습니다.',
    en: 'Locked down an Action Ontology on day one, then rapidly built a typed multi-step agent backend and side-by-side operator diff/approval UI.',
  },
  nodes: [
    {
      id: 'n-silos',
      code: 'SRC-01',
      label: '3 Operational Silos',
      layer: 'source',
      x: 120,
      y: 180,
      tech: ['ERP API', 'PDF / Docs', 'Ticketing Webhook'],
      whyChosen: {
        ko: '레거시 시스템을 즉시 교체하지 않고 읽기 전용 커넥터로 정규 엔티티 뷰에 먼저 통합합니다.',
        en: 'Integrates legacy systems non-invasively via read connectors into a unified canonical entity view.',
      },
      tradeOff: {
        ko: '초기 원천 시스템 개조 없이 빠른 가치 증명이 가능하며 쓰기 작업만 통제된 게이트웨이를 경유합니다.',
        en: 'Avoids risky legacy migrations up front while funneling all writes through a governed gateway.',
      },
      specLang: 'ts',
      specSnippet: `type CanonicalCase = {
  caseId: string;
  contractEntity: ContractSummary;
  discrepancyFlags: PolicyFlag[];
};`,
    },
    {
      id: 'n-action-ont',
      code: 'ONT-02',
      label: 'Action & State Ontology',
      layer: 'ontology',
      x: 390,
      y: 180,
      tech: ['State Machine Spec', 'Zod / Pydantic', 'RBAC Policy'],
      whyChosen: {
        ko: '에이전트가 제안할 수 있는 액션 종류와 사전 조건(Preconditions)을 명시적 상태 기계로 제한합니다.',
        en: 'Restricts agent proposals to valid state-machine actions with deterministic precondition checks.',
      },
      tradeOff: {
        ko: '사전 정의되지 않은 예외 액션은 인간 운영자 큐로 즉시 에스컬레이션되도록 보수적으로 설계했습니다.',
        en: 'Routes out-of-distribution edge cases straight to human operators rather than guessing.',
      },
      specLang: 'yaml',
      specSnippet: `action: ApproveCreditAdjustment
preconditions:
  - entity.variance_ratio <= 0.05
  - actor.has_role('FINANCE_REVIEWER')
requires_human_signoff: true`,
    },
    {
      id: 'n-orchestrator',
      code: 'AGT-03',
      label: 'Triage & Draft Agent',
      layer: 'agent',
      x: 650,
      y: 115,
      tech: ['Gemini Structured Output', 'Tool Router', 'Diff Generator'],
      whyChosen: {
        ko: '문서 대조와 규정 검토를 병렬 수행해 운영자에게는 최종 변경 Diff와 근거 조항만 제시합니다.',
        en: 'Executes parallel document cross-checks and presents operators with structured diffs and citations.',
      },
      tradeOff: {
        ko: '완전 자동 반영 대신 1-클릭 HITL 승인 방식을 택해 현업 거부감을 없애고 규제 감사를 통과했습니다.',
        en: 'Uses 1-click HITL approval rather than blind autonomy, winning immediate compliance and operator buy-in.',
      },
      specLang: 'ts',
      specSnippet: `const proposal = await triageAgent.proposeAction({
  entity: canonicalCase,
  permittedActions: actionOntology.forState(canonicalCase.state),
});`,
    },
    {
      id: 'n-hitl-ui',
      code: 'OPS-04',
      label: 'HITL Workbench & Audit Log',
      layer: 'consumer',
      x: 880,
      y: 225,
      tech: ['Next.js', 'Keyboard Triage UX', 'BigQuery Audit Sink'],
      whyChosen: {
        ko: '운영자가 마우스 이동 없이 단축키만으로 근거 확인·수정·승인을 처리하고 모든 수정본이 평가셋으로 환류됩니다.',
        en: 'Keyboard-first review UI that logs every human edit back into the golden evaluation dataset.',
      },
      tradeOff: {
        ko: '초기 UI 구축 공수가 들지만 스키마 기반 바이브코딩으로 48시간 내에 프로덕션 수준 콘솔을 완성했습니다.',
        en: 'Schema-driven vibe-coding compressed custom workbench UI build time to under 48 hours.',
      },
      specLang: 'sql',
      specSnippet: `INSERT INTO ax_governance.action_audit_ledger
VALUES (@trace_id, @agent_draft_json, @human_final_json, @reviewer_id, CURRENT_TIMESTAMP());`,
    },
  ],
  edges: [
    { from: 'n-silos', to: 'n-action-ont', protocol: 'Entity Hydration' },
    { from: 'n-action-ont', to: 'n-orchestrator', protocol: 'Permitted Actions' },
    { from: 'n-orchestrator', to: 'n-hitl-ui', protocol: 'Structured Diff' },
    { from: 'n-hitl-ui', to: 'n-action-ont', protocol: 'Signed Transition', dashed: true },
  ],
  troubleshooting: [
    {
      code: 'ISSUE-01',
      bottleneck: {
        ko: '초기 바이브코딩 프로토타입에서 프론트엔드·백엔드·프롬프트 출력 스키마가 미세하게 어긋나 런타임 파싱 오류 발생',
        en: 'Rapid iteration risked schema drift between LLM structured outputs, API routes, and UI state.',
      },
      resolution: {
        ko: '단일 온톨로지 스키마 파일에서 DB DDL, API 검증 타입, LLM Response Schema, UI Props를 동시 생성하는 Contract-First 구조 확립',
        en: 'Adopted Contract-First codegen deriving DB types, LLM output schemas, and UI props from one ontology spec.',
      },
      outcome: {
        ko: '빠른 바이브코딩 속도를 유지하면서도 스키마 불일치 런타임 에러 0건 유지',
        en: 'Maintained rapid vibe-coding velocity with zero schema-mismatch runtime exceptions.',
      },
    },
  ],
  stack: ['TypeScript', 'Next.js', 'FastAPI', 'Zod / Pydantic', 'Gemini API', 'BigQuery', 'Cloud Run'],
  links: {
    github: 'https://github.com',
    demo: '#ax-workbench',
  },
};
