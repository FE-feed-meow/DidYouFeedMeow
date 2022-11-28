import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const AsideWrap = styled.aside`
  width: 240px;
  height: 100%;
  padding: 72px 40px;
  background-image: url(../assets/images/background.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  animation: ${slideLeft} 0.3s ease-in;
`;

const ProfileWrap = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-family: "Shinb7Regular";
    font-size: 24px;
    margin-left: 8px;
  }
  p {
    margin-top: 4px;
    margin-left: 8px;
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 12px;
    color: #797979;
  }
`;

const MenuBoardUl = styled.ul`
  margin-top: 52px;
  li + li {
    margin-top: 40px;
  }
`;

const MenuBoardBtn = styled.button`
  font-family: "Shinb7Regular";
  font-size: 24px;
  padding: 0 10px;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const LogoutBtn = styled.button`
  font-family: "Shinb7Regular";
  font-size: 24px;
  padding: 0 10px;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

export { AsideWrap, ProfileWrap, MenuBoardUl, MenuBoardBtn, LogoutBtn };
