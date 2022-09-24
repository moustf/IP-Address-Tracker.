import React from 'react';
import IconMarker from './MapIcon';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import './Map.css';

const Map = (props) => {
  const { position } = props;

  return (
    <MapContainer className='map' center={position} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={IconMarker}>
        <Popup>
          This is the {position[0]}, {position[1]} address!!!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
