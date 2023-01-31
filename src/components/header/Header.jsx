import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import {
  GlassIcon,
  LogOutIcon,
  PhoneIcon,
  SmsIcon,
} from "../../assets/icons/Icons";
import { DownOutlined } from "@ant-design/icons";
import mainLogo from "../../assets/images/logo.png";
import qiyinlogo from "../../assets/images/qiyinlogo.png";


const Header = () => {
  return (
    <header>
      <div className="h-item left">
        <p>25.02.2022 (GMT +5)</p>
        <GlassIcon />
      </div>

      <div className="h-item middle">
        <Link to="/" className="header-logo">
          <img src={mainLogo} alt="Main Logo" height="65" />
          <div>
            <span className="a">Farg’ona jamoat salomatligi</span>
            <span className="b">tibbiyot instituti</span>
          </div>
        </Link>
        {/* <svg
          width="500"
          height="300"
          viewBox="0 0 686 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_111)">
            <path
              d="M343.081 190.5V0H662.385V50.872C662.385 89.8379 667.44 124.979 628.831 146.122C592.463 166.038 423.178 184.005 343.081 190.5Z"
              fill="white"
            />
            <path
              d="M343.081 190.5V0H23.7773V50.872C23.7773 89.8379 18.722 124.979 57.3312 146.122C93.6993 166.038 262.984 184.005 343.081 190.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_111"
              x="0.55957"
              y="-19"
              width="685.043"
              height="236.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="11.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_111"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_111"
                result="shape"
              />
            </filter>
          </defs>
        </svg> */}
        <img src={qiyinlogo} alt="" width="500"/>
      </div>

      <div className="h-item right">
        <div className="right-item">
          <PhoneIcon />
          <p>+99873 245 59 07</p>
        </div>
        <div className="right-item">
          <SmsIcon />
          <p>info@fjsti.uz</p>
        </div>
        <div className="right-item">
          <p>Ru</p>
          <DownOutlined />
        </div>
        <div className="right-item">
          <LogOutIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
