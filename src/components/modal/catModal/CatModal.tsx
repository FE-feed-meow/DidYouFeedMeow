import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  ModalMain,
  ModalArea,
  ModalWrap,
  CatModalWrap,
  CatInfoModify,
  CatInfoDelete,
} from "./style";
// import { CloseBtn } from "../catInfoModal/style";

const CatModal = () => {
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn />
        <ModalWrap>
          <CatModalWrap>
            <CatInfoModify>냥 정보 수정</CatInfoModify>
            <CatInfoDelete>냥 정보 삭제</CatInfoDelete>
          </CatModalWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatModal;
