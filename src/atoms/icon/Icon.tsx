import React from "react";
import styled from "styled-components";

interface IconProps {
  className?: string;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
  src: string;
  alt: string;
}
const Con = styled.img<IconProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Icon = ({
  className,
  marginTop,
  marginBottom,
  width,
  height,
  src,
  alt,
}: IconProps): JSX.Element => {
  return (
    <Con
      className={className ?? className}
      marginTop={marginTop ?? marginTop}
      marginBottom={marginBottom ?? marginBottom}
      width={width ?? width}
      height={height ?? height}
      src={src}
      alt={alt}
    />
  );
};
export default Icon;
