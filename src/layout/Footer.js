import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";

import styles from "./Footer.module.scss";

const Footer = () => {
  const swiper = useSwiper();

  const handleNextPage = () => {
    if (swiper && swiper.isEnd === false) {
      swiper.slideNext();
    }
  };

  const handlePreviousPage = () => {
    if (swiper && swiper.isBeginning === false) {
      swiper.slidePrev();
    }
  };

  return (
    <footer className="fixed-bottom">
      <div className="mw d-flex justify-content-between align-items-center position-relative mb-5 text-muted">
        <div className="kr-h4">KWON CHAE RYEOUNG</div>
        <div className="kr-h4">
          Page {swiper ? swiper.activeIndex + 1 : 1}
        </div>
        <div className="kr-h4">2024 Portfolio</div>
      </div>
    </footer>
  );
};

export default Footer;
