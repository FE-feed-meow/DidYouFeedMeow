import React, { useRef, useState } from 'react'
import MapModal from '../modal/mapModal/MapModal'
import MenuBoard from '../menuBoard/MenuBoard'
import { MapWrapper, ModalBg, PlusBtn, MenuBtn } from './style'

const MapTemplate = ({ address, curAddress }: any) => {
  const [menuBoard, setMenuBoard] = React.useState<boolean>(false);
  const [mapModal, setMapModal] = React.useState<boolean>(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === outSection.current && menuBoard) {
      setMenuBoard(false)
    } else if (e.target === outSection.current && mapModal) {
      setMapModal(false)
    }
  };
  return (
    <MapWrapper>
      <MenuBtn type="button" onClick={() => { setMenuBoard(!menuBoard) }}>
        <img src="assets/icons/icon-menu.svg" alt="메뉴 버튼" />
      </MenuBtn>
      {menuBoard === true ?
        <ModalBg ref={outSection} onClick={closeModal}>
          <MenuBoard />
        </ModalBg> : null}
      <PlusBtn type="button" onClick={() => { setMapModal(!mapModal) }}>
        <img src="assets/icons/icon-plus.svg" alt="플러스 버튼" />
      </PlusBtn>
      {mapModal === true ?
        <ModalBg ref={outSection} onClick={closeModal}>
          <MapModal address={address} curAddress={curAddress} />
        </ModalBg> : null}
    </MapWrapper >
  )
}

export default MapTemplate