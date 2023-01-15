import { CRS } from 'leaflet';
import { useCallback, useState, useRef, useMemo } from 'react';
import { MapContainer, ImageOverlay, useMap, useMapEvents, Marker, Popup } from 'react-leaflet';


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

const center = {
  lat: 51.505,
  lng: -0.09,
}

function DraggableMarker() {
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
    </Marker>
  )
}


const MapWrapper = () => {
  return (
    <MapContainer
      crs={CRS.Simple}
      maxZoom={10}
      minZoom={-4}
      scrollWheelZoom={false}>

      <DraggableMarker />
      <OverlayImage />

    </MapContainer>
  )
}

export default MapWrapper;