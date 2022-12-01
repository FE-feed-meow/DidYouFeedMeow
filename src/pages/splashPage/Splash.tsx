import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Image from "../../atoms/image/Image";
import { Wrap, Animation } from './style'

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  });
  return (
    <Animation>
      <Wrap>
        <Image
          marginTop={300}
          marginBottom={15}
          width={113}
          height={85}
          alt=""
          src="assets/images/logo.svg"
        />
        <p>밥줬냥</p>
      </Wrap>
    </Animation>
  );
};

export default Splash;
