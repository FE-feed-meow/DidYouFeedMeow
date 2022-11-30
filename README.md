# 길고양이 급식소 관리 서비스: 밥줬냥

```
😸 밥줬냥은 길 고양이들의 밥과 물, 간식을 시간대 별로 챙겨줄 수 있는 급식소 관리 서비스 입니다.
📍 어디에 어떤 고양이가 살고 있는지 지도에 고양이 정보를 등록하고 위치를 확인할 수 있습니다.
🐟 고양이의 밥과 물, 간식을 시간별로 매일 체크하고 특이사항 또는 건강상태 또한 서로 공유할 수 있습니다.
```
<br>

## 👩🏻‍💻 팀원 소개

|이예은|우혜빈|전유진|김도희|남위정|
|:---:|:---:|:---:|:---:|:---:|
|![image](https://user-images.githubusercontent.com/99578007/204809360-2d677882-929e-43a3-aa35-a811da8f7519.png)|![image](https://user-images.githubusercontent.com/99578007/204809255-58fcbd84-a7b5-4c7a-b9ee-5b189439d481.png)|![image](https://user-images.githubusercontent.com/99578007/204809436-8ffdf844-c615-4ef4-9169-fe522a214930.png)|![image](https://user-images.githubusercontent.com/99578007/204808956-d9d19363-c977-48a6-9403-b0a3444e4d5e.png)|![image](https://user-images.githubusercontent.com/99578007/204808689-29ca1f82-302a-4c07-ae4a-3b9ee551c8fa.png)|
|<a href="https://github.com/leeyeun">🔗 leeyeun</a>|<a href="https://github.com/Hyebin-woo">🔗 Hyebin-woo</a>|<a href="https://github.com/ujin16">🔗 ujin16</a>|<a href="https://github.com/hee1231">🔗 hee1231</a>|<a href="https://github.com/Nam-Wijeong">🔗 Nam-Wijeong</a>|

<br>

## ⚙️ 기술 및 개발환경

### <**기술>**

- 배포 : [https://did-you-feed-meow.netlify.app/](https://did-you-feed-meow.netlify.app/)
    - test_ID :  feedmeow@email.com
    - test_PW :  didhddidhd
- FrontEnd:  React, Styled-Components, TypeScript
- BackEnd: 제공된 API 사용
- Version

```jsx
"react": "^18.2.0",
"react-router": "^6.3.0",
"styled-components": "^5.3.5",
"react-kakao-maps-sdk": "^1.1.5",
"typescript": "^4.9.3",
```

### < **개발환경 >**


- Notion:  [밥줬냥작업일지](#none)
- Design:  [밥줬냥피그마](#none)
- 브랜치 전략: git-flow

### < **개발기간 >**
- 2022.10 ~ 2022.11

<br>
<br>

## 🚀 **프로젝트 동기**

밥줬냥 프로젝트는 집을 오고 가면서, 혹은 여행을 갔다가 불쑥불쑥 마주치는 길 고양이들이 모두 건강히 우리 곁에 머물 수 있게 집사처럼 챙겨주는 따뜻한 마음에서 시작되었습니다.  내가 돌보는 동네 고양이들의 정보를 지도에 스팟으로 등록하고 밥과 간식을 시간별로 기록하며 길 고양이들이 무슨 일이 생길 경우 바로 달려갈 수 있는 캣맘, 캣대디가 될 수 있도록 기획하였습니다. 

<br>

## 💬 **구현 기능**

- 🔐  **계정**
    - 로그인 / 로그아웃
    - 고양이 상식 문제풀기 → 회원가입
    - 회원 정보 수정
    - 정규표현식으로 유효성 검증
- 🏞  **지도 (Home)**
    - 카카오 지도 api 연동으로 고양이 위치 정보 등록
- 😸 **고양이 정보**
    - 이미지 파일 업로드, 미리보기
    - 등록 / 수정 / 삭제
    - 고양이 목록보기
- 🍚  **고양이 밥**
    - 등록 / 삭제
    - 밥 시간별로 보기
- 📰  **고양이 신문 보기**

<br>
<br>


## 🎨 UI 이미지
<img src="https://user-images.githubusercontent.com/99578007/204724920-0e876862-0379-4502-9c97-5a0702872585.png" width=1200 />

<br>

## ⭐️ 구현 동작
<br>
<div>

|0. Splash|1. 회원가입(약관동의 & 퀴즈)|2. 로그인|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/99578007/204719569-db40b50d-8bd7-4bfb-986a-0262a96ca3c5.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204719750-6975e3c7-90cf-4111-85ed-235b05a71f94.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204719857-e814620d-aeaf-4e70-b547-20f5acb898f6.gif" width=245 /> 

<br>


|3. 메인화면|4. 냥이 등록|5. 냥이 정보|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/99578007/204719923-1083ec78-295c-4c4f-9f89-c114535cce99.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204720040-ab03890c-4533-4d81-b987-b88f170e2584.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204721039-5091198d-336e-436e-8dde-e022179f9116.gif" width=245 /> 


<br>

|5-1. 냥이 정보 수정|5-2. 냥이 밥주기|6. 동네냥 소식통 UI
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/99578007/204722058-7663e9d7-4b6d-4668-a805-ada0b4e9d9e8.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204722303-7c9c3a45-a3b5-495f-b14a-004c78866f84.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204722843-a67f764f-ac9c-44bd-9831-9b4d068653b5.gif" width=245 /> 

<br>

|7. 밥줬냥 신문 UI|8. 로그아웃|9. 에러 페이지|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/99578007/204723114-d5f0a56b-7be0-48bc-93fe-9df4c5aa3c76.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204723711-89f52305-cbba-40c6-bf8a-08d44af75bd0.gif" width=245 />|<img src="https://user-images.githubusercontent.com/99578007/204723278-26e728d8-22c0-4a58-baa0-0b89c6556cfa.gif" width=245 /> 

</div>
