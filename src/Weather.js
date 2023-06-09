import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import Time from "./Time";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      loaded: true,
      time: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      pressure: Math.round(response.data.main.pressure),
      visibility: response.data.visibility / 1000,
      feels_like: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      iconCode: response.data.weather[0].icon,
      coords: response.data.coord,
    });
  }
  function searchCity() {
    let units = "metric";
    const apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
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
                <Time time={weatherData.time} />
              </li>
            </ul>
          </div>
          <Temperature
            temperature={weatherData.temperature}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
            pressure={weatherData.pressure}
            visibility={weatherData.visibility}
            feels_like={weatherData.feels_like}
            description={weatherData.description}
            iconCode={weatherData.iconCode}
            high={weatherData.high}
          />
          <WeatherForecast
            iconCode={weatherData.iconCode}
            coords={weatherData.coords}
          />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
