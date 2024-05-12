import React, { useRef, useState } from "react";
import Search from "./search/search";
import "./app.css";
import CurrnetWeather from "./currnet-weather/currnetWeather";
import ForeCast from "./foreCast/foreCast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [foreCast, setForeCast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forceCatResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forceCatResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contanier">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrnetWeather data={currentWeather} />}
{ foreCast && <ForeCast data={foreCast}/>}
    </div>
  );
}

export default App;
