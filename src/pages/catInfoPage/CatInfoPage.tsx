import React from "react";
import styled from "styled-components";

import Header from "../../components/header/Header";
import Button from "../../atoms/button/Button";

import CatInfo from "../../components/catInfo/CatInfo";
import CatFeed from "../../components/catFeed/CatFeed";

export const Wrap = styled.div`
  padding: 15px 40px 37px;
`;

const CatInfoPage = () => {
  return (
    <>
      <Header />
      <Wrap>
        <CatInfo />
        <CatFeed />
        <Button marginTop={10} bgColor="var(--main-color)">
          밥 주기
        </Button>
      </Wrap>
    </>
  );
};

export default CatInfoPage;
