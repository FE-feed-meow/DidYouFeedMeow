import styled, { keyframes } from "styled-components";

const ImageFrames = keyframes`
  0% {
      transform: rotate(5deg);
  }
  50% {
      transform: rotate(-5deg);
  }
  100%{
      transform: rotate(5deg);

  }
`;

const Wrap = styled.div`
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AniImg = styled.img`
  animation: 0.7s ease-out ${ImageFrames} forwards;
  animation-delay: 0.7s;
  animation-iteration-count: 10;
`;

const Title = styled.h1`
  font-family: "Shinb7Regular";
  font-weight: 400;
  font-size: 28px;
  color: #373737;
  margin-top: 48px;
`;

export { Wrap, Title, AniImg };
