import React, { useState } from "react";
import TermsModal from "@components/modal/termsModal/TermsModal";
import Button from "../../atoms/button/Button";
import Header from "../../components/header/Header";
import QuizList from "../../components/quizList/QuizList";
import { MiddleWrap } from "../../styles/commonStyle";
import Image from "../../atoms/image/Image";
import { H2 } from "../loginPage/style";

const JoinQuizPage = () => {
  const [modalState, setModalState] = useState<boolean>(true);

  const CloseModal = () => {
    setModalState(false);
  };

  return (
    <>
      <Header />
      <MiddleWrap>
        {modalState && <TermsModal CloseModal={CloseModal} />}
        <Image
          marginTop={18}
          width={113}
          height={85}
          alt=""
          src="assets/images/logo.svg"
        />
        <H2 style={{ marginBottom: 65 }}>문제풀기</H2>
        <QuizList>고양이는 색맹이다.</QuizList>
        <QuizList>고양이의 영구치는 30개이다.</QuizList>
        <QuizList>고양이는 단 맛을 느끼지 못한다.</QuizList>
        <QuizList>고양이는 사람보다 시력이 좋다.</QuizList>
        <QuizList>고양이는 폐경이 없다.</QuizList>
        <Button marginTop={10} bgColor="var(--disabled-button-color)">
          다음
        </Button>
      </MiddleWrap>
    </>
  );
};

export default JoinQuizPage;
