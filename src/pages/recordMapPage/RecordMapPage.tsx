import React from 'react'
import styled from 'styled-components'
import SearchInpBox from '../../components/searchInpBox/SearchInpBox'

const RecordMapPage = () => {
  return (
    <div style={{position:'relative'}} >
      <SearchInpBox/>
      <PlusBtn type="button">
        <img src="assets/icons/icon-plus.svg" alt="플러스 버튼" />
      </PlusBtn>
    </div>
  )
}

export default RecordMapPage

const PlusBtn = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 723px;
  right: 40px;
`

