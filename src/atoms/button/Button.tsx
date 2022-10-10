import React from "react";
import styled from "styled-components";

interface BtnProps {
  bgColor: string;
  hoverBgColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Basic = styled.button<BtnProps>`
  width: 275px;
  height: 44px;
  font-size: 16px;
  border-radius: 25px;
  background: ${(props) => props.bgColor};
  color: var(--background-color);
  &:hover {
    background: ${(props) => props.hoverBgColor};
  }
`;

const Button = ({ bgColor, hoverBgColor, onClick, children }: BtnProps) => {
  return (
    <Basic
      onClick={onClick ?? onClick}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor ?? hoverBgColor}
    >
      {children}
    </Basic>
  );
};

export default Button;
