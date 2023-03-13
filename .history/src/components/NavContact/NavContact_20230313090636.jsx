import React from "react";
import styles from "./NavContact.module.css";
import logo1 from "./assets/Subtract.png";
import logo2 from "./assets/insta.png";


const NavContact = () => {
  return (
    <div className={styles.contact}>
      <span className={styles.num}>+7 (999) 123-45-67</span>
      <a href="https://vk.com">
        <img className={styles.lo} src={logo1} alt="logoSub" />
      </a>
      <a href="https://www.instagram.com/daridushoi/">
        <img className={styles.lo} src={logo2} alt="logoinst" />
      </a>
    </div>
  );
};

export default NavContact;
