import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface LocationType {
  center: { lat: number, lng: number },
  error?: { message: string };
}

const MyLocation = () => {
  const [myLocation, setMyLocation] = useState<LocationType>({
    center: { lat: 0, lng: 0 },
  })

  // 성공시 인자로 받은 위치의 경도, 위도 표시
  const onSuccess = (location: { coords: { latitude: number; longitude: number; } }) => {
    setMyLocation({
      center: { lat: location.coords.latitude, lng: location.coords.longitude }
    })
  }
  // 실패시
  const onError = (error: { message: string; }) => {
    setMyLocation({
      center: { lat: 0, lng: 0 },
      error,
    })
  }
  useEffect(() => {
    // 사용중인 브라우저 내에서 지리적 위치가 없는 경우 에러 메세지
    if (!(navigator.geolocation)) {
      onError({
        message: "위치를 찾을 수 없습니다.",
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [])
  return (
    <Map
      center={myLocation.center}
      style={{ width: "100%", height: "772px", zIndex: '0' }}
    >
      <MapMarker position={myLocation.center} />
    </Map>
  )
}

export default MyLocation