import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import horizontal_logo from "../assets/horizontal_logo.png";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <img
          src={horizontal_logo}
          alt={`logo`}
          className="footer-logo"
        />
        <div className="footer-text"> 
          <p>Copyright ©2024 Dr. Terese N. Fay, DMD, PLLC All rights reserved</p>
          <Link to="/privacy-policy"> Privacy Policy</Link>
        </div>
    </div>
  );
};

export default Footer;
