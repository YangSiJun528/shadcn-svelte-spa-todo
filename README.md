# shadcn-svelte-spa-todo

SvelteKit에서 SPA로 TODO 만들기

# 개발하며 알게 된 shadcn 사용 시 팁
- lucide으로 여러 아이콘 사용하기
  - lucide은 shadcn UI의 기본 아이콘 라이브러리임
  - 여기서 목록, 이름 확인 가능: https://lucide.dev/icons/
- TODO: `components.json`랑 색상 별 설명 찾아보기 + 참고할만한 예시 사이트? 찾기
- 최근까지도 무료로 갱신되는 shadcn-ui 피그마 디자인 컴포넌트
  - 근데 피그마를 잘 못써서 오히려 디자인 어려움...
  - https://www.figma.com/community/file/1342715840824755935

# 개발하며 메모

### 프로젝트 세팅 순서
- shadcn-svelte UI 사용
  - https://next.shadcn-svelte.com/docs/installation/sveltekit 
  - 참고해서 셋업
  - base 색상 정할 수 있는듯? 이건 문서 더 찾아보기
- SPA 설정하기
  - `@sveltejs/adapter-static` 어댑터 적용
    - fallback 설정
    - 최상위 +layout.ts에서 전역으로 SPA 설정 
      - ssr 옵션 비활성화
      - prerender 비활성화
- ~~IDE 플러그인: shadcn/ui Components Manager 추가하기~~
  - https://plugins.jetbrains.com/plugin/23479-shadcn-ui-components-manager
  - 지금 유지보수가 잘 안되는듯? `components.json` 로딩을 못함.

### TODO 요구사항 구상

- CRUD 필요
- 내부 Map 사용해서 DB 흉내내기 (딜레이 추가해서 버튼 막거나 하는거 추가하기) 

