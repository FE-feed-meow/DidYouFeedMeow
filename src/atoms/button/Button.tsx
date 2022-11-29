import React from "react";
import styled from "styled-components";

interface BtnProps {
  type?: "submit" | "reset" | "button";
  className?: string;
  marginTop?: number;
  marginBottom?: number;
  bgColor: string;
  hoverBgColor?: string;
  disabled?: boolean;
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
  :disabled {
    background: var(--disabled-button-color);
  }
`;

const Button = ({
  type,
  className,
  marginTop,
  marginBottom,
  bgColor,
  hoverBgColor,
  disabled,
  children,
  onClick,
}: BtnProps) => {
  return (
    <Basic
      type={type ?? type}
      className={className ?? className}
      marginTop={marginTop ?? marginTop}
      marginBottom={marginBottom ?? marginBottom}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor ?? hoverBgColor}
      onClick={onClick ?? onClick}
      disabled={disabled ?? disabled}
    >
      {children}
    </Basic>
  );
};

export default Button;
