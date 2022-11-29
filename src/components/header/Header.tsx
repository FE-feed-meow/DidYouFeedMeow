import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderWrap, H2 } from "./style";

import Image from "../../atoms/image/Image";

export interface HeaderProps {
  children?: React.ReactNode;
  onHome?: boolean;
}

const Header = ({ children, onHome }: HeaderProps) => {
  const navigate = useNavigate();
  // 헤더에 홈을 넣고 싶지 않다면 onHome에 false를 전달해주세요
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
      {onHome ? null : (
        <button type="button">
          <Image
            src="../assets/images/home.svg"
            alt="홈 버튼"
            onClick={() => navigate("/home")}
            width={24}
          />
        </button>
      )}
    </HeaderWrap>
  );
};

export default Header;
