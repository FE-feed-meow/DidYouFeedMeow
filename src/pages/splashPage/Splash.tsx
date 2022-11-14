import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import Image from "../../atoms/image/Image";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 48px;
    font-family: "Shinb7Regular";
  }
`;

const ImageFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const Animation = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  animation: 0.7s ease-out ${ImageFadeOut} forwards;
  animation-delay: 0.7s;
  z-index: 10;
`;

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  });
  return (
    <Animation>
      <Wrap>
        <Image
          marginTop={300}
          marginBottom={15}
          width={113}
          height={85}
          alt=""
          src="assets/images/logo.svg"
        />
        <p>밥줬냥</p>
      </Wrap>
    </Animation>
  );
};

export default Splash;
