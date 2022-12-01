import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Image from "../../atoms/image/Image";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import {
  ImgWrap,
  CatInfoWrap,
  CatNameWrap,
  IconsBox,
  CatName,
  TxtCatInfo,
  CatEtc,
} from "./style";

const CatInfo = () => {
  const [onModal, setModal] = React.useState<boolean>(false);
  const [deleteState, setDeleteState] = React.useState<boolean>(false);
  const OpenModal = () => {
    setModal(true);
    setDeleteState(false);
  };
  const CloseModal = () => {
    setModal(false);
  };

  const API_URL = "https://mandarin.api.weniv.co.kr";
  const { catid } = useParams();
  const [catDetail, setCatDetail] = React.useState<any>([]);

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [etc, setEtc] = React.useState("");
  const token = localStorage.getItem("token");

  const getCatInfo = async () => {
    axios
      .get(`${API_URL}/post/${catid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCatDetail(response.data.post);
        setName(response.data.post.content.split("|")[0]);
        setAddress(response.data.post.content.split("|")[1]);
        setBirth(response.data.post.content.split("|")[2]);
        if (response.data.post.content.split("|")[3] === "") {
          setEtc("특이사항 없음");
        } else {
          setEtc(response.data.post.content.split("|")[3]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCatInfo();
  }, []);

  return (
    <CatInfoWrap>
      <ImgWrap>
        <Image src={catDetail.image} alt="고양이 사진" />
      </ImgWrap>
      <CatNameWrap>
        <CatName>{name}</CatName>
        <IconsBox>
          <Link
            to={`/catInfoEdit/${catid}`}
            state={{
              data: catDetail,
              nameData: name,
              addressData: address,
              birthData: birth,
              etcData: etc,
            }}
          >
            <Image
              width={19}
              height={19}
              alt=""
              src="../assets/icons/icon-correction.svg"
            />
          </Link>

          <button type="button" onClick={OpenModal}>
            <Image
              width={19}
              height={19}
              alt=""
              src="../assets/icons/icon-delete.svg"
            />
          </button>
          {onModal && (
            <DeleteModal CloseModal={CloseModal} deleteState={deleteState} />
          )}
        </IconsBox>
      </CatNameWrap>

      <TxtCatInfo>{address}</TxtCatInfo>
      <TxtCatInfo> 출생년도: {birth}</TxtCatInfo>
      <CatEtc>{etc}</CatEtc>
    </CatInfoWrap>
  );
};

export default CatInfo;
