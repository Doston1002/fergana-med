import React from "react";
import Carusel from "../components/carusel/Carusel";

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
          <h2>Ilmiy tadqiqotlar</h2>
          <article>
            
          </article>
        </div>
        <div className="comfort">
          <h2>Bizning afzalliklarimiz</h2>
          <article>

          </article>
        </div>
      </div>
      {/* RESERCH AND OUR COMFORT */}

      {/* OTHER SECTION */}
      <div className="reason-section">
        s
      </div>
      {/* OTHER SECTION */}
    </>
  );
};

export default Home;
