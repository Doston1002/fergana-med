import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Layout.css";
import Navbar from "../navbar/Navbar";


const Layout = () => {
  return (
    <section>
      <main>
        <Header />
        <Navbar />
       
        <div className="main-app">
          <Outlet />
        </div>
        <Footer />
      </main>
    </section>
  );
};

export default Layout;
