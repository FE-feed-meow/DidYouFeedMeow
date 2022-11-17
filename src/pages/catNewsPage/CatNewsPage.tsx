import Header from "@components/header/Header";
import React from "react";
import { Link } from "react-router-dom";
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
  margin-left: 15px;
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
  margin-left: 15px;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const CatNewsPage = () => {
  return (
    <>
      <Header />
      <NewsWrap>
        <NewsTitle>밥줬냥 신문</NewsTitle>
        <NewsList>
          <NewsItem>
            <NewsCatImg src="../assets/images/logo.svg" alt="고양이" />
            <Link to="/news/1">
              <PointColor>동네 고양이의 중성화 여부가 궁금하다면?</PointColor>
            </Link>
          </NewsItem>
          <NewsItem>
            <NewsCatImg src="../assets/images/logo.svg" alt="고양이" />
            <NewsItemSpan>집 근처 동네고양이를 만나고싶다면?</NewsItemSpan>
          </NewsItem>
          <NewsItem>
            <NewsCatImg src="../assets/images/logo.svg" alt="고양이" />
            <NewsItemSpan>길고양이 급식소, 시민단체와 함께해요!</NewsItemSpan>
          </NewsItem>
          <NewsItem>
            <NewsCatImg src="../assets/images/logo.svg" alt="고양이" />
            <NewsItemSpan>
              한국동물보호협회와 함께하는 자원봉사가 궁금해?
            </NewsItemSpan>
          </NewsItem>
        </NewsList>
      </NewsWrap>
    </>
  );
};

export default CatNewsPage;
