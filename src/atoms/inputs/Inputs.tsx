import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 390px;
`;

const Label = styled.label`
  font-family: "Shinb7Regular";
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-family: "SpoqaHanSansNeo-Medium";
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

export interface InputsProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
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
