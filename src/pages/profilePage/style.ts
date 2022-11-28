import styled from "styled-components";

const ColumnFlexBox = styled.div`
  width: 275px;
  display: flex;
  flex-direction: column;
`;

const RowFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileImgWrap = styled.div`
  position: relative;
  margin-bottom: 29px;
`;

const ProfileImg = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  object-fit: contain;
`;

const UploadProfileImgIcon = styled.label`
  width: 21px;
  height: 21px;
  bottom: 5px;
  right: 10px;
  position: absolute;
  background-image: url(assets/icons/icon-plus-small.svg);
  background-repeat: no-repeat;
  background-size: 21px;
  cursor: pointer;
`;

const UploadProfileImgInput = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  padding: 0;
`;
export {
  ColumnFlexBox,
  RowFlexBox,
  ProfileImgWrap,
  ProfileImg,
  UploadProfileImgIcon,
  UploadProfileImgInput,
};
