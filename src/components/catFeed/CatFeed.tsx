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

interface FeedProps {
  feedList: Feed[];
}
interface dates1 {
  id: string;
  date: string;
  content: string;
  author: authorProps;
}

const CatFeed = ({ feedList }: FeedProps) => {
  type dates = { id: number; date: string };
  const [newDateArray, setNewDateArray] = React.useState<dates[]>([]);
  const [newFeedArray, setNewFeedArray] = React.useState<dates1[]>([]);

  // 현재 날짜
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const nowDate = `${year}-${month}-${date}`;

  // 밥정보의 날짜를 분류
  const newArray = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < feedList.length; i++) {
      const newItem = { id: i, date: feedList[i].createdAt.split("T")[0] };
      setNewDateArray((arrays) => [...arrays, newItem]);
    }
  };

  // createdAt에 8시간 추가하기
  const timeArray = () => {
    if (feedList) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < feedList.length; i++) {
        const time = new Date(feedList[i].createdAt);
        const newDate = `${time.getFullYear()}-${time.getMonth() + 1
          }-${time.getDate()}`;
        const newItem = {
          id: feedList[i].id,
          date: newDate,
          content: feedList[i].content,
          author: feedList[i].author,
        };
        setNewFeedArray((arrays) => [...arrays, newItem]);
      }
    }
  };

  useEffect(() => {
    newArray();
    timeArray();
  }, [feedList]);

  const result2 = newFeedArray.filter(
    (arr, index, callback) =>
      index === callback.findIndex((loc) => loc.date === arr.date),
  );

  // 중복 제거 된 newTimeArray
  const removeDuplicates = newFeedArray.filter(
    (arr, index, callback) =>
      index === callback.findIndex((t) => t.id === arr.id),
  );
  return (
    <FeedWrap>
      {result2
        .filter((item) => item.date === nowDate)
        .map((item) => {
          return (
            <>
              <DateTxt key={item.id}>{item.date}</DateTxt>
              <FeedBox>
                {removeDuplicates.length > 0
                  ? removeDuplicates
                    .filter((arr) => arr.date === nowDate)
                    .map((feed) => {
                      return (
                        <FeedCard
                          key={feed.id}
                          feed={feed}
                          feedAccountname={feed.author.accountname}
                        />
                      );
                    })
                  : null}
              </FeedBox>
            </>
          );
        })}
    </FeedWrap>
  );
};

export default CatFeed;
