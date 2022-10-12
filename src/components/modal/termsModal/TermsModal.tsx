import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  ModalMain,
  ModalArea,
  ModalWrap,
  TermsWrap,
  TermsModalH1,
  TermsModalTextArea,
  TermsModalBtn,
} from "./style";

const TermsModal = () => {
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn />
        <ModalWrap>
          <TermsWrap>
            <TermsModalH1>약관을 읽어주세요</TermsModalH1>
            <TermsModalTextArea>
              비밀번호는 6자 이상이어야 합니다.
            </TermsModalTextArea>
            <TermsModalBtn>동의하고 시작하기</TermsModalBtn>
          </TermsWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default TermsModal;
