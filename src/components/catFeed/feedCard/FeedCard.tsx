import React from "react";
import {
  CardWrap,
  FeedTime,
  Feedinfo,
  FeedName,
  FeedEtc,
  IconBox,
} from "./style";

import Image from "../../../atoms/image/Image";
import DeleteModal from "../../modal/deleteModal/DeleteModal";

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
            src="../../../assets/icons/icon-delete.svg"
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
