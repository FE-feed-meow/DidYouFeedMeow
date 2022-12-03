import React from "react";
import { BtnProps, Basic } from './style'

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
