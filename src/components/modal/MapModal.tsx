import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/button/Button'
import Inputs from '../../atoms/inputs/Inputs'

const MapModal = () => {
  return (
    <ArticleWrap>
      <p>
        경기도 하남시 미사강변중앙로 90
      </p>
      <Inputs
        width={330}
        placeholder={'상세 주소를 입력하세요'}
        type="text"
        required={true}/>
      <Button 
        className='catRegisterBtn'
        bgColor={'var(--disabled-button-color)'}
        hoverBgColor={'var(--main-color)'}>
        냥 등록하기
      </Button>
    </ArticleWrap>
  )
}

export default MapModal

const ArticleWrap = styled.article`
  position: absolute;
  top: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 260px;
  padding: 50px 30px;
  background-image: url('assets/images/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0 -4px 4px 0;
  p {
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 14px;
  }
  .catRegisterBtn {
    width: 100%;
  }
`