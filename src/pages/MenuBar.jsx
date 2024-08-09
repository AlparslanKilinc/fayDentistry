import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import "../css/menuBar.css";
import logo from "../assets/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import BasicMenu from "./BasicMenu";

const MenuBar = () => {
  const homeList = ['Home Page', 'About Us', 'Our History'];
  const drFayList = ['Biography', 'Credentials', 'Publications'];
  const missionList = ['Our Vision', 'Core Values', 'Community Involvement'];
  const servicesList = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics'];
  const testimonialsList = ['Patient Stories', 'Video Testimonials'];
  const faqsList = ['General FAQs', 'Insurance FAQs', 'Treatment FAQs'];
  const contactList = ['Contact Form', 'Office Hours', 'Directions'];
  const longIslandList = ['Local Services', 'Area Guide'];
  const covidList = ['Safety Measures', 'Appointment Guidelines'];


  return (
    <div className="menu"> 

      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-info">

          <div className="text-info">
            <div className="appointment">
              <Link href="#" underline="none" className='appointment-link' sx={{ color: '#2fbfeb' }}> MAKE AN APPOINTMENT:</Link> 
              <div>631-288-9000</div>
            </div>
            <div className="address">16 Old Riverhead Road, Westhampton Beach</div>
          </div>

          <div className="social-links">
            <Link href="#" underline="none" className='social-link'><FacebookIcon sx={{ color: '#2fbfeb' }} fontSize="large"/></Link>
            <Link href="#" underline="none" className='social-link'><YouTubeIcon sx={{ color: '#2fbfeb' }} fontSize="large"/></Link>
            <Link href="#" underline="none" className='social-link'><InstagramIcon sx={{ color: '#2fbfeb' }} fontSize="large"/></Link>
          </div>

        </div>
      </div>

      <div className="menu-group">
        <BasicMenu name='HOME' menuList={homeList} />
        <BasicMenu name='DR.FAY' menuList={drFayList} />
        <BasicMenu name='MISSION' menuList={missionList} />
        <BasicMenu name='SERVICES' menuList={servicesList} />
        <BasicMenu name='TESTIMONIALS' menuList={testimonialsList} />
        <BasicMenu name='FAQs' menuList={faqsList} />
        <BasicMenu name='CONTACT US' menuList={contactList} />
        <BasicMenu name='LONG ISLAND' menuList={longIslandList} />
        <BasicMenu name='COVID-19' menuList={covidList} />
      </div>

    </div>
  );
};

export default MenuBar;
