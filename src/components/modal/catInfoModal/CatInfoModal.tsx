import React from 'react'
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


const CatInfoModal = () => {
  return (
    <ModalWrap>
      <ArticleWrap>
        <ModalCatImg src="assets/images/cat-sample.jpeg" alt="고양이 이미지" />
        <ModalCatInfoWrap>
          <ModalCatNameWrap>
            <h1><span>치즈</span>는 배고파요!</h1>
            <button type='button'>
              <img src="assets/icons/icon-arrow-right.svg" alt="화살표 버튼" />
            </button>
          </ModalCatNameWrap>
          <ModalCatLocation>경기도 하남시 미사강변중앙로 90<span>2살 추정</span></ModalCatLocation>
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
