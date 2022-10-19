import React from "react";
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
  return (
    <>
      <Header />
      <Wrap>
        <CatInfo />
        <CatFeed />
        <Button marginTop={10} bgColor="var(--main-color)" onClick={OpenModal}>
          밥 주기
        </Button>
        {onModal && <CatFoodPageModal CloseModal={CloseModal} />}
      </Wrap>
    </>
  );
};

export default CatInfoPage;
