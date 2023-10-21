import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [46.822320, -71.224800];  // Replace with your facility's coordinates
const zoom = 14
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapComponent() {

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <a href="https://www.google.com/maps/dir//346%203e%20Rue,%20Québec,%20QC%20G1L%202T1" target="_blank" rel="noopener noreferrer">
            346 3e Rue, Québec, QC G1L 2T1
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
