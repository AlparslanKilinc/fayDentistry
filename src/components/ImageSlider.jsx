import React, { useState, useEffect } from "react";
import office_building from "../assets/office_building.jpg";
import head_shot from "../assets/head_shot.jpg";
import "../css/imageSlider.css";

const ImageSlider = () => {
  const images = [office_building, head_shot];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <button onClick={prevSlide} className="slider-button prev">
        &lt;
      </button>
      <div className="slider-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button onClick={nextSlide} className="slider-button next">
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
