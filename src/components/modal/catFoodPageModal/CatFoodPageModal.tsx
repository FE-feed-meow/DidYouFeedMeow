import React from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import { ModalArea, ModalMain, ModalWrap } from "../style";

import {
  CatFoodWrap,
  CatFoodTitle,
  CatFoodTimeInput,
  CatNowTimeButton,
  CatFoodButtonArea,
  CatFoodButton,
  CatFoodButtonWrap,
  CatFeedButton,
  CatFeedImage,
  CatFoodInput,
  CatFoodSubmitButton,
} from "./style";

const CatFoodPageModal = () => {
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn />
        <ModalWrap>
          <CatFoodWrap>
            <CatFoodTitle>시간</CatFoodTitle>
            <CatFoodTimeInput placeholder="시" />
            <CatFoodTimeInput placeholder="분" />
            <CatNowTimeButton>현재 시간</CatNowTimeButton>
            {/* <CatFoodTimeSelect>
              <option value="시">시</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </CatFoodTimeSelect>
            <CatFoodTimeSelect>
              <option value="분">분</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </CatFoodTimeSelect> */}
            <CatFoodTitle>어떤 것을 주셨나요?</CatFoodTitle>
            <CatFoodButtonArea>
              <CatFoodButtonWrap>
                <CatFeedImage src="/assets/icons/icon-feed.svg" alt="" />
                <CatFeedButton>밥</CatFeedButton>
              </CatFoodButtonWrap>
              <CatFoodButtonWrap>
                <CatFeedImage src="/assets/icons/icon-water.svg" alt="" />
                <CatFoodButton>물</CatFoodButton>
              </CatFoodButtonWrap>
              <CatFoodButtonWrap>
                <CatFeedImage src="/assets/icons/icon-treat.svg" alt="" />
                <CatFoodButton>간식</CatFoodButton>
              </CatFoodButtonWrap>
            </CatFoodButtonArea>
            <CatFoodInput placeholder="2-15자 이내여야 합니다." />
            <CatFoodTitle>특이사항</CatFoodTitle>
            <CatFoodInput placeholder="2-15자 이내여야 합니다." />
            <CatFoodSubmitButton>저장하기</CatFoodSubmitButton>
          </CatFoodWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatFoodPageModal;
