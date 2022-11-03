import axios from "axios";
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
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzk5OWIyODJmZGNjNzEyZjQzN2ExZiIsImV4cCI6MTY3MjY0NjYwNywiaWF0IjoxNjY3NDYyNjA3fQ.LIZswbAIK9Wk4aQZJpvrXs3udP5Cas7UjSm7iUtLHpA",
  );
  const token = localStorage.getItem("token");

  const [selectTime, setSelectTime] = useState<string>("");
  const [feedName, setFeedName] = useState<string>("");
  const [onClickFood, setOnClickFood] = React.useState<boolean>(false);
  const [onClickWater, setOnClickWater] = React.useState<boolean>(false);
  const [onClickTreat, setOnClickTreat] = React.useState<boolean>(false);
  const [whatDidFood, setWhatDidFood] = useState<string>("");
  const [etc, setEtc] = useState<string>("");

  const [text, setText] = useState<string>("");
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setSelectTime(`${hours}:${minutes}`);
  };
  const startTimer = () => {
    setTimeout(currentTimer, 1000);
  };

  const onChangeTime = useCallback((e: any) => {
    setSelectTime(e.target.value);
  }, []);

  useEffect(() => {
    startTimer();
  }, []);
  useEffect(() => {
    setText(`${selectTime}/${feedName}/${whatDidFood}/${etc}`);
  }, [selectTime, feedName, whatDidFood, etc]);

  // const onClickNowTime = () => {
  //   startTimer();
  //   setChangeTime(nowTime);
  // };

  // const handleFeedName = (e: any) => {
  //   setFeedName(e.target.value);
  //   console.log("feedName", feedName);
  // };

  /* 버튼 클릭 */
  const handleClickFood = () => {
    setOnClickFood(true);
    setOnClickWater(false);
    setOnClickTreat(false);
    setFeedName("밥");
  };

  const handleClickWater = () => {
    setOnClickFood(false);
    setOnClickWater(true);
    setOnClickTreat(false);
    setFeedName("물");
  };

  const handleClickTreat = () => {
    setOnClickFood(false);
    setOnClickWater(false);
    setOnClickTreat(true);
    setFeedName("간식");
  };

  const handleFood = (e: any) => {
    setWhatDidFood(e.target.value);
  };

  const handleEtc = (e: any) => {
    setEtc(e.target.value);
  };

  const postId = "62e0054a17ae6665819ebcaf";

  const handleSubmitFood = async () => {
    console.log("text", text);
    const url = `https://mandarin.api.weniv.co.kr/post/${postId}/comments`;
    const comment = {
      comment: {
        content: text,
      },
    };

    try {
      const res = await axios(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        data: comment,
      });
      console.log("data:", res.data.comment);
    } catch (err) {
      console.log(err);
    }
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
              defaultValue={selectTime}
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
              onChange={handleEtc}
            />
            <CatFoodSubmitButton onClick={handleSubmitFood}>
              저장하기
            </CatFoodSubmitButton>
          </CatFoodWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatFoodPageModal;
