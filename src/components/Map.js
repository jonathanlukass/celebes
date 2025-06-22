import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Definisikan ikon marker hijau
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  // Koordinat (Manado, Sulawesi Utara)
  const position = [1.5043694, 124.8572111];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '280px', width: '100%' }}
      scrollWheelZoom={false}
    >
      {/* TileLayer untuk OpenStreetMap */}
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">Celebes Essence</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker dengan ikon hijau */}
      <Marker position={position} icon={greenIcon}>
        <Popup>
          Lokasi Kami <br /> Jl. Gn. Panjang Singkil Dua, Kec. Singkil, Kota Manado, Sulawesi Utara
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;