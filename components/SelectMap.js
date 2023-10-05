import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Importa los estilos CSS de Mapbox GL
import 'mapbox-gl/dist/mapbox-gl.css';

// Definir tu clave de acceso de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyYWJlbGFrIiwiYSI6ImNsbmJ6NnZ4dDBiZHQycHNtZzZ5aHI2OWEifQ.6pgAVdhrJGt_7zr2__5DvQ';

function MapWithLocationPicker() {
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: 'map', // El ID del contenedor HTML
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-100, 40], // Coordenadas iniciales (longitud, latitud)
      zoom: 5, // Nivel de zoom inicial
    });

    // Guarda la instancia del mapa en el estado
    setMap(newMap);

    // Agrega un marcador inicial en el centro del mapa
    new mapboxgl.Marker().setLngLat([-100, 40]).addTo(newMap);

    // Escucha los clics en el mapa para capturar la ubicación seleccionada
    newMap.on('click', (e) => {
      const { lngLat } = e;
      setSelectedLocation({
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      });
    });

    // Limpia el mapa cuando el componente se desmonta
    return () => newMap.remove();
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: '100%', height: '400px' }}
      ></div>
      {selectedLocation && (
        <div>
          <h3>Ubicación seleccionada:</h3>
          <p>Latitud: {selectedLocation.latitude}</p>
          <p>Longitud: {selectedLocation.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default MapWithLocationPicker;
