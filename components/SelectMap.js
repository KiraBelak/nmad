import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Importa los estilos CSS de Mapbox GL
import 'mapbox-gl/dist/mapbox-gl.css';
import { set } from 'date-fns';

// Definir tu clave de acceso de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyYWJlbGFrIiwiYSI6ImNsbmJ6NnZ4dDBiZHQycHNtZzZ5aHI2OWEifQ.6pgAVdhrJGt_7zr2__5DvQ';

function MapWithLocationPicker({setUbicacion}) {
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [marker, setMarker] = useState(null); // Mantén una referencia al marcador actual

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: 'map', // El ID del contenedor HTML
      style: 'mapbox://styles/mapbox/dark-v10',
    //   center: [-100, 40], // Coordenadas iniciales (longitud, latitud)
    // el centro del mapa es la ciudad de obregon
    center: [-109.9253, 27.4861],

      zoom: 10, // Nivel de zoom inicial
    });

    // Guarda la instancia del mapa en el estado
    setMap(newMap);

    newMap.on('click', (e) => {
        const { lngLat } = e;
        
        // Elimina el marcador existente, si lo hay
        
        
        // console.log(lngLat.lng, lngLat.lat);
        // console.log(newMap)

        // Crea un nuevo marcador en la ubicación seleccionada
        if(newMap._markers.length == 0){
            const newMarker = new mapboxgl.Marker().setLngLat([lngLat.lng, lngLat.lat]).addTo(newMap);
        setMarker(newMarker);
        }else{
            //si ya hay un marcador, lo elimina y crea uno nuevo
            newMap._markers[0].remove();

            const newMarker = new mapboxgl.Marker().setLngLat([lngLat.lng, lngLat.lat]).addTo(newMap);
        setMarker(newMarker);

        }
        setUbicacion({
            latitude: lngLat.lat,
            longitude: lngLat.lng,
          });
    
        setSelectedLocation({
          latitude: lngLat.lat,
          longitude: lngLat.lng,
        });
      });

        

    // Limpia el mapa cuando el componente se desmonta
    return () => newMap.remove();
  }, []);

  const handleSearch = async () => {
    try {
      // Realiza la búsqueda de lugares usando la API de geocodificación de Mapbox
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxgl.accessToken}`);
      const data = await response.json();
      setSearchResults(data.features);

      // Enfoca el mapa en el primer resultado de la búsqueda
      if (data.features.length > 0) {
        const firstResult = data.features[0];
        map.flyTo({
          center: firstResult.center,
          zoom: 12,
        });

       

        // Agrega un nuevo marcador en la ubicación del primer resultado
        const coordinates = firstResult.geometry.coordinates;
        const newMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
        setMarker(newMarker);

        setSelectedLocation({
          latitude: coordinates[1],
          longitude: coordinates[0],
        });
      }
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

  return (
    <div>
      {/* <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Buscar lugares..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div> */}

      <div id="map" style={{ width: '100%', height: '400px' }}></div>

      {/* {selectedLocation && (
        <div className='text-gray-800'>
          <h3>Ubicación seleccionada:</h3>
          <p>Latitud: {selectedLocation.latitude}</p>
          <p>Longitud: {selectedLocation.longitude}</p>
        </div>
      )} */}

      <div>
        <h3>Resultados de la búsqueda:</h3>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <strong>{result.place_name}</strong> ({result.geometry.coordinates[1]}, {result.geometry.coordinates[0]})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MapWithLocationPicker;
