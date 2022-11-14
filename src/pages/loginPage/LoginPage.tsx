import { useNavigate } from "react-router-dom";
import React from "react";

import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Inputs from "../../atoms/inputs/Inputs";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2, Join } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  const navigateToJoin = () => {
    navigate("/join");
  };

  return (
    <MiddleWrap>
      <Image
        marginTop={76}
        width={113}
        height={85}
        alt=""
        src="assets/images/logo.svg"
      />
      <H2 style={{ marginBottom: 60 }}>로그인</H2>
      <Inputs
        label="이메일"
        placeholder="이메일을 입력해주세요."
        required
        name="email"
        type="email"
        // value={email}
        width={275}
        // onChange={onChangeEmail}
      />
      <Inputs
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        required
        name="password"
        type="password"
        // value={password}
        width={275}
        // onChange={onChangePassword}
      />
      {/* {logInError && (
        <ErrorMessage>* 이메일 또는 비밀번호가 일치하지 않습니다.</ErrorMessage>
      )} */}
      <Button
        marginTop={12}
        bgColor="var(--disabled-button-color)"
        hoverBgColor="var(--main-color)"
        type="submit"
        // onClick={onLogin}
      >
        입장하기
      </Button>
      <Join onClick={navigateToJoin}>이메일로 회원가입</Join>
    </MiddleWrap>
  );
};

export default LoginPage;
