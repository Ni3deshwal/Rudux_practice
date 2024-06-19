// src/components/Header.js
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="College Logo" />
        <h1>AIJHIM</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/admissions">Admissions</a>
          </li>
          <li>
            <a href="/departments">Departments</a>
          </li>
          <li>
            <a href="/facilities">Facilities</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/student-corner">Student Corner</a>
          </li>
          <li>
            <a href="/alumni">Alumni</a>
          </li>
          <li>
            <a href="/tender">Tender</a>
          </li>
        </ul>
      </nav>
      <a className={styles.payButton} href="/pay-online">
        Pay Online
      </a>
    </header>
  );
}

export default Header;
