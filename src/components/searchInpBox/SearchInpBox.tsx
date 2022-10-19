import { SearchWrap, SearchInput } from './style'

const SearchInpBox = () => {
  return (
    <>
      <SearchWrap>
        <SearchInput type="text" placeholder='장소, 주소를 입력해주세요' />
      </SearchWrap>
    </>
  )
}

export default SearchInpBox