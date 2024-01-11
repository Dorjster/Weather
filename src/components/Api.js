import axios from "axios";

export const fetchWeatherData = async (cityName) => {
  const api_key = "7c91776fb1267161889e298c3e7ceb4b";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
