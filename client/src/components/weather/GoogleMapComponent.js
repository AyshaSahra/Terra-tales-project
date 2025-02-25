import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "400px",
  borderRadius: "10px",
};

const GoogleMapComponent = ({ lat, lng }) => {
  const center = { lat: lat || 13.0500, lng: lng || 80.2824 }; // Default to Chennai

  return (
    <LoadScript googleMapsApiKey="AIzaSyDf10V6TzafskWO0mjyYZmzb7_ts1J1Itk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
