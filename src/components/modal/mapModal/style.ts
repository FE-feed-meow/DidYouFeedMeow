import styled from 'styled-components';

const ArticleWrap = styled.article`
  position: absolute;
  top: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 260px;
  padding: 40px 30px;
  background-image: url('assets/images/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0 -4px 4px 0;
  p {
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 14px;
  }
  .catRegisterBtn {
    width: 100%;
  }
`

export { ArticleWrap }