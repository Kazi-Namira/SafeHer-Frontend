import React, { useEffect, useRef, useState } from "react";

const SafetyMap = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => initializeMap();
    document.body.appendChild(script);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.L) return;

    const map = window.L.map(mapRef.current).setView([23.8103, 90.4125], 12);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add sample incidents with different severity levels
    const incidents = [
      { lat: 23.8103, lng: 90.4125, type: "harassment", severity: "high" },
      { lat: 23.815, lng: 90.42, type: "suspicious", severity: "medium" },
      { lat: 23.805, lng: 90.405, type: "theft", severity: "high" },
      { lat: 23.82, lng: 90.43, type: "harassment", severity: "low" },
    ];

    incidents.forEach((incident) => {
      const color =
        incident.severity === "high"
          ? "#DC2626"
          : incident.severity === "medium"
          ? "#F59E0B"
          : "#FBBF24";

      window.L.circleMarker([incident.lat, incident.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.7,
        radius: 8,
      })
        .addTo(map)
        .bindPopup(
          `<b>${incident.type}</b><br/>Severity: ${incident.severity}`
        );
    });

    // Add safe zones
    const safeZones = [
      { lat: 23.812, lng: 90.415, name: "Women Police Station" },
      { lat: 23.808, lng: 90.41, name: "Safe Hospital" },
      { lat: 23.818, lng: 90.425, name: "Community Center" },
    ];

    safeZones.forEach((zone) => {
      const greenIcon = window.L.divIcon({
        html: '<div style="width: 24px; height: 24px; background-color: #10B981; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
        className: "",
        iconSize: [24, 24],
      });

      window.L.marker([zone.lat, zone.lng], { icon: greenIcon })
        .addTo(map)
        .bindPopup(`<b>${zone.name}</b><br/>Safe Zone`);
    });

    // Add user location
    const blueIcon = window.L.divIcon({
      html: '<div style="width: 24px; height: 24px; background-color: #3B82F6; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      className: "",
      iconSize: [24, 24],
    });

    window.L.marker([23.8103, 90.4125], { icon: blueIcon })
      .addTo(map)
      .bindPopup("<b>Your Location</b>");

    setMapInstance(map);
  };

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", borderRadius: "12px", width: "100%" }}
      className="border border-gray-200"
    />
  );
};

export default SafetyMap;
