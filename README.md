# 🔮 타로 운세 게임

밭가는개발자(https://www.batgan.com)가 만든 타로 카드 운세 보기 게임입니다.

## ✨ 주요 기능

- 🃏 **22장의 메이저 아르카나 카드** - 전통적인 타로 카드 시스템
- 🔄 **정방향/역방향 해석** - 카드 방향에 따른 다른 의미
- 🎯 **4가지 운세 영역** - 전반운, 연애운, 직업운, 재물운
- ✨ **아름다운 애니메이션** - Framer Motion을 활용한 부드러운 UI
- 📱 **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원

## 🎮 게임 방법

1. **마음을 비우고** 질문이나 고민을 생각해보세요
2. **카드 섞기**를 눌러서 카드를 섞습니다
3. **직감을 믿고** 끌리는 카드 4장을 선택하세요
4. **운세 해석**을 확인하고 참고하세요

## 🛠️ 기술 스택

- **Next.js 14** - 리액트 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **React Hooks** - 상태 관리

## 🚀 실행 방법

### 의존성 설치
\`\`\`bash
npm install
# 또는
yarn install
\`\`\`

### 개발 서버 실행
\`\`\`bash
npm run dev
# 또는
yarn dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어서 확인하세요.

### 빌드
\`\`\`bash
npm run build
# 또는
yarn build
\`\`\`

## 📁 프로젝트 구조

\`\`\`
tarot-game/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # 리액트 컴포넌트
│   └── TarotGame.tsx     # 메인 타로 게임 컴포넌트
├── lib/                  # 유틸리티 함수
│   └── tarot.ts          # 타로 카드 데이터 및 로직
└── public/               # 정적 파일
\`\`\`

## 🎴 타로 카드 정보

이 게임은 전통적인 **메이저 아르카나 22장**을 사용합니다:

0. The Fool (바보)
1. The Magician (마법사)
2. The High Priestess (여교황)
3. The Empress (여황제)
4. The Emperor (황제)
5. The Hierophant (교황)
6. The Lovers (연인)
7. The Chariot (전차)
8. Strength (힘)
9. The Hermit (은둔자)
10. Wheel of Fortune (운명의 수레바퀴)
11. Justice (정의)
12. The Hanged Man (매달린 사람)
13. Death (죽음)
14. Temperance (절제)
15. The Devil (악마)
16. The Tower (탑)
17. The Star (별)
18. The Moon (달)
19. The Sun (태양)
20. Judgement (심판)
21. The World (세계)

## 🌟 특징

- **한국어 해석**: 이해하기 쉬운 한국어로 카드 의미 제공
- **직관적 UI**: 초보자도 쉽게 사용할 수 있는 인터페이스
- **빠른 로딩**: 최적화된 성능으로 빠른 반응속도
- **모바일 친화적**: 스마트폰에서도 편리하게 사용 가능

## 📝 주의사항

이 타로 게임은 **엔터테인먼트 목적**으로 제작되었습니다. 
실제 인생의 중요한 결정은 신중하게 고려하시기 바랍니다.

## 👨‍💻 제작자

**밭가는개발자 (동훈)**
- 브랜드: 밭간 (batgan.com)
- AI 코딩 교육, 컨설팅, 서비스 지원
- 블로그: 밭가는개발자 블로그
- 유튜브: 밭가는개발자의 코드농장

## 📄 라이선스

MIT License - 자유롭게 사용하실 수 있습니다.
