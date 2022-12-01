import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
    font-family: "Shinb7Regular";
  }
`;

const ErrorButton = styled.button`
  width: 200px;
  height: 44px;
  margin-top: 30px;
  font-size: 16px;
  border-radius: 25px;
  color: #ffffff;
  background-color: var(--main-color);
`;

export { Wrap, ErrorButton };
