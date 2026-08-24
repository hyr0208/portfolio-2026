# yyyerin | Front-End Developer Portfolio

따뜻한 사용자 경험을 만들어가는 프론트엔드 개발자 **한예린**의 2026년 포트폴리오입니다.

🔗 **[portfolio2026.yyyerin.co.kr](https://portfolio2026.yyyerin.co.kr/)**

<p align="center">
  <img src="./public/portfolio.png" alt="포트폴리오 히어로 섹션 스크린샷" width="800" />
</p>

## 🖥️ 소개

Hero, About, Career, Projects, Certification, Education, Contact 섹션으로 구성된 원페이지 포트폴리오입니다. 꾸준한 사이드 프로젝트로 익힌 기술들을 실제 서비스 완성 경험과 함께 소개합니다.

## ✨ 주요 기능

- **스크롤 기반 내비게이션** — `IntersectionObserver`([useActiveSection.ts](src/hooks/useActiveSection.ts))로 현재 보고 있는 섹션을 감지해 NavBar에 실시간으로 표시
- **커서 프리뷰 프로젝트 리스트** — 데스크톱에서 프로젝트 타이틀에 마우스를 올리면 `framer-motion` 스프링 애니메이션으로 커서를 따라 썸네일 프리뷰가 등장 ([ProjectShowcaseList.tsx](src/components/ProjectShowcaseList.tsx))
- **모바일 바텀 시트** — 모바일 환경에서는 프로젝트 상세를 바텀 시트로 노출해 터치 인터랙션에 최적화
- **프로젝트 상세 모달** — 각 프로젝트의 스택, 역할, 스크린샷을 모달로 확인 ([ProjectModal.tsx](src/components/ProjectModal.tsx))
- **Back to Top** — 스크롤 시 등장하는 최상단 이동 버튼
- **데이터 주도 콘텐츠** — 경력, 프로젝트, 자격증, 학력, 스킬 정보를 [src/data](src/data)의 타입 정의된 데이터로 관리해 콘텐츠 수정과 UI 로직을 분리
- **SEO / OG 메타** — Open Graph, Twitter Card 메타 태그로 링크 공유 시 미리보기 지원

## 🛠️ 기술 스택

| 분류       | 기술                 |
| ---------- | -------------------- |
| 프레임워크 | React 19, TypeScript |
| 빌드 도구  | Vite 8               |
| 스타일링   | Tailwind CSS 4       |
| 애니메이션 | Framer Motion        |
| 유틸리티   | clsx                 |
| 린팅       | Oxlint               |

## 📦 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 실행
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── assets/          # 폰트(Pretendard), 이미지, 아이콘
├── components/      # 섹션별 컴포넌트
│   ├── NavBar.tsx           # 스크롤 추적 내비게이션
│   ├── Hero.tsx              # 인트로 섹션
│   ├── About.tsx              # 소개 및 스킬
│   ├── Career.tsx              # 경력
│   ├── Projects.tsx             # 프로젝트 리스트 컨테이너
│   ├── ProjectShowcaseList.tsx   # 커서 프리뷰 타이포그래피 리스트
│   ├── ProjectModal.tsx           # 프로젝트 상세 모달 / 바텀 시트
│   ├── Certification.tsx           # 자격증
│   ├── Education.tsx                # 학력
│   ├── Contact.tsx                   # 연락처
│   └── BackToTop.tsx                  # 최상단 이동 버튼
├── data/            # 경력, 프로젝트, 자격증, 학력, 스킬 데이터 및 타입
├── hooks/           # 커스텀 훅 (useActiveSection 등)
├── App.tsx
└── main.tsx
```

## 🚀 배포

`https://portfolio2026.yyyerin.co.kr` 에 배포되어 있습니다.
