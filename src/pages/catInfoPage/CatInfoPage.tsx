import React from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../../components/header/Header";
import Button from "../../atoms/button/Button";

import CatInfo from "../../components/catInfo/CatInfo";
import CatFeed from "../../components/catFeed/CatFeed";
import CatFoodPageModal from "../../components/modal/catFoodPageModal/CatFoodPageModal";

export const Wrap = styled.div`
  padding: 15px 40px 37px;
`;

const CatInfoPage = () => {
  const [onModal, setModal] = React.useState<boolean>(false);
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  const [feedList, setFeedList] = React.useState<[]>([]);
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzk5OWIyODJmZGNjNzEyZjQzN2ExZiIsImV4cCI6MTY3MjY0NjYwNywiaWF0IjoxNjY3NDYyNjA3fQ.LIZswbAIK9Wk4aQZJpvrXs3udP5Cas7UjSm7iUtLHpA",
  );
  const token = localStorage.getItem("token");

  const getFeedList = React.useCallback(async () => {
    const postId = "62e0054a17ae6665819ebcaf";

    const url = `https://mandarin.api.weniv.co.kr/post/${postId}/comments`;
    try {
      const res = await axios(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      setFeedList(res.data.comments);
    } catch (err) {
      console.log(err);
    }
  }, [feedList]);

  React.useEffect(() => {
    getFeedList();
  }, []);
  return (
    <>
      <Header />
      <Wrap>
        <CatInfo />
        <CatFeed feedList={feedList} />
        <Button marginTop={15} bgColor="var(--main-color)" onClick={OpenModal}>
          밥 주기
        </Button>
        {onModal && <CatFoodPageModal CloseModal={CloseModal} />}
      </Wrap>
    </>
  );
};

export default CatInfoPage;
