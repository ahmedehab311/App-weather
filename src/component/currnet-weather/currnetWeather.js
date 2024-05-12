import "./currnetWeather.css";

import React from "react";

function currnetWeather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} className="weather-icon" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="paramter-row">
            <span className="paramter-label">Details</span>
          </div>
          <div className="paramter-row">
            <span className="paramter-label">Feels like</span>
            <span className="paramter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="paramter-row">
            <span className="paramter-label">Wind</span>
            <span className="paramter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="paramter-row">
            <span className="paramter-label">Humidity</span>
            <span className="paramter-value">{data.main.humidity}%</span>
          </div>
          <div className="paramter-row">
            <span className="paramter-label">Pressure</span>
            <span className="paramter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default currnetWeather;
