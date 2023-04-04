import styles from './Certificat.module.css';
import certificat from '../../assets/img/certificat.png';
import { Container } from '../../shared/Container';

export const Certificat = () => {
  return (
    <Container>
      <div className={styles.cer_block}>
        <img src={certificat} alt="img" className={styles.cer_img} />
        <div className={styles.info_block}>
          <h2 className={styles.cer_title}>Сертификат в дизайнерском конверте</h2>
          <ul>
            <li>Электронный сертификат - бесплатный</li>
            <li>Сертификат в подарочном конверте - 200р</li>
            <li>Срок действия сертификата - 3 месяца</li>
            <li>Срок действия сертификата - 3 месяца</li>
            <li>Есть возможность заменить впечатление по сертификату, если подарок не понравится</li>
          </ul>
        </div>
      </div>
    </Container>
  )
};