import React from "react";
import "./Footer.css";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";

export default function Footer() {
  return (
    <div className="col text-center social-logos-container">
      <h5>
        Open source code by Rita Silva <span>👩🏻‍💻</span>
      </h5>
      <a href="https://github.com/RitaSilva28/my-weather-app.git">
        <img className="social-logo" src={Github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/rita-silva-44584453/">
        <img className="social-logo" src={Linkedin} alt="linkedin" />
      </a>
    </div>
  );
}
