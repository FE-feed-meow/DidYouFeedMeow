import React from 'react'
import ResetLocationBtn from './style'

const geocoder = new kakao.maps.services.Geocoder();

const ResetLocation = ({ callbackAddress, onSuccess, setAddress, setPosition, myLocation }: any) => {
  const resetLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess);
    setAddress(geocoder.coord2Address(myLocation.center.lng, myLocation.center.lat, callbackAddress))
    setPosition({ lat: myLocation.center.lat, lng: myLocation.center.lng })
  }
  return (
    <ResetLocationBtn type='button' onClick={resetLocation}>
      <img src="assets/icons/icon-reset-location.svg" alt="현위치 버튼" />
    </ResetLocationBtn>
  )
}

export default ResetLocation