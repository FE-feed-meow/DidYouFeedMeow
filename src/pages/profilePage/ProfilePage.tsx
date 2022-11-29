/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useInput from "hooks/useInput";
import Inputs, { Input, Label } from "../../atoms/inputs/Inputs";
import Header from "../../components/header/Header";
import { MiddleWrap } from "../../styles/commonStyle";
import { ErrorMessage, H2 } from "../loginPage/style";
import Button from "../../atoms/button/Button";
import {
  ColumnFlexBox,
  ProfileImg,
  ProfileImgWrap,
  RowFlexBox,
  UploadProfileImgIcon,
  UploadProfileImgInput,
} from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const userPassword = localStorage.getItem("password");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImg, setProfileImg] = useState("assets/images/profile.svg");
  const [userName, setUserName] = useInput("");
  const [intro, setIntro] = useInput("");
  const [addressFirst, setAddressFirst] = useInput("");
  const [addressSecond, setAddressSecond] = useInput("");
  const [accountNameValid, setAccountNameValid] = useState("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 이미지 업로드
  const imageUpload = async (file: any) => {
    const url = "https://mandarin.api.weniv.co.kr/image/uploadfile";
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(url, formData);
      setProfileImg(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);
    } catch (err) {
      console.log(err);
    }
  };

  // 파일 onChange 부분
  const onImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const imgSrc = await imageUpload(fileList[0]);
    }
  };

  // 클릭시 파일 업로드 창 띄우기
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  // 업로드 된 이미지 파일 미리보기
  const showImg = useMemo(() => {
    return <ProfileImg src={profileImg} alt="사용자 프로필" />;
  }, [profileImg]);

  // 랜덤 문자열 생성 함수
  const generateRandomString = (num: number) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  // 계정 유효성 검사
  const handleCheckAccountName = async () => {
    const accountname = generateRandomString(10);
    const url = "https://mandarin.api.weniv.co.kr/user/accountnamevalid";
    const config = {
      user: { accountname: `${accountname}` },
      body: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post(url, config);
      const reqMsg = res.data.message;
      setAccountNameValid(reqMsg);
      if (reqMsg === "사용 가능한 계정ID 입니다." && isValid === false) {
        setAccountNameValid("");
        setIsValid(true);
      }
      if (!userName && !intro && !addressFirst && !addressSecond) {
        setErrorMsg("* 집사이름, 소개, 지역은 필수 요소 입니다.");
      }
      if (!userName) {
        setAccountNameValid("");
      }
      localStorage.setItem("accountname", accountname);
    } catch (err) {
      console.log(err);
    }
  };

  // 프로필 데이터 전송
  const onHandleJoin = async () => {
    const joinIntro = [intro, addressFirst, addressSecond].join("@@@");
    const accountname = localStorage.getItem("accountname");
    const url = "https://mandarin.api.weniv.co.kr/user";
    const config = {
      user: {
        username: `${userName}`,
        email: `${userEmail}`,
        password: `${userPassword}`,
        accountname: `${accountname}`,
        intro: `${joinIntro}`,
        image: `${profileImg}`,
      },
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = axios.post(url, config);
      // 회원가입때 사용한 email, pw 삭제
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!userName || !intro || !addressFirst || !addressSecond) {
      setErrorMsg("* 집사이름, 소개, 지역은 필수 요소 입니다.");
    }
  }, [userName, intro, addressFirst, addressSecond]);

  return (
    <>
      <Header />
      <MiddleWrap>
        <H2>집사정보</H2>
        <form>
          <MiddleWrap>
            <ProfileImgWrap>
              {showImg}
              <UploadProfileImgIcon onClick={handleClickFileInput}>
                <span className="ir">프로필 사진 업로드 버튼</span>
              </UploadProfileImgIcon>
              <UploadProfileImgInput
                type="file"
                id="uploadImag"
                accept="image/*"
                ref={fileInputRef}
                onChange={onImgChange}
              />
            </ProfileImgWrap>
          </MiddleWrap>
          <Inputs
            label="집사 이름"
            type="text"
            id="username"
            placeholder="2 ~ 15자 이내어야 합니다"
            width={275}
            value={userName}
            onChange={setUserName}
            onBlur={handleCheckAccountName}
            required
          />
          {accountNameValid && <ErrorMessage>{accountNameValid}</ErrorMessage>}
          <Inputs
            label="간단한 소개"
            type="text"
            id="introduce"
            placeholder="5~20자의 영문 소문자, 숫자와 특수기호(_),(.)만 사용 가능합니다."
            width={275}
            value={intro}
            onChange={setIntro}
            required
          />
          <ColumnFlexBox>
            <Label>지역</Label>
            <RowFlexBox>
              <Input
                autoComplete="off"
                placeholder="도/시"
                type="text"
                id="addressFirst"
                width={132}
                value={addressFirst}
                onChange={setAddressFirst}
                required
              />
              <Input
                autoComplete="off"
                placeholder="시/군/구"
                type="text"
                width={132}
                id="addressSecond"
                value={addressSecond}
                onChange={setAddressSecond}
                required
              />
            </RowFlexBox>
          </ColumnFlexBox>
          {!userName && !intro && !addressFirst && !addressSecond ? (
            <ErrorMessage>{errorMsg}</ErrorMessage>
          ) : null}
          <Button
            marginTop={30}
            bgColor="var(--main-color)"
            type="submit"
            onClick={onHandleJoin}
          >
            저장하기
          </Button>
        </form>
      </MiddleWrap>
    </>
  );
};

export default ProfilePage;
