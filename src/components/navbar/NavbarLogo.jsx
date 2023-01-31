import React from 'react'
import './Navbarlogo.css'
import logo from '../../assets/images/logo.png'
const NavbarLogo = () => {
  return (
      <section>
        <div className="navbar-logo">
          <div className="logo">
            <img src={logo} alt="" />
            <span className='navInfo-text'>
              <p>Farg’ona jamoat salomatligi</p>
              <h2>tibbiyot instituti</h2>
            </span>
          </div>
        </div>
      </section>
  );
}

export default NavbarLogo