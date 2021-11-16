import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div class="row">
      <input
        type="text"
        id="city-input"
        class="col form-control mx-lg-3 mb-2 mb-lg-0"
        placeholder="Please insert a city (i.e. Paris)"
      />
      <input
        type="button"
        id="search-button"
        class="col-lg-3 me-lg-3 p-1 mb-2 mb-lg-0 rounded button"
        value="Submit ✅"
      />
      <input
        type="button"
        id="current-location-button"
        class="col-lg-3 me-lg-3 p-1 mb-lg-0 rounded button"
        value="Current Location 📍"
      />
    </div>
  );
}
