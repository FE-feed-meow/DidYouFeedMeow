import styled from "styled-components";

const ItemWrap = styled.div`
  margin: 45px 38px;
  background-color: rgba(255, 255, 255, 0.5);
  font-family: "Shinb7Regular";
  width: 314px;
  height: 500px;
  padding: 0px 35px;
`;

const ItemTitle = styled.h1`
  font-size: 18px;
  padding-top: 25px;
  color: #000000;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const ItemTextarea = styled.p`
  margin-top: 30px;
  border: none;
  background-color: transparent;
  width: 240px;
  line-height: 20px;
  font-size: 16px;
`;

export { ItemWrap, ItemTitle, ItemTextarea };
