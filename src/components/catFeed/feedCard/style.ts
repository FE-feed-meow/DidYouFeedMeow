import styled from "styled-components";

const CardWrap = styled.section`
  position: relative;
  width: 290px;
  margin-bottom: 26px;
  display: flex;
  align-items: flex-end;
`;

const FeedTime = styled.h2`
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 15px;
`;

const Feedinfo = styled.div`
  margin-left: 23px;
`;

const FeedName = styled.h3`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 5px;
`;

const FeedEtc = styled.p`
  font-size: 12px;
  color: #797979;
  width: 200px;
  height: 13px;
`;

const IconBox = styled.div`
  position: absolute;
  top: -3px;
  right: 0;
`;

export { CardWrap, FeedTime, Feedinfo, FeedName, FeedEtc, IconBox };
