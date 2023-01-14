import { CRS } from 'leaflet';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';

let imageBounds = [
  [0, 0], // padding
  [2048, 2048], // image dimensions
];

const OverlayImage = () => {
  const map = useMap();

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

const MapWrapper = () => {
  return (
    <MapContainer
    bac
      crs={CRS.Simple}
      maxZoom={10}
      minZoom={-4}
      scrollWheelZoom={false}>

      <OverlayImage />

    </MapContainer>
  )
}

export default MapWrapper;