import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
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
  const token = localStorage.getItem("token");

  const [selectTime, setSelectTime] = useState<string>("");
  const [feedName, setFeedName] = useState<string>("");
  const [onClickFood, setOnClickFood] = React.useState<boolean>(false);
  const [onClickWater, setOnClickWater] = React.useState<boolean>(false);
  const [onClickTreat, setOnClickTreat] = React.useState<boolean>(false);
  const [whatDidFood, setWhatDidFood] = useState<string>("");
  const [etc, setEtc] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(true);

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
    if (feedName === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
      setText(`${selectTime}/${feedName}/${whatDidFood}/${etc}`);
    }
  }, [selectTime, feedName, whatDidFood, etc]);

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
    setWhatDidFood(`(${e.target.value})`);
  };

  const handleEtc = (e: any) => {
    setEtc(e.target.value);
  };

  const { catid } = useParams();

  const handleSubmitFood = async () => {
    const url = `https://mandarin.api.weniv.co.kr/post/${catid}/comments`;
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
    } catch (err) {
      console.log(err);
    }

    CloseModal();
    window.location.reload();
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
            <CatFoodSubmitButton onClick={handleSubmitFood} disabled={disabled}>
              저장하기
            </CatFoodSubmitButton>
          </CatFoodWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default CatFoodPageModal;
