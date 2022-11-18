import React from 'react'
import { useNavigate } from 'react-router';
import Header from '@components/header/Header'
import { LetterWrap, LetterTitle, LetterAddress, LetterList, LetterItem, LetterItemGrey, LetterItemBeige, LetterItemMix, LetterItemName } from './style'

const CatLetterPage = () => {
  const navigate = useNavigate();
  const moveToLetterDetail = () => {
    navigate('/letters/1')
  }
  return (
    <>
      <Header />
      <LetterWrap>
        <LetterTitle>동네 냥 소식통</LetterTitle>
        <LetterAddress>경기도 의정부시</LetterAddress>
        <LetterList>
          <LetterItem onClick={moveToLetterDetail}>
            <LetterItemName>의정부시 호원동</LetterItemName>
          </LetterItem>
          <LetterItemGrey>
            <LetterItemName>의정부시 가능동</LetterItemName>
          </LetterItemGrey>
          <LetterItemBeige>
            <LetterItemName>의정부시 녹양동</LetterItemName>
          </LetterItemBeige>
          <LetterItemMix>
            <LetterItemName>의정부시 신곡동</LetterItemName>
          </LetterItemMix>
        </LetterList>
      </LetterWrap>
    </>
  )
}

export default CatLetterPage