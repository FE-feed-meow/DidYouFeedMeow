import styled from "styled-components";

const Wrap = styled.div`
  padding: 15px 40px 37px;
`;

const FeedButton = styled.button`
  position: absolute;
  bottom: 50px;
  width: 310px;
  height: 44px;
  font-size: 16px;
  border-radius: 25px;
  background: var(--main-color);
  color: var(--background-color);
  :disabled {
    background: var(--disabled-button-color);
  }
`;
export { Wrap, FeedButton };
