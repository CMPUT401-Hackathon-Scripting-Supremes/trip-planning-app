import { CRS, Draggable } from 'leaflet';
import {useState, useRef, useMemo} from 'react';
import { MapContainer, ImageOverlay, useMapEvents, Marker } from 'react-leaflet';
import L from 'leaflet';

let imageBounds = [
  [0, 0], // padding
  [2048, 2048], // image dimensions
];


const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const OverlayImage = ({saveMarkers}) => {
  const [mrks, setMrks] = useState([]);
  const map = useMapEvents({
    click: (e) => {
      const {lat, lng} = e.latlng;
      var mrk = new L.marker([lat, lng], {icon}, Draggable=true);
      map.addLayer(mrk);

      // L.marker([lat, lng], {icon}).addTo(map);
      setMrks([...mrks, mrk]);
    },
    keypress: (e) => {
      var key = e.originalEvent.key
      if (key === 'd') {
        console.log('d was pressed')
        mrks.forEach(mrk => {
          map.removeLayer(mrk)
        })
      }
    }
  })

  map.fitBounds(imageBounds);
  const img = require('../assets/universe.jpg')

  return (
    <ImageOverlay
      bounds={imageBounds}
      url={img}
      transparent={true}
    />
  );
}

const center = {
  lat: 51.505,
  lng: -0.09,
}



const MapWrapper = () => {
  return (
    <MapContainer
      crs={CRS.Simple}
      maxZoom={10}
      minZoom={-4}
      scrollWheelZoom={false}>
      <OverlayImage />
    </MapContainer>
  )
}

export default MapWrapper;