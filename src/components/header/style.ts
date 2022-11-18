import styled from "styled-components";

export const HeaderWrap = styled.div`
  height: 48px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 20px;
  &::after {
    content: "";
    display: block;
  }
  img {
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-family: "Shinb7Regular";
  margin-left: -24px;
`;
