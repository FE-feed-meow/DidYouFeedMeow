import styled from "styled-components";

const ImgWrap = styled.div`
  margin-bottom: 30px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
    background-color: #b5b5b5;
    object-fit: contain;
  }
`;
const CatInfoWrap = styled.div`
  &::after {
    content: url(assets/images/dashedLine-xl.svg);
  }
`;

const CatNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconsBox = styled.div`
  margin-top: 10px;
`;

const CatName = styled.h2`
  font-family: "Shinb7Regular";
  font-size: 28px;
  margin-bottom: 15px;
  width: 150px;
  padding-left: 10px;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;
const CatLocation = styled.span`
  font-size: 14px;
  color: #797979;
  margin-bottom: 18px;
`;
const CatAge = styled.span`
  font-size: 14px;
  color: #797979;
`;

const CatDetail = styled.p`
  font-size: 14px;
  color: #373737;
  width: 100%;
  line-height: 22px;
  word-break: break-all;
  margin: 15px 0 23px;
`;
export {
  ImgWrap,
  CatInfoWrap,
  CatNameWrap,
  IconsBox,
  CatName,
  CatLocation,
  CatAge,
  CatDetail,
};
