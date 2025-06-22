import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Perbaiki ikon marker default Leaflet (kadang bermasalah di React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  // Koordinat default (misalnya: Jakarta, Indonesia)
  const position = [1.5043694, 124.8572111 ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '280px', width: '100%' }}
      scrollWheelZoom={false}
    >
      {/* TileLayer untuk OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Celebes </a> Essence'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker dengan Popup */}
      <Marker position={position}>
        <Popup>
          Lokasi Kami <br /> Jl. Gn. Panjang Singkil Dua, Kec. Singkil, Kota Manado, Sulawesi Utara
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;