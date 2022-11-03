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

interface Feed {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

interface FeedProps {
  feedList: Feed[];
}

const CatFeed = ({ feedList }: FeedProps) => {
  return (
    <FeedWrap>
      <DateTxt> 22. 10. 04</DateTxt>
      {feedList.length > 0
        ? feedList.map((feed, i: number) => {
            return <FeedCard key={feed.id} feed={feed} />;
          })
        : null}

      {/* <FeedCard />
      <FeedCard /> */}
    </FeedWrap>
  );
};

export default CatFeed;
