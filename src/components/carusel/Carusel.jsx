import React from "react";

import "./Carusel.css";

import caruselImg from "../../assets/images/carusel-image.png";
import { CaruselIconLeft, CaruselIconRight } from "../../assets/icons/Icons";

const Carusel = () => {
  return (
    <section>
      <span className="carusel-icon left-icon">
        <CaruselIconLeft />
      </span>
      <img width="100%" src={caruselImg} alt="" />
      <span className="carusel-icon right-icon">
        <CaruselIconRight />
      </span>
    </section>
  );
};

export default Carusel;
