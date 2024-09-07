import React from 'react'
import MenuBar from '../components/MenuBar'
import ImageSlider from '../components/ImageSlider'
import TextSlider from '../components/TextSlider'
import DentalServices from '../components/DentalServices'

const Home = () => {
  return (
    <div className="page-container">
      <MenuBar />
      <ImageSlider />
      <DentalServices />
      <TextSlider />
    </div>
  );
}

export default Home