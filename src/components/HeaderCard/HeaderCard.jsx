import React from "react";
import styles from "./HeaderCard.module.css";
import imghed1 from "../../assets/headerse.png";
import imghed2 from "../../assets/headerse1.png";
import imghed3 from "../../assets/headerse2.png";
import imghed4 from "../../assets/headerse3.png";

export const HeaderCard = () => {
  return (
    <div className={styles.headeric}>
      <div className={styles.card}>
        <img className={styles.imghe} src={imghed1} alt="imghed1" />
        <span className={styles.title}>Впечатления по цене партнера</span>
      </div>
      <div className={styles.card}>
        <img className={styles.imghe} src={imghed2} alt="imghed2" />
        <span className={styles.title}>Беспплатная доставка в день заказа</span>
      </div>
      <div className={styles.card}>
        <img className={styles.imghe} src={imghed3} alt="imghed3" />
        <span className={styles.title}>
          Красивые сертификаты на любое впечатление
        </span>
      </div>
      <div className={styles.card}>
        <img className={styles.imghe} src={imghed4} alt="imghed4" />
        <span className={styles.title}>Проверенные партнеры</span>
      </div>
    </div>
  );
};
