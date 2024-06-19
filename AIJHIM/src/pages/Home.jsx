// src/App.js
import React from "react";
import Header from "../components/Header/Header.jsx";
import LandingPage from "../components/Landing/LandingPage.jsx";
import Footer from "../components/Footer/Footer.jsx";

import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
