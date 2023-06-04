import React from "react";

export default function Temperature(props) {
  return (
    <div className="current-temperature mt-5">
      <div className="row">
        <div className="col-4 current-weather">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyNightV2.svg"
            alt="CLoudy"
          ></img>
          <span className="temperature">{props.temperature}</span>
          <span className="temperature-unit">°C</span>
        </div>
        <div className="col feels-like">
          <strong className="text-capitalize">Cloudy</strong>
          <p>Feels like {props.feels_like}°</p>
        </div>
      </div>
      <div className="mt-2">
        Expect sunny skies today. The high will reach 34°
      </div>
      <div className="row">
        <div className="col whp">
          <p className="whp-head wind">Wind</p>
          <span>{props.wind} km/h</span>
        </div>
        <div className="col whp">
          <p className="whp-head humidity">Humidity</p>
          <span>{props.humidity}%</span>
        </div>
        <div className="col whp">
          <p className="whp-head pressure">Pressure</p>
          <span>{props.pressure}mb</span>
        </div>
      </div>
    </div>
  );
}
