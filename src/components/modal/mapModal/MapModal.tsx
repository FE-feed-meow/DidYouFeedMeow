import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../../atoms/button/Button'
import Inputs from '../../../atoms/inputs/Inputs'
import ArticleWrap from './style'

const MapModal = ({ address, curAddress }: any) => {
  const [detailAdd, setDetailAdd] = useState();
  const onChange = (e: any) => {
    setDetailAdd(e.target.value)
  }
  const navigate = useNavigate();
  const navigateToAddCat = () => { navigate('/addCat'); }
  return (
    <ArticleWrap>
      <p>
        {address || curAddress}
      </p>
      <Inputs
        width={330}
        placeholder='상세 주소를 입력하세요'
        type="text"
        onChange={onChange}
        value={detailAdd || ''}
        required />
      <Button
        onClick={navigateToAddCat}
        className='catRegisterBtn'
        bgColor='var(--disabled-button-color)'
        hoverBgColor='var(--main-color)'>
        냥 등록하기
      </Button>
    </ArticleWrap>
  )
}

export default MapModal