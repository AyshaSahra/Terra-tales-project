import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "300px",
  borderRadius: "10px",
};

const GoogleMapComponent = ({ lat, lng }) => {
  // Use provided lat/lng; default to Chennai if missing
  const coordinates = lat && lng ? { lat, lng } : { lat: 13.0500, lng: 80.2824 };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={13}>
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
