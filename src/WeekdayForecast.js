import React from "react";
import WeatherIcon from "./images/weather-icon.png";

export default function WeekdayForecast(props) {
  return (
    <div class="col">
      <h5 class="week-day">{props.weekday}</h5>
      <img
        class="weekday-temp-image"
        src={WeatherIcon}
        alt="cloudy weather icon"
      />
      <h3 class="weekday-max-temp">{props.maxTemp}ºC</h3>

      <h4 class="weekday-min-temp">{props.minTemp}ºC</h4>
    </div>
  );
}
