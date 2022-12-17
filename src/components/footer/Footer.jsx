import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/" className="footer-logo">
        <img src={mainLogo} alt="Main Logo" />
        <div>
          <p>Farg’ona jamoat salomatligi</p>
          <p>tibbiyot instituti</p>
        </div>
      </Link>

      <div className="footer-content">
        {/* BLOK-1 */}
        <div className="block-1">
          {/* INSTITUT */}
          <div>
            <p>Intitut</p>
            <ul>
              <li><Link>Institut haqida</Link></li>
              <li><Link>Tuzilma</Link></li>
              <li><Link>Kuzatuv kengashi</Link></li>
              <li><Link>FJSTI Ilmiy jurnali</Link></li>
              <li><Link>Bo’sh ish o’rinlari</Link></li>
              <li><Link>Ochiq ma’lumotlar</Link></li>
            </ul>
          </div>

          {/* MATBUOT XIZMATI */}
          <div>
            <p>Matbuot xizmati</p>
            <ul>
              <li><Link>Yangiliklar</Link></li>
              <li><Link>E’lonlar</Link></li>
              <li><Link>Savol va javoblar</Link></li>
              <li><Link>Tenderlar</Link></li>
              <li><Link>Institut gazetasi</Link></li>
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
              <li><Link>Bakalavriyat</Link></li>
              <li><Link>Magistratura</Link></li>
              <li><Link>Klinik ordinatura</Link></li>
              <li><Link>Xalqaro talabalar</Link></li>
              <li><Link>Qo’shma ta’lim</Link></li>
              <li><Link>Doktarantura</Link></li>
            </ul>
          </div>

          {/* FAOLIYAT */}
          <div>
            <p>Faoliayat</p>
            <ul>
              <li><Link>Kafedralar</Link></li>
              <li><Link>Ilmiy faoliyat</Link></li>
              <li><Link>Xalqaro faoliyat</Link></li>
              <li><Link>O’quv-uslubiy faoliyat</Link></li>
              <li><Link>Markaz va tashkilotlar </Link></li>
              <li><Link>FJSTI texnikumi va klinikalar</Link></li>
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
