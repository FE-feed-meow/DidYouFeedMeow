import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import MapTemplate from '../../components/mapTemplate/MapTemplate';
import SearchInpBox from '../../components/searchInpBox/SearchInpBox';
import ResetLocation from '../../components/resetLocation/ResetLocation';
import MarkerText from './style'

interface LocationType {
  center: { lat: number, lng: number };
  error?: { message: string };
}

interface ClickMarker {
  lat: number;
  lng: number;
}

const positions = [
  {
    title: "카카오",
    latlng: { lat: 33.450705, lng: 126.570677 },
  },
  {
    title: "생태연못",
    latlng: { lat: 33.450936, lng: 126.569477 },
  },
  {
    title: "텃밭",
    latlng: { lat: 33.450879, lng: 126.56994 },
  },
  {
    title: "근린공원",
    latlng: { lat: 33.451393, lng: 126.570738 },
  },
]

const RecordMapPage = () => {
  const [myLocation, setMyLocation] = useState<LocationType>({ center: { lat: 0, lng: 0 } })
  const [position, setPosition] = useState<ClickMarker | null>(null);
  const [address, setAddress] = useState<any>();
  const [curAddress, setCurAddress] = useState<any>();

  // 성공시 인자로 받은 위치의 경도, 위도 표시
  const onSuccess = (location: { coords: { latitude: number; longitude: number; } }) => {
    setMyLocation({ center: { lat: location.coords.latitude, lng: location.coords.longitude } })
  }
  // 실패시
  const onError = (error: { message: string; }) => {
    setMyLocation({ center: { lat: 0, lng: 0 }, error })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // 사용중인 브라우저 내에서 지리적 위치가 없는 경우 에러 메세지
    if (!(navigator.geolocation)) {
      onError({ message: "위치를 찾을 수 없습니다." })
    }
  }, [])

  const geocoder = new kakao.maps.services.Geocoder();
  // geocoder.addressSearch('경기도 하남시 풍산동 568', (result: any, status: any) => {
  //   if (status === kakao.maps.services.Status.OK) {
  //     // console.log(result[0].x);
  //     const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  //     // console.log(coords.getLat());
  //     // setPosition({
  //     //   lat: coords.getLat(),
  //     //   lng: coords.getLng()
  //     // })
  //   }
  // })

  // 현재 위치
  const callbackCurAddress = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setCurAddress(result[0].address.address_name)
    }
  }
  geocoder.coord2Address(myLocation.center.lng, myLocation.center.lat, callbackCurAddress)

  // 내가 선택한 위치
  const callbackAddress = (result: any, status: any) => {
    if (status && kakao.maps.services.Status.OK) {
      setAddress(result[0].address.address_name)
    }
  }

  return (
    <>
      <SearchInpBox
        setMyLocation={setMyLocation}
        setAddress={setAddress}
        myLocation={myLocation} />
      <MapTemplate
        address={address}
        curAddress={curAddress} />
      <Map
        level={3}
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
          setPosition({ lat: mouseEvent.latLng.getLat(), lng: mouseEvent.latLng.getLng() })
          geocoder.coord2Address(mouseEvent.latLng.getLng(), mouseEvent.latLng.getLat(), callbackAddress)
        }}
      >
        {/* {positions.map((pos, index) => (
          <MapMarker
            key={`${pos.title}-${pos.latlng}`}
            position={pos.latlng} // 마커를 표시할 위치
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35
              }, // 마커이미지의 크기입니다
            }}
            title={pos.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))} */}
        {position &&
          <MapMarker
            position={position}
            image={{ src: 'assets/icons/icon-marker.svg', size: { width: 40, height: 40 } }}>
            <MarkerText>
              {address}
            </MarkerText>
          </MapMarker>
        }
        <MapMarker
          position={myLocation.center}
          image={{ src: 'assets/icons/icon-marker.svg', size: { width: 40, height: 40 } }} />
        <ResetLocation
          callbackAddress={callbackAddress}
          onSuccess={onSuccess}
          setAddress={setAddress}
          setPosition={setPosition}
          myLocation={myLocation} />
      </Map>
    </>
  )
}
export default RecordMapPage