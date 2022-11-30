import React from "react";
import {
  ModalMain,
  ModalArea,
  ModalWrap,
  TermsWrap,
  TermsModalH1,
  TermsModalTextArea,
  TermsModalBtn,
} from "./style";

interface Props {
  CloseModal: () => void;
}

const TermsModal = ({ CloseModal }: Props) => {
  return (
    <ModalMain>
      <ModalArea>
        <ModalWrap>
          <TermsWrap>
            <TermsModalH1>약관을 읽어주세요</TermsModalH1>
            <TermsModalTextArea>
              &quot;밥줬냥&quot;은 안전한 동네고양이 관리를 위해 만들어진
              서비스입니다. 동네고양이 보호를 위해 고양이 O/X 퀴즈를 통과해야만
              회원가입을 하실 수 있습니다.
              <br />
              <br />
              &quot;밥줬냥&quot;은 동네고양이와의 아름다운 동행을 꿉꿉니다.
              사람과 동네고양이가 평화롭고 행복하게 공존하는 날을 위해 처음
              마음가짐으로 앞으로도 계속 노력할 것 입니다.
              <br />
              <br />
              &quot;밥줬냥&quot;과 함께 동네고양이의 안전을 위한 행보에
              동참해주세요.
            </TermsModalTextArea>
            <TermsModalBtn onClick={CloseModal}>
              동의하고 시작하기
            </TermsModalBtn>
          </TermsWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default TermsModal;
