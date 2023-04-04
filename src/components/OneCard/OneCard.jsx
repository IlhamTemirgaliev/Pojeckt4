import { useState } from 'react';
import styles from './OneCard.module.css';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { OrderModal } from '../OrderModal/OrderModal';

export const OneCard = ({ attributes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  return (
    <>
      <div className={styles.card_block}>
        {attributes.stock && <p className={styles.free}>Акция</p>}
        {attributes.photos.data && <img className={styles.img_card} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
        <p className={styles.title_card}>{attributes.title}</p>
        <p className={styles.price_card}>от {attributes.price} ₽</p>
        <div className={styles.btn_card}>
          <button onClick={() => setIsOrder(true)} className={styles.button_card}>Заказать</button>
          <button onClick={() => setIsOpen(true)} className={styles.link_card}>Подробнее</button>
        </div>
      </div>
      <ModalWindow attributes={attributes} isVisible={isOpen} setISVisible={setIsOpen} />
      <OrderModal isVisible={isOrder} setISVisible={setIsOrder} />
    </>
  )
};