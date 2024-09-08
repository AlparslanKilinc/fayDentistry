import React from "react";
import "../styles/mission.css";
import image from "../assets/office_building.jpg";
import missionData from "../data/mission.json";
import personalized_care from "../assets/personalized_care.jpg";
import excellence from "../assets/excel.jpg";
import integrated_approach from "../assets/integrated_approach.jpg";

const Mission = () => {
    const { mission } = missionData
    const images = [personalized_care, excellence, integrated_approach];

    const headerMissionTitle = "PERSONALIZED DENTISTRY BUILT ON ART, SCIENCE AND CARE.";
    const headerMissionPara = "Our goal is to promote oral wellness; deliver exquisitely crafted," + 
    "quality dentistry; provide personalized care; and embrace our role in improving the look of your smile." + 
    " We partner closely with patients to maximize comfort, function, health and aesthetics for a lifetime." + 
    " We aim to be at the forefront of dental knowledge and technology so that we may bring you best in dentistry." + 
    " Our approach is comprehensive, customized and caring, with a high regard for the patient.";

    return (
        <div className="mission-container">
            <div className="mission-header">
                <img
                src={image}
                alt={`place holder image`}
                className="header-image"
                />
                <div className="mission-header-title">{headerMissionTitle}</div>
                <div className="mission-header-para">{headerMissionPara}</div>
            </div>
            <div className="mission-items"> 
                {mission.map((item, index) => (
                    <div className="mission-content-box">
                        <img
                            src={images[index]}
                            alt={`image for mission item ${index}`}
                            className="center-image"
                        />
                        <div key={index} className="mission-item">
                            <div className="mission-title">{item.title}</div>
                            {item.content.map((content, index) => (
                                <div key={index} className="mission-para">{content}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mission;