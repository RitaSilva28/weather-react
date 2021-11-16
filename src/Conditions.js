import React from "react";
import WeatherIcon from "./images/weather-icon.png";
import "./Conditions.css";


export default function Conditions() {
  return (
    <div class="row current-container mt-3">
      <h4 class="mb-4" id="weather-conditions">
        Current conditions: Few clouds
      </h4>

      <div class="col float-lg-end float-none">
        <img
          class="col float-md-end current-temp-image"
          id="current-weather-image"
          src={WeatherIcon}
          alt="Sun"
        />
      </div>
      <div class="col">
        <ul class="float-md-start mt-1">
          <li>
            <h2 id="city-displayed">Lisbon</h2>
            <h2 id="temperature-displayed">16ºC</h2>
          </li>
          <li id="feels-displayed">Feels like 16ºC</li>
          <li id="wind-displayed">Wind 6 km/h</li>
          <li id="humidity-displayed">Humidity 86%</li>
        </ul>
      </div>
    </div>
  );
}
