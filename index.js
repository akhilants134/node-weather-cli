const axios = require('axios');

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const geoResponse = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: {
        name: city,
        count: 1,
        language: 'en',
        format: 'json'
      }
    });

async function getWeather(city) {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = response.data;
        console.log(`Weather in ${weatherData.name}: ${weatherData.weather[0].description}, Temperature: ${weatherData.main.temp}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

const city = process.argv[2]; // Read city name from command-line arguments
if (!city) {
    console.error('Please provide a city name.');
    process.exit(1);
}

getWeather(city);