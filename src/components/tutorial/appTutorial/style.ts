import styled from "styled-components";

const AppTutorWrap = styled.div`
  position: absolute;
  top: 0;
  z-index: 30;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 40;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TutorialImg = styled.img`
  width: 390px;
  height: 820px;
  border-radius: 30px;
`;

export { AppTutorWrap, TutorialImg, CloseBtn };
