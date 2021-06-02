import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true,
      sliderArray: [
        {
          imageUrl: '/image/girl.jpg'
        },
        {
          imageUrl: '/image/study.jpg'
        },
        {
          imageUrl: '/image/student.jpg'
        }
      ]
    }
  }
  componentWillMount() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]);
  }
  render() {
    return (
      <Swiper
        pagination={true}
        spaceBetween={50}
        navigation={true}
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
        autoplay={true}
        loop={true}
      >
        {this.state.sliderArray.map((item, i) => (
          <SwiperSlide>
            <img src={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}
export default Slider;