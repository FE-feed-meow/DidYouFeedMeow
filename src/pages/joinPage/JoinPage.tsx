import React from "react";
import styled from "styled-components";

import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Inputs from "../../atoms/inputs/Inputs";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2 } from "../loginPage/LoginPage";

const JoinPage = () => {
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
      <Inputs
        label="이메일"
        placeholder="이메일을 입력하세요"
        type="text"
        width={275}
      />
      <Inputs
        label="비밀번호"
        placeholder="비밀번호를 설정하세요"
        type="text"
        width={275}
      />
      <Inputs
        label="비밀번호 확인"
        placeholder="설정한 비밀번호를 입력하세요"
        type="text"
        width={275}
      />
      <Button marginTop={12} bgColor="var(--disabled-button-color)">
        입장하기
      </Button>
    </MiddleWrap>
  );
};

export default JoinPage;
