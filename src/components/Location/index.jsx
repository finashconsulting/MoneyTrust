"use client";
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Location = ({ item }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "your_key",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "304px",
  };

  if (loadError) {
    console.error("Error loading Google Maps:", loadError);
    return <p>Failed to load the map. Please try again later.</p>;
  }

  // Default coordinates (Dubai Marina, Dubai)
  const defaultCenter = {
    lat: 25.07725, // Latitude for Dubai Marina
    lng: 55.13336, // Longitude for Dubai Marina
  };

  // const center = useMemo(
  //   () => ({
  //     lat: item?.latitude || defaultCenter.lat,
  //     lng: item?.longitude || defaultCenter.lng,
  //   }),
  //   [item],
  // );

  const center = {
    lat: item?.latitude || defaultCenter.lat,
    lng: item?.longitude || defaultCenter.lng,
  };

  return (
    <div className="max-w-full">
      {/* <div className="mb-4 text-lg leading-8 text-[#343A40]">
        {item?.address || "Dubai Marina, Dubai, United Arab Emirates"}
      </div> */}
      <div className="relative h-[304px] min-w-full rounded bg-slate-400">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            mapContainerStyle={mapContainerStyle}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default Location;
