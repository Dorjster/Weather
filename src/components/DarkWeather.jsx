import { MdOutlineLocationOn } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";

// import Api from "./Api";
const DarkWeather = (props) => {
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

  const [weatherData, setWeatherData] = useState(null);

  // const handleSuccess = (data) => {
  //   setWeatherData(data);
  //   console.log(weatherData);
  // };

  // const handleError = (error) => {
  //   console.error("Error:", error);
  // };

  return (
    <div className="mt-[100px]">
      <div
        style={{
          backgroundColor: backClr,
          border: backBorder,
          backdropFilter: 12,
        }}
        className="w-[380px] min-h-[700px] absolute z-10 bottom-[95px] rounded-3xl opacity-[.97] right-[110px]  blur-[.1] p-8 flex flex-col gap-3 ml-20  "
      >
        <div className="flex items-center justify-between  ">
          <div>
            <p style={{ color: dateClr }}>{currentDate}</p>
            <p className="text-[30px] font-[600]" style={{ color: cityClr }}>
              {" "}
              {/* {weatherData?.name} */}
              {city}
            </p>
          </div>
          <MdOutlineLocationOn className="text-[30px] text-[#9CA3AF]" />
        </div>
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div>
          <p id={tempID} className="text-[100px] font-[800] leading-normal ">
            {/* {weatherData?.main?.temp
              ? `${Math.floor(weatherData.main.temp_max)}°C`
              : ""} */}
            {temp}
          </p>
          <p
            style={{ color: condClr }}
            className="text-xl font-semibold leading-[60px] "
          >
            {/* {weatherData?.weather?.[1]?.main} */}
            {condition}
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
      <div className="absolute z-0 bottom-10 right-[60px]">
        <img src="/Ellipse 22.png" alt="" width={100} />
      </div>
      {/* <Api
        city={city}
        coordinates={coordinates}
        onSuccess={handleSuccess}
        onError={handleError}
      /> */}
    </div>
  );
};

export default DarkWeather;
