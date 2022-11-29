import styled from "styled-components";

export const AllWrap = styled.div`
  position: fixed;
  background-image: url(../assets/images/main-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 30px;
  width: 100%;
  height: 100vh;
`;

export const MainWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 820px;
  background: url(../assets/images/background.svg);
  outline: 10px solid #e5e5e5;
  border-radius: 30px;
`;

export const MiddleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
`;
