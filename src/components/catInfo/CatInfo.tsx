import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/Image";
import Icon from "../../atoms/icon/Icon";

export const ImgWrap = styled.div`
  margin-bottom: 30px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
export const CatInfoWrap = styled.div`
  &::after {
    content: url(assets/images/dashedLine-xl.svg);
  }
`;

export const CatNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconsBox = styled.div`
  margin-top: 10px;
`;

export const CatName = styled.h2`
  font-family: "Shinb7Regular";
  font-size: 32px;
  margin-bottom: 15px;
  width: 59px;
  padding-left: 10px;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;
export const CatLocation = styled.p`
  font-size: 12px;
  color: #797979;
  margin-bottom: 18px;
`;

export const CatDetail = styled.p`
  font-size: 14px;
  color: #373737;
  width: 100%;
  line-height: 22px;
  word-break: break-all;
  margin-bottom: 23px;
`;

const CatInfo = () => {
  return (
    <CatInfoWrap>
      <ImgWrap>
        <Image src="assets/images/cat-sample.jpeg" alt="고양이 사진" />
      </ImgWrap>
      <CatNameWrap>
        <CatName> 치즈</CatName>
        <IconsBox>
          <button type="button">
            <Icon
              width={19}
              height={19}
              alt=""
              src="assets/icons/icon-correction.svg"
            />
          </button>
          <a href="#none">
            <Icon
              width={19}
              height={19}
              alt=""
              src="assets/icons/icon-delete.svg"
            />
          </a>
        </IconsBox>
      </CatNameWrap>

      <CatLocation>경기도 의정부시 체육로 300-1 / 2살 추정</CatLocation>
      <CatDetail>
        치즈는 우리 동네 주황색 고양이인 삼색이의 아내 고양이입니다. 새끼
        고양이를 두마리 낳았던 경험이 있어요. 잠을 많이 자고, 물 마시기를
        좋아합니다. 우리 치즈 잘 부탁드려요!
      </CatDetail>
    </CatInfoWrap>
  );
};

export default CatInfo;
