import Header from "@components/header/Header";
import React from "react";
import { Link } from "react-router-dom";
import { NewsWrap, NewsTitle, NewsList, NewsItem, NewsCatImg, NewsItemSpan, PointColor } from './style'

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
