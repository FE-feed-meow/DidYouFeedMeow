import React from 'react'
import Button from '../../../atoms/button/Button'
import Inputs from '../../../atoms/inputs/Inputs'
import { ArticleWrap } from './style'

const MapModal = () => {
  return (
    <ArticleWrap>
      <p>
        경기도 하남시 미사강변중앙로 90
      </p>
      <Inputs
        width={330}
        placeholder='상세 주소를 입력하세요'
        type="text"
        required={true}/>
      <Button 
        onClick={() => {window.location.href = '/addCat'}}
        className='catRegisterBtn'
        bgColor={'var(--disabled-button-color)'}
        hoverBgColor={'var(--main-color)'}>
        냥 등록하기
      </Button>
    </ArticleWrap>
  )
}

export default MapModal