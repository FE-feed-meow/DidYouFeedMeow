import React from "react";

import { SelectWrap, BtnSelect, UlOption, BtnOption } from "./style";

export interface DropDownProps {
  options: string[];
  width: number;
  value?: string;
  children?: React.ReactNode;
}

const DropDown = ({ options, width, value, children }: DropDownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <SelectWrap>
      <h4 className="ir">{children}</h4>
      <BtnSelect
        className={`${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {options[0]}
      </BtnSelect>
      {open === true ? (
        <UlOption>
          {options.map((option) => (
            <li key={option}>
              <BtnOption
                key={option}
                onClick={() => handleChange}
                value={value}
              >
                {option}
              </BtnOption>
            </li>
          ))}
        </UlOption>
      ) : null}
    </SelectWrap>
  );
};

export default DropDown;
