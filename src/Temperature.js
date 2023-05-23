import React from "react";

export default function Temperature() {
  return (
    <div className="current-temperature mt-5">
      <div className="row">
        <div className="col-1">
          <span className="weather-emo">☁</span>
        </div>
        <div className="col-3">
          <h1 className="current-weather"> 20°</h1>
        </div>
        <div className="col">
          <p>
            Cloudy
            <br />
            <em>Feels like 15°</em>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Wind
            <br />9 km/h
          </p>
        </div>
        <div className="col">
          <p>
            Humidity
            <br />
            86%
          </p>
        </div>
        <div className="col">
          <p>
            Pressure
            <br />
            990 mb
          </p>
        </div>
      </div>
    </div>
  );
}
