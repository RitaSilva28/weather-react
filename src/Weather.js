import React, {useState} from "react";
import Hour from"./Hour"
import Conditions from "./Conditions"
import Forecast from "./Forecast";
import axios from "axios"
import ReactSpinner from "./ReactSpinner";

import "./Weather.css";

export default function Weather(props) {

  let [weatherData, setWeatherData] = useState({ ready: false });
  let[city, setCity]=useState(props.city)

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        feelsLike:Math.round(response.data.main.feels_like),
      });
     background(response.data.main.temp)
      setCity(response.data.name)
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    function search() {
      const apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    
  }



  function getCurrentPosition(position){
    let latitude= position.coords.latitude;
    let longitude=position.coords.longitude;

   
 let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;

 axios.get(url).then(handleResponse)
  }



  function background(temperature){
    if (temperature < 0) {
      freezingTemperature()
  } else if (temperature <= 12 && temperature > 0) {
      coldTemperature()
  } else if (temperature > 12 && temperature < 25) {
      mediumTemperature();
  } else if (temperature >= 25) {
      hotTemperature();
  }
  }


  function hotTemperature() {

    document.body.style.background = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";
    document.body.style.color = "#cd4545";
    document.querySelector(".app-container").style.borderColor = "#cd4545";
    document.querySelector("#weather-conditions").style.color = "#cd4545";
    document.querySelector("#temperature-displayed").style.color = "#8b0000";
    document.querySelector("#city-displayed").style.color = "#8b0000";


    let button = document.querySelectorAll(".button");
    button.forEach(element => {
        element.style.backgroundColor = "#cd4545";
        element.style.borderColor = "#cd4545"
        element.addEventListener("mouseenter", function (event) {

            event.target.style.color = "#cd4545";
            event.target.style.backgroundColor = "#fff";
        });

        element.addEventListener("mouseleave", function (event) {

            event.target.style.color = "#fff";
            event.target.style.backgroundColor = "#cd4545";
        });
    });

    document.querySelector("#city-input").style.borderColor = "#cd4545";


}



function mediumTemperature() {

  document.body.style.background = "linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%)"
    document.querySelector(".app-container").style.borderColor = "#404969";
    document.querySelector("#temperature-displayed").style.color = "#404969";
    document.querySelector("#city-displayed").style.color = "#404969";
    document.querySelector("#weather-conditions").style.color = "#404969";
    document.body.style.color = "#404969";

    let button = document.querySelectorAll(".button");
    button.forEach(element => {
        element.style.backgroundColor = "#ff7f50";
        element.style.borderColor = "#ff7f50"
        element.addEventListener("mouseenter", function (event) {

            event.target.style.color = "#ff7f50";
            event.target.style.backgroundColor = "#fff";
        });

        element.addEventListener("mouseleave", function (event) {

            event.target.style.color = "#fff";
            event.target.style.backgroundColor = "#ff7f50";
        });
    });

    document.querySelector("#city-input").style.borderColor = "#404969";
}


function coldTemperature() {

    document.body.style.background = "linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%)"
    document.querySelector(".app-container").style.borderColor = "#056fc5";
    document.querySelector("#temperature-displayed").style.color = "#056fc5";
    document.querySelector("#city-displayed").style.color = "#056fc5";
    document.querySelector("#weather-conditions").style.color = "#056fc5";
    document.body.style.color = "#056fc5";


    let button = document.querySelectorAll(".button");
    button.forEach(element => {
        element.style.backgroundColor = "#056fc5";
        element.style.borderColor = "#056fc5"
        element.addEventListener("mouseenter", function (event) {

            event.target.style.color = "#056fc5";
            event.target.style.backgroundColor = "#fff";
        });

        element.addEventListener("mouseleave", function (event) {

            event.target.style.color = "#fff";
            event.target.style.backgroundColor = "#056fc5";
        });
    });

    document.querySelector("#city-input").style.borderColor = "#056fc5";
}

function freezingTemperature() {
    document.body.style.background = "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)";
    document.body.style.color = "#393e46";
    document.querySelector(".app-container").style.borderColor = "#393e46";
    document.querySelector("#weather-conditions").style.color = "#393e46";
    document.querySelector("#temperature-displayed").style.color = "#393e46";
    document.querySelector("#city-displayed").style.color = "#393e46";

    let button = document.querySelectorAll(".button");
    button.forEach(element => {
        element.style.backgroundColor = "#393e46";
        element.style.borderColor = "#393e46"
        element.addEventListener("mouseenter", function (event) {

            event.target.style.color = "#393e46";
            event.target.style.backgroundColor = "#fff";
        });

        element.addEventListener("mouseleave", function (event) {

            event.target.style.color = "#fff";
            event.target.style.backgroundColor = "#393e46";
        });
    });

    document.querySelector("#city-input").style.borderColor = "#393e46";

}



  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="row">

<input onChange={handleCityChange}
  type="text"
  id="city-input"
  className="col form-control mx-lg-3 mb-2 mb-lg-0"
  placeholder="Please insert a city (i.e. Paris)"
/>
<input
  type="submit"
  id="search-button"
  className="col-lg-3 me-lg-3 p-1 mb-2 mb-lg-0 rounded button"
  value="Search ✅"
/>
<input
onClick={function(){navigator.geolocation.getCurrentPosition(getCurrentPosition)}}
  type="button"
  id="current-location-button"
  className="col-lg-3 me-lg-3 p-1 mb-lg-0 rounded button"
  value="Current Location 📍"
/>

</form>
      <Hour/>
      <Conditions  data={weatherData} />
      <Forecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    navigator.geolocation.getCurrentPosition(getCurrentPosition)
    return (
    <div>
    <h3>Searching for your current location...</h3>
    <ReactSpinner/>
    </div>);
  }

  
}
