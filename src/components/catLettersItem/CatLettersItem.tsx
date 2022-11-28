import React from 'react'
import Header from '@components/header/Header'
import { Wrapper, ItemWrap, ProfileWrap, UserImg, UserName, UserAddress, ItemContents, ItemContentsImg, LikeIcon, CommentIcon } from './style';

const CatLettersItem = () => {
  return (
    <>
      <Header>의정부시 호원동</Header>
      <Wrapper>
        <ItemWrap>
          <ProfileWrap>
            <UserImg src="../assets/images/profile.svg" alt="프로필 사진" />
            <div>
              <UserName>쯔쯔언니</UserName>
              <UserAddress>경기도 의정부시</UserAddress>
            </div>
          </ProfileWrap>
          <ItemContents>호원동 놀이터 고양이 요즘 안보이던데 근황아시는 분 계신가요? 구내염도 심하던데 밥은 잘 먹고 다니는지 걱정돼요 ㅠㅠ 이 고양이 보신 분 계시면 댓글 꼭 남겨주세요!</ItemContents>
          <ItemContentsImg src="../assets/images/cat-sample-img.jpeg" alt="고양이 사진" />
          <LikeIcon>24</LikeIcon>
          <CommentIcon>8</CommentIcon>
        </ItemWrap>
        <ItemWrap>
          <ProfileWrap>
            <UserImg src="../assets/images/profile.svg" alt="프로필 사진" />
            <div>
              <UserName>봉국언니</UserName>
              <UserAddress>경기도 부천시</UserAddress>
            </div>
          </ProfileWrap>
          <ItemContents>츄르 무나합니다💛</ItemContents>
          <ItemContentsImg src="../assets/images/cat-sample-img2.jpeg" alt="고양이 사진" />
          <LikeIcon>12</LikeIcon>
          <CommentIcon>20</CommentIcon>
        </ItemWrap>
      </Wrapper>
    </>
  )
}

export default CatLettersItem
