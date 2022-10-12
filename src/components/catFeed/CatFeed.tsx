import React from "react";
import styled from "styled-components";

import FeedCard from "./feedCard/FeedCard";

export const FeedWrap = styled.section`
  padding: 37px 0 0;
  display: block;
`;

export const DateTxt = styled.p`
  font-size: 14px;
  color: #373737;
  padding-bottom: 30px;
  width: 64px;
`;

const CatFeed = () => {
  return (
    <FeedWrap>
      <DateTxt> 22. 10. 04</DateTxt>
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </FeedWrap>
  );
};

export default CatFeed;
