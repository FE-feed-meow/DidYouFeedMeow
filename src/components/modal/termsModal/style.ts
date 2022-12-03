import styled from "styled-components";

export const ModalMain = styled.div`
  position: absolute;
  top: 0;
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 300;
  animation: fadeIn 0.3s;
  border-radius: 30px;
`;

export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrap = styled.div`
  box-sizing: border-box;
  width: 300px;
  border-radius: 55px;
  overflow: hidden;
  background-color: var(--background-color);
`;

export const TermsWrap = styled.div`
  margin: 37px 30px 60px;
`;

export const TermsModalH1 = styled.h1`
  font-size: 24px;
  font-family: "Shinb7Regular";
  margin-bottom: 19px;
`;

export const TermsModalTextArea = styled.p`
  color: #797979;
  font-size: 12px;
  line-height: 14px;
  height: 240px;
`;

export const TermsModalBtn = styled.button`
  box-sizing: border-box;
  width: 240px;
  padding: 12px 74px 12px;
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  border-radius: 44px;
  color: var(--background-color);
  background-color: var(--main-color);
`;
