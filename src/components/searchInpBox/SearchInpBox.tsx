import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/image/Image';

const SearchInpBox = () => {
  return (
    <>
      <SearchWrap>
        <Image 
          width={20}
          src="assets/icons/icon-menu.svg" 
          alt="메뉴 버튼" />
          <SearchInput type="text" placeholder='장소, 주소를 입력해주세요' />
      </SearchWrap>
    </>
  )
}

export default SearchInpBox

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
  margin-left: 12px;
  padding: 4px 32px;
  font-size: 14px;
`
