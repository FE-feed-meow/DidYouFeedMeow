import React from "react";
import styled from "styled-components";

import FeedCard from "./feedCard/FeedCard";

export const FeedWrap = styled.section`
  padding: 37px 0 0;
  display: block;
`;

export const FeedBox = styled.div`
  padding: 5px;
  width: 330px;
  height: 170px;
  overflow-y: auto;
  overflow-x: hidden;
  /* 스크롤바 설정 */
  &::-webkit-scrollbar {
    width: 9px;
  }
  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #373737;
    border-radius: 10px;
  }
  /* 스크롤바 뒷 배경 설정 */
  &::-webkit-scrollbar-track {
    background-color: #b5b5b5;
  }
`;

export const DateTxt = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #373737;
  padding-bottom: 30px;
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
      <FeedBox>
        {feedList.length > 0
          ? feedList.map((feed, i: number) => {
              return <FeedCard key={feed.id} feed={feed} />;
            })
          : null}

        {/* <FeedCard />
      <FeedCard /> */}
      </FeedBox>
    </FeedWrap>
  );
};

export default CatFeed;
