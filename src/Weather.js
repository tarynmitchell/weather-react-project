import React from "react";
import axios from "axios";

export default function Weather() {
  function refreshWeather(response) {
    alert(`The weather in London is ${response.data.temperature.current}°C`);
    console.log(response.data);
  }
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}`;

  axios.get(apiUrl).then(refreshWeather);
  return <h2>Hello from Weather</h2>;
}
