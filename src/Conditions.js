import React,{useState} from "react";
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
      <div class="col">
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
    </div>
  );
  }
