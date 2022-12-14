import React from 'react'
 import {DoubleQuoteIcon } from "../../assets/icons/Icons";
 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import './Selection.css'
 import "swiper/css/navigation";
 import "swiper/css/pagination";
 import {
   Autoplay,
   Navigation,
   Pagination,
   Mousewheel,
   Keyboard,
 } from "swiper";
const Selection = () => {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };
  return (
    <div className="reason-section">
      <div className="reason-section-left">
        <div>
          <p>
            Bizning intitutni <br /> tanlash uchun
          </p>
          <h1>5</h1>
          <p>sabab</p>
        </div>
        <div>
          <button className="btn c-btn">1</button>
          <button className="btn c-btn">2</button>
          <button className="btn c-btn">3</button>
          <button className="btn c-btn">4</button>
          <button className="btn c-btn">5</button>
        </div>
      </div>
      <div className="reason-section-right">
      
        <DoubleQuoteIcon className={"double-quote"} />
        <>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper hkgbhj"
          >
            <SwiperSlide>
              {" "}
              <h3>Xalqaro daraja</h3>
              <div>
                Farg’ona jamoat salomatligi tibbiyot instituti diplomi dunyodagi
                professional hamjamiyatlarning aksariyati tomonidan tan olingan.
                Farg’ona jamoat salomatligi tibbiyot institutining 7000 dan
                ortiq bitiruvchilari 138 mamlakatda ishlaydi. Yevropa, Amerika,
                Osiyo va Afrikadagi vazirliklar, viloyatlar va eng yirik
                tibbiyot universitetlari muntazam ravishda eng yaxshi
                bitiruvchilarni Farg’ona jamoat salomatligi tibbiyot institutiga
                asosiy kursga, ordinatura va aspiranturaga o‘qishga yuboradilar.
                O‘quv rejalari, jumladan, ordinatura dasturlari turli
                mamlakatlar sog‘liqni saqlash vazirliklari talablariga muvofiq
                muvofiqlashtiriladi.{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>Sjhg</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
           
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default Selection