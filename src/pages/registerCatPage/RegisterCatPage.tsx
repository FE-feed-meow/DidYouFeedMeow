import React, { useMemo, useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import Header from "../../components/header/Header";
import Inputs from "../../atoms/inputs/Inputs";
import Button from "../../atoms/button/Button";
import DropDown from "../../atoms/dropdown/DropDown";

import {
  Title,
  Article,
  SubTxt,
  CatBox,
  CatImgWrap,
  CatImg,
  UploadImgIcon,
  UploadImgInput,
  Textarea,
} from "./style";

const RegisterCatPage = ({ stateData }: any) => {
  const API_URL = "https://mandarin.api.weniv.co.kr";
  const option = [
    "잘몰라유..",
    "2022년",
    "2021년",
    "2020년",
    "2019년",
    "2018년",
    "2017년",
  ];

  const [imgFile, setImgFile] = React.useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [catName, setCatName] = React.useState<string>("");
  // 현위치 or 선택한 주소, MapModal에서 입력한 상세주소 넘겨주기
  const location = useLocation();
  const [userAddress, setUserAddress] = React.useState<string>("");
  const [catBirth, setCatBirth] = React.useState("잘몰라유..");
  const [catEtc, setCatEtc] = React.useState("특이사항 없음");
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 출생년도
  const getOption = (opt: any) => {
    if (stateData) {
      setCatBirth(stateData.birthData);
    }
    setCatBirth(opt);
  };

  // 이미지 업로드
  const imageUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${API_URL}/image/uploadfile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setImgFile(
          `https://mandarin.api.weniv.co.kr/${response.data.filename}`,
        );
      })
      .catch((error) => {
        console.log(error);
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
    if (!imgFile && imgFile == null) {
      return (
        <CatImg src="assets/images/add-cat.svg" alt="냥이 등록 기본이미지 " />
      );
    }

    return <CatImg src={imgFile} alt="냥이 등록 이미지" />;
  }, [imgFile]);

  // 냥이정보 등록(서버)
  const saveCat = async () => {
    const reqData = {
      post: {
        content: catName.concat(`|${userAddress}|${catBirth}|${catEtc}`),
        image: imgFile,
      },
    };
    axios
      .post(`${API_URL}/post`, reqData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate(`/catInfo/${response.data.post.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDisable = useEffect(() => {
    if (catName.length > 0 && imgFile !== null) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [catName, imgFile]);

  // 냥이정보 수정(서버)
  const modifyCat = async () => {
    const reqData = {
      post: {
        content: catName.concat(`|${userAddress}|${catBirth}|${catEtc}`),
        image: imgFile,
      },
    };

    axios
      .put(`${API_URL}/post/${stateData.data.id}`, reqData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate(`/catInfo/${response.data.post.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (stateData) {
      setImgFile(stateData.data.image);
      setUserAddress(stateData.addressData);
      setCatName(stateData.nameData);
      setCatBirth(stateData.birthData);
      setCatEtc(stateData.etcData);
    } else {
      let locationAddress = !location.state ? null : location.state;
      if (location.state) {
        locationAddress = !location.state.address
          ? `${location.state.curAddress}, ${location.state.detailAdd || ""}`
          : `${location.state.address}, ${location.state.detailAdd || ""}`;
      }
      setUserAddress(locationAddress);
    }
  }, []);

  return (
    <>
      <Header />
      <Title> 냥이 등록하기 </Title>
      <Article>
        <form>
          <SubTxt>사진 등록(필수)</SubTxt>
          <CatImgWrap>
            {showImg}
            <UploadImgIcon onClick={handleClickFileInput} />
            <UploadImgInput
              type="file"
              accept="image/*"
              id="uploadImg"
              ref={fileInputRef}
              onChange={onImgChange}
            />
          </CatImgWrap>
          <Inputs
            type="text"
            label="주소"
            width={310}
            maxLength={40}
            required={false}
            onChange={(e) => {
              setUserAddress(e.target.value);
            }}
            value={userAddress}
          />
          <CatBox>
            <Inputs
              type="text"
              maxLength={10}
              label="냥 이름(필수)"
              placeholder="10자 이내여야 합니다."
              width={150}
              required={false}
              onChange={(e) => {
                setCatName(e.target.value);
              }}
              value={catName}
            />
            <DropDown
              title="출생년도"
              options={option}
              getOption={getOption}
              width={88}
              value={stateData ? stateData.birthData : catBirth}
            />
          </CatBox>
          <SubTxt>특이사항</SubTxt>
          <Textarea
            maxLength={100}
            placeholder="100자 이내여야 합니다."
            onChange={(e) => {
              setCatEtc(e.target.value);
            }}
          />
          {stateData ? (
            <Button
              type="button"
              className="saveBtn"
              marginTop={33}
              bgColor="var(  --main-color)"
              disabled={disabled}
              onClick={modifyCat}
            >
              수정하기
            </Button>
          ) : (
            <Button
              type="button"
              className="saveBtn"
              marginTop={33}
              bgColor="var(  --main-color)"
              disabled={disabled}
              onClick={saveCat}
            >
              저장하기
            </Button>
          )}
        </form>
      </Article>
    </>
  );
};

export default RegisterCatPage;
