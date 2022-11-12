import React, { useEffect } from "react";
import { FeedWrap, FeedBox, DateTxt } from "./style";
import FeedCard from "./feedCard/FeedCard";

interface Feed {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

interface FeedProps {
  feedList: Feed[];
  // feedList: {
  //   id: string;
  //   content: string;
  //   createdAt: string;
  //   author: string;
  // };
}

const CatFeed = ({ feedList }: FeedProps) => {
  type dates = { id: number; date: string };
  const [newDateArray, setNewDateArray] = React.useState<dates[]>([]);

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
      console.log("Array1", newDateArray);
    }
  };

  useEffect(() => {
    newArray();
  }, [feedList]);

  const result1 = newDateArray.filter(
    (arr, index, callback) =>
      index === callback.findIndex((loc) => loc.date === arr.date),
  );

  return (
    <FeedWrap>
      {result1
        .filter((item) => item.date === nowDate)
        .map((item) => {
          return (
            <>
              <DateTxt key={item.id}>{item.date}</DateTxt>
              <FeedBox>
                {feedList.length > 0
                  ? feedList
                      .filter((arr) => arr.createdAt.split("T")[0] === nowDate)
                      .map((feed) => {
                        return <FeedCard key={feed.id} feed={feed} />;
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
