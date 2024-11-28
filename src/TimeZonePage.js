import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SelectTimeZone from "./SelectTimeZone";
import { set } from "date-fns";

export default function CountryPage() {
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [timeZoneSent, setTimeZoneSent] = useState(null);
  useEffect(() => {
    if (selectedTimeZone) {
      const [city, region] = selectedTimeZone.split("/");
      setTimeZoneSent({ city, region });
    }
  }, [selectedTimeZone]);

  const sendCountryToBackend = () => {
    try {
      // axios.post("http://your-backend-api-url.com/api/country", {
      //   timeZoneSent,
      // });
      console.log("TimeZone sent to backend:", timeZoneSent);
    } catch (error) {
      console.error("Error sending country to backend:", error);
    }
  };

  return (
    <div className="timer">
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "55px",
          fontWeight: "bold",
          color: "#c818ea",
          marginBottom: "40px",
        }}
      >
        Set TimeZone
      </div>
      <div className="timer-container">
        <div className="country-container">
          <SelectTimeZone timeZoneChange={setSelectedTimeZone} />
        </div>

        <button
          onClick={sendCountryToBackend}
          className="my_button"
          style={{ height: "55px" }}
        >
          Set TimeZone
        </button>
      </div>

      <Link
        to="/"
        style={{ display: "block", marginTop: "20px", color: "#c818ea" }}
      >
        Back to Home
      </Link>
    </div>
  );
}
