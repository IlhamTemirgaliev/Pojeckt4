import styles from "./CardsBlock.module.css";
import { useEffect, useState, Fragment } from "react";
import { cardPost } from "../../api";
import { OneCard } from "../OneCard/OneCard";
import { ModalWindow } from "../ModalWindow/ModalWindow";

function CardsBlock() {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    cardPost().then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div id="katalog" className={styles.container}>
      <marquee direction="right">
        <h1 className={styles.impressions}>Каталог впечатлений</h1>
      </marquee>

      <div className={styles.block_card_1}>
        {list.map((item) => {
          console.log(item);
          return (
            <Fragment key={item.id}>
              <OneCard {...item} />
              {/* <ModalWindow {...item}/> */}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default CardsBlock;
