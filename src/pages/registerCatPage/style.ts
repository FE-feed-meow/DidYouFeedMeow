import styled from "styled-components";

const Title = styled.h1`
  font-size: 28px;
  font-family: "Shinb7Regular";
  text-align: center;
  padding-top: 15px;
`;

const CatImgWrap = styled.div`
  margin: 0px auto 33px;
  position: relative;
`;

const CatImg = styled.img`
  width: 100%;
  height: 146px;
  border-radius: 20px;
  background-color: #b5b5b5;
  object-fit: contain;
`;

const UploadImgIcon = styled.label`
  width: 30px;
  height: 30px;
  bottom: 12px;
  right: 12px;
  position: absolute;
  background-image: url(assets/icons/icon-plus-small.svg);
  cursor: pointer;
`;

const UploadImgInput = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  padding: 0;
`;

const SubTxt = styled.h2`
  text-align: left;
  font-family: "Shinb7Regular";
  font-size: 16px;
  margin-bottom: 20px;
`;
const Article = styled.article`
  position: relative;
  width: 100%;
  min-width: 300px;
  padding: 46px 40px 50px;
`;
const TitAdress = styled.p`
  font-family: "Shinb7Regular";
  font-size: 18px;
  margin-bottom: 8px;
`;

const DivAdress = styled.p`
  display: block;
  width: 100%;
  height: 20px;
  color: #000;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
  margin-bottom: 23px;
  padding: 0 9px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 70%,
    rgba(0, 0, 0, 0) 70%
  );
  background-repeat: no-repeat;
  background-position: right 5px center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 143px;
  font-size: 14px;
  font-family: "Spoqa Han Sans Neo";
  padding: 10px;
  resize: none;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  &::placeholder {
    color: var(--disabled-button-color);
  }
`;

export {
  Title,
  CatImgWrap,
  CatImg,
  UploadImgIcon,
  UploadImgInput,
  SubTxt,
  TitAdress,
  DivAdress,
  CatBox,
  Article,
  Textarea,
};
