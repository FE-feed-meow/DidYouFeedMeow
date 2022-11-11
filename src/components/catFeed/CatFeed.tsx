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

  const newArray = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < feedList.length; i++) {
      const newItem = { id: i, date: feedList[i].createdAt.split("T")[0] };
      // console.log("newItem", newItem);
      setNewDateArray((arrays) => [...arrays, newItem]);
      // console.log("Array1", newDateArray);
    }
  };

  useEffect(() => {
    newArray();
  }, [feedList]);

  const result1 = newDateArray.filter(
    (arr, index, callback) =>
      index === callback.findIndex((loc) => loc.date === arr.date),
  );
  // console.log("result1", result1);
  // console.log("feedList", feedList);

  return (
    <FeedWrap>
      {result1.map((item) => {
        return (
          <>
            <DateTxt key={item.id}>{item.date}</DateTxt>
            <FeedBox>
              {feedList.length > 0
                ? feedList.map((feed) => {
                    return <FeedCard key={feed.id} feed={feed} />;
                  })
                : null}
              {/* <FeedCard feed={feedList} /> */}
            </FeedBox>
          </>
        );
      })}
      {/* <DateTxt>{result1}</DateTxt> */}

      {/* <FeedBox>
        {feedList.length > 0
          ? feedList.map((feed) => {
              return <FeedCard key={feed.id} feed={feed} />;
            })
          : null}
        {/* <FeedCard feed={feedList} /> 
      </FeedBox> */}
    </FeedWrap>
    // <FeedWrap>
    //   {feedList.length > 0
    //     ? feedList.map((feed) => {
    //         return <DateTxt key={feed.id}>{feed.createdAt}</DateTxt>;
    //       })
    //     : null}
    //   <FeedBox>
    //     {feedList.length > 0
    //       ? feedList.map((feed) => {
    //           return <FeedCard key={feed.id} feed={feed} />;
    //         })
    //       : null}

    //     {/* <FeedCard />
    //   <FeedCard /> */}
    //   </FeedBox>
    // </FeedWrap>
  );
};

export default CatFeed;
