import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  ModalMain,
  ModalArea,
  ModalWrap,
  DeleteText,
  BtnWrap,
  DeleteBtn,
  CancelBtn,
} from "./style";

interface Props {
  CloseModal: () => void;
}

const DeleteModal = ({ CloseModal }: Props) => {
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn CloseModal={CloseModal} />
        <ModalWrap>
          <DeleteText>삭제하시겠습니까?</DeleteText>
          <BtnWrap>
            <DeleteBtn>삭제</DeleteBtn>
            <CancelBtn onClick={CloseModal}>취소</CancelBtn>
          </BtnWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default DeleteModal;
