import { useEffect, useState } from "react";
import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = import.meta.env.VITE_SOME_KEY;

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log(country.capitalInfo.latlng);
    const [lat, lon] = country.capitalInfo.latlng;
    const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
    axios.get(url).then((response) => setWeather(response.data));
  }, [country]);

  if (!weather) {
    return null;
  }

  const weatherIcon = weather.weather[0].icon;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <>
      <h2>Weather in {country.capital?.[0]}</h2>

      {weather && (
        <>
          <p>Temperature {weather.main.temp} °C (Celsius)</p>
          <img
            alt={`Weather icon of ${weather.weather[0].description}`}
            src={weatherIconUrl}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Weather;
