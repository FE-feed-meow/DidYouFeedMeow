import React from "react";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Img = styled.img<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Image = ({ width, height, src, alt }: Props): JSX.Element => {
  return <Img width={width} height={height} src={src} alt={alt} />;
};

export default Image;
