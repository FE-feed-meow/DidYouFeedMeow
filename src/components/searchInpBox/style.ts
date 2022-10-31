import styled from "styled-components";

interface Search {
  setLocation: any;
  location: any;
}
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
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 307px;
  background-color: #f9f9f9;
  margin-left: 22px;
  padding: 6px 16px;
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 16px;
`;

const SearchBtn = styled.button``;

export { SearchWrap, SearchInput, SearchBtn };
