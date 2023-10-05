import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { Popup } from 'react-map-gl';


// Importa los estilos CSS de Mapbox GL
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPinIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// Definir tu clave de acceso de Mapbox
mapboxgl.accessToken = "pk.eyJ1Ijoia2lyYWJlbGFrIiwiYSI6ImNsbmJ6NnZ4dDBiZHQycHNtZzZ5aHI2OWEifQ.6pgAVdhrJGt_7zr2__5DvQ"; // Reemplaza con tu propia clave de acceso

//traer las experiencias




function Map({ latitude, longitude, experiencias }) {
  const [map, setMap] = useState(null);




useEffect(() => {
    // Crea una instancia del mapa cuando el componente se monta
    const newMap = new mapboxgl.Map({
      container: 'map', // El ID del contenedor HTML
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [longitude, latitude], // Coordenadas iniciales (longitud, latitud)
      zoom: 12 // Nivel de zoom inicial
    });

    // Guarda la instancia del mapa en el estado
    setMap(newMap);

    // Crea un elemento HTML para el marcador personalizado (un círculo)
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker'; // Agrega clases CSS si es necesario
    markerElement.style.width = '20px'; // Ancho del círculo
    markerElement.style.height = '20px'; // Alto del círculo
    markerElement.style.borderRadius = '50%'; // Hace que el elemento sea un círculo
    markerElement.style.backgroundColor = '#B8F6FF'; // Color del círculo (puedes cambiarlo)

    // Crea el marcador personalizado en el mapa
    new mapboxgl.Marker(markerElement)
      .setLngLat([longitude, latitude])
      .addTo(newMap);

    //crea los marcadores de las experiencias
    experiencias.map((exp) => {
        //mapa de experiencias
        exp.exp.map((e) => {
            const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker'; // Agrega clases CSS si es necesario
        markerElement.style.width = '15px'; // Ancho del círculo
        markerElement.style.height = '15px'; // Alto del círculo
        markerElement.style.borderRadius = '50%'; // Hace que el elemento sea un círculo
        markerElement.style.backgroundColor = '#b8bfff'; // Color del círculo (puedes cambiarlo)
    
        // console.log(e);

        //si la experiencia esta activa
        

        // Crea el marcador personalizado en el mapa
       const marker= new mapboxgl.Marker(markerElement)
          .setLngLat([e.long, e.lat])
          .addTo(newMap);

          const popup = new mapboxgl.Popup({
            offset: 25, // Ajusta la posición del pop-up con respecto al marcador
            className:"text-black text-center"
          })
            .setHTML(`
              <h3>${e.titulo}</h3>
              <p class="text-">${e.descripcion}</p>
              <br/>
              <a href="/experiencia/${e.id}" class="bg-blue-500 hover:bg-blue-700 mt-8 text-white font-bold py-2 px-4 rounded">
              Ver experiencia
            </a>
            `);
      
          // Asocia el pop-up con el marcador
          marker.setPopup(popup);

        
    });
    });


    // Limpia el mapa cuando el componente se desmonta
    return () => newMap.remove();
  }, [latitude, longitude]);

  // Función para restablecer la vista del mapa
  const resetMapView = () => {
    if (map) {
      map.flyTo({
        center: [longitude, latitude], // Coordenadas de la vista restablecida
        zoom: 12, // Nivel de zoom restablecido
      });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
    <div id="map" style={{ width: '100%', height: '100%' }} />
    <button
      onClick={resetMapView}
      style={{
        position: 'absolute',
        bottom: '5px',
        right: '10px',
        zIndex: '10',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <MapPinIcon />
    </button>
  </div>
  );
}

export default Map;
