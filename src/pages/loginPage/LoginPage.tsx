/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
import axios from "axios";

import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Inputs from "../../atoms/inputs/Inputs";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2, Join, ErrorMessage } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput({ initialData: "" });
  const [password, onChangePassword] = useInput({ initialData: "" });
  const [logInError, setLogInError] = useState(false);

  const navigateToJoinQuiz = () => navigate("/quiz");
  useEffect(() => {
    setLogInError(false);
  }, [password]);

  const onLogin = async () => {
    const url = "https://mandarin.api.weniv.co.kr/user/login/";
    const config = {
      user: { email: `${email}`, password: `${password}` },
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(url, config);
      const reqMsg = res.data.message;

      reqMsg === "이메일 또는 비밀번호가 일치하지 않습니다."
        ? setLogInError(true)
        : setLogInError(false);

      if (!!reqMsg === false) {
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        localStorage.setItem("accountname", res.data.user.accountname);
        localStorage.setItem("token", res.data.user.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
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
      <div>
        <Inputs
          label="이메일"
          placeholder="이메일을 입력해주세요."
          required
          name="email"
          type="email"
          width={275}
          onChange={onChangeEmail}
        />
        <Inputs
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          required
          name="password"
          type="password"
          width={275}
          onChange={onChangePassword}
        />
        {logInError && (
          <ErrorMessage>
            * 이메일 또는 비밀번호가 일치하지 않습니다.
          </ErrorMessage>
        )}
        <Button
          marginTop={12}
          bgColor="var(--disabled-button-color)"
          hoverBgColor="var(--main-color)"
          type="submit"
          onClick={onLogin}
        >
          입장하기
        </Button>
      </div>

      <Join onClick={navigateToJoinQuiz}>이메일로 회원가입</Join>
    </MiddleWrap>
  );
};

export default LoginPage;
