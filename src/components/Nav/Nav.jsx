import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <a className={styles.nav_v} href="#katalog">
        Каталог
        <div></div>
      </a>
      <a className={styles.nav_v} href="">
        Акций
        <div></div>
      </a>
      <a className={styles.nav_v} href="">
        Контакты
        <div></div>
      </a>
    </div>
  );
};
export default Nav;
