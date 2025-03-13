import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {PMTiles} from 'pmtiles';
import PMTilesLayer from './PMTilesLayer';


const Map = () => {
  const pmtiles = new PMTiles('https://accelerator-minio.iiasa.ac.at/accelerator-prod/forest-navigator/PortalData/Vectors/protected_sites.pmtiles'); 
  // list all available layers
  pmtiles.getMetadata().then((data) => {
    console.log("Available layers:", data.vector_layers);
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} minZoom={0} maxZoom={14} style={{ height: '90vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <PMTilesLayer />
    </MapContainer>
  );
};

export default Map;
