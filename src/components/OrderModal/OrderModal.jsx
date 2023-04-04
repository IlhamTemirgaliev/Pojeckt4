import styles from './OrderModal.module.css';
import { clsx } from 'clsx';
import { AiOutlineClose } from "react-icons/ai";

export const OrderModal = ({ isVisible, setISVisible }) => {
  return (
    <div className={clsx(styles.order_block , isVisible && styles.active)}>
      <div className={styles.order_cont}>
        <p onClick={() => setISVisible(false)} className={styles.close}>
          <AiOutlineClose />
        </p>
        <h1 className={styles.order_title}>Отправьте заявку</h1>
        <p className={styles.order_text}>Мы свяжемся с Вами в ближайшее время</p>
          <input type="text" placeholder='Имя' className={styles.name} />
          <input type="tel" placeholder='Телефон' className={styles.tel} />
          <textarea type="comment" placeholder='Комментарий' className={styles.com} />
          <div className={styles.check}>
            <input type="checkbox" />
            <p className={styles.txt}>Отправляя заявку Вы соглашаетесь на обработку персональных данных</p>
          </div>
          <button className={styles.btn}>Отправить заявку</button>
      </div>
    </div>
  )
}
