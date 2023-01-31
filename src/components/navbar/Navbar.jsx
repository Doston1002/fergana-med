import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <nav className="nav">
      <button className="nav-btn">
        <MenuFoldOutlined />
      </button>
      <ul className="left-nav">
        <li>
          <p>Institut</p> <DownOutlined />
        </li>
        <li>
          <p>Tuzilma</p> <DownOutlined />
        </li>
        <li>
          <p>Faoliyat</p> <DownOutlined />
        </li>
        <li>
          <p>Talabalarga</p> <DownOutlined />
        </li>
      </ul>
      {/* <NavbarLogo /> */}
      <ul className="right-nav">
        <li>
          <p>Abiturientlarga</p> <DownOutlined />
        </li>
        <li>
          <p>Xizmatlar</p> <DownOutlined />
        </li>
        <li>
          <p>Moodle</p> <DownOutlined />
        </li>
        <li>
          <p>Kongress</p> <DownOutlined />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
