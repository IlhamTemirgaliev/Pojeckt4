import React from "react";
import { Container } from "./../../shared/Container/index";
import styles from "./ToglleBar.module.css";

import { useEffect, useState } from "react";
import { toggleBarr } from "../../api";

export const ToglleBar = ({ attributes }) => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    toggleBarr().then((res) => {
      setTest(res.data);
    });
  }, []);

  console.log(test);
  return (
    <Container>
      <div id="kont">
        <h1 className={styles.title}>ЧАСТО ЗАДОВАЕМЫЕ ВОПРОСЫ </h1>

        {test.map((item, index) => {
          return (
            <div key={item.id} className={styles.item}>
              <input
                className={styles.inp}
                type="checkbox"
                id={"inp" + index + 1}
              />
              <label for={"inp" + index + 1} className={styles.title1}>
                {item.attributes.toglleheader}
              </label>

              <div className={styles.text}>
                {item.attributes.toglletext}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
