import styles from './CardsBlock.module.css';
import { useEffect, useState, Fragment } from 'react';
import { cardPost } from '../../api';
import { OneCard } from '../OneCard/OneCard';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { OrderModal } from '../OrderModal/OrderModal';

function CardsBlock() {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    cardPost().then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.impressions}>Каталог впечатлений</h1>

        <div className={styles.block_card_1}>
          {list.map((item) => {
            console.log(item);
            return (
              <Fragment  key={item.id}>
                <OneCard {...item}/>
                <ModalWindow {...item}/>
                <OrderModal/>
              </Fragment>
            )
          })}
        </div>
      
    </div>
  );
}

export default CardsBlock;
