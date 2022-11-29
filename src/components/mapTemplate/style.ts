import styled from "styled-components";

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 40;
  border-radius: 30px;
`;

const PlusBtn = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 723px;
  right: 40px;
  z-index: 2;
`;

export { MapWrapper, ModalBg, PlusBtn };
