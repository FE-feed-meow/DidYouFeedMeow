import styled from "styled-components";

export interface BtnProps {
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

export const Basic = styled.button<BtnProps>`
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
