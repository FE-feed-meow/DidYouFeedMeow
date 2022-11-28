import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import useInput from "hooks/useInput";
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
  const navigate = useNavigate();

  const [email, setEmail] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [mismatchError, setMismatchError] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState("");

  // 이메일 유효성 검사
  const handleCheckEmail = async () => {
    const url = "https://mandarin.api.weniv.co.kr/user/emailvalid";
    const config = {
      user: { email: `${email}` },
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post(url, config);
      const reqMsg = res.data.message;
      setEmailValid(reqMsg);
      if (reqMsg === "사용 가능한 이메일 입니다." && isValid === false) {
        setEmailValid("");
        setIsValid(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 비밀번호 확인
  const onChangePassword = useCallback(
    (e: { target: { value: any } }) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: { target: { value: any } }) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password],
  );

  // 프로필 페이지로 이동
  const goToSetProfile = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/profile");
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
      <div>
        <Inputs
          label="이메일"
          placeholder="이메일을 입력해주세요."
          id="email"
          type="email"
          width={275}
          value={email}
          onChange={setEmail}
          onBlur={handleCheckEmail}
          required
        />
        {emailValid && <ErrorMessage>* {emailValid}</ErrorMessage>}
        <Inputs
          label="비밀번호"
          placeholder="비밀번호를 설정하세요"
          id="password"
          type="password"
          width={275}
          value={password}
          onChange={onChangePassword}
          required
        />
        <Inputs
          label="비밀번호 확인"
          placeholder="설정한 비밀번호를 입력하세요"
          id="passwordCheck"
          type="password"
          width={275}
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {mismatchError && (
          <ErrorMessage>* 비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
      </div>

      {isValid ? (
        <Button
          type="submit"
          marginTop={36}
          bgColor="var(--main-color)"
          onClick={goToSetProfile}
        >
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
    </MiddleWrap>
  );
};

export default SignUp;
