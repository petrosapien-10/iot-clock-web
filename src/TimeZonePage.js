import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectTimeZone from "./SelectTimeZone";
import getTime from "./getTime"; // Import the getTime function
import TimeZoneClock from "./TimeZoneClock"; // Import the TimeZoneClock component

export default function TimeZonePage() {
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [time, setTime] = useState(null); // Store fetched time
  const [error, setError] = useState(null); // Store errors

  // Function to fetch and display time for the selected time zone
  const fetchTime = async () => {
    if (!selectedTimeZone) {
      setError("Please select a time zone first.");
      return;
    }

    const [region, city] = selectedTimeZone.split("/"); // Parse the region and city
    try {
      setError(null); // Reset errors before making the request
      const currentTime = await getTime(region, city); // Use the getTime function
      setTime(currentTime); // Update the time state with the fetched time
    } catch (err) {
      setError("Could not fetch the current time.");
    }
  };

  return (
    <div className="timer">
      <div
        class
        style={{
          fontFamily: "sans-serif",
          fontSize: "55px",
          fontWeight: "bold",
          color: "#c818ea",
          marginBottom: "40px",
        }}
      >
        Time
      </div>
      <div className="timer-container">
        <div className="country-container">
          <SelectTimeZone timeZoneChange={setSelectedTimeZone} />
        </div>

        <button
          onClick={fetchTime}
          className="my_button"
          style={{ height: "55px" }}
        >
          Set Time
        </button>
      </div>

      {/* Use TimeZoneClock component to display the running clock */}
      {time && <TimeZoneClock time={time} />}

      {/* Display error messages */}
      <div
        style={{
          marginTop: "30px",
          fontSize: "24px",
          color: error ? "#ff4d4d" : "#c818ea", // Show error in red
          fontWeight: "bold",
        }}
      ></div>

      <Link
        className="backToHome"
        to="/"
        style={{ display: "block", marginTop: "20px", color: "#c818ea" }}
      >
        Back to Home
      </Link>
    </div>
  );
}
