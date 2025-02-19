import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 9.05785, lng: 7.49508 }, // Coordinates for Federal High Court, Abuja
                zoom: 15,
                mapTypeId: window.google.maps.MapTypeId.SATELLITE, // Set to satellite view
            });

            new window.google.maps.Marker({
                position: { lat: 9.05785, lng: 7.49508 },
                map,
                title: 'Federal High Court, Abuja',
            });
        };

        if (window.google) {
            initMap();
        }
    }, []);

    return <div id="map" className="w-full h-96 bg-gray-200"></div>;
};

export default Map;
