import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from './ModalWindow.module.css';

export const ModalWindow = ({ attributes }) => {
  return (
    <div className={styles.modal_block}>

      <div className={styles.modal_image}>
        {attributes.photos.data && <img className={styles.img_a} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
        <div className={styles.three_img}>
          {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
          {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
          {attributes.photos.data && <img className={styles.img_modal} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
        </div>
      </div>
      <div className={styles.modal_info}>
        <p>{attributes.title}</p>
        <p>{attributes.price}</p>
        <button>Заказать</button>
        <p><ReactMarkdown>{attributes.content}</ReactMarkdown></p>
      </div>

    </div>
  )
}
