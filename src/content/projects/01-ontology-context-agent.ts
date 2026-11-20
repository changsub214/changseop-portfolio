import type { ProjectCaseStudy } from '@/types/portfolio';

export const project01OntologyAgent: ProjectCaseStudy = {
  slug: 'ontology-context-agent',
  code: 'SYS-01',
  published: true,
  year: '2026',
  domainTag: 'ONTOLOGY COMPILER // AGENT RUNTIME',
  layers: ['dataops', 'ontology', 'agent'],
  title: {
    ko: 'Enterprise Ontology-Grounded Agent Runtime',
    en: 'Enterprise Ontology-Grounded Agent Runtime',
  },
  oneLiner: {
    ko: '선언적 YAML 도메인 온톨로지를 결정론적 SQL/Tool 가드레일로 컴파일하여 멀티 에이전트 추론 환각을 차단하는 컨텍스트 엔진',
    en: 'Compiles declarative YAML domain ontologies into deterministic SQL/Tool guardrails for zero-drift multi-agent execution.',
  },
  lensPriority: { all: 1, ai: 1, de: 2, ax: 2 },
  lensSummary: {
    all: {
      ko: '원시 웨어하우스 스키마와 LLM 에이전트 사이의 의미 단절을 해결하기 위해 객체·관계·허용 액션을 코드로 정의하고 실행 시점 가드레일로 강제했습니다.',
      en: 'Bridges raw warehouse tables and autonomous agents by compiling explicit entity-relation-action specs into runtime guardrails.',
    },
    de: {
      ko: '40+ 분산 테이블을 12개 정규 비즈니스 엔티티와 승인된 조인 경로(Approved Join Graph)로 추상화해 무분별한 카테시안 조인과 지표 왜곡을 제거했습니다.',
      en: 'Abstracted 40+ raw tables into 12 canonical entities with approved join paths, eliminating cartesian explosions and metric drift.',
    },
    ai: {
      ko: '단순 스키마 덤프 프롬프트 대신 질문 의도에 매칭된 온톨로지 서브그래프만 동적으로 주입하고, AST 검증기를 통과한 쿼리/액션만 실행합니다.',
      en: 'Replaces raw DDL prompt stuffing with dynamic ontology subgraph pruning and AST-verified tool execution.',
    },
    ax: {
      ko: '현업 부서마다 다르게 부르던 핵심 지표를 단일 온톨로지 사전으로 통합하여 경영진·운영팀이 자연어로 동일한 숫자를 즉시 조회하도록 전환했습니다.',
      en: 'Unified conflicting departmental KPIs into one governed ontology so ops teams query trusted metrics in plain language.',
    },
  },
  lensMetrics: {
    all: [
      { label: { ko: 'JOIN HALLUCINATION', en: 'JOIN HALLUCINATION' }, value: '0.8%', delta: '-94%' },
      { label: { ko: 'P95 AGENT LATENCY', en: 'P95 AGENT LATENCY' }, value: '1.4s', delta: '-58%' },
      { label: { ko: 'GOVERNED ENTITIES', en: 'GOVERNED ENTITIES' }, value: '12 Core', delta: '100% Typed' },
    ],
    de: [
      { label: { ko: 'METRIC CONSISTENCY', en: 'METRIC CONSISTENCY' }, value: '100%', delta: 'Single AST' },
      { label: { ko: 'SCAN COST / QUERY', en: 'SCAN COST / QUERY' }, value: '-63%', delta: 'Partition Pruned' },
      { label: { ko: 'CONTRACT COVERAGE', en: 'CONTRACT COVERAGE' }, value: '42 Tables', delta: 'CI Enforced' },
    ],
    ai: [
      { label: { ko: 'EVAL PASS RATE', en: 'EVAL PASS RATE' }, value: '96.4%', delta: '+31.2%p' },
      { label: { ko: 'CONTEXT TOKENS', en: 'CONTEXT TOKENS' }, value: '-71%', delta: 'Subgraph Pruned' },
      { label: { ko: 'P95 TOOL LATENCY', en: 'P95 TOOL LATENCY' }, value: '1.4s', delta: 'Cached AST' },
    ],
    ax: [
      { label: { ko: 'AD-HOC BI LEAD TIME', en: 'AD-HOC BI LEAD TIME' }, value: '3d -> 20s', delta: '-99%' },
      { label: { ko: 'POLICY VIOLATIONS', en: 'POLICY VIOLATIONS' }, value: '0', delta: 'Row-IAM Bound' },
      { label: { ko: 'PROTOTYPE TO PILOT', en: 'PROTOTYPE TO PILOT' }, value: '9 Days', delta: 'Vibe-Coded' },
    ],
  },
  asIsProblem: {
    ko: '기존 Text-to-SQL 및 문서 RAG 챗봇은 원천 테이블의 암묵적 비즈니스 규칙(예: 취소 주문 제외 조건, 부서별 고객 등급 기준)을 알지 못해 그럴듯하지만 틀린 숫자를 반환했고, 결국 현업 신뢰를 잃고 사용이 중단되었습니다.',
    en: 'Naive Text-to-SQL and chunk-RAG bots lacked implicit domain rules (cancellation filters, fiscal cutoffs), returning plausible yet wrong figures that destroyed user trust.',
  },
  toBeArchitecture: {
    ko: 'DataOps 파이프라인이 보장하는 골드 테이블 위에 YAML 기반 도메인 온톨로지(Entity · Relation · Metric · Action)를 선언하고, 컴파일러가 이를 에이전트용 Typed Tool 스키마와 SQL AST 검증 규칙으로 동시 변환하는 구조를 구축했습니다.',
    en: 'Declared a YAML domain ontology atop DataOps-governed tables and built a compiler that emits both typed agent tool schemas and SQL AST validation gates.',
  },
  nodes: [
    {
      id: 'n-contract',
      code: 'DOP-01',
      label: 'Contract-Checked Warehouse',
      layer: 'dataops',
      x: 110,
      y: 180,
      tech: ['BigQuery', 'dbt Contracts', 'Partition Gate'],
      whyChosen: {
        ko: '상류 스키마 변경이나 결측치가 온톨로지 계층으로 유입되지 않도록 배포 시점 데이터 계약을 강제했습니다.',
        en: 'Enforces build-time schema contracts so upstream drift never leaks into the semantic/ontology layer.',
      },
      tradeOff: {
        ko: '수집 초기 유연성은 다소 낮아지지만 에이전트 런타임 오류를 사전 차단해 운영 복구 비용을 대폭 절감했습니다.',
        en: 'Trades raw ingestion looseness for zero silent runtime failures in downstream agent queries.',
      },
      specLang: 'yaml',
      specSnippet: `contract:
  enforced: true
  freshness_sla_minutes: 15
columns:
  - name: customer_entity_id
    data_type: STRING
    constraints: [not_null, primary_key]`,
    },
    {
      id: 'n-ontology',
      code: 'ONT-02',
      label: 'Ontology Graph Compiler',
      layer: 'ontology',
      x: 370,
      y: 105,
      tech: ['TypeScript AST', 'YAML Ontology', 'JSON Schema'],
      whyChosen: {
        ko: '비즈니스 엔티티와 허용 조인 경로를 단일 선언 파일로 관리하고 에이전트 도구 명세로 자동 컴파일합니다.',
        en: 'Maintains a single source of truth for entities and valid join edges, compiling directly to tool specs.',
      },
      tradeOff: {
        ko: '무거운 상용 그래프 DB 도입 대신 인메모리 불변 그래프 인덱스를 채택해 인프라 복잡도와 지연시간을 줄였습니다.',
        en: 'Chose an immutable compiled in-memory graph over a heavy external GraphDB to keep latency sub-10ms.',
      },
      specLang: 'yaml',
      specSnippet: `entity: EnterpriseOrder
primary_key: order_id
relations:
  - edge: PLACED_BY -> CustomerAccount (join: account_id)
metrics:
  net_recognized_arr: "SUM(amount) WHERE status = 'SETTLED'"`,
    },
    {
      id: 'n-guardrail',
      code: 'GRD-03',
      label: 'SQL & Policy AST Gate',
      layer: 'ontology',
      x: 370,
      y: 255,
      tech: ['SQLGlot', 'Row-Level IAM', 'Cost Estimator'],
      whyChosen: {
        ko: 'LLM이 임의의 비인가 테이블이나 미승인 조인 키를 참조하면 실행 전 AST 파싱 단계에서 즉시 거부합니다.',
        en: 'Parses generated queries via AST before execution, rejecting unapproved joins or unauthorized columns.',
      },
      tradeOff: {
        ko: '자유형 탐색 쿼리는 제한되지만 엔터프라이즈 감사(Audit) 및 비용 상한(Dry-run byte cap)을 100% 충족합니다.',
        en: 'Restricts arbitrary exploratory SQL in exchange for 100% audit compliance and dry-run byte caps.',
      },
      specLang: 'ts',
      specSnippet: `export function verifyQueryAst(sql: string, allowedEdges: Set<string>) {
  const joins = extractCanonicalJoins(sql);
  for (const edge of joins) {
    if (!allowedEdges.has(edge)) throw new PolicyViolationError(edge);
  }
}`,
    },
    {
      id: 'n-agent',
      code: 'AGT-04',
      label: 'Subgraph-Scoped Agent',
      layer: 'agent',
      x: 650,
      y: 180,
      tech: ['Gemini / ADK', 'Subgraph Retriever', 'Eval Harness'],
      whyChosen: {
        ko: '질문과 관련된 2-hop 온톨로지 엔티티만 컨텍스트로 주입하여 토큰 소비를 71% 줄이고 추론 정확도를 높였습니다.',
        en: 'Injects only the relevant 2-hop ontology neighborhood, cutting prompt tokens by 71% while boosting accuracy.',
      },
      tradeOff: {
        ko: '단일 패스 호출보다 30ms의 그래프 탐색 오버헤드가 추가되지만 전체 LLM 추론 시간은 오히려 단축됩니다.',
        en: 'Adds ~30ms of local graph traversal while shaving >800ms off LLM prefill and decoding latency.',
      },
      specLang: 'ts',
      specSnippet: `const subgraph = ontology.pruneForIntent(userQuery, { maxHops: 2 });
const response = await agent.execute({
  tools: compileToolsFromSubgraph(subgraph),
  rowPolicy: callerPrincipal.iamClaims,
});`,
    },
    {
      id: 'n-console',
      code: 'OPS-05',
      label: 'Audit & Decision Console',
      layer: 'consumer',
      x: 890,
      y: 180,
      tech: ['Next.js', 'Lineage Trace UI', 'Golden Eval CI'],
      whyChosen: {
        ko: '현업 사용자가 결과 수치뿐 아니라 참조된 엔티티 경로와 필터 조건을 한눈에 검증할 수 있도록 투명하게 노출합니다.',
        en: 'Surfaces exact entity lineage and applied filters next to every answer so operators can verify trust.',
      },
      tradeOff: {
        ko: '일반 채팅창보다 화면 밀도가 높지만 재무·운영 의사결정자의 채택률을 결정적으로 끌어올렸습니다.',
        en: 'Higher information density than a chat box, purposefully designed for high-stakes operational sign-off.',
      },
      specLang: 'ts',
      specSnippet: `interface VerifiedAnswerPayload {
  metricValue: string;
  ontologyPath: string[]; // ['CustomerAccount', 'PLACED_BY', 'EnterpriseOrder']
  bytesBilled: number;
}`,
    },
  ],
  edges: [
    { from: 'n-contract', to: 'n-ontology', protocol: 'Metadata Sync' },
    { from: 'n-contract', to: 'n-guardrail', protocol: 'Dry-Run Policy', dashed: true },
    { from: 'n-ontology', to: 'n-agent', protocol: '2-Hop Subgraph' },
    { from: 'n-guardrail', to: 'n-agent', protocol: 'AST Verified' },
    { from: 'n-agent', to: 'n-console', protocol: 'Grounded Stream' },
  ],
  troubleshooting: [
    {
      code: 'ISSUE-01',
      bottleneck: {
        ko: '복합 질문 시 전체 엔티티 스키마를 프롬프트에 넣으면 컨텍스트 희석으로 동음이의어 컬럼 선택 오류 발생',
        en: 'Full-schema prompts caused column disambiguation errors on multi-entity analytical queries.',
      },
      resolution: {
        ko: '질의 내 도메인 키워드를 엔티티 앵커로 매핑한 뒤 최단 경로(Steiner Tree 근사) 서브그래프만 추출해 주입',
        en: 'Implemented entity-anchor extraction + minimal connecting subgraph pruning prior to tool generation.',
      },
      outcome: {
        ko: '프롬프트 토큰 71% 절감 및 골든 평가셋(150문항) 기준 정확도 65.2% → 96.4% 달성',
        en: 'Reduced context tokens by 71% and improved 150-case golden eval pass rate from 65.2% to 96.4%.',
      },
    },
  ],
  stack: ['TypeScript', 'Python', 'BigQuery', 'dbt', 'SQLGlot', 'Vertex AI / Gemini', 'Next.js'],
  links: {
    github: 'https://github.com',
    demo: '#ontology-runtime',
  },
};
