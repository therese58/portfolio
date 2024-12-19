import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Home.module.scss';

// 페이지 컴포넌트
import Main from './Main.js';
import Profile from './Profile.js';
import Project from './Project.js';
import Contact from './Contact.js';

function Home() {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.mySwiper}
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
      >
        <SwiperSlide><Main /></SwiperSlide>
        <SwiperSlide><Profile /></SwiperSlide>
        <SwiperSlide><Project /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
