import React from "react";
import ImageSlider from "../components/ImageSlider";
import TextSlider from "../components/TextSlider";
import DentalServices from "../components/DentalServices";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <ImageSlider />
      <DentalServices />
      <TextSlider />
    </div>
  );
};

export default Home;
