import React from "react";
import "../styles/drFay.css";
import dr_fay from "../assets/dr_fay.jpg";
import drFayContent from "../data/drFayContent.json";

const DrFay = () => {
  return (
    <div className="fay-container">
        <img
          src={dr_fay}
          alt={`Dr. Fay About Me Page Picture`}
          className="fay-image"
        />
        <div className="fay-text-content">
            <h1>{drFayContent.title}</h1>
            <p>{drFayContent.intro}</p>
            <blockquote>{drFayContent.quote}</blockquote>
            <p>{drFayContent.education}</p>
            <p>{drFayContent.approach}</p>
            <p>{drFayContent.philosophy}</p>
            <p>{drFayContent.careApproach}</p>
            <p>{drFayContent.continuingEducation}</p>
            <p>{drFayContent.affiliations}</p>
        </div>
    </div>
  );
};

export default DrFay;