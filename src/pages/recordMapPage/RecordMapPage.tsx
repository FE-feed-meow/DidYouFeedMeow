import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import MapTemplate from '../../components/mapTemplate/MapTemplate';
import SearchInpBox from '../../components/searchInpBox/SearchInpBox';
import ResetLocationBtn from './style'

interface LocationType {
  center: { lat: number, lng: number };
  error?: { message: string };
}

interface ClickMarker {
  lat: number;
  lng: number;
}

const RecordMapPage = () => {
  const [myLocation, setMyLocation] = useState<LocationType>({
    center: { lat: 0, lng: 0 },
  })
  const [position, setPosition] = useState<ClickMarker | null>(null);
  const [address, setAddress] = useState<string>();
  const [curAddress, setCurAddress] = useState<any>();

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

  const geocoder = new kakao.maps.services.Geocoder();
  // 내가 선택한 위치
  const callbackAddress = (result: any, status: any) => {
    if (status && kakao.maps.services.Status.OK) {
      setAddress(result[0].address.address_name)
    }
  }
  // 현재 위치
  const callbackCurAddress = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setCurAddress(result[0].address.address_name)
    }
  }
  geocoder.coord2Address(myLocation.center.lng, myLocation.center.lat, callbackCurAddress)
  return (
    <>
      <SearchInpBox setMyLocation={setMyLocation} setAddress={setAddress} />
      <MapTemplate address={address} curAddress={curAddress} />
      <Map
        center={myLocation.center}
        style={{
          width: "390px",
          height: "772px",
          position: 'absolute',
          top: '48px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        onClick={(_t, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
          geocoder.coord2Address(mouseEvent.latLng.getLng(), mouseEvent.latLng.getLat(), callbackAddress)
        }}
      >
        {position &&
          <MapMarker position={position} image={{
            src: 'assets/icons/icon-marker.svg', size: { width: 40, height: 40 }
          }}>
            <small style={{ fontSize: '12px', fontFamily: 'SpoqaHanSansNeo-Regular' }}>
              {address}
            </small>
          </MapMarker>
        }
        <MapMarker position={myLocation.center} image={{
          src: 'assets/icons/icon-marker.svg', size: { width: 40, height: 40 }
        }} />
        <ResetLocationBtn
          type='button'
          onClick={() => {
            navigator.geolocation.getCurrentPosition(onSuccess)
            setCurAddress(
              geocoder.coord2Address(myLocation.center.lng, myLocation.center.lat, callbackAddress)
            )
            setMyLocation({
              center: {
                lat: myLocation.center.lat, lng: myLocation.center.lng
              }
            })
            setPosition({
              lat: myLocation.center.lat, lng: myLocation.center.lng
            })
          }}
        >
          현위치
        </ResetLocationBtn>
      </Map>
    </>
  )
}
export default RecordMapPage