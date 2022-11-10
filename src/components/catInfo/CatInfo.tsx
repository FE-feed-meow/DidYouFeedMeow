import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Image from "../../atoms/image/Image";
import CatModal from "../modal/catModal/CatModal";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import {
  ImgWrap,
  CatInfoWrap,
  CatNameWrap,
  IconsBox,
  CatName,
  CatLocation,
  CatAge,
  CatDetail,
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

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzk5OWIyODJmZGNjNzEyZjQzN2ExZiIsImV4cCI6MTY3MjgxMDc5MiwiaWF0IjoxNjY3NjI2NzkyfQ._7qY-rNq9nWvyxjTFwZ1CW_OfHXmR1Edz_b25YkAKJc",
  );
  const token = localStorage.getItem("token");

  const changeBirth = useMemo(() => {
    if (catDetail.price === 999) {
      catDetail.price = "잘 몰라유..";
    }
    console.log("안녕");
    console.log(catDetail.price);
    return catDetail.price;
  }, [catDetail]);

  const getCatInfo = async () => {
    axios
      .get(`${API_URL}/product/detail/${catid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setCatDetail(response.data.product);
        setName(response.data.product.itemName.split("|")[0]);
        setAddress(response.data.product.itemName.split("|")[1]);
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
        <Image src={catDetail.itemImage} alt="고양이 사진" />
      </ImgWrap>
      <CatNameWrap>
        <CatName>{name}</CatName>
        <IconsBox>
          <button type="button">
            <Image
              width={19}
              height={19}
              alt=""
              src="assets/icons/icon-correction.svg"
            />
          </button>

          <a href="#none" onClick={OpenModal}>
            <Image
              width={19}
              height={19}
              alt=""
              src="assets/icons/icon-delete.svg"
            />
          </a>
          {onModal && (
            <DeleteModal CloseModal={CloseModal} deleteState={deleteState} />
          )}
        </IconsBox>
      </CatNameWrap>

      <CatLocation>{address}</CatLocation>
      <CatAge> /나이: {catDetail !== null ? changeBirth : null}</CatAge>
      <CatDetail>{catDetail.link}</CatDetail>
    </CatInfoWrap>
  );
};

export default CatInfo;
