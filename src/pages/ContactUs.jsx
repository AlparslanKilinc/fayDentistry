import React from "react";
import "../styles/contact.css";
import nyc from "../assets/nyc.jpg";
import contact_us from "../data/contactUs.json";

const DrFay = () => {
  const { welcome_message } = contact_us;

  return (
    <div className="contact-container">
      <img src={nyc} alt={`New York City`} className="contact-us-image" />
      <div className="contact-us-content">
        <div className="contact-title">WELCOME TO MANHATTAN DENTISTRY</div>
        <div className="contact-para">{welcome_message}</div>
        <div className="contact-sign">Respectfully, Terese N. Fay, DMD</div>
      </div>
      <div className="contact-us-content">
        <div className="contact-title">MAKE AN APPOINTMENT</div>
        <form className="appointment-form">
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email Address*" required />
          <input type="tel" name="phone" placeholder="Phone Number (optional, but helpful)" />
          <textarea name="inquiry" placeholder="Is there anything we should know about your inquiry?"></textarea>
          <button type="submit" className="submit-button">EMAIL DR. FAY</button>
        </form>
      </div>
    </div>
  );
};

export default DrFay;
