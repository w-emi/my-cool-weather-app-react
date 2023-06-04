import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.temperature.humidity),
      pressure: Math.round(response.data.temperature.pressure),
      feels_like: Math.round(response.data.temperature.feels_like),
    });
  }
  if (weatherData.loaded) {
    return (
      <div className="weather-app">
        <form id="search-form">
          <div className="row mb-3">
            <div className="col-9 city-input">
              <input
                type="search"
                className="form-control"
                placeholder="Search for location"
                autoFocus="on"
                autoComplete="off"
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
              <li className="time-updated">Updated: 4:30 AM</li>
            </ul>
          </div>
          <Temperature
            temperature={weatherData.temperature}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
            pressure={weatherData.pressure}
            feels_like={weatherData.feels_like}
          />
        </div>
      </div>
    );
  } else {
    const apiKey = "803fa995fa3a7bb53f14eafcc31ot80d";
    let city = "Hamilton";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
