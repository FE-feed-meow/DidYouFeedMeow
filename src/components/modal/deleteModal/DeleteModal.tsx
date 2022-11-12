import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import CloseBtn from "../../../atoms/button/closeBtn/CloseBtn";
import {
  ModalMain,
  ModalArea,
  ModalWrap,
  DeleteText,
  BtnWrap,
  DeleteBtn,
  CancelBtn,
} from "./style";

interface Props {
  CloseModal: () => void;
  feedId?: string;
  deleteState?: boolean;
}

const DeleteModal = ({ CloseModal, feedId, deleteState }: Props) => {
  const token = localStorage.getItem("token");
  const { catid } = useParams();

  // 고양이 밥 정보 삭제
  const deleteFeed = async () => {
    const url = `https://mandarin.api.weniv.co.kr/post/${catid}/comments/${feedId}`;
    try {
      const res = await axios(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    CloseModal();
    window.location.reload();
  };

  const onDelete = () => {
    // true면 빕 정보 삭제
    // false면 고양이 정보 삭제
    if (deleteState === true) {
      deleteFeed();
    } else {
      console.log("아님");
      CloseModal();
    }
  };
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn CloseModal={CloseModal} />
        <ModalWrap>
          <DeleteText>삭제하시겠습니까?</DeleteText>
          <BtnWrap>
            <DeleteBtn onClick={onDelete}>삭제</DeleteBtn>
            <CancelBtn onClick={CloseModal}>취소</CancelBtn>
          </BtnWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default DeleteModal;
