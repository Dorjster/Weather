import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Container from "@/components/Container";
import { IoMdSearch } from "react-icons/io";
import LightWeather from "@/components/LightWeather";
import DarkWeather from "@/components/DarkWeather";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  console.log(weatherData);
  return (
    <div className="w-full h-full">
      <Layout>
        <Container>
          {" "}
          <div className="flex gap-3 absolute ml-[525px] mt-[400px] z-20 min-w-[100px] min-h-[100px] bg-gray-100 p-6 rounded-full ">
            <Image src="/Group 4.png" width={40} height={40} />
            <Image src="/Vector.png" width={40} height={40} />
          </div>
          <Search placeholder="Search" setWeatherData={setWeatherData} />
          <div className="flex">
            <div className="flex w-1/2 h-[750px]">
              <LightWeather
                backClr="white"
                backBorder="solid 6px transparent"
                city={weatherData?.name}
                blur="12px"
                date="September 10, 2021"
                img="/nara.png"
                temp={
                  weatherData?.main?.temp
                    ? `${Math.floor(weatherData.main.temp_max)}°C`
                    : ""
                }
                condition={weatherData?.weather?.[0]?.main || ""}
                condClr="orange"
                iconClr="black"
                tempID="day"
              />
            </div>
            <div className="w-[680px] h-[950px] bg-[#0F141E] relative bottom-[115px] pt-[115px] ">
              <DarkWeather
                backClr="rgba(17, 24, 39, 0.75)"
                backBorder="solid 6px transparent"
                city={weatherData?.name}
                blur="12px"
                date="September 10, 2021"
                dateClr="#9CA3AF"
                cityClr="#FFFFFF"
                img="/sara.png"
                temp={
                  weatherData?.main?.temp
                    ? `${Math.floor(weatherData.main.temp_min)}°C`
                    : ""
                }
                condition={weatherData?.weather?.[0]?.main || ""}
                condClr="#777CCE"
                iconClr="#F9FAFB"
                tempID="night"
              />
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
