import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let today = new Date(props.data.dt * 1000);
    let day = today.getDay();
    let date = today.getDate();
    return `${days[day]} ${date}`;
  }
  return (
    <>
      <div className="weather-forecast-day mb-0">{day()}</div>
      <div className="row weather-forecast-details">
        <div className="col-7">
          <img
            className="weather-forecast-weatherIcon"
            src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
        <div className="col weather-forecast-temperature">
          <div className="row">
            <div className="weather-forecast-temperature-max">
              {Math.round(props.data.temp.max)}°
            </div>
          </div>
          <div className="row">
            <div className="weather-forecast-temperature-min">
              {Math.round(props.data.temp.min)}°
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
