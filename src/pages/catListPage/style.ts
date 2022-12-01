import styled from "styled-components";

const Title = styled.h1`
  font-size: 28px;
  font-family: "Shinb7Regular";
  text-align: center;
  margin-bottom: 30px;
  padding-top: 15px;
`;

const CatListWrap = styled.ul`
  position: relative;
  max-height: 666px;
  overflow-y: auto;
  padding: 0 40px;
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
    border-radius: 10px;
  }
`;

const InitCatListWrap = styled(CatListWrap)`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  img {
    width: 116px;
    height: 82px;
    margin-bottom: 40px;
  }
  p {
    font-family: "Shinb7Regular";
    font-size: 24px;
    color: #373737;
  }
`;

const Catlist = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  div {
    margin-right: 6px;
  }
  &::after {
    content: url(../assets/images/dashedLine-xl.svg);
    display: block;
    position: absolute;
    left: 42px;
    transform: translateY(70px);
  }
  &:last-of-type::after {
    content: "";
  }
`;

const CatName = styled.h2`
  display: inline-block;
  font-size: 26px;
  font-family: "Shinb7Regular";
  margin-bottom: 16px;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const CatBirth = styled.p`
  font-size: 12px;
  font-family: "SpoqaHanSansNeo-Regular";
  color: #767676;
  margin-bottom: 4px;
`;

const CatAddress = styled.p`
  font-size: 12px;
  font-family: "SpoqaHanSansNeo-Regular";
  color: #767676;
  word-break: break-all;
`;

const CatImg = styled.img`
  width: 120px;
  min-width: 114px;
  height: 84px;
  border-radius: 10px;
  object-fit: cover;
`;

export {
  InitCatListWrap,
  Catlist,
  CatName,
  CatAddress,
  CatBirth,
  CatImg,
  Title,
  CatListWrap,
};
