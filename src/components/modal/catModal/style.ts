import styled from "styled-components";

const ModalMain = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 100;
  animation: fadeIn 0.3s;
`;

const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalWrap = styled.div`
  box-sizing: border-box;
  width: 300px;
  border-radius: 55px;
  overflow: hidden;
  text-align: center;
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: var(--background-color);
`;

const CatModalWrap = styled.div`
  width: 300px;
`;

const CatInfoCss = styled.button`
  margin: 30px auto;
  font-size: 20px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
  &:hover,
  &:focus {
    width: 112px;
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const CatInfoModify = styled(CatInfoCss)`
  &::after {
    content: "";
    display: inline-block;
    position: fixed;
    top: 54%;
    left: 7%;
    width: 260px;
    height: 5px;
    background-image: url("/assets/images/dashedLine-xl.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CatInfoDelete = styled(CatInfoCss)`
  display: block;
`;

export {
  ModalMain,
  ModalArea,
  ModalWrap,
  CatModalWrap,
  CatInfoModify,
  CatInfoDelete,
};
