
import { OPENWEATHER_API_KEY } from '../config';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function getWeatherEmoji(main) {
  const map = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
  };
  return map[main] || '🌡️';
}

function normalizeWeatherData(json) {
  return {
    cityName: json.name,
    temperatureC: Math.round(json.main.temp),
    description: json.weather[0].description,
    emoji: getWeatherEmoji(json.weather[0].main),
  };
}

async function fetchWeather(url) {
  const response = await fetch(url);
  const json = await response.json();

  if (String(json.cod) !== '200') {
    throw new Error(json.message || 'Không lấy được dữ liệu thời tiết');
  }

  return normalizeWeatherData(json);
}

export function getWeatherByCoords(latitude, longitude) {
  const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&lang=vi&appid=${OPENWEATHER_API_KEY}`;
  return fetchWeather(url);
}

export function getWeatherByCity(cityName) {
  const url = `${BASE_URL}?q=${encodeURIComponent(cityName)}&units=metric&lang=vi&appid=${OPENWEATHER_API_KEY}`;
  return fetchWeather(url);
}
