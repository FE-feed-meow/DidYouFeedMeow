import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/Image";

interface HeaderProps {
  children?: React.ReactNode;
}

const HeaderWrap = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &::after {
    content: "";
    display: block;
  }
`;

const H2 = styled.h2`
  font-size: 28px;
  font-family: "Shinb7Regular";
`;

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderWrap>
      <Image
        width={18}
        src="assets/icons/icon-arrow-left.svg"
        alt="뒤로가기 버튼"
      />
      <H2>{children ?? children}</H2>
    </HeaderWrap>
  );
};

export default Header;
