import React from "react";
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
}
const postId = "62e0054a17ae6665819ebcaf";
const DeleteModal = ({ CloseModal, feedId }: Props) => {
  console.log(feedId);
  const token = localStorage.getItem("token");

  // 고양이 밥 정보 삭제
  const deleteFeed = async () => {
    const url = `https://mandarin.api.weniv.co.kr/post/${postId}/comments/${feedId}`;
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
  return (
    <ModalMain>
      <ModalArea>
        <CloseBtn CloseModal={CloseModal} />
        <ModalWrap>
          <DeleteText>삭제하시겠습니까?</DeleteText>
          <BtnWrap>
            <DeleteBtn onClick={deleteFeed}>삭제</DeleteBtn>
            <CancelBtn onClick={CloseModal}>취소</CancelBtn>
          </BtnWrap>
        </ModalWrap>
      </ModalArea>
    </ModalMain>
  );
};

export default DeleteModal;
