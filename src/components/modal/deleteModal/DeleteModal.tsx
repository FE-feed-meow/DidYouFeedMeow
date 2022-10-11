import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  Modal,
  ModalArea,
  ModalWrap,
  DeleteText,
  BtnWrap,
  DeleteBtn,
  CancelBtn,
} from "./style";

const DeleteModal = () => {
  return (
    <Modal>
      <ModalArea>
        <CloseBtn />
        <ModalWrap>
          <DeleteText>삭제하시겠습니까?</DeleteText>
          <BtnWrap>
            <DeleteBtn>삭제</DeleteBtn>
            <CancelBtn>취소</CancelBtn>
          </BtnWrap>
        </ModalWrap>
      </ModalArea>
    </Modal>
  );
};

export default DeleteModal;
