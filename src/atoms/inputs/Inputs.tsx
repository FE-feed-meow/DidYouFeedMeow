/* eslint-disable no-use-before-define */
import React, { ReactNode } from "react";
import { Wrap, Label, Input } from './style'

export interface InputsProps {
  id?: string;
  name?: string;
  width: number;
  maxLength?: number;
  label?: string;
  placeholder?: string | any;
  type?: string;
  value?: string | any;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
  id,
  name,
  width,
  maxLength,
  label,
  placeholder,
  type,
  value,
  required = true,
  onChange,
  onBlur,
}: InputsProps) => {
  return (
    <Wrap>
      <Label id={id ?? id}>{label ?? label}</Label>
      <Input
        autoComplete="off"
        id={id ?? id}
        name={name ?? name}
        width={width ?? width}
        maxLength={maxLength ?? maxLength}
        placeholder={placeholder ?? placeholder}
        type={type ?? type}
        value={value ?? value}
        required={required ?? required}
        onChange={onChange ?? onChange}
        onBlur={onBlur ?? onBlur}
      />
    </Wrap>
  );
};

export default Inputs;