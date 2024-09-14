import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import DetailDrawing1 from "../../img/detail_drawing1.jpg";
import DetailDrawing2 from "../../img/detail_drawing2.jpg";
import DetailDrawing3 from "../../img/detail_drawing3.jpg";
import DetailDrawing4 from "../../img/detail_drawing4.jpg";
import DetailDrawing5 from "../../img/detail_drawing5.jpg";
import DetailDrawing6 from "../../img/detail_drawing6.jpg";
import DetailDrawing7 from "../../img/detail_drawing7.jpg";
import DetailDrawing8 from "../../img/detail_drawing8.jpg";
import DetailDrawing9 from "../../img/detail_drawing9.jpg";
import DetailDrawing10 from "../../img/detail_drawing10.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/*  </SwiperSlide>
        <SwiperSlide> */}
        <SwiperSlide>
          <img src={DetailDrawing1} alt="" /> 
          <img src={DetailDrawing2} alt="" /> 
          <img src={DetailDrawing3} alt="" /> 
          <img src={DetailDrawing4} alt="" /> 
          <img src={DetailDrawing5} alt="" /> 
          <img src={DetailDrawing6} alt="" /> 
          <img src={DetailDrawing7} alt="" /> 
          <img src={DetailDrawing8} alt="" /> 
          <img src={DetailDrawing9} alt="" /> 
          <img src={DetailDrawing10} alt="" /> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
