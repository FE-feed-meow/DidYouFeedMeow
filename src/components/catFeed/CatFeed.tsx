import React, { useEffect } from "react";
import { FeedWrap, FeedBox, DateTxt } from "./style";
import FeedCard from "./feedCard/FeedCard";

interface authorProps {
  accountname: string;
}

interface Feed {
  id: string;
  content: string;
  createdAt: string;
  author: authorProps;
}
interface dates1 {
  id: string;
  date: string;
  content: string;
  author: authorProps;
}

interface FeedProps {
  feedList: Feed[];
  removeDuplicates: dates1[];
}

const CatFeed = ({ feedList, removeDuplicates }: FeedProps) => {
  // 현재 날짜
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const nowDate = `${year}-${month}-${date}`;

  const result2 = removeDuplicates.filter(
    (arr, index, callback) =>
      index === callback.findIndex((loc) => loc.date === arr.date),
  );

  return (
    <FeedWrap>
      <h2 className="ir">밥주기 목록</h2>
      {result2
        .filter((item) => item.date === nowDate)
        .map((item) => {
          return (
            <article key={item.id}>
              <DateTxt>{item.date}</DateTxt>
              <FeedBox>
                {removeDuplicates.length > 0 &&
                  removeDuplicates
                    .filter((arr) => arr.date === nowDate)
                    .map((feed) => {
                      return (
                        <FeedCard
                          key={feed.id}
                          feed={feed}
                          feedAccountname={feed.author.accountname}
                        />
                      );
                    })}
              </FeedBox>
            </article>
          );
        })}
    </FeedWrap>
  );
};

export default CatFeed;
