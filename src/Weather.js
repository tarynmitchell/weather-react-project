import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <main>
      <div className="weather-app-data"></div>
      <h1 className="weather-app-city" id="city">
        London
      </h1>
      <p className="weather-app-details">
        <span id="time">Tuesday 10:00</span>,{" "}
        <span id="description">overcast clouds</span>
        <br />
        Humidity: <strong id="humidity">80%</strong>, Wind:
        <strong id="wind-speed">10km/h</strong>
      </p>

      <div className="weather-app-temperature-container">
        <div id="icon">⛅️</div>
        <div className="weather-app-temperature" id="temperature"></div>
        <div className="weather-app-unit">19°C</div>
      </div>

      <div className="weather-forecast" id="forecast"></div>
    </main>
  );
}
