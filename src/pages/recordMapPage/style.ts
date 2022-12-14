import styled from "styled-components";

const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 40;
  border-radius: 30px;
`;

export default ModalBg;
