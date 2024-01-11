// Search.js
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { fetchWeatherData } from "./Api";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
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
    speech.text = `Finding ${searchQuery}`;
    window.speechSynthesis.speak(speech);

    const response = await fetchWeatherData(searchQuery);

    setWeatherData(response);
    // const response = await axios.get(
    //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
    // );
  };

  return (
    <div className="flex gap-10">
      <div>
        <label
          className="flex gap-10"
          style={{ position: "relative", display: "inline-block" }}
        >
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
      </div>{" "}
    </div>
  );
};

export default Search;
