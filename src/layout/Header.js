import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../assets/logo.svg";
import figmaIcon from "../assets/svg/figma.svg";
import githubIcon from "../assets/svg/github.svg";

const Navigation = () => {
  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Project", path: "/project" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed-top">
      <div className="mw d-flex align-items-center justify-content-between position-relative mt-3">
        {/* SVG */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="flex-shrink-0"
            style={{ width: "40px", height: "55px" }}
          />
        </Link>

        {/* Navigation Menu */}
        <div className="d-flex flex-row gap-5 align-items-center">
          {menuItems.map((item, index) => (
            <div className="kr-h4 d-flex align-items-center" key={index}>
              <Link
                to={item.path}
                className="kr-h4 text-uppercase text-decoration-none"
                style={{ color: "inherit" }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div
          className="d-flex flex-row align-items-center justify-content-start"
          style={{ gap: "24px", flexShrink: 0, position: "relative" }}
        >
          {/* GitHub Icon */}
          <a
            href="https://github.com/therese58/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              style={{ width: "30px", height: "30px", flexShrink: 0 }}
            />
          </a>
          {/* Figma Icon */}
          <a
            href="https://www.figma.com/proto/VP7KpbfL7X0d2YbQc9NmA9/Untitled?node-id=51-4&p=f&t=jt9BrjJsi0Us1v0Z-0&scaling=contain&content-scaling=fixed&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={figmaIcon}
              alt="Figma"
              style={{ width: "27px", height: "30px", flexShrink: 0 }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
