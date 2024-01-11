// Search.js
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { placeholder } = props;

  const iconStyle = {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#ccc",
    fontSize: "26px",
  };

  const buttonClick = async () => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = `Finding ${searchQuery}`;
    window.speechSynthesis.speak(speech);

    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
    );
  };

  return (
    <div>
      <div>
        <label
          className="flex gap-10"
          style={{ position: "relative", display: "inline-block" }}
        >
          <IoMdSearch style={iconStyle} />
          <input
            className="px-3 py-3 w-[420px] rounded-3xl shadow-xl"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={placeholder}
            style={{ paddingLeft: "65px", fontSize: "18px" }}
          />
          <button onClick={buttonClick}>Search</button>
        </label>
      </div>
    </div>
  );
};

export default Search;
