import React, { useMemo, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useInput from "hooks/useInput";
import Inputs, { Input, Label } from "../../atoms/inputs/Inputs";
import Header from "../../components/header/Header";
import { MiddleWrap } from "../../styles/commonStyle";
import { H2 } from "../loginPage/style";
import Button from "../../atoms/button/Button";
import {
  ColumnFlexBox,
  ProfileImg,
  ProfileImgWrap,
  RowFlexBox,
  UploadProfileImgIcon,
  UploadProfileImgInput,
} from "../profilePage/style";

const ProfileEditPage = () => {
  const url = "https://mandarin.api.weniv.co.kr/user/login/";
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const accountName = localStorage.getItem("accountname");
  const userInfo: any = localStorage.getItem("userInfo");
  const userintro = JSON.parse(userInfo).intro;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImg, setProfileImg] = useState(JSON.parse(userInfo).image);
  const [userName, setUserName] = useInput(JSON.parse(userInfo).username);
  const [userIntro, userAddr1, userAddr2] = userintro.split("@@@");
  const [intro, setIntro] = useInput(userIntro);
  const [addressFirst, setAddressFirst] = useInput(userAddr1);
  const [addressSecond, setAddressSecond] = useInput(userAddr2);

  const imageUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${url}/image/uploadfile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setProfileImg(
          `https://mandarin.api.weniv.co.kr/${response.data.filename}`,
        );
      })
      .catch((e) => {
        console.log(e);
      });
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

  // 프로필 데이터 전송
  const onHandleSubmit = async () => {
    const joinIntro = [intro, addressFirst, addressSecond].join("@@@");

    const reqData = {
      user: {
        username: `${userName}`,
        accountname: `${accountName}`,
        intro: `${joinIntro}`,
        image: `${profileImg}`,
      },
    };
    axios
      .put(`${url}/user`, reqData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        // 성공하면 로컬의 accountname업데이트
        // localStorage.setItem("accountname", response.user.accountname);
        console.log(response);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />
      <MiddleWrap>
        <H2>집사정보</H2>
        <form onSubmit={onHandleSubmit}>
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
            required
          />
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
          <Button
            marginTop={30}
            bgColor="var(--main-color)"
            type="submit"
            // disabled={!isValid}
          >
            수정하기
          </Button>
        </form>
      </MiddleWrap>
    </>
  );
};

export default ProfileEditPage;
