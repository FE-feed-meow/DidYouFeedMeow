import React from "react";
import styled from "styled-components";

import Image from "../../../atoms/image/Image";

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
`;

export const IconBox = styled.div`
  position: absolute;
  top: -3px;
  right: -25px;
`;

const FeedCard = () => {
  return (
    <CardWrap>
      <FeedTime>20:00</FeedTime>
      <Feedinfo>
        <FeedName>간식(츄르)</FeedName>
        <FeedEtc>몸이 안 좋은지 밥을 잘 먹지 못하네요..</FeedEtc>
      </Feedinfo>
      <IconBox>
        <button type="button">
          <Image
            width={19}
            height={19}
            alt=""
            src="assets/icons/icon-delete.svg"
          />
        </button>
      </IconBox>
    </CardWrap>
  );
};

export default FeedCard;
