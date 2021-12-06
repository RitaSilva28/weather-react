import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
 

 
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h5 className="WeatherForecast-day">{day()}</h5>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <h3 className="weekday-max-temp">{Math.round(props.data.temp.max)}º</h3>

	  <h4 className="weekday-min-temp">{Math.round(props.data.temp.min)}º</h4>

      </div>
   
  );
}


