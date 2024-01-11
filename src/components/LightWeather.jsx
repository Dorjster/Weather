import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "./Api";

const LightWeather = (props) => {
  const {
    coordinates,
    backClr,
    backBorder,
    date,
    tempID,
    dateClr,
    city,
    cityClr,
    img,
    temp,
    tempClr,
    condition,
    condClr,
    iconClr,
  } = props;
  const currentDate = new Date().toDateString();

  // const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     const api_key = "7c91776fb1267161889e298c3e7ceb4b";
  //     try {
  //       const response = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=Metric&appid=${api_key}`
  //       );

  //       console.log(response.data);

  //       setWeatherData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   fetchWeatherData();
  // }, [coordinates]);
  const [weatherData, setWeatherData] = useState(null);

  const handleSuccess = (data) => {
    setWeatherData(data);
  };

  const handleError = (error) => {
    console.error("Error:", error);
  };

  return (
    <div>
      <div className="absolute z-0">
        <img src="/Group 2.png" alt="" width={100} />
      </div>
      <div
        style={{
          backgroundColor: backClr,
          border: backBorder,
          backdropFilter: 12,
        }}
        className="w-[380px] h-[700px]  absolute z-10 ml-[40px] mt-[40px] rounded-3xl opacity-[.97]   blur-[.1] p-8 flex flex-col gap-3  "
      >
        <div className="flex items-center justify-between  ">
          <div>
            <p style={{ color: dateClr }}>{currentDate}</p>
            <p className="text-[30px] font-[600]" style={{ color: cityClr }}>
              {weatherData?.name}
            </p>
          </div>
          <MdOutlineLocationOn className="text-[30px]" />
        </div>
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div>
          <p id={tempID} className="text-[100px] font-[800] leading-normal ">
            {weatherData?.main?.temp
              ? `${Math.floor(weatherData.main.temp_min)}°C`
              : ""}
          </p>
          <p
            style={{ color: condClr }}
            className="text-xl font-semibold leading-[60px] "
          >
            {weatherData?.weather?.[0]?.main || ""}
          </p>
        </div>
        <div className="flex justify-between mt-5 ">
          <BiHomeAlt
            className="text-[30px] font-thin"
            style={{ color: iconClr }}
          />
          <MdOutlineLocationOn
            className="text-[30px] opacity-35"
            style={{ color: iconClr }}
          />
          <AiOutlineHeart
            className="text-[30px] opacity-35"
            style={{ color: iconClr }}
          />
          <FiUser
            className="text-[30px] opacity-35"
            style={{ color: iconClr }}
          />
        </div>
      </div>
      <Api
        coordinates={coordinates}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default LightWeather;
