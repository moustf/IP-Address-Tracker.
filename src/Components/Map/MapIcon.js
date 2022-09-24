import L from 'leaflet';

const MapIcon = new L.Icon({
    iconUrl: require('../../assets/marker-removebg-preview.png'),
    iconRetinaUrl: require('../../assets/marker-removebg-preview.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-icon'
});

export default MapIcon;