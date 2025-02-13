import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
    useEffect(() => {
        const map = L.map('map'); 
        map.setView([22.618746272966547, 88.40514384726545], 13); 
        

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        let marker = null;
        let circle = null;

        const success = (pos) => {
            const { latitude, longitude, accuracy } = pos.coords;

            // Remove existing marker and circle
            if (marker) {
                map.removeLayer(marker);
                map.removeLayer(circle);
            }

            // Create a custom marker icon (use default Leaflet icon)
        const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],  // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // point from which the popup should open relative to the icon
    });

               // Add marker with custom icon
    marker = L.marker([latitude, longitude], { icon }).addTo(map);
    
    // Reduce the radius of the circle (set it to 50 meters or any value you prefer)
    const circleRadius = 300; // Reduced radius in meters

    // Add circle with reduced radius
    circle = L.circle([latitude, longitude], { radius: circleRadius }).addTo(map);


            // Adjust map view
            map.setView([latitude, longitude], map.getZoom());
        };

        const error = (err) => {
            switch (err.code) {
                case 1:
                    alert('Please allow geolocation access.');
                    break;
                default:
                    alert('Unable to retrieve your location.');
            }
        };

        // Watch user's position
        const watchId = navigator.geolocation.watchPosition(success, error);

        // Cleanup function
        return () => {
            navigator.geolocation.clearWatch(watchId);
            map.remove();
        };
    }, []);

    return (
        <div>
            <div id="map" style={{ 
                height: '100vh', 
                width: '100%', 
                margin: '0', 
                padding: '0' 
            }}></div>
        </div>
    );
};

export default Map;
