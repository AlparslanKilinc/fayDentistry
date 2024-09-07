import React, { useState } from "react";
import { Link } from "react-router-dom";
import office_building from "../assets/office_building.jpg";
import "../css/dentalServices.css";

const DentalServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "PREVENTATIVE DENTISTRY",
      image: office_building,
      link: "/preventative-dentistry",
      color: "rgb(73, 190, 138)",
    },
    {
      title: "RESTORATIVE DENTISTRY",
      image: "/path/to/restorative-image.jpg",
      link: "/restorative-dentistry",
      color: "rgb(86, 178, 216)",
    },
    {
      title: "COSMETIC DENTISTRY",
      image: "/path/to/cosmetic-image.jpg",
      link: "/cosmetic-dentistry",
      color: "rgb(79, 116, 176)",
    },
  ];

  return (
    <div className="dental-services-container">
      {services.map((service, index) => (
        <Link
          to={service.link}
          key={index}
          className={`service-item ${
            hoveredService === index ? "hovered" : ""
          }`}
          onMouseEnter={() => setHoveredService(index)}
          onMouseLeave={() => setHoveredService(null)}
          style={{
            "--service-color": service.color,
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <div className="service-overlay"></div>
          <h2 className="service-title">{service.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default DentalServices;
