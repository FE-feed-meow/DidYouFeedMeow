import styled from "styled-components";

const MarkerText = styled.small`
  font-size: 12px;
  font-family: "SpoqaHanSansNeo-Regular";
  text-align: center;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 40;
`;

export { MarkerText, ModalBg };
