import styled from "styled-components";

export const ModalMain = styled.div`
  margin: 0 auto;
  width: 390px;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 100;
  animation: fadeIn 0.3s;
`;

export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrap = styled.div`
  box-sizing: border-box;
  width: 300px;
  border-radius: 55px;
  overflow: hidden;
  text-align: center;
  background-color: var(--background-color);
`;

const DeleteText = styled.span`
  display: inline-block;
  font-size: 22px;
  line-height: 26px;
  padding: 35px 64px 29px;
  font-family: "Shinb7Regular";
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

const BtnWrap = styled.div`
  display: flex;
`;

const DeleteBtn = styled.button`
  width: 100%;
  font-size: 22px;
  padding: 20px 55px 39px;
  &::after {
    content: "";
    display: inline-block;
    position: fixed;
    top: 60%;
    left: 50%;
    width: 4px;
    height: 60px;
    background-image: url("/assets/images/dashedLine-h.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CancelBtn = styled.button`
  width: 100%;
  font-size: 22px;
  padding: 20px 55px 39px;
`;

export { DeleteText, BtnWrap, DeleteBtn, CancelBtn };
