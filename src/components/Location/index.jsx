import React from "react";

const Location = ({ item }) => {
  // Default coordinates (Dubai Marina, Dubai)
  const defaultCenter = {
    lat: 25.07725, // Latitude for Dubai Marina
    lng: 55.13336, // Longitude for Dubai Marina
  };

  // Center based on the item prop or default coordinates
  const center = {
    lat: item?.latitude || defaultCenter.lat,
    lng: item?.longitude || defaultCenter.lng,
  };

  // Generate the Google Maps embed URL
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7666395950773!2d-79.41785292411461!3d43.77770274436991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d0e9d1e9075%3A0xa46b01247f9f945d!2sMoney%20Trust!5e0!3m2!1sen!2sbd!4v1734272346955!5m2!1sen!2sbd";

  return (
    <div className="relative h-[400px] min-w-full bg-slate-400 rounded-xl mt-14">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
        className="rounded-xl "
      ></iframe>
    </div>
  );
};

export default Location;

// "use client";
// import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const Location = ({ item }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "your_key",
//   });

//   const mapContainerStyle = {
//     width: "100%",
//     height: "304px",
//   };

//   if (loadError) {
//     console.error("Error loading Google Maps:", loadError);
//     return <p>Failed to load the map. Please try again later.</p>;
//   }

//   // Default coordinates (Dubai Marina, Dubai)
//   const defaultCenter = {
//     lat: 25.07725, // Latitude for Dubai Marina
//     lng: 55.13336, // Longitude for Dubai Marina
//   };

//   // const center = useMemo(
//   //   () => ({
//   //     lat: item?.latitude || defaultCenter.lat,
//   //     lng: item?.longitude || defaultCenter.lng,
//   //   }),
//   //   [item],
//   // );

//   const center = {
//     lat: item?.latitude || defaultCenter.lat,
//     lng: item?.longitude || defaultCenter.lng,
//   };

//   return (
//     <div className="max-w-full">
//       {/* <div className="mb-4 text-lg leading-8 text-[#343A40]">
//         {item?.address || "Dubai Marina, Dubai, United Arab Emirates"}
//       </div> */}
//       <div className="relative h-[304px] min-w-full rounded bg-slate-400">
//         {!isLoaded ? (
//           <h1>Loading...</h1>
//         ) : (
//           <GoogleMap
//             mapContainerClassName="map-container"
//             center={center}
//             mapContainerStyle={mapContainerStyle}
//             zoom={12}
//           >
//             <Marker position={center} />
//           </GoogleMap>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Location;
