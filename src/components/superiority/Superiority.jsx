import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
 import "./Superiority.css"

 import {
   Superiority1,
   Superiority2,
   Superiority3,
   Superiority4,
   Superiority5,
 } from "../../assets/icons/Icons";

const Superiority = () => {
  return (
    <section>
      <>
        <h3>Bizning afzalliklarimiz</h3>
        <Swiper
          slidesPerView={5}
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
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority1 />
              </span>
              <h3>
                Taʼlim sifatini nazorat qilishning avtomatlashtirilganligi
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority2 />
              </span>
              <h3>
                O‘quv auditoriya va laboratoriyalarning zamonaviy uskunalar
                bilan taʼminlanganligi
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority3 />
              </span>
              <h3>
                Taʼlim jarayoniga nufuzli chet el klinikalari va
                universitetlaridan ilg‘or mutaxassislarni jalb etish
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority4 />
              </span>
              <h3>To‘liq avtomatlashtirilgan universitet</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority5 />
              </span>
              <h3>
                Taʼlimning ilk bosqichlaridan tibbiyot amaliyotiga jalb etish
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority1 />
              </span>
              <h3>
                Taʼlim sifatini nazorat qilishning avtomatlashtirilganligi
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="icon">
                <Superiority2 />
              </span>
              <h3>
                O‘quv auditoriya va laboratoriyalarning zamonaviy uskunalar
                bilan taʼminlanganligi
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
}

export default Superiority