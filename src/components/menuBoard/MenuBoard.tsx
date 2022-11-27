import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/image/Image";

import {
  AsideWrap,
  ProfileWrap,
  MenuBoardUl,
  MenuBoardBtn,
  LogoutBtn,
} from "./style";

const userInfo: any = localStorage.getItem("userInfo");

const MenuBoard = () => {
  const [userImg, setUserImg] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [userAddr, setUserAddr] = React.useState<string>("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setUserName(JSON.parse(userInfo).username);
    setUserImg(JSON.parse(userInfo).image);
    setUserAddr("{userAddr}")
  }, [])

  return (
    <AsideWrap>
      <ProfileWrap onClick={() => { navigate('/profile') }}>
        <Image
          width={50}
          src={userImg}
          alt="프로필 이미지"
        />
        <div>
          <h1>{userName}</h1>
          <p>{userAddr}</p>
        </div>
      </ProfileWrap>
      <MenuBoardUl>
        <li>
          <MenuBoardBtn onClick={() => { navigate('/profile') }}>집사 정보</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn onClick={() => { navigate('/letters') }}>동네 냥 소식통</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn onClick={() => { navigate('/news') }}>밥줬냥 신문</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn onClick={() => { navigate('/catlist') }}>내가 등록한 냥이</MenuBoardBtn>
        </li>
        <li>
          <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
        </li>
      </MenuBoardUl>
    </AsideWrap>
  );
};

export default MenuBoard;
