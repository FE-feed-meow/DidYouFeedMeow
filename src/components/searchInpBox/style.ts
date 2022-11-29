import styled from "styled-components";

const SearchWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 48px;
  padding: 0 30px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 4px 0;
  border-radius: 30px 30px 0 0;
  z-index: 10;
`;

const MenuBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
`;

const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 820px;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 40;
  border-radius: 30px;
`;

const SearchInput = styled.input`
  width: 290px;
  background-color: #f9f9f9;
  margin-left: 22px;
  padding: 6px 16px;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
`;

const ResetLocationBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 12px;
  padding: 0;
`;

export { SearchWrap, MenuBtn, ModalBg, SearchInput, ResetLocationBtn };
