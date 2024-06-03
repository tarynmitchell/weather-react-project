import React from "react";
import "./WeatherForecast.css";

export default function Header(props) {
  return (
    <div className="Form">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
    </div>
  );
}
