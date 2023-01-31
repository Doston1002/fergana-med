import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import lexuz from "../../assets/images/lexuz.png";
import maktab  from "../../assets/images/maktab.png";
import yoshlar from "../../assets/images/yoshlar.png";
import dtm from "../../assets/images/dtm.png";
import "./Partner.css";
const Partner = () => {
  return (
    <section>
        <h2 className="">Hamkorlar</h2>
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
          className="mySwiper partnerInfo"
        >
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={lexuz} alt="" />
            </div>
            <p>Ўзбекистон Республикаси Қонун ҳужжатлари</p>
          </SwiperSlide>

          <SwiperSlide className="partners-item">
            <div className="">
              <img src={maktab} alt="" />
            </div>
            <p>o'zbekiston oliy va o'rta maxsus ta'lim vazirligi</p>
          </SwiperSlide>
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={yoshlar} alt="" />
            </div>
            <p>o'zbekiston yoshlar ittifoqi</p>
          </SwiperSlide>
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={dtm} alt="" />
            </div>
            <p>Davlat test markazi</p>
          </SwiperSlide>
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={lexuz} alt="" />
            </div>
            <p>Ўзбекистон Республикаси Қонун ҳужжатлари</p>
          </SwiperSlide>

          <SwiperSlide className="partners-item">
            <div className="">
              <img src={maktab} alt="" />
            </div>
            <p>o'zbekiston oliy va o'rta maxsus ta'lim vazirligi</p>
          </SwiperSlide>
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={yoshlar} alt="" />
            </div>
            <p>o'zbekiston yoshlar ittifoqi</p>
          </SwiperSlide>
          <SwiperSlide className="partners-item">
            <div className="">
              <img src={dtm} alt="" />
            </div>
            <p>Davlat test markazi</p>
          </SwiperSlide>
        </Swiper>
    </section>
  );
};

export default Partner;
