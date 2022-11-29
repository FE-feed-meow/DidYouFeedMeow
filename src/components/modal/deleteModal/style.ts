import styled from "styled-components";

export const ModalMain = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 100;
  animation: fadeIn 0.3s;
  border-radius: 30px;
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
    top: 57%;
    left: 7%;
    width: 260px;
    height: 5px;
    background-image: url("/assets/images/dashedLine-xl.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const BtnWrap = styled.div`
  width: 300px;
  /* display: flex; */
`;

const DeleteBtn = styled.button`
  font-size: 22px;
  margin: 25px 53px 30px;
  &:hover,
  &:focus {
    width: 50px;
    margin: 25px 50px 30px;
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
  &::after {
    content: "";
    display: inline-block;
    position: fixed;
    top: 62%;
    left: 49%;
    width: 4px;
    height: 60px;
    background-image: url("/assets/images/dashedLine-h.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CancelBtn = styled.button`
  font-size: 22px;
  margin: 25px 53px 30px;
  &:hover,
  &:focus {
    width: 50px;
    margin: 25px 48px 30px;
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

export { DeleteText, BtnWrap, DeleteBtn, CancelBtn };
