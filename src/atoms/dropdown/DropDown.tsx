import React from "react";

import { SelectWrap, Title, BtnSelect, UlOption, BtnOption } from "./style";

export interface DropDownProps {
  options: string[];
  width: number;
  value?: string;
  title?: string;
  getOption?: any;
}

const DropDown = ({
  options,
  width,
  value,
  title,
  getOption,
}: DropDownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState(options[0]);

  const ClickSelect = (e: any) => {
    setOpen(!open);
    e.currentTarget.style.color = "#000";
  };

  return (
    <SelectWrap>
      <Title>{title}</Title>
      <BtnSelect
        type="button"
        value={selected}
        onClick={ClickSelect}
        width={width}
      >
        {selected}
      </BtnSelect>
      {open ? (
        <UlOption width={width}>
          {options.map((option) => (
            <li key={option}>
              <BtnOption
                type="button"
                key={option}
                onClick={() => {
                  setOpen(!open);
                  setSelected(option);
                  getOption(option);
                }}
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
