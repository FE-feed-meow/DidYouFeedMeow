import styled from "styled-components";

export interface ImageProps {
  className?: string;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
  src: string;
  alt: string;
  onClick?: () => void;
}

export const Img = styled.img<ImageProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
