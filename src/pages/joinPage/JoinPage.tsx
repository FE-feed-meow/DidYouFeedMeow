/* eslint-disable react/jsx-no-bind */
import SignUp from "@components/signUp/SignUp";
import ProfilePage from "@pages/profilePage/ProfilePage";
import React, { useState } from "react";

const JoinPage = () => {
  const [isNext, setIsNext] = useState(false);

  function nextClick() {
    setIsNext(true);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{isNext ? <ProfilePage /> : <SignUp nextClick={nextClick} />}</>
  );
};

export default JoinPage;
