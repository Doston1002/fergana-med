import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import lexuz from "../../assets/images/lexuz.png";
import maktab from "../../assets/images/maktab.png";
import yoshlar from "../../assets/images/yoshlar.png";
import dtm from "../../assets/images/dtm.png";
import "./Partner.css";
const Partner = () => {
  return (
    <section>
      <>
        <h3>Hamkorlar</h3>
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper partnerInfo"
        >
          <SwiperSlide>
            <div>
              <span className="">
                <img src={lexuz} alt="" />
              </span>
              <h3>Ўзбекистон Республикаси Қонун ҳужжатлари</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <span className="">
                <img src={maktab} alt="" />
              </span>
              <h3>o'zbekiston oliy va o'rta maxsus ta'lim vazirligi</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="">
                <img src={yoshlar} alt="" />
              </span>
              <h3>o'zbekiston yoshlar ittifoqi</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="">
                <img src={dtm} alt="" />
              </span>
              <h3>Davlat test markazi</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="">
                <img src={lexuz} alt="" />
              </span>
              <h3>Ўзбекистон Республикаси Қонун ҳужжатлари</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <span className="">
                <img src={maktab} alt="" />
              </span>
              <h3>o'zbekiston oliy va o'rta maxsus ta'lim vazirligi</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="">
                <img src={yoshlar} alt="" />
              </span>
              <h3>o'zbekiston yoshlar ittifoqi</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <span className="">
                <img src={dtm} alt="" />
              </span>
              <h3>Davlat test markazi</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};

export default Partner;
