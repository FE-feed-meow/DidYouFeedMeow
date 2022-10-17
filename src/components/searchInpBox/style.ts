import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 4px 0;
`

const MenuBtn = styled.button`
  width: 20px;
  padding: 0;
  img {
    vertical-align: middle;
  }
`
const SearchInput = styled.input`
  width: 307px;
  background-color: #f9f9f9;
  margin-left: 12px;
  padding: 6px 16px;
  font-size: 16px;
`

export {
  SearchWrap,
  MenuBtn,
  SearchInput
}