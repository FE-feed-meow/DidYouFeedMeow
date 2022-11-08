import React, { useState } from 'react'
import { SearchWrap, SearchInput } from './style'

const SearchInpBox = ({ setMyLocation, setAddress, myLocation }: any) => {
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

  return (
    <SearchWrap>
      <SearchInput
        type="text"
        placeholder='장소, 주소를 입력해주세요'
        value={searchAddress || ''}
        onChange={handleSearchAddress}
        onKeyDown={handleKeyDown}
      />
    </SearchWrap>
  )
}

export default SearchInpBox