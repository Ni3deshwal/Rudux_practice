// src/components/Footer.js
import React from "react";
import styles from "./Footer.module.css";
import aijhimlogo from "../../assets/images/aijhimlogo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={aijhimlogo} alt="College Logo" />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfo}>
          <p>📞 9416515494 (9 A.M. to 4 P.M.)</p>
          <p>📞 9416515495 (9 A.M. to 4 P.M.)</p>
          <p>📞 01262274719 (9 A.M. to 4 P.M.)</p>
          <p>📧 aijhmcollegerohtak@gmail.com</p>
          <p>📧 enquiry@jatcollegerohtak.ac.in</p>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-telegram"></i>
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h4>COLLEGE</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Web Mail</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Advertisements</a>
              </li>
              <li>
                <a href="#">IQAC</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>EXTERNAL LINKS</h4>
            <ul>
              <li>
                <a href="#">MDU</a>
              </li>
              <li>
                <a href="#">UGC</a>
              </li>
              <li>
                <a href="#">MHRD</a>
              </li>
              <li>
                <a href="#">Higher Education</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>EXAMINATIONS</h4>
            <ul>
              <li>
                <a href="#">Results</a>
              </li>
              <li>
                <a href="#">Date Sheet</a>
              </li>
              <li>
                <a href="#">Exam Notices</a>
              </li>
              <li>
                <a href="#">Merit List</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© All India Jat Heroes' Memorial College</p>
        <ul className={styles.policyLinks}>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Disclaimer</a>
          </li>
          <li>
            <a href="#">Refund and Cancellation Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
