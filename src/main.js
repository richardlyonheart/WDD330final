// src/main.js

import { initMap, incrementCounter, displayCounter, getWeather, getWeatherByLocation, getWeatherByLatLon, toggleTacticalMode } from './index.js';

// Hide the map initially
document.getElementById('mapContainer').classList.add('hidden');

// Initialize the map with some default coordinates (latitude and longitude) on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultLat = 35.6895;
    const defaultLon = 139.6917; // Example coordinates (Tokyo)
    initMap(defaultLat, defaultLon);

    // Display the current counter on page load
    const counter = localStorage.getItem('apiCallCounter') || 0;
    displayCounter(counter);
});

// Fetch and display weather based on the city name
document.getElementById('getWeatherButton').addEventListener('click', async () => {
    await getWeather();
    document.getElementById('mapContainer').classList.remove('hidden');
    const location = document.getElementById('location').value;
    // Fetch the coordinates of the location and initialize the map
    const apiKey = '414566a386a08cff91c0b2692629a943';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
        const { lat, lon } = data.coord;
        initMap(lat, lon);
    }
});

// Fetch and display weather based on the current location
document.getElementById('getWeatherByLocationButton').addEventListener('click', async () => {
    await getWeatherByLocation();
    document.getElementById('mapContainer').classList.remove('hidden');
    // The initMap function is already called within getWeatherByLocation, so no need to call it here
});

// Fetch and display weather based on latitude and longitude
document.getElementById('getWeatherByLatLonButton').addEventListener('click', async () => {
    await getWeatherByLatLon();
    document.getElementById('mapContainer').classList.remove('hidden');
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    initMap(parseFloat(lat), parseFloat(lon));
});

// Toggle tactical mode
document.getElementById('tacticalModeToggle').addEventListener('click', () => {
    toggleTacticalMode();
});

// Reset the page
document.getElementById('resetButton').addEventListener('click', () => {
    location.reload();
});
