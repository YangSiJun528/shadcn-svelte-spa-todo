# shadcn-svelte-spa-todo

SvelteKit에서 SPA로 TODO 만들기

# 개발하며 알게 된 shadcn 사용 시 팁
- lucide으로 여러 아이콘 사용하기
  - lucide은 shadcn UI의 기본 아이콘 라이브러리임
  - 여기서 목록, 이름 확인 가능: https://lucide.dev/icons/
    - Svelte나 다른 라이브러리 컴포넌트로 바로 복사 가능
    - 근데 저 사이트에서 보여주는 import 주소가 잘못됨.
      - 기본적으로 스벨트킷에서 shadcn UI 적용하면 제공되는게 저러면 추가로 깔야아 함.
      - `import { Delete } from '@lucide/svelte/icons';` 이런 경로에서 찾을 수 있음.
- TODO: `components.json`랑 색상 별 설명 찾아보기 + 참고할만한 예시 사이트? 찾기
- 최근까지도 무료로 갱신되는 shadcn-ui 피그마 디자인 컴포넌트
  - 근데 피그마를 잘 못써서 오히려 디자인 어려움...
  - https://www.figma.com/community/file/1342715840824755935
- Next.js지만 참고할만한 구현이 많은 사이트 - Shadcn UI blocks
  - https://www.shadcn-ui-blocks.com/
  - 근데 복붙해서 쓰려면 유료라 참고만 하기
  - 실제 구현 시에는 마진이나 크기 규칙 정해서 AI한테 시키는게 더 효율적일듯?

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

