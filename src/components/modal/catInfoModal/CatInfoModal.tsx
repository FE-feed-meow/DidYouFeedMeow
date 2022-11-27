import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import {
  ModalWrap,
  ArticleWrap,
  ModalCatImg,
  ModalCatInfoWrap,
  ModalCatNameWrap,
  ModalCatLocation,
  ModalCatFeedTime,
  CloseBtn
} from "./style";

const CatInfoModal = ({ data }: any) => {
  const token = localStorage.getItem("token");
  const API_URL = "https://mandarin.api.weniv.co.kr";

  const navigate = useNavigate();
  const [feedArr, setFeedArr] = React.useState<any>([]);

  // 가장 최근 밥 준 시간차이 계산
  const getTimeDifference = (time: any) => {
    const today = new Date();
    const feedTime = new Date(time);

    const betweenTime = Math.floor((today.getTime() - feedTime.getTime()) / 1000 / 60);
    if (betweenTime < 1) {
      return "방금 전";
    }
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  // 냥이 밥주기 데이터
  const getFeedInfo = async () => {
    await axios
      .get(`${API_URL}/post/${data.id}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
      .then((response) => {
        setFeedArr(response.data.comments)
      })
  }

  useEffect(() => {
    getFeedInfo();
  }, [])


  return (
    <ModalWrap>
      <ArticleWrap>
        <ModalCatImg src={data.img} alt="고양이 이미지" />
        <ModalCatInfoWrap>
          <ModalCatNameWrap>
            <h1>
              <span>{data.name}</span>에게 밥을 주세요!
            </h1>
            <button type='button' onClick={() => { navigate(`/catInfo/${data.id}`) }}>
              <img src="assets/icons/icon-arrow-right.svg" alt="화살표 버튼" />
            </button>
          </ModalCatNameWrap>
          <ModalCatLocation>{data.address}<span>{data.age}</span></ModalCatLocation>
          <ModalCatFeedTime>마지막 식사{feedArr.length > 0 ? `는 ${getTimeDifference(feedArr[0].createdAt)}` : "가 아직 없어요"}</ModalCatFeedTime>
        </ModalCatInfoWrap>
        <CloseBtn>
          <img src="assets/icons/icon-close.svg" alt="닫기 버튼" />
        </CloseBtn>
      </ArticleWrap>
    </ModalWrap>
  )
}

export default CatInfoModal
