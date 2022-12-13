import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Reserch.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import caruselImg from "../../assets/images/carusel-image.png";
const Reserch = () => {
  return (
    <section className="Reserch-info">
      <>
        <h2>Ilmiy tadqiqotlar</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper reserchImg"
        >
          <SwiperSlide className="">
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
      </>
    </section>
  );
}

export default Reserch