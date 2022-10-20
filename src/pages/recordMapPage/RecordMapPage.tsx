import React, { useRef, useState } from 'react'
import SearchInpBox from '../../components/searchInpBox/SearchInpBox'
import MapModal from '../../components/modal/mapModal/MapModal'
import MenuBoard from '../../components/menuBoard/MenuBoard'
import {
  MapWrapper,
  BoardBg,
  PlusBtn,
  MenuBtn
} from './style'

const RecordMapPage = () => {
  const [menuBoard, setMenuBoard] = React.useState<boolean>(false);
  const [mapModal, setMapModal] = React.useState<boolean>(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => 
  { 
    if(e.target === outSection.current && menuBoard) {
      setMenuBoard(false)
    } else if(e.target === outSection.current && mapModal) {
      setMapModal(false)
    }
  };
  return (
    <MapWrapper>
      <MenuBtn 
        type="button"
        onClick={() => {setMenuBoard(!menuBoard)}}>
        <img src="assets/icons/icon-menu.svg" alt="메뉴 버튼" />
      </MenuBtn>
      <SearchInpBox/>
      {menuBoard === true ? 
        <BoardBg ref={outSection} onClick={closeModal}>
          <MenuBoard/>
        </BoardBg> : null}
      <PlusBtn 
        type="button"
        onClick={() => {setMapModal(!mapModal)}}>
        <img src="assets/icons/icon-plus.svg" alt="플러스 버튼" />
      </PlusBtn>
      {mapModal === true ? 
        <BoardBg ref={outSection} onClick={closeModal}>
          <MapModal/>
        </BoardBg> : null}
    </MapWrapper>
  )
}

export default RecordMapPage