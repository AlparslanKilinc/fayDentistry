import React from "react";
import "../styles/menuBar.css";
import logo from "../assets/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import BasicMenu from "../components/BasicMenu";
import { Link } from "react-router-dom";
import SimpleMenuLink from "./SimpleMenuLink";

const MenuBar = () => {
  const servicesList = [
    { name: 'General Dentistry', path: '/services/general' },
    { name: 'Cosmetic Dentistry', path: '/services/cosmetic' },
    { name: 'Orthodontics', path: '/services/orthodontics' }
  ];

  return (
    <div className="menu"> 
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="menu-info">
          <div className="text-info">
            <div className="appointment">
              <Link href="#" underline="none" className='appointment-link'> MAKE AN APPOINTMENT:</Link> 
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
        <SimpleMenuLink name='HOME' path="/" />
        <SimpleMenuLink name="DR. FAY" path="/dr-fay" />
        <SimpleMenuLink name="MISSION" path="/mission" />
        <BasicMenu name='SERVICES' menuList={servicesList} />
        <SimpleMenuLink name='Testimonials' path="/testimonials" />
        <SimpleMenuLink name="FAQs" path="/faqs" />
        <SimpleMenuLink name="CONTACT US" path="/contact" />
      </div>

    </div>
  );
};

export default MenuBar;
