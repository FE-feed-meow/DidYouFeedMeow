import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Header from "@components/header/Header";
import Loading from "../../components/loading/Loading";
import {
  InitCatListWrap,
  Catlist,
  CatName,
  CatAddress,
  CatBirth,
  CatImg,
  Title,
  CatListWrap,
} from "./style";

const CatListPage = () => {
  const token = localStorage.getItem("token");
  const API_URL = "https://mandarin.api.weniv.co.kr";
  const userInfo: any = localStorage.getItem("userInfo");
  const [catListInfo, setCatListInfo] = React.useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(true);

  const getCatInfo = async () => {
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
        const arrList = response.data.post.map((e: any) => {
          const moveToDetailpage = () => {
            navigate(`/catInfo/${e.id}`);
          };
          return (
            <Catlist key={e.id} onClick={moveToDetailpage}>
              <div>
                <CatName>{e.content.split("|")[0]}</CatName>
                <CatBirth>출생년도 : {e.content.split("|")[2]}</CatBirth>
                <CatAddress>주소 : {e.content.split("|")[1]}</CatAddress>
              </div>
              <CatImg src={e.image} alt="고양이 사진" />
            </Catlist>
          );
        });
        setCatListInfo(arrList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCatInfo();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Title>내가 등록한 냥이</Title>
          {catListInfo.length === 0 ? (
            <InitCatListWrap>
              <img src="assets/icons/icon-logo-gray.svg" alt="회색 로고 이미지" />
              <p>아직 등록된 냥이가 없어요</p>
            </InitCatListWrap>
          ) :
            (<CatListWrap>
              {catListInfo}
            </CatListWrap>)
          }
        </>
      )}
    </div>
  );
};

export default CatListPage;
