import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Image from "../../atoms/image/Image";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
    font-family: "Shinb7Regular";
  }
`;

const ErrorButton = styled.button`
  width: 200px;
  height: 44px;
  margin-top: 30px;
  font-size: 16px;
  border-radius: 25px;
  color: #ffffff;
  background-color: var(--main-color);
`;

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
