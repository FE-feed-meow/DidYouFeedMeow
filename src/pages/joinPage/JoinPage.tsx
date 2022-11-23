/* eslint-disable react/jsx-no-bind */
import JoinQuizPage from "@components/joinQuizPage/JoinQuizPage";
import SignUp from "@components/signUp/SignUp";
import ProfilePage from "@pages/profilePage/ProfilePage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const [isNext, setIsNext] = useState(false);

  function nextClick() {
    setIsNext(true);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{isNext === false ? <SignUp nextClick={nextClick} /> : <ProfilePage />}</>
  );
};

export default JoinPage;
