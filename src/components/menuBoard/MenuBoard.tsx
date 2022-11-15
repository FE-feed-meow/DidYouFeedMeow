import React from "react";
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
  const onLogout = () => {
    console.log("로그아웃 코드 구현");
  };

  return (
    <AsideWrap>
      <ProfileWrap to="/profile">
        <Image
          width={50}
          src={JSON.parse(userInfo).image}
          alt="프로필 이미지"
        />
        <div>
          <h1>{JSON.parse(userInfo).username}</h1>
          <p>{JSON.parse(userInfo).username}</p>
        </div>
      </ProfileWrap>
      <MenuBoardUl>
        <li>
          <MenuBoardBtn to="/profile">집사 정보</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn to="/letters">동네 냥 소식통</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn to="/news">밥줬냥 신문</MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn to="/catList">내가 등록한 냥이</MenuBoardBtn>
        </li>
        <li>
          <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
        </li>
      </MenuBoardUl>
    </AsideWrap>
  );
};

export default MenuBoard;
