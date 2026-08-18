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
