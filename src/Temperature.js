import React from "react";

export default function Temperature(props) {
  let url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`;
  return (
    <div className="current-temperature mt-5">
      <div className="row">
        <div className="col-4 current-weather">
          <img src={url} alt="CLoudy"></img>
          <span className="temperature">{props.temperature}</span>
          <span className="temperature-unit">°C</span>
        </div>
        <div className="col feels-like">
          <strong className="text-capitalize">{props.description}</strong>
          <p>Feels like {props.feels_like}°</p>
        </div>
      </div>
      <div className="mt-2">
        Expect {props.description} today.{" "}
        {/*The high will reach {props.temperature.high}°*/}
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
