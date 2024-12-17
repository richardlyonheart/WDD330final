// Importing all exported functions from your original script
import { initMap, incrementCounter, displayCounter, getWeather, getWeatherByLocation, getWeatherByLatLon, toggleTacticalMode } from './index.js';

// Example usage of the imported functions

// Initialize the map with some default coordinates (latitude and longitude)
document.addEventListener('DOMContentLoaded', () => {
    const defaultLat = 35.6895;
    const defaultLon = 139.6917; // Example coordinates (Tokyo)
    initMap(defaultLat, defaultLon);

    // Display the current counter on page load
    const counter = localStorage.getItem('apiCallCounter') || 0;
    displayCounter(counter);
});

// Fetch and display weather based on the city name
document.getElementById('getWeatherButton').addEventListener('click', () => {
    getWeather();
});

// Fetch and display weather based on the current location
document.getElementById('getWeatherByLocationButton').addEventListener('click', () => {
    getWeatherByLocation();
});

// Fetch and display weather based on latitude and longitude
document.getElementById('getWeatherByLatLonButton').addEventListener('click', () => {
    getWeatherByLatLon();
});

// Toggle tactical mode
document.getElementById('tacticalModeToggle').addEventListener('click', () => {
    toggleTacticalMode();
});
