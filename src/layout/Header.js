import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../assets/img/logo.svg";

const Navigation = () => {
  const menuItems = ["Home", "Profile", "Project", "Contact"];

  return (
    <header className="fixed-top">
      <div className="mw d-flex align-items-center justify-content-between position-relative">
        {/* SVG */}
        <img
          src={logo}
          alt="logo"
          className="flex-shrink-0 mt-3"
          style={{ width: "40px", height: "55px" }}
        />

        {/* Navigation Menu */}
        <div className="d-flex flex-row gap-5 align-items-center">
          {menuItems.map((item, index) => (
            <div className="kr-h4 d-flex align-items-center" key={index}>
              <span className="kr-h4 text-uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
