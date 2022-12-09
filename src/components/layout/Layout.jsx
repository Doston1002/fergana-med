import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <section>
      <main>
        <Header />

        <div className="main-app">
          <Outlet />
        </div>

        <Footer />
      </main>
    </section>
  );
};

export default Layout;
