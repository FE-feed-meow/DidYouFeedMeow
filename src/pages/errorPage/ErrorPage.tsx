import React from "react";
import { useNavigate } from "react-router";
import Image from "../../atoms/image/Image";
import { Wrap, ErrorButton } from './style'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Image
        marginTop={328}
        marginBottom={27}
        width={103}
        height={73}
        alt=""
        src="assets/icons/icon-error.svg"
      />
      <p>페이지를 찾을 수 없습니다. :(</p>
      <ErrorButton onClick={() => navigate(-1)}>이전 페이지</ErrorButton>
    </Wrap>
  );
};

export default ErrorPage;
