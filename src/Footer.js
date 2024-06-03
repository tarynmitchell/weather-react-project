import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by
        <a
          href="https://github.com/tarynmitchell"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taryn Mitchell
        </a>
        , is
        <a
          href="https://github.com/tarynmitchell/weather-react-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        <a
          href="https://thunderous-druid-e90d6b.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
