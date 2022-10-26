import styled from "styled-components";

const SelectWrap = styled.section``;

const Title = styled.h4`
  font-family: "Shinb7Regular";
  font-size: 16px;
  margin-bottom: 8px;
`;

const BtnSelect = styled.button<{ width: number }>`
  display: block;
  width: ${(props) => props.width}px;
  height: 30px;
  color: #a5a5a5;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
  text-align: left;
  margin-bottom: 15px;
  background: linear-gradient(
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
  .clickOption {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const UlOption = styled.ul<{ width: number }>`
  position: absolute;
  display: block;
  padding: 2px 9px;
  width: ${(props) => props.width}px;
  height: 100px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  box-shadow: 4px 4px 14px rgb(0 0 0 / 15%);
  background-color: #fff;

  /* 스크롤바 설정 */
  overflow-y: scroll;
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
const BtnOption = styled.button`
  width: 100%;
  text-align: left;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
  padding: 5px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

export { SelectWrap, Title, BtnSelect, UlOption, BtnOption };
