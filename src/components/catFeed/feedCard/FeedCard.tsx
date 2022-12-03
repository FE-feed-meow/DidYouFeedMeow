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

interface authorProps {
  accountname: string;
}
interface FeedProps {
  feed: {
    id: string;
    content: string;
    date: string;
    author: authorProps;
  };
  feedAccountname: string;
}

const FeedCard = ({ feed, feedAccountname }: FeedProps) => {
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
  const accountname = localStorage.getItem("accountname");

  return (
    <>
      {onModal && (
        <DeleteModal
          CloseModal={CloseModal}
          feedId={feed.id}
          deleteState={deleteState}
        />
      )}

      <CardWrap>
        <FeedTime>{time}</FeedTime>
        <Feedinfo>
          <FeedName>{`${feedName} ${feedContent}`}</FeedName>
          <FeedEtc>{etc}</FeedEtc>
        </Feedinfo>
        <IconBox>
          {accountname === feedAccountname ? (
            <button type="button" onClick={OpenModal}>
              <Image
                width={19}
                height={19}
                alt="밥 지우기"
                src="../../../assets/icons/icon-delete.svg"
              />
            </button>
          ) : null}

        </IconBox>

      </CardWrap>
    </>
  );
};

export default FeedCard;
