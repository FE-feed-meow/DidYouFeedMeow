import styled from "styled-components";

const Wrapper = styled.div`
  height: 754px;
  padding: 0 40px;
  overflow-y: scroll;
  /* 스크롤바 설정 */
  &::-webkit-scrollbar {
    width: 7px;
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

const ItemWrap = styled.article`
  font-family: "SpoqaHanSansNeo-Regular";
  &::after {
    content: url("../assets/images/dashedLine-xl.svg");
    display: block;
    margin: 30px 0;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 24px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserName = styled.h1`
  font-size: 22px;
  font-family: "Shinb7Regular";
  margin-bottom: 4px;
`;

const UserAddress = styled.p`
  font-size: 12px;
  color: #797979;
`;

const ItemContents = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
`;

const ItemContentsImg = styled.img`
  width: 300px;
  height: 260px;
  object-fit: fill;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const LikeIcon = styled.span`
  font-size: 14px;
  margin-right: 20px;
  &::before {
    content: url("../assets/icons/icon-heart.svg");
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
`;

const CommentIcon = styled.span`
  font-size: 14px;
  &::before {
    content: url("../assets/icons/icon-message.svg");
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
`;

export {
  Wrapper,
  ItemWrap,
  ProfileWrap,
  UserImg,
  UserName,
  UserAddress,
  ItemContents,
  ItemContentsImg,
  LikeIcon,
  CommentIcon,
};
