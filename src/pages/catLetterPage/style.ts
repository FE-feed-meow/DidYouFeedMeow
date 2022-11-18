import styled from "styled-components";

const LetterWrap = styled.div`
  font-family: "Shinb7Regular";
  text-align: center;
`;

const LetterTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const LetterAddress = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const LetterList = styled.ul`
  padding: 0 40px;
  height: 666px;
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

const LetterItem = styled.li`
  cursor: pointer;
  position: relative;
  height: 146px;
  margin-bottom: 40px;
  padding: 16px 30px;
  background-color: #e3e3e3;
  &::after {
    content: url("assets/images/cat-face.svg");
    display: block;
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LetterItemGrey = styled(LetterItem)`
  color: #fff;
  background-color: #515151;
  &::after {
    content: url("assets/images/cat-face-white.svg");
  }
`;

const LetterItemBeige = styled(LetterItem)`
  background-color: #d1c7b3;
  &::after {
    content: url("assets/images/cat-face-white.svg");
  }
`;

const LetterItemMix = styled(LetterItem)`
  background: linear-gradient(180deg, #e3e3e3 36.333333%, #515151 33.333333%);
  &::after {
    content: url("assets/images/cat-face-white.svg");
  }
`;

const LetterItemName = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 8px solid black;
`;

export {
  LetterWrap,
  LetterTitle,
  LetterAddress,
  LetterList,
  LetterItem,
  LetterItemGrey,
  LetterItemBeige,
  LetterItemMix,
  LetterItemName,
};
