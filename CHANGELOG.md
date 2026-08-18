# CHANGELOG (프로젝트 변경 기록)

모든 주요 코드, UI, 콘텐츠 변경 사항을 시간순으로 누적 기록합니다.

---

## [2026-08-18] - 1차 디자인 & 구조 수정 완료

### 🎨 디자인 및 UI/UX
- **Modern Korean Food Magazine 테마 적용**:
  - 배경색: 밝은 한지 아이보리 `#F7F3EA`
  - 포인트 컬러: 딥 그린 `#234B3A`, 낙관 레드 `#C74732`
  - 먹선 경계 `#E2DBD0` 및 붉은 낙관 도장(`食`) 뱃지 도입
- **모바일 반응형 최적화**: 1440px / 1024px / 768px / 390px 반응형 CSS Grid 구축

### 📐 정보 구조 (Information Architecture)
- **상단 메뉴 6대 카테고리 확정**:
  - 김밥 | 도시락 | 코스트코 | 집밥 | 반찬 | 국·찌개 (+ 소개, 문의, 다국어)
- **HERO 영역 생활형 전면 개편**:
  - 메인: "오늘도 맛있게, 한국의 집밥 이야기"
  - 서브: "김밥 · 도시락 · 코스트코 장보기 · 매일 집밥"
  - 영문: "Korean Everyday Food & Lifestyle"
- **SMART BLOCK 6대 핵심 카드 (3×2 그리드)**:
  - 1행: 김밥 (KIMBAP), 도시락 (LUNCHBOX), 코스트코 장보기 (COSTCO KOREA)
  - 2행: 집밥 (HOME COOKING), 반찬 (BANCHAN), 국 · 찌개 (SOUP & STEW)
- **NAVER Influencer 가로형 신뢰 바 분리**:
  - 2026 이달의 블로그 & 네이버 메이트 (레시피) 공식 엠블럼 독립 배치

### 🌐 다국어 및 인프라
- 7개 국어 지원 체계 완비 (KR, EN, ZH, JA, FR, DE, PT)
- Google AdSense 대비 2개 전용 슬롯 확보
- Cloudflare Tunnel을 통한 무캐시 실시간 라이브 배포 파이프라인 수립
