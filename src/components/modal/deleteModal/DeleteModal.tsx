import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  DeleteModal,
  ModalArea,
  ModalWrap,
  DeleteText,
  BtnWrap,
  DeleteBtn,
  CancelBtn,
} from "./style";

const Modal = () => {
  return (
    <DeleteModal>
      <ModalArea>
        <CloseBtn />
        <ModalWrap>
          <DeleteText>삭제하시겠습니까?</DeleteText>
          <BtnWrap>
            <DeleteBtn>삭제</DeleteBtn>
            <CancelBtn>확인</CancelBtn>
          </BtnWrap>
        </ModalWrap>
      </ModalArea>
    </DeleteModal>
  );
};

export default Modal;
