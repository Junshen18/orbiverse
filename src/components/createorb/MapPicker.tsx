// components/MapPicker.tsx
import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 3.139, // Default latitude (e.g., Kuala Lumpur)
  lng: 101.6869, // Default longitude
};

interface LatLng {
  lat: number;
  lng: number;
}

const MapPicker: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);

  if (loadError) return <p>Error loading Google Maps</p>;
  if (!isLoaded) return <p>Loading...</p>;

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setSelectedLocation({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  };

  return (
    <div className="h-full">
      <GoogleMap
        mapContainerStyle={{ height: '300px' }}
        center={center}
        zoom={13}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
      {selectedLocation && (
        <p className="text-white font-medium md:text-base text-xs">
          Selected Location: Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}
        </p>
      )}
    </div>
  );
};

export default MapPicker;
