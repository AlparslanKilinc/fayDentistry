import React from 'react';
import { Link } from 'react-router-dom';
import privacyPolicyData from '../data/privacyPolicy.json';
import "../styles/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {privacyPolicyData.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}

      <p>
        For more information, please see our <Link to="/terms">Terms of Service</Link> and <Link to="/medical-disclaimer">Medical Disclaimer</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;