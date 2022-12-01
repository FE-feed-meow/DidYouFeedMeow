import Image from "@atoms/image/Image";
import React from "react";
import WrapFeed from './style';


const CatFeedNone = () => {
  return (
    <WrapFeed>
      <Image
        src="../../assets/images/404.svg"
        width={103}
        height={73}
        alt="밥이 없습니다."
      />
      <p>꼬르르륵</p>
    </WrapFeed>
  );
};

export default CatFeedNone;
