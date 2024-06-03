import "./App.css";
import React from "react";
import Weather from "./Weather.js";
import Header from "./WeatherForecast.js";
import "./WeatherForecast.css";
import Footer from "./Footer.js";

export default function App() {
  return (
    <body>
      <div className="weather-app">
        <Header />
        <Weather />
        <Footer />
      </div>
    </body>
  );
}
