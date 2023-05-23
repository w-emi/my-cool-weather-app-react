import React from "react";

export default function Search() {
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
    </div>
  );
}
