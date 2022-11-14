import React from "react";

import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Inputs from "../../atoms/inputs/Inputs";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2, Join } from "./style";

const LoginPage = () => {
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
      <Inputs label="이메일" type="text" width={275} />
      <Inputs label="비밀번호" type="text" width={275} />
      <Button marginTop={12} bgColor="var(--disabled-button-color)">
        입장하기
      </Button>
      <Join>이메일로 회원가입</Join>
    </MiddleWrap>
  );
};

export default LoginPage;
