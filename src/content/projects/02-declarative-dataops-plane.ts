import type { ProjectCaseStudy } from '@/types/portfolio';

export const project02DataOpsPlane: ProjectCaseStudy = {
  slug: 'declarative-dataops-plane',
  code: 'SYS-02',
  published: true,
  year: '2026',
  domainTag: 'DATAOPS // LINEAGE & CONTRACT CI',
  layers: ['source', 'dataops', 'ontology'],
  title: {
    ko: 'Contract-Driven DataOps & Lineage Control Plane',
    en: 'Contract-Driven DataOps & Lineage Control Plane',
  },
  oneLiner: {
    ko: '원천 스키마 변경의 하류 파급 범위를 컬럼 레벨 리니지로 사전 계산하고 선택적 멱등 백필을 자동화한 DataOps 제어 평면',
    en: 'Column-level lineage gate and selective idempotent backfill engine preventing silent upstream schema breaks.',
  },
  lensPriority: { all: 2, de: 1, ai: 3, ax: 4 },
  lensSummary: {
    all: {
      ko: '데이터 파이프라인과 AI 피처/온톨로지 계층 사이의 신뢰성을 코드형 데이터 계약(Data Contract as Code)과 자동 복구 오케스트레이션으로 자동화했습니다.',
      en: 'Codified data contracts and lineage-driven recovery between upstream CDC streams and downstream ontology/AI stores.',
    },
    de: {
      ko: 'PR 시점에 프로듀서 스키마 변경과 하류 모델·시맨틱 지표의 AST 리니지를 교차 검증하고, 장애 시 오염된 파티션과 하위 종속 노드만 재실행합니다.',
      en: 'Cross-checks producer PR diffs against column-level SQL AST lineage and triggers partition-scoped idempotent backfills.',
    },
    ai: {
      ko: '상류 테이블의 단위를 바꾸거나 열이 누락될 때 임베딩/피처 스토어가 조용히 오염되는(Silent Drift) 현상을 배포 게이트에서 원천 차단합니다.',
      en: 'Prevents silent feature and vector-store poisoning when upstream operational schemas mutate.',
    },
    ax: {
      ko: '데이터 장애 발생 시 엔지니어 수동 원인 파악에 쓰이던 시간을 자동 영향도 리포트로 대체해 전사 데이터 SLA 신뢰도를 확보했습니다.',
      en: 'Replaced multi-hour manual incident triage with automated blast-radius telemetry and SLA guarantees.',
    },
  },
  lensMetrics: {
    all: [
      { label: { ko: 'SCHEMA INCIDENTS', en: 'SCHEMA INCIDENTS' }, value: '-89%', delta: 'PR Gate Blocked' },
      { label: { ko: 'BACKFILL COMPUTE', en: 'BACKFILL COMPUTE' }, value: '-54%', delta: 'Selective DAG' },
      { label: { ko: 'MTTR RECOVERY', en: 'MTTR RECOVERY' }, value: '14m', delta: 'from 3.5h' },
    ],
    de: [
      { label: { ko: 'LINEAGE PRECISION', en: 'LINEAGE PRECISION' }, value: 'Column-AST', delta: '100% Automated' },
      { label: { ko: 'BACKFILL COST', en: 'BACKFILL COST' }, value: '-54%', delta: 'Partition-Scoped' },
      { label: { ko: 'IDEMPOTENCY', en: 'IDEMPOTENCY' }, value: 'Deterministic', delta: 'Merge Keys' },
    ],
    ai: [
      { label: { ko: 'VECTOR DRIFT LEAKS', en: 'VECTOR DRIFT LEAKS' }, value: '0', delta: 'Contract Gated' },
      { label: { ko: 'FRESHNESS SLA', en: 'FRESHNESS SLA' }, value: '99.92%', delta: 'Monitored' },
      { label: { ko: 'METADATA SYNC', en: 'METADATA SYNC' }, value: '< 60s', delta: 'Event-Driven' },
    ],
    ax: [
      { label: { ko: 'INCIDENT MTTR', en: 'INCIDENT MTTR' }, value: '3.5h -> 14m', delta: '-93%' },
      { label: { ko: 'DATA TRUST SLA', en: 'DATA TRUST SLA' }, value: '99.9%', delta: 'Exec Visible' },
      { label: { ko: 'MANUAL TRIAGE', en: 'MANUAL TRIAGE' }, value: 'Eliminated', delta: 'Auto-Blast-Radius' },
    ],
  },
  asIsProblem: {
    ko: '서비스 DB 스키마가 배포될 때마다 심야 배치 파이프라인이 연쇄 실패하고, 복구를 위해 전체 하위 테이블을 무작정 재적재하면서 클라우드 비용 급증과 중복 적재 문제가 반복되었습니다.',
    en: 'App DB schema releases routinely broke nightly pipelines, forcing costly full-DAG reruns and risking duplicate rows.',
  },
  toBeArchitecture: {
    ko: '프로듀서 저장소와 웨어하우스 모델 사이에 선언적 Data Contract 레지스트리를 두고, SQL AST 기반 컬럼 리니지 그래프를 생성하여 변경 영향도 차단 및 최소 범위 멱등 백필을 구현했습니다.',
    en: 'Introduced a Git-backed Data Contract registry paired with a column-level AST lineage graph and partition-aware backfill planner.',
  },
  nodes: [
    {
      id: 'n-cdc',
      code: 'SRC-01',
      label: 'Producer Schema PR',
      layer: 'source',
      x: 120,
      y: 180,
      tech: ['GitHub Actions', 'Protobuf / JSON Schema', 'CDC'],
      whyChosen: {
        ko: '장애가 프로덕션에 도달하기 전 코드 리뷰 단계에서 스키마 파괴 여부를 즉시 피드백합니다.',
        en: 'Catches breaking field mutations during producer code review before bad events hit storage.',
      },
      tradeOff: {
        ko: '프로듀서 팀의 PR에 25초의 CI 체크가 추가되지만 사후 긴급 핫픽스 비용을 제거합니다.',
        en: 'Adds a 25-second CI gate to app PRs while eliminating multi-hour post-release firefights.',
      },
      specLang: 'yaml',
      specSnippet: `schema_evolution:
  allow_nullable_addition: true
  forbid_type_narrowing: true
  require_owner_approval_on: [semantic_entity_keys]`,
    },
    {
      id: 'n-ast-lineage',
      code: 'DOP-02',
      label: 'Column-AST Lineage Graph',
      layer: 'dataops',
      x: 410,
      y: 110,
      tech: ['Python', 'SQLGlot', 'NetworkX'],
      whyChosen: {
        ko: '테이블 단위 의존성만으로는 알 수 없는 실제 영향 컬럼과 시맨틱 지표만 정밀 타겟팅합니다.',
        en: 'Pinpoints exact impacted downstream columns and metrics rather than coarse table-level dependencies.',
      },
      tradeOff: {
        ko: '동적 매크로 SQL은 컴파일 후 파싱해야 하므로 빌드 아티팩트 수집 단계가 필요합니다.',
        en: 'Requires compiling templated SQL macros first so AST analysis reflects exact production queries.',
      },
      specLang: 'sql',
      specSnippet: `-- Auto-extracted lineage edge:
-- raw.orders.discount_amt -> silver.order_facts.net_amt -> ontology.EnterpriseOrder.net_arr`,
    },
    {
      id: 'n-backfill',
      code: 'DOP-03',
      label: 'Selective Idempotent Planner',
      layer: 'dataops',
      x: 410,
      y: 250,
      tech: ['Airflow / Composer', 'BigQuery MERGE', 'Watermark State'],
      whyChosen: {
        ko: '오염된 시간 파티션과 리니지상 영향을 받은 하위 노드만 부분 실행해 컴퓨팅 비용을 절반 이하로 줄입니다.',
        en: 'Recomputes only tainted partitions along affected lineage subtrees using deterministic MERGE keys.',
      },
      tradeOff: {
        ko: '모든 모델에 결정론적 파티션 키와 고유 키 정의를 강제해야 합니다.',
        en: 'Requires strict partition-key and grain discipline across every transformation model.',
      },
      specLang: 'sql',
      specSnippet: `MERGE INTO gold.enterprise_order T
USING staging_recompute S
ON T.order_id = S.order_id AND T.event_date = @target_partition
WHEN MATCHED THEN UPDATE SET ...`,
    },
    {
      id: 'n-catalog',
      code: 'ONT-04',
      label: 'Ontology Health Registry',
      layer: 'ontology',
      x: 780,
      y: 180,
      tech: ['DataHub / Dataplex', 'SLA Webhook', 'Agent Circuit-Breaker'],
      whyChosen: {
        ko: '상류 품질 게이트가 실패하면 연결된 온톨로지 지표에 즉시 경고를 표기해 에이전트가 오염 데이터를 읽지 않게 차단합니다.',
        en: 'Trips a circuit-breaker on affected ontology entities so AI agents never serve stale or corrupted metrics.',
      },
      tradeOff: {
        ko: '일시적으로 특정 지표 응답이 보류되지만 잘못된 수치로 인한 의사결정 사고를 막습니다.',
        en: 'Prefers explicit degraded-state notice over serving silently corrupted numbers to executives or agents.',
      },
      specLang: 'yaml',
      specSnippet: `entity_health_policy:
  on_upstream_sla_breach: CIRCUIT_BREAK_AGENT_TOOL
  notify_channels: ['#dataops-oncall', 'ontology-status-api']`,
    },
  ],
  edges: [
    { from: 'n-cdc', to: 'n-ast-lineage', protocol: 'Schema Diff' },
    { from: 'n-cdc', to: 'n-backfill', protocol: 'Partition Range', dashed: true },
    { from: 'n-ast-lineage', to: 'n-catalog', protocol: 'Blast Radius' },
    { from: 'n-backfill', to: 'n-catalog', protocol: 'SLA Restored' },
  ],
  troubleshooting: [
    {
      code: 'ISSUE-01',
      bottleneck: {
        ko: '대규모 재처리 시 하류 마트 전체를 DROP & CREATE 하면서 동시 조회 중인 BI/에이전트 쿼리 실패 발생',
        en: 'Full-table rebuilds during backfills caused read contention and transient failures for live consumers.',
      },
      resolution: {
        ko: '파티션 단위 스테이징 검증(WAP: Write-Audit-Publish) 후 원자적 파티션 스왑 및 MERGE 패턴으로 일괄 표준화',
        en: 'Standardized Write-Audit-Publish (WAP) staging checks followed by atomic partition swaps.',
      },
      outcome: {
        ko: '재적재 중 소비자 조회 다운타임 0초 달성 및 백필 슬롯 사용량 54% 절감',
        en: 'Achieved zero-downtime consumer reads during recovery and cut backfill slot usage by 54%.',
      },
    },
  ],
  stack: ['Python', 'SQLGlot', 'BigQuery', 'dbt / Dataform', 'Airflow', 'GitHub Actions'],
  links: {
    github: 'https://github.com',
  },
};
