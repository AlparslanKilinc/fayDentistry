import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Forms = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  const center = {
    lat: 40.750568, // Approximate latitude for the area shown
    lng: -73.976867 // Approximate longitude for the area shown
  };

  return (
    <div className="forms-container">
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="forms-content">
        <h2>FORMS</h2>
        <h3>BEFORE YOUR VISIT</h3>
        <p>
          Save time at the office! Click <a href="#registration-forms">Registration Forms</a> to complete the registration forms.
        </p>
        <p>
          This link includes all 4 forms (on the upper left) in the following order:
        </p>
        <ul>
          <li>Patient Registration</li>
          <li>Medical History</li>
          <li>Dental History</li>
          <li>Financial Agreement/HIPAA</li>
        </ul>
        <p>
          You can also download the necessary forms from the links below.
        </p>
        <div className="form-links">
          <a href="#patient-registration">Patient Registration</a>
          <a href="#medical-history">Medical History</a>
          <a href="#dental-history">Dental History</a>
          <a href="#financial-agreement">Financial Agreement</a>
          <a href="#hipaa">HIPAA</a>
        </div>
      </div>
    </div>
  );
};

export default Forms;