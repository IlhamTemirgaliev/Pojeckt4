import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Container } from "../../shared/Container";
import styles from "./SliderTo.module.css";
import bg from "../../assets/img/wind_tunnel.png";
import bg2 from "../../assets/img/yacht.png";

export const SliderTo = () => {
  // const [datato, setDatato] = useState([]);

  // useEffect(() => {
  //   slaiderto().then((res) => {
  //     setDatato(res.data);
  //   });
  // }, []);
  // console.log(datato);

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.divvv}>
            <div>
              <span className={styles.spa}>акция месяца!</span>
              <div className={styles.wrap}>
                <h2 className={styles.title}>полёт в аэротрубе для двоих!</h2>
                <span className={styles.price}> 3200 P</span>
                <div>
                  <button className={styles.btn}>Заказать впечатление</button>
                </div>
              </div>
            </div>
            <div className={styles.geimg}>
              <img className={styles.img} src={bg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.divvv}>
            <div>
              <span className={styles.spa}>акция месяца!</span>
              <div className={styles.wrap}>
                <h2 className={styles.title}>полёт в аэротрубе для двоих!</h2>
                <span className={styles.price}> 3200 P</span>
                <div>
                  <button className={styles.btn}>Заказать впечатление</button>
                </div>
              </div>
            </div>
            <div className={styles.geimg}>
              <img className={styles.img} src={bg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
