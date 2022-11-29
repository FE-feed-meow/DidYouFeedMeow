import React from "react";
import { Wrap, Title, AniImg } from "./style";

const Loading = () => {
  return (
    <Wrap>
      <AniImg src="../assets/images/loading.svg" alt="로딩이미지" />
      <Title>Loading...</Title>
    </Wrap>
  );
};

export default Loading;
