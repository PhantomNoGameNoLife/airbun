"use client";
import MapGl, { Marker, Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { searchData, searchItem } from "../types/app";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Map = ({ searchResultData }: { searchResultData: searchData }) => {
  const [selectedLocation, setSelectedLocation] = useState<searchItem | null>(
    null
  );
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [ViewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });
  return (
    <MapGl
      {...ViewPort}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      onMove={(nextViewPort) =>
        setViewPort((prev) => ({
          ...prev,
          longitude: nextViewPort.viewState.longitude,
          latitude: nextViewPort.viewState.latitude,
        }))
      }
    >
      {searchResultData.map((listing, idx) => (
        <div key={idx}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div
              onClick={() => setSelectedLocation(listing)}
              className="animate-bounce"
            >
              <MapPinIcon className="size-6 text-red-500" />
            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={listing.long}
              latitude={listing.lat}
            >
              {listing.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGl>
  );
};

export default Map;
