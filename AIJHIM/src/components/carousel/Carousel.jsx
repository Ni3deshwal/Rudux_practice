// src/components/Carousel.js
import React from "react";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <img src="college.jpg" alt="College" className={styles.carouselImage} />
    </div>
  );
}

export default Carousel;
