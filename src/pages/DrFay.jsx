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
            <div className="title">{drFayContent.title}</div>
            <p>{drFayContent.intro}</p>
            <div className="quote"><blockquote>{drFayContent.quote}</blockquote> </div>
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