import styled from "styled-components";

const H2 = styled.h2`
  font-size: 28px;
  font-family: "Shinb7Regular";
  margin: 30px 0;
`;

const Join = styled.button`
  display: block;
  margin-top: 20px;
  border: none;
  font-size: 12px;
  font-family: "SpoqaHanSansNeo-Regular";
`;

const ErrorMessage = styled.span`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 12px;
  color: red;
  position: relative;
  top: -14px;
`;

export { H2, Join, ErrorMessage };
