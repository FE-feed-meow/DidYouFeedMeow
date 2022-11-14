/* eslint-disable no-use-before-define */
import React, { ReactNode } from "react";
import styled from "styled-components";

export interface InputsProps {
  id?: string;
  name?: string;
  width: number;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
  id,
  name,
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
      <Label id={id ?? id}>{label ?? label}</Label>
      <Input
        autoComplete="off"
        id={id ?? id}
        name={name ?? name}
        width={width ?? width}
        placeholder={placeholder ?? placeholder}
        type={type ?? type}
        value={value ?? value}
        required={required ?? required}
        onChange={onChange ?? onChange}
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
