import React, { useCallback, useEffect, useState } from "react";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import { ModalArea, ModalMain, ModalWrap } from "../style";

import {
  CatFoodWrap,
  CatFoodTitle,
  CatFoodTimeInput,
  CatFoodButtonArea,
  CatFoodButton,
  CatFoodButtonWrap,
  CatFeedImage,
  CatFoodInput,
  CatFoodSubmitButton,
} from "./style";

interface Props {
  CloseModal: () => void;
}

const CatFoodPageModal = ({ CloseModal }: Props) => {
  const [onClickFood, setOnClickFood] = React.useState<boolean>(false);
  const [onClickWater, setOnClickWater] = React.useState<boolean>(false);
  const [onClickTreat, setOnClickTreat] = React.useState<boolean>(false);
  const [WhatDidFood, setWhatDidFood] = useState("");

  const [nowTime, setNowTime] = useState("");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setNowTime(`${hours}:${minutes}`);
  };
  const startTimer = () => {
    setTimeout(currentTimer, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  // const onClickNowTime = () => {
  //   startTimer();
  //   setChangeTime(nowTime);
  // };

  const onChangeTime = useCallback((e: any) => {
    setNowTime(e.target.value);
  }, []);

  /* 버튼 클릭 */
  const handleClickFood = () => {
    setOnClickFood(true);
    setOnClickWater(false);
    setOnClickTreat(false);
  };

  const handleClickWater = () => {
    setOnClickFood(false);
    setOnClickWater(true);
    setOnClickTreat(false);
  };

  const handleClickTreat = () => {
    setOnClickFood(false);
    setOnClickWater(false);
    setOnClickTreat(true);
  };

  const handleFood = (e: any) => {
    setWhatDidFood(e.target.value);
  };

  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn CloseModal={CloseModal} />
        <ModalWrap>
          <CatFoodWrap>
            <CatFoodTitle>시간</CatFoodTitle>
            <CatFoodTimeInput
              type="time"
              defaultValue={nowTime}
              placeholder="시간"
              onChange={onChangeTime}
            />
            {/* <CatNowTimeButton onClick={onClickNowTime}>
              현재 시간
            </CatNowTimeButton> */}

            <CatFoodTitle>어떤 것을 주셨나요?</CatFoodTitle>
            <CatFoodButtonArea>
              <CatFoodButtonWrap>
                {onClickFood === false ? (
                  <CatFeedImage
                    src="/assets/icons/icon-feed.svg"
                    onClick={handleClickFood}
                    alt=""
                  />
                ) : (
                  <CatFeedImage src="/assets/icons/icon-feed-fill.svg" alt="" />
                )}

                <CatFoodButton
                  onClick={handleClickFood}
                  ClickState={onClickFood}
                >
                  밥
                </CatFoodButton>
              </CatFoodButtonWrap>
              <CatFoodButtonWrap>
                {onClickWater === false ? (
                  <CatFeedImage
                    src="/assets/icons/icon-water.svg"
                    alt=""
                    onClick={handleClickWater}
                  />
                ) : (
                  <CatFeedImage
                    src="/assets/icons/icon-water-fill.svg"
                    alt=""
                  />
                )}

                <CatFoodButton
                  onClick={handleClickWater}
                  ClickState={onClickWater}
                >
                  물
                </CatFoodButton>
              </CatFoodButtonWrap>
              <CatFoodButtonWrap>
                {onClickTreat === false ? (
                  <CatFeedImage
                    src="/assets/icons/icon-treat.svg"
                    alt=""
                    onClick={handleClickTreat}
                  />
                ) : (
                  <CatFeedImage
                    src="/assets/icons/icon-treat-fill.svg"
                    alt=""
                  />
                )}

                <CatFoodButton
                  onClick={handleClickTreat}
                  ClickState={onClickTreat}
                >
                  간식
                </CatFoodButton>
              </CatFoodButtonWrap>
            </CatFoodButtonArea>
            <CatFoodInput
              type="text"
              maxLength={15}
              placeholder="15자 이내여야 합니다."
              onChange={handleFood}
            />
            <CatFoodTitle>특이사항</CatFoodTitle>
            <CatFoodInput
              type="text"
              maxLength={15}
              placeholder="15자 이내여야 합니다."
            />
            <CatFoodSubmitButton>저장하기</CatFoodSubmitButton>
          </CatFoodWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatFoodPageModal;
