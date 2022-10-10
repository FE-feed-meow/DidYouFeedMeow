import React from "react";
import styled from "styled-components";
import { RowFlexBox } from "../../pages/profilePage/ProfilePage";

interface Props {
  children: string;
}

const ListFlexbox = styled(RowFlexBox)`
  align-items: flex-end;
  width: 330px;
  margin-bottom: 50px;
`;

const Description = styled.p`
  width: 200px;
  font-size: 16px;
  font-family: "Shinb7Regular";
`;

const XBtn = styled.button`
  width: 40px;
  height: 36px;
  font-size: 32px;
  font-family: "Shinb7Regular";
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 35%,
    rgba(0, 0, 0, 0) 35%
  );
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 35%,
      rgba(0, 0, 0, 0) 35%
    );
  }
`;

const OBtn = styled(XBtn)`
  margin-right: 14px;
`;

const QuizList = ({ children }: Props) => {
  return (
    <ListFlexbox>
      <Description>Q. {children}</Description>
      <div>
        <OBtn>O</OBtn>
        <XBtn>X</XBtn>
      </div>
    </ListFlexbox>
  );
};

export default QuizList;
