import React, { useState, useEffect } from "react";
import "../styles/textSlider.css";
import slidesData from "../data/homePageSliderContent.json";

const TextSlider = () => {
  const { slides } = slidesData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const seeFaqs = () => {
    console.log("Navigating to FAQs page");
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-slider">
      <div className="slider-title">
        <h2>{slides[currentIndex].title}</h2>
      </div>
      <div className="slider-content">
        <p>{slides[currentIndex].content}</p>
      </div>
      <div className="slider-navigation">
        <button onClick={prevSlide} className="nav-button">
          &lt;
        </button>
        <button onClick={nextSlide} className="nav-button">
          &gt;
        </button>
      </div>
      <div className="slider-cta">
        <button onClick={seeFaqs} className="cta-button">
          See More FAQs &gt;
        </button>
      </div>
    </div>
  );
};

export default TextSlider;