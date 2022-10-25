import styled from "styled-components";

// interface Props {
//   onClickFood: boolean;
// }

export const CatFoodWrap = styled.div`
  margin: 40px 40px;
`;

export const CatFoodTitle = styled.p`
  font-size: 20px;
  font-family: "Shinb7Regular";
  padding-bottom: 14px;
`;

export const CatFoodTimeInput = styled.input`
  font-size: 14px;
  color: #797979;
  width: 40px;
  text-align: center;
  margin-bottom: 30px;
  margin-right: 10px;
  border: none;
  font-family: "SpoqaHanSansNeo-Regular";
  background: linear-gradient(
    0deg,
    #f0f0f0 0%,
    #f0f0f0 50%,
    rgba(0, 0, 0, 0) 50%
  );
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

export const CatNowTimeButton = styled.button`
  width: 75px;
  float: right;
  font-family: "SpoqaHanSansNeo-Regular";
  background: linear-gradient(
    0deg,
    #f0f0f0 0%,
    #f0f0f0 50%,
    rgba(0, 0, 0, 0) 50%
  );
`;

export const CatFoodButton = styled.button`
  color: #797979;
  font-size: 14px;
  font-family: "SpoqaHanSansNeo-Regular";
  margin-bottom: 15px;
  background: ${({ ClickState }: { ClickState: boolean }) =>
    ClickState
      ? "linear-gradient(0deg, rgba(255, 240, 0, 0.5) 0%, rgba(255, 240, 0, 0.5) 50%,rgba(0, 0, 0, 0) 50%)"
      : "linear-gradient(0deg,#f0f0f0 0%,#f0f0f0 50%,rgba(0, 0, 0, 0) 50%))"};
  /* background: linear-gradient(
    0deg,
    #f0f0f0 0%,
    #f0f0f0 50%,
    rgba(0, 0, 0, 0) 50%
  ); */
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

export const CatFoodButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CatFoodButtonWrap = styled.div`
  width: 62px;
  text-align: center;
  cursor: pointer;
`;

export const CatFeedButton = styled(CatFoodButton)``;
export const CatFeedImage = styled.img`
  margin-bottom: 5px;
  height: 45px;
  object-fit: none;
`;

export const CatWaterButton = styled(CatFoodButton)``;

export const CatSnackButton = styled(CatFoodButton)``;

export const CatFoodInput = styled.input`
  width: 220px;
  font-family: "SpoqaHanSansNeo-Regular";
  padding-left: 7px;
  margin-bottom: 30px;
  background: linear-gradient(
    0deg,
    #f0f0f0 0%,
    #f0f0f0 50%,
    rgba(0, 0, 0, 0) 50%
  );
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;
export const CatFoodSubmitButton = styled.button`
  width: 240px;
  padding: 14px 0px;
  border-radius: 44px;
  color: #ffffff;
  background-color: var(--main-color);
`;
