import React, { useState } from 'react';
import { Select, Card } from 'antd';
import './WeatherTab.css';  // Import the CSS file

const { Option } = Select;

const WeatherTab = () => {
  const [city, setCity] = useState<string>('New York');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async (city: string) => {
    setCity(city);
    const apiKey = '68654640e8msh904e58ffe8ffeb3p1b54f2jsn4d496ef671ae'; // Replace with your RapidAPI key
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setWeather(result);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const handleChange = (value: string) => {
    fetchWeather(value);
  };

  return (
    <div className="weather-container">
      <Select
        defaultValue={city}
        className="select-dropdown"
        onChange={handleChange}
      >
        <Option value="New York">New York</Option>
        <Option value="Los Angeles">Los Angeles</Option>
        <Option value="Chicago">Chicago</Option>
        <Option value="Houston">Houston</Option>
        <Option value="Phoenix">Phoenix</Option>
        <Option value="Philadelphia">Philadelphia</Option>
        <Option value="San Antonio">San Antonio</Option>
        <Option value="San Diego">San Diego</Option>
        <Option value="Dallas">Dallas</Option>
        <Option value="San Jose">San Jose</Option>
        <Option value="Austin">Austin</Option>
        <Option value="Jacksonville">Jacksonville</Option>
        <Option value="Fort Worth">Fort Worth</Option>
        <Option value="Columbus">Columbus</Option>
        <Option value="Indianapolis">Indianapolis</Option>
      </Select>
      {weather && (
        <Card className="weather-card" title={`Weather in ${city}`}>
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Weather: {weather.weather[0].description}</p>
        </Card>
      )}
    </div>
  );
};

export default WeatherTab;
