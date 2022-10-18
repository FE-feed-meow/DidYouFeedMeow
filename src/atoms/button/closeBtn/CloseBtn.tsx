import React from "react";
import { CloseBWrap, ClBnt } from "./style";

interface Props {
  CloseModal: () => void;
}

const CloseBtn = ({ CloseModal }: Props) => {
  return (
    <CloseBWrap>
      <ClBnt onClick={CloseModal} />
    </CloseBWrap>
  );
};

export default CloseBtn;
