import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectMinute from "./SelectMinute";
import SelectSecond from "./SelectSecond";
// import { BasicTimePicker } from "./BasicTimePicker";
import axios from "axios";

function TimerPage() {
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [selectedSecond, setSelectedSecond] = useState(null);

  const sendTimeToBackend = () => {
    let seconds = "00";
    let minutes = "00";
    console.log("selectedMinute", selectedMinute);
    console.log("selectedSecond", selectedSecond);

    selectedMinute.toString().length === 1
      ? (minutes = `0${selectedMinute}`)
      : (minutes = selectedMinute);
    selectedSecond.toString().length === 1
      ? (seconds = `0${selectedSecond}`)
      : (seconds = selectedSecond);
    try {
      // axios.post("http://your-backend-api-url.com/api/time", {
      //
      //   minutes,
      //   seconds,
      // });
      console.log("Time sent to backend:", { minutes, seconds });
    } catch (error) {
      console.error("Error sending time to backend:", error);
    }
  };

  return (
    <div className="timer">
      <h2>Set Timer</h2>
      <div className="timer-container">
        <SelectMinute timeChange={setSelectedMinute} />
        <SelectSecond timeChange={setSelectedSecond} />
      </div>

      <button onClick={sendTimeToBackend} className="my_button">
        Set time
      </button>
      <Link to="/" style={{ display: "block", marginTop: "20px" }}>
        Back to Home
      </Link>
    </div>
  );
}

export default TimerPage;
