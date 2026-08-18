# ChatGPT ➔ Antigravity 수정 요청 목록 (AI_TASKS.md)

---

## 1차 디자인 및 구조 수정 (완료)
- [x] 상단 메뉴 6개 독립 카테고리 구성
- [x] HERO 메인 카피 교체 ("오늘도 맛있게, 한국의 집밥 이야기")
- [x] 스마트블록 3×2 그리드 재배치
- [x] NAVER Influencer 신뢰 바 단독 분리

---

## 2차 디자인 & 콘텐츠 다듬기 (완료)
- [x] **로고 `食` 한자 수정**: 중/일 느낌 한자 대신 정갈한 붉은 낙관 도장 심볼 및 젓가락/그릇 포인트로 교체
- [x] **AI/SEO 자극적 카피 담백하게 정리**: `황금비율`, `10분 컷`, `마법`, `끝판왕` 등 반복되는 표현을 자연스러운 생활형 표현으로 변경
- [x] **도시락 콘텐츠 실제 전진 배치**: Editor's Pick 및 주요 섹션에 도시락 실질 콘텐츠(`전날 준비해 아침에 바로 담는 남편 도시락`) 노출
- [x] **정통 한식/발효 섹션 위치 및 디자인 강도 최종 정돈**: 생활 밀착형 밥상 다음으로 자연스럽게 정돈
- [x] **GitHub 커밋 및 AI_STATUS.md / CHANGELOG.md 갱신**

---

## 3차 코드/SEO/AdSense 준비 검수 (완료)
- [x] **임시 도메인 제거**: `index.html` 내 미확정 `https://yourkfooddomain.com/` 플레이스홀더 정리 및 상대 경로 최적화
- [x] **canonical/OG 기본값 정리**: 운영 도메인 확정 전 가짜 URL을 배제하고 정확한 메타 정보 유지
- [x] **로고 심볼 2차 다듬기**: OS별 이모지 렌더링 차이를 해결하기 위해 인라인 SVG 그릇+젓가락 미니멀 심볼 및 붉은 인장 박스로 교체
- [x] **이미지 성능 최적화**: HERO 제외 모든 이미지에 `loading="lazy"`, `decoding="async"` 및 width/height 명시 (CLS 레이아웃 시프트 방지)
- [x] **모바일 메뉴 접근성**: 햄버거 버튼과 언어 선택 버튼에 `aria-expanded`, `aria-controls` 동기화 및 `ESC` 키보드 닫기 핸들러 추가
- [x] **AdSense 심사 기본 페이지/링크 점검**: `about.html`, `contact.html`, `privacy-policy.html`, `terms.html` 상·하단 링크 확인 및 '오후의 키친' 실제 인플루언서 이력/표준 정책으로 갱신
- [x] **콘텐츠 신뢰 요소 강화**: 글 상세 페이지와 소개 페이지에 작성자/운영자 소개, 2026 이달의 블로그, 네이버 메이트 등 실제 검증된 이력만 일관되게 표기
- [x] **SEO 불필요 요소 정리**: 검색 순위에 무의미한 `meta keywords` 제거, Title/Description/H1/Semantic HTML 중심 정리
- [x] **내부링크 구조 확인**: 메인 6개 스마트블록이 주요 실전 글로 매끄럽게 연결되도록 경로 안정화
- [x] **완료 후 보고**: `AI_STATUS.md` 및 `CHANGELOG.md` 갱신 후 GitHub commit/push 및 Cloudflare 최신 URL 확인

---

## 4차 최종 디자인 + AdSense 신청 전 점검 (완료)

### A. 메인 디자인 최종 마감
- [x] **첫 화면 밀도 점검**: HERO(padding 3.25rem), NAVER 신뢰바(margin 1.75rem), 스마트블록(margin 4rem) 간격 여백을 여유롭고 정갈하게 조정 완료.
- [x] **한국적 디자인 강도 최종 확인**: 한지 아이보리(`#F7F3EA`), 먹선 경계, 붉은 인장 포인트(순수 벡터 SVG 그릇+젓가락 심볼 `#C74732`)가 전체 10~15% 이하를 유지하며 음식 실사 사진이 시선의 1순위가 되도록 마감.
- [x] **브랜드 일관성**: `오후의 키친 / Korean Everyday Food`, 딥그린, 인장 레드, 명조 타이틀 체계를 메인, 상세, 정책 페이지(About, Privacy, Terms, Contact)까지 일관되게 통일.
- [x] **도시락 비중 재확인**: Editor's Pick 2번째 카드 및 Latest Stories 1번째 카드에 도시락 실질 콘텐츠 노출 확정.
- [x] **모바일 카드 UX**: 390px 모바일 화면에서 여백과 폰트 크기 조정으로 글자 겹침이나 잘림 없이 쾌적한 가독성 확보.

### B. AdSense 정책/배치 사전 점검
- [x] **광고와 콘텐츠 명확히 구분**: 오클릭 유발 요소 및 시선 유도 장식 일체 배제, 단정한 대시 테두리와 'Sponsored Advertisement' 라벨 마감.
- [x] **광고 슬롯 위치 최종안**: HERO 바로 아래를 피하고, `Latest Stories 이후 1개`, `Category 이후 1개` 안전 슬롯 유지.
- [x] **콘텐츠 없는 페이지 광고 금지**: 정책 페이지(About, Privacy, Terms, Contact)에는 광고를 일체 삽입하지 않음.
- [x] **광고보다 콘텐츠 우선**: 방문자가 고품질 집밥 요리/사진을 우선 인식하도록 배치 완료.

### C. 글로벌 사이트용 개인정보/동의 준비
- [x] **CMP 준비 항목 기록**: 유럽/영국/스위스 대상 Google 인증 CMP(Consent Management Platform) 설정 절차를 `ADSENSE_SETUP.md`에 상세 매뉴얼화.
- [x] **Privacy 문구 보강**: `privacy-policy.html`에 Google AdSense 쿠키, 맞춤형 광고 관리, GDPR/EEA 사용자 권리 조항 표준화.

### D. 신청 직전 기술 체크
- [x] `robots.txt` 크롤링 정상 허용 확인.
- [x] `sitemap.xml` 21개 전체 아티클 및 다국어 맵핑 무결성 확인.
- [x] 메인/서브/푸터 전체 링크 404 없음 확인.
- [x] Title / Description / OpenGraph 중복 없이 페이지별 고유 작성 확인.
- [x] 실제 운영 도메인 확정 전까지 상대 경로 유지.
- [x] 애드센스 승인 코드는 `<head>`에 주석으로 안전하게 대기.

### E. 완료 보고
- [x] 4차 작업 완료 후 `AI_STATUS.md` 및 `CHANGELOG.md` 갱신 후 GitHub commit/push 완료.
