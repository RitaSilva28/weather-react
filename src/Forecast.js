import React from "react";
import WeekdayForecast from "./WeekdayForecast";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {

//   let apiKey="4320290f544997238287ed9e19b9df8c";
//   let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`

//   console.log(url)



//   function formatDay(timestamp) {

//     let date = new Date(timestamp * 1000);
//     let day = date.getDay();
//     let weekDays = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//     ];

//     return weekDays[day]

// }

// function displayForecast(response) {

//   let forecastArray = response.data.main

  
    
//     }

//   axios.get(url).then(displayForecast)



//   return (
//     <div>
//       {forecastArray.map(function(element, index) {
//         return <div class="col">
// 							<h5 class="week-day">${formatDay(forecastDay.dt)}</h5>
// 							<img
// 								class="weekday-temp-image"
// 								src="https://openweathermap.org/img/wn/{icon}@2x.png"
// 								alt="cloudy weather icon"
// 							/>
// 							<h3 class="weekday-max-temp">º</h3>

// 							<h4 class="weekday-min-temp">º</h4>
					
// 					</div>
//       })}
//     </div>
//   );

  // return (
  //   <div className="weather-forecast row mx-auto mt-5" id="forecast">
  //     <WeekdayForecast weekday="Monday" maxTemp="23" minTemp="17" />
  //     <WeekdayForecast weekday="Tuesday" maxTemp="24" minTemp="18" />
  //     <WeekdayForecast weekday="Wednesday" maxTemp="22" minTemp="14" />
  //     <WeekdayForecast weekday="Thursday" maxTemp="22" minTemp="17" />
  //     <WeekdayForecast weekday="Friday" maxTemp="24" minTemp="19" />
  //     <WeekdayForecast weekday="Saturday" maxTemp="24" minTemp="18" />
  //     <WeekdayForecast weekday="Sunday" maxTemp="24" minTemp="18" />
  //   </div>
  // );
}

