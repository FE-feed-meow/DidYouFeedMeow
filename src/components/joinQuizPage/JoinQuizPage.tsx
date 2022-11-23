import React, { useState } from "react";
import { useNavigate } from "react-router";

import TermsModal from "@components/modal/termsModal/TermsModal";
import Button from "../../atoms/button/Button";
import Header from "../header/Header";
import QuizList from "../quizList/QuizList";
import { MiddleWrap } from "../../styles/commonStyle";
import Image from "../../atoms/image/Image";
import { H2 } from "../../pages/loginPage/style";

const JoinQuizPage = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [resultScore, setResultScore] = useState<number>(0);

  const CloseModal = () => {
    setModalState(false);
  };

  const calcActive = (score: number) => {
    if (score === 80) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const plusScore = async () => {
    setResultScore(resultScore + 20);
    calcActive(resultScore);
  };

  const minusScore = async () => {
    setResultScore(resultScore - 20);
    calcActive(resultScore);
  };

  const navigateToJoin = () => {
    navigate("/join");
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
        <QuizList minusScore={minusScore} plusScore={plusScore} />
        {isActive ? (
          <Button
            onClick={navigateToJoin}
            marginTop={10}
            bgColor="var(--main-color)"
          >
            다음
          </Button>
        ) : (
          <Button
            onClick={navigateToJoin}
            disabled
            marginTop={10}
            bgColor="var(--main-color)"
          >
            다음
          </Button>
        )}
      </MiddleWrap>
    </>
  );
};

export default JoinQuizPage;
