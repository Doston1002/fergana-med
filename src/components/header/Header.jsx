import React from "react";

import "./Header.css";

import {
  DownIcon,
  GlassIcon,
  LogOutIcon,
  PhoneIcon,
  SmsIcon,
} from "../../assets/icons/Icons";
import { DownOutlined } from "@ant-design/icons";
import mainLogo from "../../assets/images/main-logo.png";

const Header = () => {
  return (
    <header>
      <div className="h-item left">
        <p>25.02.2022 (GMT +5)</p>
        <GlassIcon />
      </div>
      <div className="h-item middle">
        any
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
