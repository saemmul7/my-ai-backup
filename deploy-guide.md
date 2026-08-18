# 🚀 KT 서버 배포 및 구글 애드센스 승인 가이드

이 프로젝트는 워드프레스나 데이터베이스(DB) 설치 없이, **Nginx 웹서버 하나만으로 초고속 서빙**되어 구글 애드센스 심사 봇 평가 및 로딩 속도에서 최고 점수를 받을 수 있도록 완벽하게 제작되었습니다.

---

## 1. KT Cloud (Ubuntu Linux VPS) 서버 세팅 (3분 컷)

KT Cloud 콘솔에서 Ubuntu 22.04 또는 24.04 인스턴스를 생성한 후, SSH 터미널에 아래 명령어를 차례대로 입력합니다.

### 1) 필수 패키지 설치 (Nginx, Certbot)
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx certbot python3-certbot-nginx -y
```

### 2) 웹사이트 파일 디렉토리 생성 및 권한 부여
```bash
sudo mkdir -p /var/www/kfood
sudo chown -R $USER:$USER /var/www/kfood
```

---

## 2. 로컬 파일 서버로 업로드하기

맥북(현재 컴퓨터)의 터미널에서 다음 명령어를 실행하여 웹사이트 전체 파일을 KT 서버로 전송합니다:

```bash
# (사용자명, KT서버_IP를 본인 정보로 변경)
scp -r /Users/anabubu/Desktop/은경/* root@YOUR_KT_SERVER_IP:/var/www/kfood/
```

---

## 3. Nginx 웹서버 설정

서버에서 Nginx 설정 파일을 생성합니다:

```bash
sudo nano /etc/nginx/sites-available/kfood
```

아래 내용을 붙여넣습니다 ( `yourkfooddomain.com`을 구매하신 실제 도메인으로 변경):

```nginx
server {
    listen 80;
    server_name yourkfooddomain.com www.yourkfooddomain.com;
    root /var/www/kfood;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # 캐시 및 성능 최적화
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

설정 활성화 및 Nginx 재시작:
```bash
sudo ln -s /etc/nginx/sites-available/kfood /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

---

## 4. 무료 SSL(HTTPS) 인증서 설치 (Let's Encrypt) - 필수!

구글 애드센스는 보안 연결(HTTPS)을 필수로 요구합니다. 아래 명령어로 자동 인증서를 발급받습니다:

```bash
sudo certbot --nginx -d yourkfooddomain.com -d www.yourkfooddomain.com
```
*(이메일 입력 후 약관 동의(Y)만 누르면 HTTPS가 자동 세팅되고 90일마다 자동 갱신됩니다)*

---

## 5. 도메인 DNS 연결 (구매처: 가비아, 호스팅KR 등)

도메인 구매처의 **DNS 관리(레코드 관리)** 메뉴에서 다음 두 개를 추가합니다:
* **A 레코드**: 호스트 이름 `@` ➔ 값: `KT 서버 공인 IP`
* **A 레코드**: 호스트 이름 `www` ➔ 값: `KT 서버 공인 IP`

---

## 6. 구글 애드센스 심사 신청 및 코드 삽입

1. **Google Search Console 등록**:
   - `https://search.google.com/search-console` 접속
   - 도메인 입력 후 소유권 확인
   - `sitemap.xml` 제출 (`https://yourkfooddomain.com/sitemap.xml`)
2. **구글 애드센스 가입 및 신청**:
   - `https://adsense.google.com` 접속
   - 사이트 URL 등록 (`https://yourkfooddomain.com`)
   - 구글에서 발급해주는 심사 스크립트 복사
3. **애드센스 코드 붙여넣기**:
   - `index.html` 및 `posts/*.html`의 `<head>` 태그 안 주석 위치에 구글 발급 코드를 붙여넣기만 하면 끝!
4. **심사 요청 버튼 클릭**: 보통 3일~2주 이내 승인 메일 도착 🎉
