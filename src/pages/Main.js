import React from "react";
import styles from './Main.module.scss'; // 새로운 모듈 CSS 추가

const Main = () => {
  return (
    <div className={styles.imageContainer}>
      <img src="/img/main_img.png" alt="Main Image" className={`${styles.mainImage} mb160`} />
    </div>
  );
};

export default Main;
