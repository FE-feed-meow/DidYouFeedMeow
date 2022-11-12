import styled from "styled-components";

const FeedWrap = styled.section`
  padding: 37px 0 0;
  display: block;
`;

const FeedBox = styled.div`
  padding: 5px;
  width: 330px;
  height: 170px;
  overflow-y: auto;
  overflow-x: hidden;
  /* 스크롤바 설정 */
  &::-webkit-scrollbar {
    width: 9px;
  }
  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #373737;
    border-radius: 10px;
  }
  /* 스크롤바 뒷 배경 설정 */
  &::-webkit-scrollbar-track {
    background-color: #b5b5b5;
  }
`;

const DateTxt = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #373737;
  padding-bottom: 30px;
`;
export { FeedWrap, FeedBox, DateTxt };
