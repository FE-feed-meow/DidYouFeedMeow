import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderWrap, H2 } from "./style";

import Image from "../../atoms/image/Image";

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <button type="button">
        <Image
          width={18}
          src="../assets/icons/icon-arrow-left.svg"
          alt="뒤로가기 버튼"
          onClick={() => navigate(-1)}
        />
      </button>
      <H2>{children ?? children}</H2>
    </HeaderWrap>
  );
};

export default Header;
