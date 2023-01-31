import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Superiority.css";

import {
  Superiority1,
  Superiority2,
  Superiority3,
  Superiority4,
  Superiority5,
} from "../../assets/icons/Icons";

const Superiority = () => {
  return (
    <section className="comfort">
      <>
        <h2 className="">Bizning afzalliklarimiz</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper superiorityInfo"
        >
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority1 />
            </span>
            <p>Taʼlim sifatini nazorat qilishning avtomatlashtirilganligi</p>
          </SwiperSlide>
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority2 />
            </span>
            <p>
              O‘quv auditoriya va <br /> laboratoriyalarning <br /> zamonaviy uskunalar <br /> bilan
              taʼminlanganligi
            </p>
          </SwiperSlide>
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority3 />
            </span>
            <p>
              Taʼlim jarayoniga nufuzli <br /> chet el klinikalari va <br />
              universitetlaridan ilg‘or <br /> mutaxassislarni jalb etish
            </p>
          </SwiperSlide>
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority4 />
            </span>
            <p>To‘liq avtomatlashtirilgan <br /> universitet</p>
          </SwiperSlide>
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority5 />
            </span>
            <p>Taʼlimning ilk <br /> bosqichlaridan tibbiyot <br /> amaliyotiga jalb etish</p>
          </SwiperSlide>
          <SwiperSlide className="comfort-item">
            <span className="icon">
              <Superiority5 />
            </span>
            <p>Taʼlimning ilk <br /> bosqichlaridan tibbiyot <br /> amaliyotiga jalb etish</p>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};

export default Superiority;
