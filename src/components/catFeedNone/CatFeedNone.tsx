import Image from "@atoms/image/Image";
import React from "react";
import styled from "styled-components";

const WarpFeed = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px 0px;
  p {
    font-family: "Shinb7Regular";
    font-size: 20px;
    margin-top: 20px;
    color: #9d9d9d;
  }
`;

const CatFeedNone = () => {
  return (
    <WarpFeed>
      <Image
        src="../../assets/images/404.svg"
        width={103}
        height={73}
        alt="밥이 없습니다."
      />
      <p>꼬르르륵</p>
    </WarpFeed>
  );
};

export default CatFeedNone;
