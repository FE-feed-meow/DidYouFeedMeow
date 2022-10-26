import React from "react";
import styled from "styled-components";

interface ImageProps {
  className?: string;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
  src: string;
  alt: string;
  onClick?: () => void;
}

const Img = styled.img<ImageProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Image = ({
  className,
  marginTop,
  marginBottom,
  width,
  height,
  src,
  alt,
  onClick,
}: ImageProps): JSX.Element => {
  return (
    <Img
      className={className ?? className}
      marginTop={marginTop ?? marginTop}
      marginBottom={marginBottom ?? marginBottom}
      width={width ?? width}
      height={height ?? height}
      src={src}
      alt={alt}
      onClick={onClick ?? onClick}
    />
  );
};

export default Image;
