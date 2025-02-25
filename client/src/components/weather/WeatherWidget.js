import { useState, useEffect } from "react";

const API_KEY = "2b1eec77809e4f37953161017252202";

const WeatherWidget = ({ city, country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city},${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temp: Math.round(data.current.temp_c),
          condition: data.current.condition.text,
          icon: data.current.condition.icon, // WeatherAPI provides an icon URL
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city, country]);

  return (
    <div className="weather-widget">
      {weather ? (
        <div className="weather-card">
          <img src={weather.icon} alt={weather.condition} />
          <div>
            <h2>
              {city}, {country}
            </h2>
            <p>{weather.condition}</p>
            <h1>{weather.temp}°C</h1>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
