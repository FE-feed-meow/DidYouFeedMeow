import styled from 'styled-components';

const ModalWrap = styled.div`
  position: relative;
`

const ArticleWrap = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 55px;
  background-color: var(--background-color);
  /* &::before {
    content: '';
    display: block;
    background-image: url('assets/icons/icon-close.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 15px;
    height: 28px;
    position: absolute;
    top: -28px;
    right: 0;
  } */
`

const ModalCatImg = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 55px 55px 0 0;
  object-fit: cover;
`

const ModalCatInfoWrap = styled.div`
  padding: 14px 30px;
`

const ModalCatLocation = styled.p`
  font-family: 'SpoqaHanSansNeo-Regular';
  font-size: 12px;
  color: #797979;
  margin-bottom: 12px;
  span::before {
    content: '/';
    display: inline-block;
    margin: 0 4px;
  }
` 

const ModalCatFeedTime = styled.p`
  font-family: 'SpoqaHanSansNeo-Regular';
  font-size: 12px;
  color: #000;
`

const ModalCatNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  h1 {
    font-family: 'Shinb7Regular';
    font-size: 22px;
  }
  span {
    padding: 0 10px;
    background: linear-gradient(
      0deg,
      rgba(255, 240, 0, 0.5) 0%,
      rgba(255, 240, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  }
  button {
    padding: 0;
  }
`

const CloseBtn = styled.button`
  padding: 0;
  position: absolute;
  top: -32px;
  right: 0;
`

export {
  ModalWrap, 
  ArticleWrap, 
  ModalCatImg,
  ModalCatInfoWrap,
  ModalCatNameWrap,
  ModalCatLocation,
  ModalCatFeedTime,
  CloseBtn
}