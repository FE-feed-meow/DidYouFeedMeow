import React, { useEffect, useState } from "react";
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

interface Props {
  CloseModal: () => void;
}

const CatFoodPageModal = ({ CloseModal }: Props) => {
  const [onClickFood, setOnClickFood] = React.useState<boolean>(false);
  const [onClickWater, setOnClickWater] = React.useState<boolean>(false);
  const [onClickTreat, setOnClickTreat] = React.useState<boolean>(false);
  const [WhatDidFood, setWhatDidFood] = useState("");

  const [timeHour, setTimeHour] = useState("");
  const [timeMinutes, setTimeMinutes] = useState("");

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const [nowHour, setNowHour] = useState(hours);
  const [nowMinutes, setNowMinutes] = useState(minutes);
  const [changeHour, setChangeHour] = useState("");
  const [changeMinutes, setChangeMinutes] = useState("");

  const currentTimer = () => {
    setTimeHour(nowHour);
    setTimeMinutes(nowMinutes);
    console.log("timeHour", timeHour);
    console.log("timeMinutes", timeMinutes);
    console.log("1", nowHour);
    console.log("2", nowMinutes);
    // setTimeout(currentTimer, 1000);
  };
  // const startTimer = () => {
  //   setTimeout(currentTimer, 1000);
  // };
  // startTimer();
  // console.log("nowHour", nowHour);

  const handleChangeTime = (e: any) => {
    setChangeHour(e.target.value);
  };
  const handleChangeMinutes = (e: any) => {
    setChangeMinutes(e.target.value);
  };

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

  const nameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]{2,15}$/;

  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn CloseModal={CloseModal} />
        <ModalWrap>
          <CatFoodWrap>
            <CatFoodTitle>시간</CatFoodTitle>
            <CatFoodTimeInput
              placeholder="시"
              min="1"
              max="24"
              onChange={handleChangeTime}
              defaultValue={timeHour ?? timeHour}
            />
            <CatFoodTimeInput
              placeholder="분"
              min="1"
              max="59"
              onChange={handleChangeMinutes}
              key={timeMinutes}
              defaultValue={timeMinutes ?? timeMinutes}
            />
            <CatNowTimeButton onClick={currentTimer}>
              현재 시간
            </CatNowTimeButton>
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
              maxLength={14}
              placeholder="2-15자 이내여야 합니다."
              onChange={handleFood}
            />
            <CatFoodTitle>특이사항</CatFoodTitle>
            <CatFoodInput
              type="text"
              maxLength={15}
              placeholder="2-15자 이내여야 합니다."
            />
            <CatFoodSubmitButton>저장하기</CatFoodSubmitButton>
          </CatFoodWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatFoodPageModal;
