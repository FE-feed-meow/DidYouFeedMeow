import React, { useMemo, useRef, useState } from "react";
import { useLocation } from 'react-router';

import Header from "../../components/header/Header";
import Inputs from "../../atoms/inputs/Inputs";
import Button from "../../atoms/button/Button";
import DropDown from "../../atoms/dropdown/DropDown";

import {
  Title,
  Article,
  SubTxt,
  TitAdress,
  DivAdress,
  CatBox,
  CatImgWrap,
  CatImg,
  UploadImgIcon,
  UploadImgInput,
  Textarea,
} from "./style";

type UploadImg = {
  file: File;
  thumbnail: string;
  type: string;
};
const RegisterCatPage = () => {
  const url = "https://mandarin.api.weniv.co.kr";
  const option = [
    "잘몰라유..",
    "2022년",
    "2021년",
    "2020년",
    "2019년",
    "2018년",
    "2017년전",
  ];

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>(null);

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  // 파일 업로드
  const onImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const urlFile = URL.createObjectURL(fileList[0]);
      setImgFile({
        file: fileList[0],
        thumbnail: urlFile,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  // 업로드 된 이미지 파일 미리보기
  const showImg = useMemo(() => {
    if (!imgFile && imgFile == null) {
      return (
        <CatImg src="assets/images/add-cat.svg" alt="냥이 등록 기본이미지 " />
      );
    }
    return (
      <CatImg
        src={imgFile.thumbnail}
        alt="냥이 등록 이미지"
        onClick={handleClickFileInput}
      />
    );
  }, [imgFile]);

  // 현위치 or 선택한 주소, MapModal에서 입력한 상세주소 넘겨주기
  const location = useLocation();

  return (
    <>
      <Header />
      <Title> 냥이 등록하기 </Title>
      <Article>
        <form>
          <SubTxt>사진 등록</SubTxt>
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
          <TitAdress>주소</TitAdress>
          <DivAdress>
            {!location.state.address ? `${location.state.curAddress}, ${location.state.detailAdd || ''}` : `${location.state.address}, ${location.state.detailAdd || ''}`}
          </DivAdress>
          <CatBox>
            <Inputs
              label="냥 이름"
              width={150}
              placeholder="10자 이내여야 합니다."
              required={false}
              type="text"
            />
            <DropDown title="출생년도(추정)" options={option} width={88} />
          </CatBox>
          <SubTxt>특이사항</SubTxt>
          <Textarea placeholder="50자 이내여야 합니다." />
          <Button
            marginTop={33}
            bgColor="var(--disabled-button-color)"
            disabled
          >
            저장하기
          </Button>
        </form>
      </Article>
    </>
  );
};

export default RegisterCatPage;
