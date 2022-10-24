import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  font-family: "Shinb7Regular";
  text-align: center;
  padding-top: 15px;
`;

export const CatImgWrap = styled.div`
  margin: 0px auto 33px;
  position: relative;
`;

export const CatImg = styled.img`
  width: 100%;
  height: 146px;
  border-radius: 20px;
`;

export const UploadImgIcon = styled.label`
  width: 30px;
  height: 30px;
  bottom: 12px;
  right: 12px;
  position: absolute;
  background-image: url(assets/icons/icon-plus-small.svg);
  cursor: pointer;
`;

export const UploadImgInput = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  padding: 0;
`;

export const SubTxt = styled.h2`
  text-align: left;
  font-family: "Shinb7Regular";
  font-size: 16px;
  margin-bottom: 20px;
`;
export const Article = styled.article`
  position: relative;
  width: 100%;
  min-width: 300px;
  padding: 46px 40px 50px;
`;

export const Textarea = styled.textarea`
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
