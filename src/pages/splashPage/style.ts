import styled, { keyframes } from "styled-components";

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

export { Wrap, Animation };
