import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Header from '../header/Header';
import { Catlist, CatName, CatAddress, CatBirth, CatImg, Title, CatListWrap } from './style';

const CatList = () => {
  const token = localStorage.getItem('token')
  const API_URL = "https://mandarin.api.weniv.co.kr";
  const userInfo: any = localStorage.getItem('userInfo');
  const [catListInfo, setCatListInfo] = React.useState("");
  const navigate = useNavigate();

  const getCatInfo = async () => {
    axios
      .get(`${API_URL}/post/${JSON.parse(userInfo).accountname}/userpost/?limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
      .then((response) => {
        const arrList = response.data.post.map((e: any): any => {
          const moveToDetailpage = () => { navigate(`/catInfo/${e.id}`) }
          return (
            <Catlist key={e.id} onClick={moveToDetailpage}>
              <div>
                <CatName>{(e.content.split('|')[0])}</CatName>
                <CatBirth>출생년도 : {(e.content.split('|')[2])}</CatBirth>
                <CatAddress>주소 : {(e.content.split('|')[1])}</CatAddress>
              </div>
              <CatImg src={e.image} alt="고양이 사진" />
            </Catlist>
          )
        }
        );
        setCatListInfo(arrList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCatInfo();
  }, []);

  return (
    <>
      <Header />
      <Title>내가 등록한 냥이</Title>
      <CatListWrap>
        {catListInfo}
      </CatListWrap>
    </>
  )
}

export default CatList