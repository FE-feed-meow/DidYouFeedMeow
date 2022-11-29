import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/font.css";

const GlobalStyles = createGlobalStyle`
${reset}
:root {
  /* Color */
  --main-color: #373737; //타이틀, 질문 제목, 버튼
  --background-color: #ffffff; //종이질감 배경일 때, 투명도 50% 주기
  --background-focused-color: #fff000; //종이질감 배경일 때, 포커스 컬러입니다. 투명도 50% 줘야함!
  --error-color: #eb5757; //주의
  --text-focused-color : #fff77f; // 종이 질감 배경 외, 포커스 컬러 
  --disabled-button-color : #bbbbbb;

  /* Font Size */
  --font-large: 28px;
  --font-medium: 24px;
  --font-regular: 18px;
  --font-small: 14px;
  --font-micro: 12px;
}

* {
  box-sizing: border-box;
  font-family: 'Shinb7Regular';
}

button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}

input {
  border: none;
  background-color: inherit;
}

input:focus {
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.ir {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.btn {
  cursor: pointer;
}
`;

export default GlobalStyles;
