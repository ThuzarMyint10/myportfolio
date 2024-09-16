import React, { useContext } from "react";
import { themeContext } from "../../Context";
import styles from './Portfolio.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper"; 
import 'swiper/swiper-bundle.min.css';

// Image URLs array
const images = [
  require("../../img/detail_drawing1.jpg"),
  require("../../img/detail_drawing2.jpg"),
  require("../../img/detail_drawing3.jpg"),
  require("../../img/detail_drawing4.jpg"),
  require("../../img/detail_drawing5.jpg"),
  require("../../img/detail_drawing6.jpg"),
  require("../../img/detail_drawing7.jpg"),
  require("../../img/detail_drawing8.jpg"),
  require("../../img/detail_drawing9.jpg"),
  require("../../img/detail_drawing10.jpg"),
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
    <div className={styles.portfolio} id="detail">
    {/* heading */}
    <span style={{ color: darkMode ? "white" : "" }}>Detail</span>
    <span>Drawing</span>
    </div>
    <Swiper
          slidesPerView={1}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.portfolioSlider}
    >
       {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Detail Drawing ${index + 1}`} />
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  ); 
};

export default Portfolio;

