import React, { useState, useContext } from "react";
import { themeContext } from "../../Context";
import "./Freelance.css"; // Custom CSS for styling

const ImageSlider = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [
    require("../../img/mini_pj1.jpg"),
    require("../../img/mini_pj2.jpg"),
    require("../../img/mini_pj3.jpg"),
    require("../../img/mini_pj4.jpg"),
    require("../../img/mini_pj5.jpg"),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider">
      <span style={{ color: darkMode ? "white" : "" }}>Freelance</span>
      <span>Mini Project</span>
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
        >
          {index === currentIndex && (
            <img src={image} alt={`Slide ${index}`} className="image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
