import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AsideWrap,
  ProfileWrap,
  UserImg,
  UserInfoWrap,
  MenuBoardUl,
  MenuBoardBtn,
  LogoutBtn,
} from "./style";

const MenuBoard = () => {
  const userInfo: any = localStorage.getItem("userInfo");
  const [userImg, setUserImg] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [userAddr, setUserAddr] = React.useState<string>("");
  const [userIntro, addr1, addr2] = JSON.parse(userInfo).intro.split("@@@");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setUserName(JSON.parse(userInfo).username);
    setUserImg(JSON.parse(userInfo).image);
    setUserAddr(`${addr1} ${addr2}`);
  }, []);

  return (
    <AsideWrap>
      <ProfileWrap
        onClick={() => {
          navigate("/profileEdit");
        }}
      >
        <UserImg src={userImg} alt="프로필이미지" />
        <UserInfoWrap>
          <h1>{userName}</h1>
          <p>{userAddr}</p>
        </UserInfoWrap>
      </ProfileWrap>
      <MenuBoardUl>
        <li>
          <MenuBoardBtn
            onClick={() => {
              navigate("/profileEdit");
            }}
          >
            집사 정보
          </MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn
            onClick={() => {
              navigate("/letters");
            }}
          >
            동네 냥 소식통
          </MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn
            onClick={() => {
              navigate("/news");
            }}
          >
            밥줬냥 신문
          </MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn
            onClick={() => {
              navigate("/catlist");
            }}
          >
            내가 등록한 냥이
          </MenuBoardBtn>
        </li>
        <li>
          <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
        </li>
      </MenuBoardUl>
    </AsideWrap>
  );
};

export default MenuBoard;
