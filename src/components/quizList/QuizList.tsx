import React, { useState } from "react";
import {
  ListFlexbox,
  Description,
  QuizLabel,
  XRadioBtn,
  ORadioBtn,
} from "./style";

interface Props {
  minusScore: () => void;
  plusScore: () => void;
}

const QuizList = ({ minusScore, plusScore }: Props) => {
  return (
    <fieldset>
      <ListFlexbox>
        <Description>Q. 고양이는 색맹이다.</Description>
        <QuizLabel htmlFor="answer1-O" onClick={minusScore}>
          O
          <ORadioBtn type="radio" name="answer1" id="answer1-O" />
        </QuizLabel>
        <QuizLabel htmlFor="answer1-X" onClick={plusScore}>
          X
          <XRadioBtn type="radio" name="answer1" id="answer1-X" />
        </QuizLabel>
      </ListFlexbox>
      <ListFlexbox>
        <Description>Q. 고양이의 영구치는 30개이다.</Description>
        <QuizLabel htmlFor="answer2-O" onClick={plusScore}>
          O<ORadioBtn type="radio" name="answer2" id="answer2-O" />
        </QuizLabel>
        <QuizLabel htmlFor="answer2-X" onClick={minusScore}>
          X
          <XRadioBtn type="radio" name="answer2" id="answer2-X" />
        </QuizLabel>
      </ListFlexbox>
      <ListFlexbox>
        <Description>Q. 고양이는 단 맛을 느끼지 못한다.</Description>
        <QuizLabel htmlFor="answer3-O" onClick={plusScore}>
          O<ORadioBtn type="radio" name="answer3" id="answer3-O" />
        </QuizLabel>
        <QuizLabel htmlFor="answer3-X" onClick={minusScore}>
          X
          <XRadioBtn type="radio" name="answer3" id="answer3-X" />
        </QuizLabel>
      </ListFlexbox>
      <ListFlexbox>
        <Description>Q. 고양이는 사람보다 시력이 좋다.</Description>
        <QuizLabel htmlFor="answer4-O" onClick={plusScore}>
          O<ORadioBtn type="radio" name="answer4" id="answer4-O" />
        </QuizLabel>
        <QuizLabel htmlFor="answer4-X" onClick={minusScore}>
          X
          <XRadioBtn type="radio" name="answer4" id="answer4-X" />
        </QuizLabel>
      </ListFlexbox>
      <ListFlexbox>
        <Description>Q. 고양이는 폐경이 없다.</Description>
        <QuizLabel htmlFor="answer5-O" onClick={plusScore}>
          O<ORadioBtn type="radio" name="answer5" id="answer5-O" />
        </QuizLabel>
        <QuizLabel htmlFor="answer5-X" onClick={minusScore}>
          X
          <XRadioBtn type="radio" name="answer5" id="answer5-X" />
        </QuizLabel>
      </ListFlexbox>
    </fieldset>
  );
};

export default QuizList;
