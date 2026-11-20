# 신창섭 포트폴리오 | Changseop Shin Portfolio

[한국어](#한국어) · [English](#english)

---

## 한국어

데이터 모델링(Ontology), DataOps 파이프라인, 그리고 에이전트 엔지니어링 작업물을 정리한 개인 포트폴리오 사이트입니다.

### 구성 특징

- **직무별 뷰 전환 (`Role Lens`)**: 상단 스위치나 쿼리 파라미터(`/?lens=de`, `/?lens=ai`, `/?lens=ax`)에 따라 데이터 엔지니어, AI 엔지니어, AX 담당자 관점에 맞춰 대표 프로젝트와 핵심 지표가 전환됩니다.
- **아키텍처 토폴로지 뷰어**: 각 시스템 케이스 스터디마다 SVG 기반 구조도를 두어, 노드를 클릭하면 기술 선택 이유·트레이드오프·스키마/코드 스니펫을 바로 확인할 수 있습니다.
- **`⌘K` 온톨로지 질의 콘솔**: 경력 및 프로젝트 데이터를 엔티티-관계 그래프로 묶어 키워드나 질문 입력 시 연결 경로와 근거 항목을 조회합니다.
- **한/영 전환 지원**: 우측 상단 `KO / EN` 토글 또는 `?lang=en` 파라미터로 언어를 전환할 수 있습니다.

### 디렉터리 구조

- `src/config/site-layout.config.ts` — 포인트 컬러, 여백 밀도, 섹션 순서 및 대표 블록 개수 설정
- `src/styles/` — 순수 CSS 변수 기반 3단 디자인 토큰 (`primitives` → `semantic-tokens` → `typography`)
- `src/components/primitives/` — 도메인 의존성 없는 공통 UI 기본 컴포넌트
- `src/content/` — 프로필, 역량, 온톨로지 그래프 및 개별 프로젝트 데이터(`src/content/projects/`)
- `src/lib/` — 직무 렌즈 정렬, 온톨로지 서브그래프 탐색, 질의 Provider 어댑터
- `src/features/` — 화면 영역별 기능 모듈

### 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # 린트 검사
npm run build    # 프로덕션 빌드
```

---

## English

Personal engineering portfolio of **Changseop Shin**, focused on Ontology & Semantic Data Modeling, Contract-Driven DataOps, and Agentic System Engineering.

### Overview

- **Role-Lens Views**: Switching lenses (`/?lens=de`, `/?lens=ai`, `/?lens=ax`) reorders flagship system blueprints, primary metrics, and introductory statements for Data Engineering, AI Engineering, or Enterprise AX roles.
- **Interactive System Topology**: Monochrome SVG architecture diagrams where selecting any node surfaces decision rationale, trade-offs, and schema/code snippets.
- **`⌘K` Ontology Query Console**: Traverses a structured career entity-relation graph to return grounded evidence and direct links to referenced case studies.
- **Bilingual (`KO` / `EN`)**: Toggle between Korean and English directly from the header bar or via `?lang=en`.

### Project Structure

- `src/config/site-layout.config.ts` — Layout density, signal accent preset, section ordering, and flagship count
- `src/styles/` — 3-tier Vanilla CSS token definitions without external utility frameworks
- `src/components/primitives/` — Reusable presentational primitives
- `src/content/` — Bilingual copy, profile metadata, ontology graph, and per-project spec modules (`src/content/projects/`)
- `src/lib/` — Pure TypeScript engines for lens sorting, subgraph retrieval, and query providers
- `src/features/` — Feature-sliced UI modules

### Local Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # Run ESLint
npm run build    # Build production bundle
```
