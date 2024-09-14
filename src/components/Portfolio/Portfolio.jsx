// import React, { useContext } from "react";
// import "./Portfolio.css";
import React, { useContext } from "react";
import styles from "./Portfolio.module.css"; // Using CSS Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { themeContext } from "../../Context";

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
    <div className={styles.portfolio} id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.portfolioSlider}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.default} alt={`Detail Drawing ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;

