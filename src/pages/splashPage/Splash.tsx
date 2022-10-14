import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image/Image";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 48px;
    font-family: "Shinb7Regular";
  }
`;

const Splash = () => {
  return (
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
  );
};

export default Splash;
