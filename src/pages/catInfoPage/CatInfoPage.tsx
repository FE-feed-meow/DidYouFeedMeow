import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

import Header from "../../components/header/Header";
import Button from "../../atoms/button/Button";

import CatInfo from "../../components/catInfo/CatInfo";
import CatFeed from "../../components/catFeed/CatFeed";
import CatFoodPageModal from "../../components/modal/catFoodPageModal/CatFoodPageModal";
import CatFeedNone from "../../components/catFeedNone/CatFeedNone";
import Loading from "../../components/loading/Loading";

export const Wrap = styled.div`
  padding: 15px 40px 37px;
`;

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

const CatInfoPage = () => {
  const [newFeedArray, setNewFeedArray] = React.useState<dates1[]>([]);

  const [onModal, setModal] = React.useState<boolean>(false);
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  const [feedList, setFeedList] = React.useState<Feed[]>([]);
  const token = localStorage.getItem("token");
  const { catid } = useParams();

  const [loading, setLoading] = React.useState<boolean>(true);
  const getFeedList = React.useCallback(async () => {
    const url = `https://mandarin.api.weniv.co.kr/post/${catid}/comments`;
    try {
      const res = await axios(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      setFeedList(res.data.comments);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [feedList]);
  // 현재 날짜
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const nowDate = `${year}-${month}-${date}`;

  const timeArray = () => {
    if (feedList) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < feedList.length; i++) {
        const time = new Date(feedList[i].createdAt);
        const newDate = `${time.getFullYear()}-${
          time.getMonth() + 1
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
  React.useEffect(() => {
    getFeedList();
  }, []);
  React.useEffect(() => {
    timeArray();
  }, [feedList]);

  const removeDuplicates = newFeedArray.filter(
    (arr, index, callback) =>
      index === callback.findIndex((t) => t.id === arr.id),
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Wrap>
            <CatInfo />
            {removeDuplicates.length > 0 &&
            removeDuplicates.filter((arr) => arr.date === nowDate).length >
              0 ? (
              <CatFeed
                feedList={feedList}
                removeDuplicates={removeDuplicates}
              />
            ) : (
              <CatFeedNone />
            )}
            <Button
              type="button"
              marginTop={15}
              bgColor="var(--main-color)"
              onClick={OpenModal}
            >
              밥 주기
            </Button>
            {onModal && <CatFoodPageModal CloseModal={CloseModal} />}
          </Wrap>
        </>
      )}
    </div>
  );
};

export default CatInfoPage;
