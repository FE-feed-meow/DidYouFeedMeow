import React, { useState } from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import { CatModalProps } from "../../catInfo/CatInfo";
import DeleteModal from "../deleteModal/DeleteModal";

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
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };

  const handleCancel = () => {
    setOnAlert(false);
    // setModal(false);
  };

  const handleCloseModal = () => {
    // setModal(false);
  };
  return (
    <>
      <ModalMain>
        <ModalArea onClick={(e) => e.stopPropagation()}>
          <CloseBtn />
          <ModalWrap>
            <CatModalWrap>
              <CatInfoModify>냥 정보 수정</CatInfoModify>
              <CatInfoDelete onClick={AlertOpen}>냥 정보 삭제</CatInfoDelete>
            </CatModalWrap>
          </ModalWrap>
        </ModalArea>
      </ModalMain>
      {onAlert && <DeleteModal />}
    </>
  );
};

export default CatModal;
