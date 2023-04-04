import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './ModalWindow.module.css';
import { clsx } from 'clsx';
import { AiOutlineClose } from "react-icons/ai";
import { OrderModal } from '../OrderModal/OrderModal';
import { useState } from 'react';

export const ModalWindow = ({ attributes, isVisible, setISVisible }) => {
  const [isOrder, setIsOrder] = useState(false);
  return (
    <>
      <div className={clsx(styles.modal_block , isVisible && styles.active)}>
  
        <div className={styles.modal_cont}>
          <div className={styles.modal_image}>
            {attributes.photos.data && <img className={styles.img_a} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
            <div className={styles.three_img}>
              {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
              {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
              {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
            </div>
          </div>
          <div className={styles.modal_info}>
            <p className={styles.title}>{attributes.title}</p>
            <p className={styles.price}>от {attributes.price} ₽</p>
            <button onClick={() => setIsOrder(true)} className={styles.btn}>Заказать впечатление</button>
            <p><ReactMarkdown>{attributes.content}</ReactMarkdown></p>
    
            <p onClick={() => setISVisible(false)} className={styles.close}>
              <AiOutlineClose />
            </p>
          </div>
        </div>
  
      </div>
      <OrderModal attributes={attributes} isVisible={isOrder} setISVisible={setIsOrder} />
    </>
  )
}
