import React from "react";
import styled from "styled-components";

interface BtnProps {
  className?: string;
  marginTop?: number;
  marginBottom?: number;
  bgColor: string;
  hoverBgColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Basic = styled.button<BtnProps>`
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: 100%;
  height: 44px;
  font-size: 16px;
  border-radius: 25px;
  background: ${(props) => props.bgColor};
  color: var(--background-color);
  &:hover {
    background: ${(props) => props.hoverBgColor};
  }
`;

const Button = ({
  marginTop,
  marginBottom,
  bgColor,
  hoverBgColor,
  onClick,
  children,
  className,
}: BtnProps) => {
  return (
    <Basic
      className={className ?? className}
      marginTop={marginTop ?? marginTop}
      marginBottom={marginBottom ?? marginBottom}
      onClick={onClick ?? onClick}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor ?? hoverBgColor}
    >
      {children}
    </Basic>
  );
};

export default Button;
