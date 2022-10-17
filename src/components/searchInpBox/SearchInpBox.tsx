import React from 'react';
import {
  SearchWrap,
  MenuBtn,
  SearchInput
} from './style'

const SearchInpBox = () => {
  return (
    <>
      <SearchWrap>
          <MenuBtn type="button">
            <img src="assets/icons/icon-menu.svg" alt="메뉴 버튼" />
          </MenuBtn>
          <SearchInput type="text" placeholder='장소, 주소를 입력해주세요' />
      </SearchWrap>
    </>
  )
}

export default SearchInpBox