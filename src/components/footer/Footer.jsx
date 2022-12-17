import React from "react";

import "./Footer.css";

import {
  FacebookIcon,
  FooterPhoneIcon,
  InstagramIcon,
  LocationIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../assets/icons/Icons";
import mainLogo from "../../assets/images/logo.png";
import mapPng from "../../assets/images/map.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={mainLogo} alt="Main Logo" />
        <div>
          <p>Farg’ona jamoat salomatligi</p>
          <p>tibbiyot instituti</p>
        </div>
      </div>

      <div className="footer-content">
        {/* BLOK-1 */}
        <div className="block-1">
          {/* INSTITUT */}
          <div>
            <p>Intitut</p>
            <ul>
              <li>Institut haqida</li>
              <li>Tuzilma</li>
              <li>Kuzatuv kengashi</li>
              <li>FJSTI Ilmiy jurnali</li>
              <li>Bo’sh ish o’rinlari</li>
              <li>Ochiq ma’lumotlar</li>
            </ul>
          </div>

          {/* MATBUOT XIZMATI */}
          <div>
            <p>Matbuot xizmati</p>
            <ul>
              <li>Yangiliklar</li>
              <li>E’lonlar</li>
              <li>Savol va javoblar</li>
              <li>Tenderlar</li>
              <li>Institut gazetasi</li>
            </ul>
          </div>
        </div>
        {/* BLOK-1 */}

        {/* BLOK-2 */}
        <div className="block-2">
          {/* TALABALAR */}
          <div>
            <p>Talabalar</p>
            <ul>
              <li>Bakalavriyat</li>
              <li>Magistratura</li>
              <li>Klinik ordinatura</li>
              <li>Xalqaro talabalar</li>
              <li>Qo’shma ta’lim</li>
              <li>Doktarantura</li>
            </ul>
          </div>

          {/* FAOLIYAT */}
          <div>
            <p>Faoliayat</p>
            <ul>
              <li>Kafedralar</li>
              <li>Ilmiy faoliyat</li>
              <li>Xalqaro faoliyat</li>
              <li>O’quv-uslubiy faoliyat</li>
              <li>Markaz va tashkilotlar </li>
              <li>FJSTI texnikumi va klinikalar</li>
            </ul>
          </div>
        </div>
        {/* BLOK-2 */}

        {/* CONTACT */}
        <div className="contact">
          {/* SOCIAL NETWORKS */}
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <TelegramIcon />
            </li>
          </ul>

          {/* TELEPHONE AND EMAIL */}
          <div className="contact__phone-email">
            <div className="phone-email">
              <FooterPhoneIcon />
              <p>(73) 245 59 07 (95) 400 01 14</p>
            </div>
            <p>info@fjsti.uz</p>
            <button>Murojaat yuborish</button>
          </div>

          {/* MAP */}
          <div className="contact__map">
            <img src={mapPng} alt="Map Img" width="400" height="auto"  />
            <div>
              <LocationIcon />
              <p>Fargʻona sh, Yangi Turon k, 2-a uy</p>
            </div>
          </div>
        </div>
        {/* CONTACT */}
      </div>
    </footer>
  );
};

export default Footer;
