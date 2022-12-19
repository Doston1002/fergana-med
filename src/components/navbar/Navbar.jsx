import React from 'react'

import "./Navbar.css"
import NavbarLogo from './NavbarLogo'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="left-nav">
        <li >
          Institut 
        </li>
        <li>Tuzilma</li>
        <li>Faoliyat</li>
        <li>Talabalarga</li>
      </ul>
      {/* <NavbarLogo /> */}
      <ul className="right-nav">
        <li>Abiturientlarga</li>
        <li>Xizmatlar</li>
        <li>Moodle</li>
        <li>Kongress</li>
      </ul>
    </nav>
  );
}

export default Navbar