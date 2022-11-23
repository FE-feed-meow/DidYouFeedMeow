import React, { useRef, useState } from 'react'
import MenuBoard from '@components/menuBoard/MenuBoard';
import { SearchWrap, MenuBtn, ModalBg, SearchInput, ResetLocationBtn } from './style'

const SearchInpBox = ({ setMyLocation, myLocation, setPosition, onSuccess }: any) => {
  const [searchAddress, setSearchAddress] = React.useState<string>();
  const [menuBoard, setMenuBoard] = React.useState<boolean>(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === outSection.current && menuBoard) {
      setMenuBoard(false)
    }
  };

  const searchMap = () => {
    const ps = new kakao.maps.services.Places();
    const searchPlace = (data: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const keyword = data[0];
        setMyLocation({
          center: { lat: keyword.y, lng: keyword.x }
        })
      } else {
        alert('위치 정보를 찾을 수 없습니다')
        setMyLocation({
          center: { lat: myLocation.center.lat, lng: myLocation.center.lng }
        })
      }
    }
    ps.keywordSearch(`${searchAddress}`, searchPlace)
  }

  const handleSearchAddress = (e: any) => {
    setSearchAddress(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchMap();
      setSearchAddress('');
    }
  }

  const resetLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess);
    setPosition({ lat: myLocation.center.lat, lng: myLocation.center.lng })
  }

  return (
    <SearchWrap>
      <MenuBtn type='button' onClick={() => { setMenuBoard(!menuBoard) }}>
        <img src="assets/icons/icon-menu.svg" alt="메뉴 버튼" />
      </MenuBtn>
      {menuBoard === true ? <ModalBg ref={outSection} onClick={closeModal}>
        <MenuBoard />
      </ModalBg> : null}
      <SearchInput
        type="text"
        placeholder='장소, 주소를 입력해주세요'
        value={searchAddress || ''}
        onChange={handleSearchAddress}
        onKeyDown={handleKeyDown}
      />
      <ResetLocationBtn type='button' onClick={resetLocation}>
        <img src="assets/icons/icon-reset-location.svg" alt="현위치 버튼" />
      </ResetLocationBtn>
    </SearchWrap>
  )
}

export default SearchInpBox