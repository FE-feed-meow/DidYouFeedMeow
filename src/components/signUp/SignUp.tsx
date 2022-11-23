/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import useInput from "hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./style";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Inputs from "../../atoms/inputs/Inputs";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2 } from "../../pages/loginPage/style";

interface SignUpProps {
  nextClick: () => void;
}
const SignUp = ({ nextClick }: SignUpProps) => {
  const [isActive, setIsActive] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [misMatchError, setMisMatchError] = useState(false);

  useEffect(() => {
    if (email && password && passwordCheck) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password, passwordCheck]);

  const onChangePassword = useCallback(
    (e: { target: { value: any } }) => {
      setPassword(e.target.value);
      setMisMatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: { target: { value: any } }) => {
      setPasswordCheck(e.target.value);
      setMisMatchError(password !== e.target.value);
    },
    [password],
  );

  const onSubmit = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    nextClick();
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
      <H2>회원가입</H2>
      <form onSubmit={onSubmit}>
        <Inputs
          label="이메일"
          placeholder="이메일을 입력해주세요."
          required
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          width={275}
        />
        <Inputs
          label="비밀번호"
          placeholder="비밀번호를 설정하세요"
          required
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          width={275}
        />
        <Inputs
          label="비밀번호 확인"
          placeholder="설정한 비밀번호를 입력하세요"
          required
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          width={275}
        />
        {misMatchError && (
          <ErrorMessage>* 비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
        {isActive ? (
          <Button type="submit" marginTop={36} bgColor="var(--main-color)">
            다음
          </Button>
        ) : (
          <Button
            type="submit"
            marginTop={36}
            disabled
            bgColor="var(--disabled-button-color)"
          >
            다음
          </Button>
        )}
      </form>
    </MiddleWrap>
  );
};

export default SignUp;
