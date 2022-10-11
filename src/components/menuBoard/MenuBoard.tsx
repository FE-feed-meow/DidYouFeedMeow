import React from 'react'
import Image from '../../atoms/image/Image'
import styled from 'styled-components'

const MenuBoard = () => {
  return (
    <AsideWrap>
      <ProfileWrap>
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
          <MenuBoardBtn>
            집사 정보
          </MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn>
            동네 냥 소식통
          </MenuBoardBtn>
        </li>
        <li>
          <MenuBoardBtn>
            밥줬냥 신문
          </MenuBoardBtn>
        </li>
      </MenuBoardUl>
    </AsideWrap>
  )
}

export default MenuBoard

const AsideWrap = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  height: 820px;
  padding: 72px 50px;
  background-image: url('assets/images/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`

const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-family: 'Shinb7Regular';
    font-size: 24px;
  }
  p {
    margin-top: 5px;
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 12px;
    color: #797979;
  }
`

const MenuBoardUl = styled.ul`
  margin-top: 52px;
  li + li {
    margin-top: 30px;
  }
`

const MenuBoardBtn = styled.button`
  font-size: 24px;
  padding: 0 20px;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`