# Google AdSense 신청 & 글로벌 개인정보/CMP 운영 가이드 (ADSENSE_SETUP.md)

이 문서는 **오후의 키친 (Afternoon Kitchen)** 웹사이트가 Google AdSense 심사를 1회에 통과하고, 글로벌 트래픽(유럽/영국 등) 대상 규정을 준수하며 안전하게 광고를 송출하기 위한 운영 지침서입니다.

---

## 1. Google AdSense 신청 전 사전 점검 완료 항목 (Antigravity 반영 완료)

- [x] **고품질 콘텐츠 인프라 완비**:
  - 네이버 2026 이달의 블로그 & 네이버 메이트 실사 레시피 기반 21개 오리지널 아티클 구축.
- [x] **필수 정책 및 신뢰(E-E-A-T) 페이지 완비**:
  - `about.html` (인플루언서 공식 이력 및 제작 원칙)
  - `privacy-policy.html` (Google 쿠키 및 GDPR/CCPA 정책)
  - `terms.html` (저작권 및 이용약관)
  - `contact.html` (실제 문의 폼 및 이메일)
- [x] **광고 배치 규정 준수 (Policy Compliance)**:
  - 콘텐츠보다 광고가 앞서지 않도록 첫 화면 HERO 아래에는 광고 슬롯 배제.
  - 본문 콘텐츠(`Latest Stories`, `Popular Hits`) 이후 전용 슬롯 2곳만 안전하게 확보.
  - 광고 오클릭 유도 문구 일체 배제.
- [x] **빠른 속도 & 웹 접근성(A11y)**:
  - 이미지 지연 로딩(`loading="lazy"`) 및 CLS 방지.
  - 모바일 반응형 및 키보드 접근성 완비.

---

## 2. 도메인 구매 후 사용자가 진행해야 할 최종 연결 단계

### STEP 1. 도메인 및 호스팅 연결
1. 케이푸드/키친 관련 도메인(예: `kfoodkitchen.com` 등) 구매.
2. KT Cloud 서버(또는 Vercel/Netlify)에 도메인 DNS(A 레코드 / CNAME) 연결.
3. 무료 SSL(HTTPS) 인증서 적용 (`certbot`).

### STEP 2. 도메인 주소 치환
사이트 내 파일에서 플레이스홀더를 실제 구매한 도메인으로 일괄 치환합니다:
- `sitemap.xml`
- `robots.txt`
- 다국어 페이지 `hreflang` 태그

### STEP 3. Google AdSense 사이트 등록 및 심사 요청
1. [Google AdSense](https://www.google.com/adsense) 로그인 ➔ `사이트` ➔ `사이트 추가` ➔ 구매한 도메인 입력.
2. 발급받은 애드센스 코드(`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>`)를 모든 HTML 파일의 `<head>` 영역에 삽입.
3. AdSense 대시보드에서 `검토 요청` 클릭.

---

## 3. 글로벌 사용자 동의 관리 플랫폼 (CMP) 설정 안내 (중요)

유럽 경제 지역(EEA), 영국 및 스위스 사용자가 웹사이트를 방문할 때 Google AdSense 광고를 표시하려면 **Google 인증 동의 관리 플랫폼(CMP)**이 필수입니다.

### 📌 별도의 유료 플러그인 없이 Google AdSense 자체 CMP 무료 사용법:
1. Google AdSense 대시보드 로그인 ➔ **`개인정보 보호 및 메시지(Privacy & messaging)`** 메뉴 이동.
2. **`GDPR`** 섹션에서 **`메시지 만들기(Create message)`** 클릭.
3. 본 사이트의 도메인 선택 및 개인정보처리방침 URL(`https://내도메인/privacy-policy.html`) 입력.
4. 디자인(색상 톤: 딥그린 `#234B3A`, 버튼 `#C74732`) 확인 후 **`게시(Publish)`** 클릭.
5. ➔ Google이 자동으로 유럽 방문자에게 표준 법적 동의 팝업을 띄워주며 규정 위반을 100% 방지합니다.

---

## 4. 사이트 파일 무결성 체크

- `robots.txt`: 검색엔진 크롤링 차단 없음 (`Disallow:` 없음)
- `sitemap.xml`: 21개 아티클 및 다국어 7개 언어 전체 매핑 완료
- 404 에러 링크 없음 (로컬 및 라이브 검증 완료)
