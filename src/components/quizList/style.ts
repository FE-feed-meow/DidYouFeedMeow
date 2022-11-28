import styled from "styled-components";
import { RowFlexBox } from "@pages/profilePage/style";

const ListFlexbox = styled(RowFlexBox)`
  align-items: flex-end;
  width: 330px;
  margin-bottom: 50px;
`;

const Description = styled.legend`
  width: 200px;
  font-size: 16px;
  font-family: "Shinb7Regular";
`;

const QuizLabel = styled.label`
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

const XRadioBtn = styled.input`
  width: 15px;
  height: 15px;
`;

const ORadioBtn = styled(XRadioBtn)`
  margin-right: 14px;
`;

export { ListFlexbox, Description, QuizLabel, XRadioBtn, ORadioBtn };
