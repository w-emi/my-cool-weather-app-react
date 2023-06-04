import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import Time from "./Time";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      time: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      high: Math.round(response.data.temperature.maximum),
      city: response.data.city,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.temperature.humidity),
      pressure: Math.round(response.data.temperature.pressure),
      feels_like: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }
  function searchCity() {
    const apiKey = "803fa995fa3a7bb53f14eafcc31ot80d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="weather-app">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-9 city-input">
              <input
                type="search"
                className="form-control"
                placeholder="Search for location"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary"
              />
            </div>
            {/* <div className="col">
            <i
              title="Current location"
              class="fa-solid fa-location-dot location-icon"
            ></i>
          </div> */}
          </div>
        </form>
        <div className="weather-app-details">
          <div className="weather-app-place-time">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Current weather</li>
              <li className="time-updated">
                Updated: <Time time={weatherData.time} />
              </li>
            </ul>
          </div>
          <Temperature
            temperature={weatherData.temperature}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
            pressure={weatherData.pressure}
            feels_like={weatherData.feels_like}
            description={weatherData.description}
            icon={weatherData.icon}
            high={weatherData.high}
          />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
