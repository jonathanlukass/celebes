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
  const position = [1.506084, 124.856114];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '280px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={greenIcon}>
        <Popup>
          Lokasi Kami <br />
          Jl. Gn. Panjang Singkil Dua, Kec. Singkil, Kota Manado, Sulawesi Utara <br />
          <a
            href="https://maps.app.goo.gl/rs6xtQQyub4r3U2n7?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat di Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;