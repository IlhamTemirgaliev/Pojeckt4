import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./Slider.css";
import { Container } from "./../../shared/Container/index";
import { mockData } from "./mockData";
import { slaiderr } from "../../api";

export const Slider = () => {
  const [datan, setDatan] = useState([]);

  useEffect(() => {
    slaiderr().then((res) => {
      setDatan(res.data);
    });
  }, []);
  console.log(datan);
  return (
    <Container className={styles.slaider}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {mockData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.divv}>
                <img className={styles.imgsw} src={item.image} alt="" />
              </div>
              <div className={styles.posit}>
                <span className={styles.price}>от {item.price} P</span>
                <div className={styles.title1}>
                  <h1 className={styles.title}>{item.title}</h1>
                </div>
                <button className={styles.btnswiper}>{item.phrase}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

// bulletClass: "pagItem"
