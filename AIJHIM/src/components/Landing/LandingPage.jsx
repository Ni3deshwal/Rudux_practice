// src/components/LandingPage.js
import React from "react";
import styles from "./LandingPage.module.css";
import Carousel from "../carousel/Carousel.jsx";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Carousel />
      <h2>Welcome to AIJHIM</h2>
      <p>Discover our programs, events, and more!</p>
    </div>
  );
}

export default LandingPage;
