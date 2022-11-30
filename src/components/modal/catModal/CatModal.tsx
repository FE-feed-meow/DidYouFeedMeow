import React, { useState } from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import DeleteModal from "../deleteModal/DeleteModal";

import {
  ModalMain,
  ModalArea,
  ModalWrap,
  CatModalWrap,
  CatInfoModify,
  CatInfoDelete,
} from "./style";
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CatModal = ({ setModal }: Props) => {
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };

  const CloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <ModalMain>
        <ModalArea onClick={(e) => e.stopPropagation()}>
          <CloseBtn CloseModal={CloseModal} />
          <ModalWrap>
            <CatModalWrap>
              <CatInfoModify>냥 정보 수정</CatInfoModify>
              <CatInfoDelete onClick={AlertOpen}>냥 정보 삭제</CatInfoDelete>
            </CatModalWrap>
          </ModalWrap>
        </ModalArea>
      </ModalMain>
      {onAlert && <DeleteModal CloseModal={CloseModal} />}
    </>
  );
};

export default CatModal;
