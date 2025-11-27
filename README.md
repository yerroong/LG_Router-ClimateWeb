<img width="193" height="804" alt="image" src="https://github.com/user-attachments/assets/4ab882f4-fee3-4d94-8a90-27833bdf306b" /># 🌍 2025 Climate Watch 웹페이지

---

## 📌 프로젝트 개요

**주제 선정 배경**
LG U+ 유레카에서 11월 25일~27일에 진행한 개인 웹페이지 제작 실습입니다.
Perplexity AI를 활용하여 현재 가장 이슈로 되는 키워드를 추천받았고, 그 중 전 세계적으로 이상기후 현상이 증가하고 있다는 사회적 이슈를 확인했습니다.
이에 대한 심각성과 제작 기간을 고려해 **기후 위기 현황 시각화**를 주제로 선정했습니다.

* 기존 목표:
  * 지역별 지도에서 이상기후 확인
  * 실시간 기후 통계/데이터 제공
    
* 현실적 제약:
  * AI를 활용하지 않고 제작하려고 최대한 노력했으며, 시간 관계상 대부분 페이지는 ** 더미 데이터** 사용
  * Insights 페이지만 실시간 API 연동
  * 폴더 구조 및 기능 중심으로 시연

**웹페이지 설명**
2025년 전 세계 이상기후 현황을 시각적으로 확인할 수 있는 SPA 웹앱입니다.
주요 기능:
* 슬라이드 배너 🌄
* 주요 기후 이슈 카드 📊
* 검색 기능 🔍
* 상세 페이지 📄
* 지역별/인사이트 페이지 🌐

---

## 🛠 기술 스택

* **Frontend:** React, Router, Vite
* **CSS:** 일반 CSS, 컴포넌트별 폴더 관리
* **데이터:**
  * data/ 폴더 내 더미 데이터 (대부분 페이지)
  * InsightsPage만 OpenWeatherMap API 연동

---

## 📂 폴더 구조

```
src/
│
├─ components/
│   ├─ InsightCard/ 
│   │   ├─ InsightCard.jsx
│   │   └─ InsightCard.css
│   ├─ ClimateCard/
│   │   ├─ ClimateCard.jsx
│   │   └─ ClimateCard.css
│   ├─ RegionCard/
│   │   ├─ RegionCard.jsx
│   │   └─ RegionCard.css
│   ├─ Banner/
│   │   ├─ Banner.jsx
│   │   └─ Banner.css
│   └─ Footer/
│       ├─ Footer.jsx
│       └─ Footer.css
│
├─ pages/
│   ├─ Homepage/          // 더미 데이터
│   ├─ DetailPage/        // 더미 데이터
│   ├─ RegionsPage/       // 더미 데이터
│   ├─ InsightsPage/      // API 연동
│   ├─ AboutPage/
│   └─ NotFound/
│
├─ layout/
│   └─ DefaultLayout/
├─ data/
│   ├─ climateData.js
│   ├─ insightData.js 
│   └─ bannerData.js
├─ main.jsx
└─ router.jsx

```
<img width="193" height="804" alt="image" src="https://github.com/user-attachments/assets/aa5485d3-e472-483b-b78b-4673f8de1f6e" />


**폴더 구조 설명**

* **컴포넌트/페이지 단위 폴더 관리**

  * `.jsx`와 `.css`를 한 폴더 안에 묶어 관리
  * 사유: 규모가 커져도 유지보수 편리

* **data 폴더**

  * 더미 데이터
  * 추후 API 연동 시 쉽게 교체 가능

* **layout 폴더**

  * 디폴트 페이지로 Header, Footer, Outlet 등 전역 레이아웃 관리

---

## ✨ 주요 기능

### 1️⃣ 배너 슬라이드

* 자동 슬라이드 (5초 단위)
* 클릭 시 구글 검색 기능 (2,3번째 배너)
* **코드**
<img width="601" height="720" alt="image" src="https://github.com/user-attachments/assets/ff3a7c26-db13-46f6-9aaf-4bf5771c4b12" />


---

### 2️⃣ 주요 기후 이슈 카드

