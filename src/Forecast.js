import React from "react";
import WeekdayForecast from "./WeekdayForecast";

import "./Forecast.css";

export default function Forecast(props) {

console.log(props.temperature)

  return (
    <div className="weather-forecast row mx-auto mt-5" id="forecast">
      <WeekdayForecast weekday="Monday" maxTemp="23" minTemp="17" />
      <WeekdayForecast weekday="Tuesday" maxTemp="24" minTemp="18" />
      <WeekdayForecast weekday="Wednesday" maxTemp="22" minTemp="14" />
      <WeekdayForecast weekday="Thursday" maxTemp="22" minTemp="17" />
      <WeekdayForecast weekday="Friday" maxTemp="24" minTemp="19" />
      <WeekdayForecast weekday="Saturday" maxTemp="24" minTemp="18" />
      <WeekdayForecast weekday="Sunday" maxTemp="24" minTemp="18" />
    </div>
  );
}
