import styles from './OneCard.module.css';

export const OneCard = ({ attributes }) => {
  return (
    <div className={styles.block_card_1}>
      <div className={styles.card_0}>
        {attributes.photos.data && <img src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
        <p className={styles.title}>{attributes.title}</p>
        <p className={styles.price}>от {attributes.price} ₽</p>
        <div className={styles.btn}>
          <button className={styles.button}>Заказать</button>
          <a href="/" className={styles.link}>Подробнее</a>
        </div>
      </div>
    </div>
  )
}