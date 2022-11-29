import Header from "@components/header/Header";
import React from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  margin: 45px 38px;
  background-color: rgba(255, 255, 255, 0.5);
  font-family: "Shinb7Regular";
  width: 314px;
  height: 500px;
  padding: 0px 35px;
`;

const ItemTitle = styled.h1`
  font-size: 18px;
  padding-top: 25px;
  color: #000000;
  background: linear-gradient(
    0deg,
    rgba(255, 240, 0, 0.5) 0%,
    rgba(255, 240, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const ItemTextarea = styled.p`
  margin-top: 30px;
  border: none;
  background-color: transparent;
  width: 240px;
  line-height: 20px;
  font-size: 16px;
`;
const CatNewItem = () => {
  return (
    <div>
      <Header />
      <ItemWrap>
        <ItemTitle>동네 고양이의 중성화 여부가 궁금하다면?</ItemTitle>
        <ItemTextarea>
          대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이
          아니면 대통령으로 당선될 수 없다. 제1항의 탄핵소추는 국회재적의원
          3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의
          찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원
          과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
        </ItemTextarea>
        <ItemTextarea>
          누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을
          고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을
          당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이
          통지되어야 한다. 구속을 당한 자의 가족등 법률이 정하는 자에게는 그
          이유와 일시·장소가 지체없이 통지되어야 한다.
        </ItemTextarea>
      </ItemWrap>
    </div>
  );
};

export default CatNewItem;
