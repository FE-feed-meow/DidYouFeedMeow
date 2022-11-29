import React, { useRef, useState } from 'react'
import MapModal from '../modal/mapModal/MapModal'
import SearchInpBox from '../searchInpBox/SearchInpBox'
import { MapWrapper, ModalBg, PlusBtn } from './style'


const MapTemplate = ({ setMyLocation, myLocation, setPosition, address, curAddress, onSuccess }: any) => {
  const [mapModal, setMapModal] = React.useState<boolean>(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === outSection.current && mapModal) {
      setMapModal(false)
    }
  };
  return (
    <MapWrapper>
      <SearchInpBox
        setMyLocation={setMyLocation}
        myLocation={myLocation}
        setPosition={setPosition}
        onSuccess={onSuccess}
      />
      <PlusBtn type="button" onClick={() => { setMapModal(!mapModal) }}>
        <img src="assets/icons/icon-plus.svg" alt="플러스 버튼" />
      </PlusBtn>
      {mapModal === true &&
        <ModalBg ref={outSection} onClick={closeModal}>
          <MapModal address={address} curAddress={curAddress} />
        </ModalBg>}
    </MapWrapper >
  )
}

export default MapTemplate