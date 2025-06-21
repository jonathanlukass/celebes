import React from 'react';

const Map = () => {
  return (
    <div className="map-section w-full">
      <div className="map-container">
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=-6.175392,106.827153&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7C-6.175392,106.827153&key=YOUR_API_KEY"
          alt="Monas Location Map"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Map;