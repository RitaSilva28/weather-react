import React from "react";

import "./Conditions.css";



export default function Conditions(props) {

  return (
    <div className="row current-container mt-3">
      <h4 className="mb-4" id="weather-conditions" >
        Current conditions: {props.data.description}
      </h4>

      <div className="col float-lg-end float-none">
        <img
          className="col float-md-end current-temp-image"
          id="current-weather-image"
          src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt="Weather Icon "
        />
      </div>
      <div className="col" id="location-temperature">
        <ul className="float-md-start mt-1">
          <li>
            <h2 id="city-displayed">{props.data.city}</h2>
            <h2 id="temperature-displayed">{props.data.temperature}ºC</h2>
          </li>
          <li id="feels-displayed">Feels like {props.data.feelsLike}ºC</li>
          <li id="wind-displayed">Wind {props.data.wind} km/h</li>
          <li id="humidity-displayed">Humidity {props.data.humidity}%</li>
        </ul>
      </div>



    </div>
  );
  }
