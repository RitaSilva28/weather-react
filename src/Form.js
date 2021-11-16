import React, {useState} from "react";
import Hour from"./Hour"
import Conditions from "./Conditions"
import axios from "axios"

import "./Form.css";

export default function Form() {

    let[city, setCity]=useState("")

    let inputCity="";

    function getCity(event){
        event.preventDefault()
        inputCity=event.target.value
            }

  
   function handleSubmit(event){
       event.preventDefault()
       setCity(inputCity)
   }

    

   function getPosition(position) {
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

    
   




  return (
    <div >

<form onSubmit={handleSubmit} class="row">

      <input onChange={getCity}
        type="text"
        id="city-input"
        class="col form-control mx-lg-3 mb-2 mb-lg-0"
        placeholder="Please insert a city (i.e. Paris)"
      />
      <input
        type="submit"
        id="search-button"
        class="col-lg-3 me-lg-3 p-1 mb-2 mb-lg-0 rounded button"
        value="Submit ✅"
      />
      <input
      onClick={navigator.geolocation.getCurrentPosition(getPosition)}
        type="button"
        id="current-location-button"
        class="col-lg-3 me-lg-3 p-1 mb-lg-0 rounded button"
        value="Current Location 📍"
      />

      </form>


      <Hour/>
      <Conditions  city ={city} />
    </div>
  );

  
}
