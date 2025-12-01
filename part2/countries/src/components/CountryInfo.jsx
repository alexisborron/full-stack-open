import { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ name }) => {
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_SOME_KEY;

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then((countryResponse) => {
        const countryData = countryResponse.data;
        setCountry(countryData);

        return axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${countryData.capital[0]}&limit=1&appid=${apiKey}`
        );
      })
      .then((geoResponse) => {
        if (geoResponse.data.length === 0) {
          throw new Error("Capital not found in Geo API");
        }
        const { lat, lon } = geoResponse.data[0];

        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
      })
      .then((weatherResponse) => {
        setWeather(weatherResponse.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [name]);

  if (!country) return null;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <span>Capital: </span>
        <span>{country.capital?.[0]}</span>
      </div>
      <div>
        <span>Area: </span>
        <span>{country.area}</span>
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
      />
      <h2>Weather in {country.capital?.[0]}</h2>

      {weather && (
        <>
          <p>Temperature {weather.main.temp} °C (Celsius)</p>
          <img
            width="100px"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
};
export default CountryInfo;
