import React from "react";

export default function Hour() {

    let date= new Date()

        let weekDays = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
      
        let weekDay = weekDays[date.getDay()];
        let month = months[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();
      
        let hour = date.getHours();
        let minutes = date.getMinutes();
      
        if (hour < 10) {
          hour = "0" + hour;
        }
      
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
      

  return (
    <div class="row mt-5">
      <div class="col">
        <h2 id="current-day">{weekDay}, {day} {month} {year}</h2>
        <h2 id="current-hour">Last updated: {hour}:{minutes}</h2>
      </div>
    </div>
  );
}
