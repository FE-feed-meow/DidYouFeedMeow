import styled, { keyframes} from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AsideWrap = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 820px;
  padding: 72px 40px;
  background-image: url('assets/images/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  animation: ${fadeIn} .2s ease-in;
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

export {
  AsideWrap,
  ProfileWrap,
  MenuBoardUl,
  MenuBoardBtn,
}