// Api.js
import { useState, useEffect } from "react";
import axios from "axios";

const Api = ({ city, coordinates, onSuccess, onError }) => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const api_key = "7c91776fb1267161889e298c3e7ceb4b";
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=Metric&appid=${api_key}`
        );

        onSuccess(response.data);
      } catch (error) {
        onError(error);
      }
    };

    fetchWeatherData();
  }, [city, coordinates, onSuccess, onError]);

  return null;
};

export default Api;
