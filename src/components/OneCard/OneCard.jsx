import styles from './OneCard.module.css';

export const OneCard = ({ attributes }) => {
  return (
    <div className={styles.card_block}>
      {attributes.stock && <p className={styles.free}>Акция</p>}
      {attributes.photos.data && <img className={styles.img_card} src={attributes?.photos?.data[0]?.attributes?.url} alt="img" />}
      <p className={styles.title_card}>{attributes.title}</p>
      <p className={styles.price_card}>от {attributes.price} ₽</p>
      <div className={styles.btn_card}>
        <button className={styles.button_card}>Заказать</button>
        <a href="/" className={styles.link_card}>Подробнее</a>
      </div>
    </div>
  )
}