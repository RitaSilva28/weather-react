import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Footer";
import "./styles.css";


function App() {




  return (
    <div className="container" >
      <h2>Weather Forecast</h2>
      <h4>
        Search for other cities to see me change colors depending on the
        temperature 😎
      </h4>{" "}
      <div className="app-container p-5">
        <Weather city={"Lisbon"} />
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

