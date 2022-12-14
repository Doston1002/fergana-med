import React from "react";

import "./Home.css";

import {
  TeachIcon,
  StudentIcon,
  ReadyDoctorIcon,
  LabaratoryIcon,
  ForeignStudentsIcon,
  MedicalTeamIcon,
  ForeignFacultiesIcon,
  CareWorkIcon,
  DoubleQuoteIcon,
} from "../assets/icons/Icons";
import Carusel from "../components/carusel/Carusel";
import rectorPicture from "../assets/images/rector.png";
import InfinityLoopSlider from "../components/infinity_auto_scroll/InfinityLoopSlider";

const Home = () => {
  return (
    <>
      <Carusel />

      {/* SHOW CASE */}
      <div className="show-case">
        <div className="show-case__statics">
          <div>
            <TeachIcon />
            <span>390</span>
            <p>O`qituvchi va professorlar</p>
          </div>
          <div>
            <StudentIcon />
            <span>4890</span>
            <p>Talabalar</p>
          </div>
          <div>
            <ReadyDoctorIcon />
            <span>890</span>
            <p>Tayyorlangan shifokorlar</p>
          </div>
          <div>
            <LabaratoryIcon />
            <span>14</span>
            <p>Laboratoriyalar</p>
          </div>
          <div>
            <ForeignStudentsIcon />
            <span>274</span>
            <p>Chet el talabalari</p>
          </div>
        </div>
        <div className="show-case__header">
          <ul>
            <li>Yangiliklar</li>
          </ul>

          <ul>
            <li>Hammasi</li>
            <li>Yangiliklar</li>
            <li>Press-relizlar</li>
            <li>E`lon va tenderlar</li>
          </ul>
        </div>
        <div className="show-case__cards"></div>
      </div>
      {/* SHOW CASE */}

      {/* FACULTIES */}
      <div className="faculty">
        <h3>Fakultetlar</h3>
        <div className="faculty__item">
          <CareWorkIcon />
          <p>jkndondoi</p>
        </div>
        <div className="vertical-line"></div>
        <div className="faculty__item">
          <MedicalTeamIcon />
          <p>kjnsdondon</p>
        </div>
        <div className="vertical-line"></div>
        <div className="faculty__item">
          <ForeignFacultiesIcon />
          <p>kdndsn</p>
        </div>
      </div>
      {/* FACULTIES */}

      {/* RESERCH AND OUR COMFORT */}
      <div className="reserch-comfort">
        <div className="reserch">
          <h2>Ilmiy tadqiqotlar</h2>
          <article></article>
        </div>
        <div className="comfort">
          <h2>Bizning afzalliklarimiz</h2>
          <article></article>
        </div>
      </div>
      {/* RESERCH AND OUR COMFORT */}

      {/* OTHER SECTION */}
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
          <h3>Xalqaro daraja</h3>
          <div>
            Farg’ona jamoat salomatligi tibbiyot instituti diplomi dunyodagi
            professional hamjamiyatlarning aksariyati tomonidan tan olingan.
            Farg’ona jamoat salomatligi tibbiyot institutining 7000 dan ortiq
            bitiruvchilari 138 mamlakatda ishlaydi. Yevropa, Amerika, Osiyo va
            Afrikadagi vazirliklar, viloyatlar va eng yirik tibbiyot
            universitetlari muntazam ravishda eng yaxshi bitiruvchilarni
            Farg’ona jamoat salomatligi tibbiyot institutiga asosiy kursga,
            ordinatura va aspiranturaga o‘qishga yuboradilar. O‘quv rejalari,
            jumladan, ordinatura dasturlari turli mamlakatlar sog‘liqni saqlash
            vazirliklari talablariga muvofiq muvofiqlashtiriladi.{" "}
          </div>
        </div>
      </div>
      {/* OTHER SECTION */}

      {/* BLOG OF RECTOR */}
      <div className="blog-of-rector">
        <div className="picture-of-rector">
          <div className="layer-0"></div>
          <div className="layer-1"></div>
          <div className="layer-2">
            <img src={rectorPicture} alt="rectorni rasmi" />
          </div>
        </div>
        <div className="note-of-rector">
          <h3>
            "Ta'lim - bu dunyoni o'zgartirish uchun <br /> ishlatishingiz mumkin
            bo'lgan eng kuchli quroldir."
          </h3>

          <p>
            O'tmishda ko'p yillar davomida odamlar o'zlarining psixologik
            ehtiyojlarini qondirish orqali omon qolishgan. Bugungi kunda biz
            intellektual qobiliyatlar juda muhim bo'lgan davrda yashash
            sharafiga egamiz. Har qanday ma'lumotni barcha qiziquvchan onglar
            uchun osongina olish mumkin va texnologik evolyutsiya buning uchun
            doimo mavjud bo'lishni ta'minlaydi. Biroq, ma'lumot izlayotganlar va
            bilimga intilganlar o'rtasida aniq farq bor.
          </p>

          <p>Sidikov Akmal Abdikaxarovich</p>

          <button>Rektor blogi</button>
        </div>
      </div>
      {/* BLOG OF RECTOR */}

      {/* LIFE OF STUDENTS */}
      <div className="life-of-students">
        <h3>Talabalar hayoti</h3>
        <InfinityLoopSlider/>
      </div>
      {/* LIFE OF STUDENTS */}
    </>
  );
};

export default Home;
