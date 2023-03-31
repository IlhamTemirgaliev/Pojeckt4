import React from "react";
import { Container } from "./../../shared/Container/index";
import styles from "./ToglleBar.module.css";
import { toglee } from "./toglle";

import { useEffect, useState } from "react";
import { toggleBarr } from "../../api";
import { mockData } from "./../Slider/mockData";

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
      <div>
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
                {item.Toglleheader}
              </label>

              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  fuga vitae eaque veritatis, totam qui quisquam sapiente
                  eligendi consequuntur repellat minus sed dolore, saepe ex
                  similique dolores, necessitatibus deleniti ut?
                </p>
              </div>
            </div>
          );
        })}

        {/* <div className={styles.item}>
          <input className={styles.inp} type="checkbox" name="inp" id="inp2" />
          <label for="inp2" className={styles.title1}>
            Могу ли я поменять сертификат на другой?
          </label>

          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga
              vitae eaque veritatis, totam qui quisquam sapiente eligendi
              consequuntur repellat minus sed dolore, saepe ex similique
              dolores, necessitatibus deleniti ut?
            </p>
          </div>
        </div> */}
      </div>
    </Container>
  );
};
