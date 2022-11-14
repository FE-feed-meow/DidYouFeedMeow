import React, { useState } from 'react'
import { SearchWrap, SearchInput, ResetLocationBtn } from './style'

const SearchInpBox = ({ setMyLocation, setAddress, myLocation, setPosition, onSuccess, callbackAddress }: any) => {
  const [searchAddress, setSearchAddress] = useState<string>();
  const searchMap = () => {
    const ps = new kakao.maps.services.Places();
    const searchPlace = (data: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const keyword = data[0];
        // console.log(data);
        // console.log(keyword);
        setMyLocation({
          center: { lat: keyword.y, lng: keyword.x }
        })
        setAddress()
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
  const geocoder = new kakao.maps.services.Geocoder();

  const resetLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess);
    setAddress(geocoder.coord2Address(myLocation.center.lng, myLocation.center.lat, callbackAddress))
    setPosition({ lat: myLocation.center.lat, lng: myLocation.center.lng })
  }

  return (
    <SearchWrap>
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