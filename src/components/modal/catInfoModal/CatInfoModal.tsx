import React from 'react'
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();

  // charCodeAt 메소드를 사용하여 유니코드 문자로 변환
  // 마지막 글자의 받침 유무 비교
  const lastChar = data.name.charCodeAt(data.name.length - 1);
  const isThereLastChar = (lastChar - 0xac00) % 28;

  return (
    <ModalWrap>
      <ArticleWrap>
        <ModalCatImg src={data.img} alt="고양이 이미지" />
        <ModalCatInfoWrap>
          <ModalCatNameWrap>
            <h1>
              <span>{data.name}</span>
              {isThereLastChar ? '은' : '는'} 배고파요!
            </h1>
            <button type='button' onClick={() => { navigate(`/catInfo/${data.id}`) }}>
              <img src="assets/icons/icon-arrow-right.svg" alt="화살표 버튼" />
            </button>
          </ModalCatNameWrap>
          <ModalCatLocation>{data.address}<span>{data.age}</span></ModalCatLocation>
          <ModalCatFeedTime>마지막 식사 시간은 7시</ModalCatFeedTime>
        </ModalCatInfoWrap>
        <CloseBtn>
          <img src="assets/icons/icon-close.svg" alt="닫기 버튼" />
        </CloseBtn>
      </ArticleWrap>
    </ModalWrap>
  )
}

export default CatInfoModal
