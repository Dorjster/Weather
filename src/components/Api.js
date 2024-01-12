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
export const fetchCitySuggestions = async (query) => {
  const api_key =
    "pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg";
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${api_key}`
    );

    return response.data.features;
  } catch (error) {
    console.log(error);
    return [];
  }
};
