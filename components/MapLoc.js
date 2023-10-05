import React, { useEffect, useState } from 'react';
import Map from './Map'; // Importa el componente Map
import 'mapbox-gl/dist/mapbox-gl.css';
import { set } from 'date-fns';
import toast from 'react-hot-toast';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';


function LocationMap() {
  const [city, setCity] = useState('');
  const [experiencias, setExperiencias] = useState([]);
  const [location, setLocation] = useState({
    latitude: 0, // Latitud inicial
    longitude: 0, // Longitud inicial
  });

  useEffect(() => {
    

  const getExp = async () => {
    const res = await axios.get('/api/exp').then((res) => {
        // console.log(res.data.data);
        setExperiencias(res.data.data);
    }).catch((err) => {
        // console.log(err);
        toast.error('Error al obtener las experiencias');
    });
};

getExp();


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          getCityName(latitude, longitude);
        },
        (error) => {
          // console.error('Error al obtener la ubicación:', error);
          // Si hay un error al obtener la ubicación, establece la ciudad en Chihuahua 
          setCity('Chihuahua');
          setLocation({ latitude: 28.63528, longitude: -106.08889 });
          toast.error('Error al obtener la ubicación');


        }
      );
    } else {
      // console.error('El navegador no admite la geolocalización');
      toast.error('Ups, no pudimos obtener tu ubicación');
    }
  }, []);

  function getCityName(latitude, longitude) {
    // Token de Mapbox para poder usar su API de geolocalización del env.local
    const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API;
    
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const cityFeature = data.features.find(
            (feature) =>
              feature.place_type.includes('place') ||
              feature.place_type.includes('locality')
          );
          if (cityFeature) {
            const cityName = cityFeature.text;
            setCity(cityName);
          }
        }
      })
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className='h-screen w-full box-border pb-16 lg:pb-0 '>
    
      {location.latitude !== 0 && location.longitude !== 0 && experiencias.length > 0 ?(
        <Map latitude={location.latitude} longitude={location.longitude} experiencias={experiencias} />
      ) : (
       <Skeleton height={500} className='bg-black' />
       
      )
    
    }
    </div>
  );
}

export default LocationMap;
