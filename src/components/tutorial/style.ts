import styled from "styled-components";

const Carousel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 724px;
  padding: 40px;
  .slick-prev:before {
    margin-left: -80px;
    content: url("assets/icons/icon-arrow-left-white.svg");
  }
  .slick-next:before {
    margin-left: 40px;
    content: url("assets/icons/icon-arrow-right-white.svg");
  }
  .slick-dots li {
    margin: 0 10px;
  }
  .slick-dots li button:before {
    content: url("assets/icons/icon-slide-circle.svg");
  }
  .slick-dots li.slick-active button:before {
    content: url("assets/icons/icon-slide-active.svg");
  }
`;

export default Carousel;
