/* eslint-disable no-use-before-define */
import React from "react";
import styled from "styled-components";

export interface InputsProps {
  width: number;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
  width,
  label,
  placeholder,
  type,
  value,
  required = true,
  onChange,
}: InputsProps) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <Input
        width={width}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
      />
    </Wrap>
  );
};

export default Inputs;

const Wrap = styled.div``;

export const Label = styled.label`
  font-family: "Shinb7Regular";
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: block;
  width: ${(props) => props.width}px;
  height: 30px;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
  padding-left: 9px;
  margin-bottom: 24px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
  &::placeholder {
    color: var(--disabled-button-color);
  }
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;
