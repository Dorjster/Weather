// Search.js

import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

import { fetchCitySuggestions, fetchWeatherData } from "./Api";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { placeholder, setWeatherData } = props;

  const iconStyle = {
    position: "absolute",
    left: "380px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "26px",
  };

  const buttonClick = async () => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = `${searchQuery}`;
    window.speechSynthesis.speak(speech);

    const response = await fetchCitySuggestions(searchQuery);
    setSuggestions(response.slice(0, 3));
  };

  const handleSuggestionClick = async (city) => {
    const response = await fetchWeatherData(city);
    setWeatherData(response);

    setSearchQuery(city);

    setSuggestions([]);
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = `${searchQuery}`;
    window.speechSynthesis.speak(speech);
  };

  const fetchSuggestions = async () => {
    const response = await fetchCitySuggestions(searchQuery);
    console.log(response);
    setSuggestions(response.slice(0, 3));
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  return (
    <div className="flex gap-10 relative">
      <div style={{ position: "relative" }}>
        <label className="flex gap-10" style={{ display: "inline-block" }}>
          <button onClick={buttonClick}>
            <IoMdSearch
              className="text-[#ccc] hover:text-[#3c3c3c]"
              style={iconStyle}
            />
          </button>

          <input
            className="px-3 py-3 w-[420px] rounded-3xl shadow-xl"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={placeholder}
            style={{ paddingLeft: "25px", fontSize: "18px" }}
          />
        </label>
        {suggestions.length > 0 && (
          <div className="">
            {suggestions?.map((city, index) => (
              <div
                key={index}
                className="suggestion-item bg-white absolute z-20 max-h-[200px] min-w-[420px] shadow-xl rounded-xl block p-6 mt-[10px] "
                onClick={() => handleSuggestionClick(city.text)}
              >
                <div className="flex gap-6">
                  {" "}
                  <MdOutlineLocationOn className="self-center text-[20px]" />
                  <p className="text-2xl">{city.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
