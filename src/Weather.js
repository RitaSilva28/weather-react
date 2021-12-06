import React, {useState} from "react";
import Hour from"./Hour"
import Conditions from "./Conditions"
import Forecast from "./Forecast";
import axios from "axios"

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
  value="Submit ✅"
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
    return "Loading...";
  }

  
}
