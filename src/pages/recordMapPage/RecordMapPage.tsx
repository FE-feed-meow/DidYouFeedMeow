import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SearchInpBox from '../../components/searchInpBox/SearchInpBox'
import MenuBoard from '../../components/menuBoard/MenuBoard'

const RecordMapPage = () => {
  const [menuBoard, setMenuBoard] = useState(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  return (
    <MapWrapper 
      ref={outSection}
      onClick={(e) => {
        if(e.target === outSection.current) setMenuBoard(false)
      }}>
      <MenuBtn 
        type="button"
        onClick={() => {
          setMenuBoard(!menuBoard);
        }}>
        <img src="assets/icons/icon-menu.svg" alt="메뉴 버튼" />
      </MenuBtn>
      {menuBoard === true ? <MenuBoard/> : null}
      <SearchInpBox/>
      <PlusBtn type="button">
        <img src="assets/icons/icon-plus.svg" alt="플러스 버튼" />
      </PlusBtn>
    </MapWrapper>    
  )
}

export default RecordMapPage

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const PlusBtn = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 723px;
  right: 40px;
`

const MenuBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  img {
    vertical-align: middle;
  }
`