import React from "react";
import styled from "styled-components";
import Inputs, { Input, Label } from "../../atoms/inputs/Inputs";
import Header from "../../components/header/Header";
import Image from "../../atoms/image/Image";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2 } from "../loginPage/style";
import Button from "../../atoms/button/Button";
import { ColumnFlexBox, RowFlexBox } from "./style";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <MiddleWrap>
        <H2>집사정보</H2>
        <Image
          className="btn"
          marginBottom={29}
          width={117}
          height={117}
          alt=""
          src="assets/images/add-profile.svg"
        />
        <Inputs
          label="집사 이름"
          placeholder="2 ~ 15자 이내어야 합니다"
          type="text"
          width={275}
        />
        <Inputs
          label="간단한 소개"
          placeholder="2 ~ 15자 이내어야 합니다"
          type="text"
          width={275}
        />
        <ColumnFlexBox>
          <Label>지역</Label>
          <RowFlexBox>
            <Input placeholder="도/시" type="text" width={132} />
            <Input placeholder="시/군/구" type="text" width={132} />
          </RowFlexBox>
        </ColumnFlexBox>
        <Button marginTop={30} bgColor="var(--disabled-button-color)">
          다음
        </Button>
      </MiddleWrap>
    </>
  );
};

export default ProfilePage;
