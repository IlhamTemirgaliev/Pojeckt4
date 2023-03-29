import React from "react";
import { Container } from "./../../shared/Container/index";
import styles from "./ToglleBar.module.css";

export const ToglleBar = () => {
  return (
    <Container>
      <div>
        <h1 className={styles.title}>ЧАСТО ЗАДОВАЕМЫЕ ВОПРОСЫ </h1>
        <div className={styles.item}>
          <input className={styles.inp} type="checkbox" name="inp" id="inp" />
          <label for="inp" className={styles.title1}>
            Могу ли я купить сертификат в подарорк?
          </label>

          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga
              vitae eaque veritatis, totam qui quisquam sapiente eligendi
              consequuntur repellat minus sed dolore, saepe ex similique
              dolores, necessitatibus deleniti ut?
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <input className={styles.inp} type="checkbox" name="inp" id="inp2" />
          <label for="inp2" className={styles.title1}>
            Могу ли я купить сертификат в подарорк?
          </label>

          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga
              vitae eaque veritatis, totam qui quisquam sapiente eligendi
              consequuntur repellat minus sed dolore, saepe ex similique
              dolores, necessitatibus deleniti ut?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
