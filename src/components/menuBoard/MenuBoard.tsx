import Image from '../../atoms/image/Image'
import {
  AsideWrap,
  ProfileWrap,
  MenuBoardUl,
  MenuBoardBtn
} from './style'

const MenuBoard = () => {
  return (
      <AsideWrap>
        <ProfileWrap to='/profile'>
          <div>
            <Image 
              width={50}
              src={'assets/images/profile.svg'}
              alt={'프로필 이미지'}/>
          </div>
          <div>
            <h1>쯔쯔언니</h1>
            <p>경기도 하남시</p>
          </div>
        </ProfileWrap>  
        <MenuBoardUl>
          <li>
            <MenuBoardBtn to='/profile'>
              집사 정보
            </MenuBoardBtn>
          </li>
          <li>
            <MenuBoardBtn to='/letters'>
              동네 냥 소식통
            </MenuBoardBtn>
          </li>
          <li>
            <MenuBoardBtn to='/news'>
              밥줬냥 신문
            </MenuBoardBtn>
          </li>
        </MenuBoardUl>
      </AsideWrap>
  )
}

export default MenuBoard