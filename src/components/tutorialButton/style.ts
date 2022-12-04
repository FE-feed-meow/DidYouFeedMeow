import styled from "styled-components";

const TutorBtn = styled.button`
  width: 100%;
  position: fixed;
  top: 430px;
  right: -500px;
  font-size: 36px;
  &::after {
    content: url(../assets/icons/icon-manual.svg);
    vertical-align: middle;
    margin-left: 10px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 25, 0.8);
  z-index: 40;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 90px;
  right: 80px;
`;

export { TutorBtn, ModalBg, ModalCloseBtn };
