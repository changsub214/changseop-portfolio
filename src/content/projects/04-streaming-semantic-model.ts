import type { ProjectCaseStudy } from '@/types/portfolio';

export const project04StreamingSemantic: ProjectCaseStudy = {
  slug: 'streaming-semantic-model',
  code: 'SYS-04',
  published: true,
  year: '2025',
  domainTag: 'STREAMING // ENTITY RESOLUTION',
  layers: ['source', 'dataops', 'ontology'],
  title: {
    ko: 'Real-Time Event-to-Entity Canonicalization Pipeline',
    en: 'Real-Time Event-to-Entity Canonicalization Pipeline',
  },
  oneLiner: {
    ko: '순서 역전·중복이 섞인 실시간 이벤트 스트림을 정합성이 보장된 비즈니스 엔티티 상태 스냅샷으로 정규화하는 스트리밍 모델링 아키텍처',
    en: 'Normalizes out-of-order event streams into deterministic entity state snapshots for real-time agents and ops.',
  },
  lensPriority: { all: 4, de: 3, ax: 3, ai: 4 },
  lensSummary: {
    all: {
      ko: '실시간 로그를 단순 적재하는 대신 온톨로지 식별자 기준으로 중복 제거·순서 보정하여 즉시 활용 가능한 엔티티 상태를 유지합니다.',
      en: 'Deduplicates and orders raw event streams into live canonical entity states ready for operational consumption.',
    },
    de: {
      ko: '워터마크 기반 지연 도착 데이터 처리, 결정론적 이벤트 ID 중복 제거, DLQ 격리로 스트리밍 정합성을 확보했습니다.',
      en: 'Implemented watermark late-arrival handling, deterministic deduplication, and DLQ quarantine.',
    },
    ai: {
      ko: '실시간 고객 응대·운영 에이전트가 수 시간 전 배치가 아닌 5초 이내의 최신 엔티티 상태를 환각 없이 참조하도록 공급합니다.',
      en: 'Feeds operational agents sub-5-second canonical entity state instead of stale T-1 batch snapshots.',
    },
    ax: {
      ko: '현장 이벤트 발생부터 운영 대시보드·자동 알림 반영까지의 지연을 시간 단위에서 초 단위로 단축했습니다.',
      en: 'Compressed operational visibility lag from hours to seconds across live business workflows.',
    },
  },
  lensMetrics: {
    all: [
      { label: { ko: 'STATE FRESHNESS', en: 'STATE FRESHNESS' }, value: '< 4.2s', delta: 'P99 End-to-End' },
      { label: { ko: 'DUPLICATE LEAK', en: 'DUPLICATE LEAK' }, value: '0.00%', delta: 'Idempotent Key' },
      { label: { ko: 'DLQ AUTO-REPLAY', en: 'DLQ AUTO-REPLAY' }, value: '99.4%', delta: 'Schema Healed' },
    ],
    de: [
      { label: { ko: 'END-TO-END P99', en: 'END-TO-END P99' }, value: '4.2s', delta: 'from 6h Batch' },
      { label: { ko: 'EXACTLY-ONCE VIEW', en: 'EXACTLY-ONCE VIEW' }, value: '100%', delta: 'Sequence Versioned' },
      { label: { ko: 'STORAGE COMPACTION', en: 'STORAGE COMPACTION' }, value: '-41%', delta: 'Clustered Upsert' },
    ],
    ai: [
      { label: { ko: 'CONTEXT STALENESS', en: 'CONTEXT STALENESS' }, value: '< 5s', delta: 'Real-Time State' },
      { label: { ko: 'SCHEMA VALIDITY', en: 'SCHEMA VALIDITY' }, value: '100%', delta: 'DLQ Isolated' },
      { label: { ko: 'ENTITY LOOKUP', en: 'ENTITY LOOKUP' }, value: '18ms', delta: 'Point Read' },
    ],
    ax: [
      { label: { ko: 'DECISION LATENCY', en: 'DECISION LATENCY' }, value: '6h -> 5s', delta: 'Real-Time Trigger' },
      { label: { ko: 'OPS ESCALATIONS', en: 'OPS ESCALATIONS' }, value: '-47%', delta: 'Proactive Alert' },
      { label: { ko: 'INFRA TCO', en: 'INFRA TCO' }, value: '-29%', delta: 'Autoscale Tuned' },
    ],
  },
  asIsProblem: {
    ko: '모바일·웹·파트너 웹훅에서 비동기로 유입되는 이벤트의 순서 역전과 재전송 중복 때문에 하류 분석 테이블과 실시간 트리거가 잘못된 상태를 참조했습니다.',
    en: 'Out-of-order webhooks and retry duplicates corrupted downstream entity state and triggered false operational alerts.',
  },
  toBeArchitecture: {
    ko: '수집 계층에서 스키마 검증 후 불량 페이로드를 DLQ로 즉시 격리하고, 시퀀스 버전 기반 엔티티 상태 리듀서(Entity State Reducer)로 정합한 최신 스냅샷과 이력을 동시 유지합니다.',
    en: 'Quarantines malformed payloads at ingress and applies a sequence-versioned entity reducer for consistent live state.',
  },
  nodes: [
    {
      id: 'n-ingress',
      code: 'SRC-01',
      label: 'Event Ingress & DLQ Gate',
      layer: 'source',
      x: 140,
      y: 180,
      tech: ['Pub/Sub / Kafka', 'Avro Schema', 'Dead-Letter Queue'],
      whyChosen: {
        ko: '비정상 페이로드 단 한 건이 전체 스트림 워커를 멈추지 않도록 수집 즉시 스키마 검증 및 격리합니다.',
        en: 'Prevents poison-pill payloads from stalling stream workers via ingress schema validation and DLQ routing.',
      },
      tradeOff: {
        ko: 'DLQ 재처리 파이프라인을 별도로 유지해야 하지만 메인 스트림 가용성을 99.95% 이상으로 보장합니다.',
        en: 'Requires maintaining a DLQ replay path in exchange for uninterrupted main-pipeline availability.',
      },
      specLang: 'yaml',
      specSnippet: `ingress_topic: domain.events.v2
dead_letter_policy:
  max_delivery_attempts: 5
  dlq_topic: domain.events.dlq`,
    },
    {
      id: 'n-reducer',
      code: 'DOP-02',
      label: 'Versioned Entity Reducer',
      layer: 'dataops',
      x: 490,
      y: 180,
      tech: ['Dataflow / Beam', 'Event-Time Watermark', 'Dedup State'],
      whyChosen: {
        ko: '도착 순서가 뒤바뀐 이벤트라도 원천 발생 버전(`source_seq`) 비교를 통해 최신 상태만 스냅샷에 반영합니다.',
        en: 'Resolves out-of-order delivery deterministically by comparing monotonic source sequence versions.',
      },
      tradeOff: {
        ko: '상태 저장소 메모리 관리가 필요하나 TTL 윈도우 튜닝으로 비용 증가를 억제했습니다.',
        en: 'Uses bounded stateful windowing with tuned TTLs to balance memory footprint and late-data accuracy.',
      },
      specLang: 'sql',
      specSnippet: `QUALIFY ROW_NUMBER() OVER (
  PARTITION BY canonical_entity_id
  ORDER BY source_event_ts DESC, source_seq DESC
) = 1`,
    },
    {
      id: 'n-serving',
      code: 'ONT-03',
      label: 'Live Entity Serving View',
      layer: 'ontology',
      x: 840,
      y: 180,
      tech: ['BigQuery Storage API', 'AlloyDB / Redis', 'Entity API'],
      whyChosen: {
        ko: '분석용 장기 이력 테이블과 에이전트용 저지연 포인트 조회 뷰를 동일 엔티티 키로 일원화했습니다.',
        en: 'Serves both analytical history and sub-20ms agent point lookups keyed by the same canonical entity ID.',
      },
      tradeOff: {
        ko: '듀얼 싱크 정합성 모니터링이 필요하며 스트림 체크포인트 기준으로 동기화됩니다.',
        en: 'Maintains dual-sink parity via checkpoint-aligned upserts and freshness probes.',
      },
      specLang: 'ts',
      specSnippet: `const liveState = await entityStore.getCanonical('CustomerAccount', accountId);`,
    },
  ],
  edges: [
    { from: 'n-ingress', to: 'n-reducer', protocol: 'Validated Stream' },
    { from: 'n-reducer', to: 'n-serving', protocol: 'Ordered Upsert' },
  ],
  troubleshooting: [
    {
      code: 'ISSUE-01',
      bottleneck: {
        ko: '특정 대형 고객사 배치 이벤트 유입 시 핫키(Hot-Key) 병목으로 워커 지연 급증',
        en: 'Burst webhook traffic on enterprise tenant keys caused hot-key worker lag spikes.',
      },
      resolution: {
        ko: '샤딩 서브키 기반 1차 부분 집계(Combine) 후 엔티티 레벨 최종 병합으로 스큐 해소',
        en: 'Introduced salted sub-key pre-combining prior to final entity-key state reduction.',
      },
      outcome: {
        ko: '피크 트래픽 구간 P99 지연 38초 → 4.2초로 안정화',
        en: 'Stabilized peak-burst P99 end-to-end latency from 38s down to 4.2s.',
      },
    },
  ],
  stack: ['Pub/Sub', 'Apache Beam / Dataflow', 'BigQuery', 'AlloyDB', 'Python', 'Terraform'],
  links: {
    github: 'https://github.com',
  },
};
