import styled from "styled-components";

const NewsWrap = styled.div`
  font-family: "Shinb7Regular";
  padding: 40px;
`;

const NewsTitle = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const NewsList = styled.ul`
  margin-top: 58px;
`;
const NewsItem = styled.li`
  margin-bottom: 45px;
`;

const NewsCatImg = styled.img`
  width: 40px;
  height: 30px;
  vertical-align: -12px;
`;

const NewsItemSpan = styled.span`
  margin-left: 13px;
  &:hover,
  :focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const PointColor = styled.span`
  margin-left: 13px;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

export {
  NewsWrap,
  NewsTitle,
  NewsList,
  NewsItem,
  NewsCatImg,
  NewsItemSpan,
  PointColor,
};
