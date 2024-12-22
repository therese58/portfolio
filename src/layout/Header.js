import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed-top">
      <div className="mw d-flex align-items-center justify-content-between position-relative">
        {/* SVG */}
        <img
          src="/img/logo.svg"
          alt="logo"
          className="flex-shrink-0 mt-3"
          style={{ width: "40px", height: "55px" }}
        />

        {/* Navigation Menu */}
        <div className="d-flex flex-row gap-5 align-items-center">
          {menuItems.map((item, index) => (
            <div className="kr-h4 d-flex align-items-center" key={index}>
              <Link
                to={item.path}
                className="kr-h4 text-uppercase text-decoration-none"
                style={{ color: "inherit" }} // 기본 텍스트 스타일 유지
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
