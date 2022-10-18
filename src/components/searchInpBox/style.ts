import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 30px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 4px 0;
`

const SearchInput = styled.input`
  width: 307px;
  background-color: #f9f9f9;
  margin-left: 22px;
  padding: 6px 16px;
  font-size: 16px;
`

export {
  SearchWrap,
  SearchInput
}