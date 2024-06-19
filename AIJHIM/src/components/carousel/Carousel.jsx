// src/components/Carousel.js
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import image1 from "../../assets/images/jat1.jpg";
import image2 from "../../assets/images/jat2.jpg";
import image3 from "../../assets/images/jat3.jpg";

const images = [image1, image2, image3];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${styles.carouselImage} ${index === currentImageIndex ? styles.active : ""}`}
        />
      ))}
    </div>
  );
}

export default Carousel;
