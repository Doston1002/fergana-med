import React from "react";
import Carusel from "../components/carusel/Carusel";
import Reserch from "../components/reserch/Reserch";
import Superiority from "../components/superiority/Superiority";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Home.css";
import ReserchImg from "../assets/images/tadqiqot.png";
import {
  TeachIcon,
  StudentIcon,
  ReadyDoctorIcon,
  LabaratoryIcon,
  ForeignStudentsIcon,
  MedicalTeamIcon,
  ForeignFacultiesIcon,
  CareWorkIcon,
} from "../assets/icons/Icons";

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
        <h2>Fakultetlar</h2>
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
          <Reserch />
          <article></article>
        </div>
        <div className="comfort">
          <Superiority />
          
        </div>
      </div>
      {/* RESERCH AND OUR COMFORT */}

      {/* OTHER SECTION */}
      <div className="reason-section">s</div>
      {/* OTHER SECTION */}
    </>
  );
};

export default Home;
