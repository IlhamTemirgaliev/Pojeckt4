import styles from './CardsBlock.module.css';
import { useEffect, useState } from 'react';
import { cardPost } from '../../api';
import { OneCard } from '../OneCard/OneCard';

function CardsBlock() {
  const [list, setList] = useState([]);

  useEffect(() => {
    cardPost().then(res => {
      setList(res.data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.impressions}>Каталог впечатлений</h1>

        <div className={styles.block_card_1}>
          {list.map((item) => {
            console.log(item);
            return (
              <OneCard key={item.id} {...item}/>
            )
          })}
        </div>
      
    </div>
  )
}

export default CardsBlock