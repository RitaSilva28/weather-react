import React,{useState} from "react";
import Forecast from "./Forecast";
import axios from"axios";
import "./Conditions.css";


export default function Conditions(props) {
let [city,setCity]=useState("")

if(props.city===""){

    navigator.geolocation.getCurrentPosition(displayInitialData);
    function displayInitialData(position) {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        let apiKey = "4320290f544997238287ed9e19b9df8c";
      
        let urlCity = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
        `;
        console.log(urlCity);

        axios.get(urlCity).then(setCurrentLocation);
      }

    function setCurrentLocation(response){
 setCity(response.data.name) 

} 



}else{
    
    city=props.city

    }
      
    let apiKey = "4320290f544997238287ed9e19b9df8c";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let[conditions, setConditions]=useState("");
    let[temperature,setTemperature]=useState("");
    let[feelsLike, setFeelsLike]=useState("");
    let[wind, setWind]=useState("");
    let [humidity, setHumidity]=useState("");
    let[iconUrl, setIconUrl]=useState("");


    function getData(response){
        setConditions(response.data.weather[0].description)
        setTemperature(Math.round(response.data.main.temp))
        setFeelsLike(Math.round(response.data.main.feels_like))
        setWind(Math.round(response.data.wind.speed))
        setHumidity(Math.round(response.data.main.humidity))
        setIconUrl(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    }


    function background(temperature){
      if (temperature < 0) {
        freezingTemperature()
    } else if (temperature <= 12 && temperature > 0) {
        coldTemperature()
    } else if (temperature > 12 && temperature <= 25) {
        mediumTemperature();
    } else if (temperature > 25) {
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
  
      document.body.style.background = "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
      document.body.style.color = "#404969";
      document.querySelector(".app-container").style.borderColor = "#404969";
      document.querySelector("#weather-conditions").style.color = "#404969";
      document.querySelector("#temperature-displayed").style.color = "#404969";
      document.querySelector("#city-displayed").style.color = "#404969";

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

    background(temperature);


axios.get(url).then(getData);



  return (
    <div class="row current-container mt-3">
      <h4 class="mb-4" id="weather-conditions">
        Current conditions: {conditions}
      </h4>

      <div class="col float-lg-end float-none">
        <img
          class="col float-md-end current-temp-image"
          id="current-weather-image"
          src={iconUrl}
          alt="Weather Icon "
        />
      </div>
      <div class="col" id="location-temperature">
        <ul class="float-md-start mt-1">
          <li>
            <h2 id="city-displayed">{city}</h2>
            <h2 id="temperature-displayed">{temperature}ºC</h2>
          </li>
          <li id="feels-displayed">Feels like {feelsLike}ºC</li>
          <li id="wind-displayed">Wind {wind} km/h</li>
          <li id="humidity-displayed">Humidity {humidity}%</li>
        </ul>
      </div>

      <Forecast  temperature={temperature}/>

    </div>
  );
  }
