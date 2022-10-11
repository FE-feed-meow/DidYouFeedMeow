import styled from "styled-components";

const DeleteModal = styled.div`
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

const DeleteText = styled.span`
  display: inline-block;
  font-size: 20px;
  line-height: 26px;
  padding: 35px 64px 29px;
  /* width: 100%; */
`;

const BtnWrap = styled.div`
  display: flex;
`;

const DeleteBtn = styled.button`
  width: 100%;
  font-size: 20px;
  padding: 20px 55px;
`;

const CancelBtn = styled.button`
  width: 100%;
  font-size: 20px;
  padding: 20px 55px;
`;

export {
  DeleteModal,
  ModalArea,
  ModalWrap,
  DeleteText,
  BtnWrap,
  DeleteBtn,
  CancelBtn,
};
