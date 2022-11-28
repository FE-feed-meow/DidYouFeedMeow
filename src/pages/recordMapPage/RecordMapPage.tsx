import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CatInfoModal from "@components/modal/catInfoModal/CatInfoModal";
import MapTemplate from "@components/mapTemplate/MapTemplate";
import Loading from "../../components/loading/Loading";
import ModalBg from "./style";

interface LocationType {
  center: { lat: number; lng: number };
  error?: { message: string };
}
interface ClickMarker {
  lat: number;
  lng: number;
}

const RecordMapPage = () => {
  const geocoder = new kakao.maps.services.Geocoder();
  const [myLocation, setMyLocation] = React.useState<LocationType>({
    center: { lat: 0, lng: 0 },
  });
  const [position, setPosition] = React.useState<ClickMarker | null>(null);
  const [address, setAddress] = React.useState("");
  const [curAddress, setCurAddress] = React.useState("");
  const [saveMarker, setSaveMarker] = React.useState("");
  const [data, setData] = React.useState("");
  const [catModal, setCatModal] = React.useState<boolean>(false);
  const outSection = useRef() as React.RefObject<HTMLDivElement>;
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === outSection.current && catModal) {
      setCatModal(false);
    }
  };

  const token = localStorage.getItem("token");
  const API_URL = "https://mandarin.api.weniv.co.kr";
  const userInfo: any = localStorage.getItem("userInfo");
  const [loading, setLoading] = React.useState<boolean>(true);

  // 성공시 인자로 받은 위치의 경도, 위도 표시
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    setMyLocation({
      center: { lat: location.coords.latitude, lng: location.coords.longitude },
    });
    setLoading(false);
  };
  // 실패시
  const onError = (error: { message: string }) => {
    setMyLocation({ center: { lat: 0, lng: 0 }, error });
  };

  // 현재 위치
  const callbackCurAddress = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setCurAddress(result[0].address.address_name);
    }
  };
  // 내가 선택한 위치
  const callbackAddress = (result: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setAddress(result[0].address.address_name);
    }
  };

  // 등록한 게시글 데이터
  const getCatAddress = async () => {
    await axios
      .get(
        `${API_URL}/post/${JSON.parse(userInfo).accountname
        }/userpost/?limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        const KAKAO = kakao.maps.services.Status.OK;
        const addressArr: any = [];
        const newArr: any = [];

        /* eslint-disable-next-line no-plusplus */
        for (let i = 0; i < response.data.post.length; i++) {
          addressArr.push(
            response.data.post[i].content.split("|")[1].split(",")[0],
          );

          // 주소를 좌표로 변환하는 코드
          geocoder.addressSearch(addressArr[i], (result, status) => {
            if (status === KAKAO) {
              const coord = {
                id: response.data.post[i].id,
                img: response.data.post[i].image,
                age: response.data.post[i].content.split("|")[2],
                name: response.data.post[i].content.split("|")[0],
                address: `${result[0].address_name}, ${response.data.post[i].content.split("|")[1].split(",")[1]
                  }`,
                lat: result[0].y,
                lng: result[0].x,
              };
              newArr.push(coord);
            }

            // 좌표 배열로 각 위치에 마커 찍기
            const savedMarker = newArr.map((datas: any) => {
              return (
                <MapMarker
                  position={datas}
                  key={datas.id}
                  image={{
                    src: "assets/icons/icon-marker.svg",
                    size: { width: 50, height: 50 },
                  }}
                  onClick={() => {
                    setCatModal(!catModal);
                    setData(datas);
                  }}
                />
              );
            });
            setSaveMarker(savedMarker);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // 사용중인 브라우저 내에서 지리적 위치가 없는 경우 에러 메세지
    if (!navigator.geolocation) {
      onError({ message: "위치를 찾을 수 없습니다." });
    }
    getCatAddress();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {geocoder.coord2Address(
            myLocation.center.lng,
            myLocation.center.lat,
            callbackCurAddress,
          )}
          <MapTemplate
            setMyLocation={setMyLocation}
            setPosition={setPosition}
            myLocation={myLocation}
            address={address}
            curAddress={curAddress}
            onSuccess={onSuccess}
          />
          <Map
            level={3}
            center={myLocation.center}
            style={{
              width: "390px",
              height: "820px",
            }}
            onClick={(_t, mouseEvent) => {
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              });
              geocoder.coord2Address(
                mouseEvent.latLng.getLng(),
                mouseEvent.latLng.getLat(),
                callbackAddress,
              );
            }}
          >
            {position ? (
              <MapMarker position={position} />
            ) : (
              <MapMarker position={myLocation.center} />
            )}
            {saveMarker}
            {catModal === true ? (
              <ModalBg ref={outSection} onClick={closeModal}>
                <CatInfoModal data={data} />
              </ModalBg>
            ) : null}
          </Map>
        </>
      )}
    </div>
  );
};
export default RecordMapPage;
