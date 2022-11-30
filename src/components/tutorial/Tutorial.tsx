/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel from './style'

const Tutorial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Carousel>
      <Slider {...settings}>
        <div>
          <img src="assets/images/tutorial_1.svg" alt="웹 튜토리얼1" />
        </div>
        <div>
          <img src="assets/images/tutorial_2.svg" alt="웹 튜토리얼2" />
        </div>
        <div>
          <img src="assets/images/tutorial_3.svg" alt="웹 튜토리얼3" />
        </div>
      </Slider>
    </Carousel>
  )
}

export default Tutorial