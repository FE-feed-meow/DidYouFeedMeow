import styled from "styled-components";

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 25, 0.8);
  z-index: 100;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TutorCloseBtn = styled.button`
  position: absolute;
  top: 90px;
  right: 80px;
  z-index: 100;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

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

export { ModalBg, TutorCloseBtn, H2, Join, ErrorMessage };
