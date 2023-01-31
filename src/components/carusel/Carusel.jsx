import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Carusel.css";

import caruselImg from "../../assets/images/carusel-image.png";
import { CaruselIconLeft, CaruselIconRight } from "../../assets/icons/Icons";

const Carusel = () => {
  return (
    <section>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper homePage__img"
        >
          <SwiperSlide>
            <img width="100%" src={caruselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src={caruselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src={caruselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src={caruselImg} alt="" />
          </SwiperSlide>
        </Swiper>
      {/* <img src={caruselImg} alt="" width="100%" /> */}
    </section>
  );
};

export default Carusel;
