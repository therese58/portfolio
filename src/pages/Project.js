import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./project.module.scss";

export default function Project() {
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const radius = 300; 
    const totalSlides = slidesRef.current.length;
  
    slidesRef.current.forEach((slide, index) => {
      const angle = (index * (360 / totalSlides)) * (Math.PI / 180); 
      const x = radius * Math.cos(angle); 
      const y = radius * Math.sin(angle); 
  
      gsap.set(slide, {
        x: x,
        y: y,
        zIndex: totalSlides - index,
        rotate: angle * (180 / Math.PI) + 90, 
        transformOrigin: "center center", 
      });
    });
  }, []);

  const rotateSlides = (direction) => {
    const totalSlides = slidesRef.current.length;
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;

    setCurrentIndex(newIndex);
    gsap.to(slidesRef.current, {
      duration: 1,
      rotate: "+=360",
      ease: "power2.inOut",
    });
  };

  const images = [
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
    "/img/img1.jpg",
  ];

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.navButton} onClick={() => rotateSlides(-1)}>
        &#8592;
      </button>
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className={styles.slide}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={styles.navButton} onClick={() => rotateSlides(1)}>
        &#8594;
      </button>
    </div>
  );
}