* 클릭 시 **상세 페이지** 이동
* 카드 영역 이미지 넘치지 않게 `object-fit: cover` 적용
* 타이틀 + 서브타이틀 + 요약 내용 표시
* **검색 기능 포함**

  * 카드 타이틀 기준 필터링
  * 검색 아이콘 클릭 시 검색
  * 검색 결과 없으면 `"일치하는 결과가 없습니다"` 표시

**시 이미지**
<img width="1674" height="899" alt="image" src="https://github.com/user-attachments/assets/3a1c404d-bde2-4146-81e5-1413f6a511e7" />

---

### 3️⃣ 상세 페이지

* 이미지, 타이틀, 요약, 상세 내용 리스트 표시
* 돌아가기 버튼 포함

**시연 이미지**
<img width="1656" height="858" alt="image" src="https://github.com/user-attachments/assets/6513cad7-7ea0-4cf5-b7fe-3fafcaf7dd4c" />


---

### 4️⃣ Regions 페이지 🌎

* 지역별 이상기후 카드 표시
* 클릭 시 구글 검색
* 페이지 이동 없이 바로 검색 가능

**시연 이미지**
<img width="1631" height="944" alt="image" src="https://github.com/user-attachments/assets/09957508-faff-4803-84bb-5cabacd5ac64" />


---

좋아요! 😊 5️⃣ Insights 페이지 이후 내용만 **Markdown 형식**으로 다시 정리해 드릴게요. 바로 복붙 가능하게 만들었습니다.

---

### 5️⃣ Insights 페이지 📊

* **OpenWeatherMap API 연동**

  * 12개 국가: 한국, 미국, 일본, 영국, 호주, 프랑스, 독일, 중국, 인도, 브라질, 캐나다, 남아공
  * 카드별 온도, 습도, 날씨 상태 표시
  * "자세히 보기" 버튼 → OpenWeatherMap 상세 페이지

* **시연 사진**

<img width="1906" height="981" alt="image" src="https://github.com/user-attachments/assets/59cbc10e-e0fe-4962-95dc-219e865c01eb" />

* **주요 기능**

  1. 국가별 실시간 기후 데이터 표시
  2. 카드 클릭 시 OpenWeatherMap 상세 페이지로 이동
  3. 로딩/에러 처리로 안정적 UX 제공


---

### 6️⃣ Footer

* 모든 페이지 하단 공통
* 기본 정보, 저작권 표시

---

## 💻 CSS 전략

* 컴포넌트별 폴더 관리 (ex: `InsightCard/InsightCard.css`)
* 장점:

  1. 유지보수 용이
  2. CSS 격리
  3. 규모 커져도 관리 편리
* 카드별 hover 효과, 그림자, 그라데이션 적용

---

## 🔎 검색 기능

* 위치: 주요 기후 이슈 섹션 제목 아래
* 타이틀 기준 필터링
* 입력값 없으면 모든 카드 표시

---

## ⚡ 추가 확장/보완 가능성

### - 실시간 데이터 확장

* 현재 Insights 페이지만 API 연동 → Regions 페이지나 ClimateCard에도 API 연동 가능
* 예: 지역별 폭염지수, 강수량, 풍속, 기압 등 실시간 데이터 표시

### - 상세 데이터 시각화

* 카드 클릭 시 OpenWeatherMap 페이지 이동 대신 내부 모달/차트 표시 가능
* 활용 라이브러리: Chart.js, Recharts, Leaflet.js

### - 검색/필터 고도화

* 국가/도시별 필터
* 날씨 조건별 필터(폭염, 강수, 습도)

### - 추가 API ?

| API                              | 용도                          |
| -------------------------------- | --------------------------- |
| **WeatherAPI.com**               | 특정 지역 이상기후 알림, 기온 변동 통계     |
| **Visual Crossing Weather**      | 과거 30년 이상기후 데이터, 단기 예보      |
| **NASA Earthdata / GISS**        | CO₂ 농도, 지구 평균온도 등 장기 기후 데이터 |
| **World Bank Climate Data**      | 국가별 연간 폭염 지수/강수량 통계         |
