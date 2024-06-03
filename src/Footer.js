import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by
        <a href="https://github.com/tarynmitchell" target="_blank">
          Taryn Mitchell
        </a>
        , is
        <a
          href="https://github.com/tarynmitchell/weather-react-project"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        and
        <a href="https://thunderous-druid-e90d6b.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
