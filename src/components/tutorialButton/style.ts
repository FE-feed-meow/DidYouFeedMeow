import styled from "styled-components";

const TutorBtn = styled.button`
  position: absolute;
  top: 420px;
  right: 230px;
  font-size: 36px;
  &::after {
    content: url(../assets/icons/icon-manual.svg);
    vertical-align: middle;
    margin-left: 10px;
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
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 80px;
  right: 180px;
`;

export { TutorBtn, ModalBg, ModalCloseBtn };
