import styled from "styled-components";

export const SelectWrap = styled.section``;

export const BtnSelect = styled.button`
  display: block;
  width: 80px;
  height: 30px;
  font-family: "Shinb7Regular";
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
  background: url(../../assets/icons/icon-arrow-down.svg),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  background-repeat: no-repeat;
  background-position: right 5px center;
  /* 텍스트가 넘치지 않게 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UlOption = styled.ul`
  display: block;
  box-shadow: 4px 4px 14px rgb(0 0 0 / 15%);
  width: 78px;
  height: 100px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-top: 10px;
  padding: 2px 9px;
  background-color: transparent;
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
export const BtnOption = styled.button`
  width: 100%;
  text-align: left;
  font-size: 14px;
  padding: 7px 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;
