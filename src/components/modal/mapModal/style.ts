import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ArticleWrap = styled.article`
  position: absolute;
  top: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 260px;
  padding: 40px 30px;
  background-image: url(../assets/images/background.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0 -4px 4px 0;
  animation: ${slideDown} 0.3s ease-in;
  p {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 14px;
  }
  .catRegisterBtn {
    width: 100%;
  }
`;

export default ArticleWrap;
