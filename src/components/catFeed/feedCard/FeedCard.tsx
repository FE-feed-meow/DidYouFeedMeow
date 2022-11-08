import React from "react";
import styled from "styled-components";

import Image from "../../../atoms/image/Image";
import DeleteModal from "../../modal/deleteModal/DeleteModal";

export const CardWrap = styled.section`
  position: relative;
  width: 290px;
  margin-bottom: 26px;
  display: flex;
  align-items: flex-end;
`;

export const FeedTime = styled.h2`
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 15px;
`;

export const Feedinfo = styled.div`
  margin-left: 23px;
`;

export const FeedName = styled.h3`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 5px;
`;

export const FeedEtc = styled.p`
  font-size: 12px;
  color: #797979;
  width: 200px;
  height: 13px;
`;

export const IconBox = styled.div`
  position: absolute;
  top: -3px;
  right: 0;
`;
interface FeedProps {
  feed: {
    id: string;
    content: string;
    createdAt: string;
    author: string;
  };
}
const FeedCard = ({ feed }: FeedProps) => {
  const [onModal, setModal] = React.useState<boolean>(false);
  const [deleteState, setDeleteState] = React.useState<boolean>(false);

  const OpenModal = () => {
    setModal(true);
    setDeleteState(true);
  };
  const CloseModal = () => {
    setModal(false);
    setDeleteState(false);
  };

  const test = feed.content.split("/");
  const time = test[0];
  const feedName = test[1];
  const feedContent = test[2];
  const etc = test[3];
  return (
    <CardWrap>
      <FeedTime>{time}</FeedTime>
      <Feedinfo>
        <FeedName>{`${feedName} ${feedContent}`}</FeedName>
        <FeedEtc>{etc}</FeedEtc>
      </Feedinfo>
      <IconBox>
        <button type="button" onClick={OpenModal}>
          <Image
            width={19}
            height={19}
            alt="밥 지우기"
            src="assets/icons/icon-delete.svg"
          />
        </button>
        {onModal && (
          <DeleteModal
            CloseModal={CloseModal}
            feedId={feed.id}
            deleteState={deleteState}
          />
        )}
      </IconBox>
    </CardWrap>
  );
};

export default FeedCard;
