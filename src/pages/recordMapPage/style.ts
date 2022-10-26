import styled from "styled-components";

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 10;
`;

const PlusBtn = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 723px;
  right: 40px;
  z-index: 10;
`;

const MenuBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  img {
    vertical-align: middle;
  }
`;

export { MapWrapper, ModalBg, PlusBtn, MenuBtn };
