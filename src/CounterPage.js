import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CounterPage() {
  const [isCounterActive, setIsCounterActive] = useState(false);
  const [reset, setReset] = useState("");
  useEffect(() => {
    sendCounterActiveToBackend(isCounterActive);
  }, [isCounterActive]);

  useEffect(() => {
    sendResetToBackend(reset);
  }, [reset]);

  const sendCounterActiveToBackend = async (isCounterActive) => {
    try {
      // await axios.post("http://your-backend-api-url.com/api/counter", {
      //   isCounterActive,
      // });
      console.log("Counter active sent to backend:", isCounterActive);
    } catch (error) {
      console.error("Error sending counter active to backend:", error);
    }
  };

  const sendResetToBackend = async (reset) => {
    try {
      // await axios.post("http://your-backend-api-url.com/api/reset", {
      //   reset,
      // });
      console.log("Reset sent to backend:", reset);
    } catch (error) {
      console.error("Error sending reset to backend:", error);
    }
  };
  return (
    <div className="counter">
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "55px",
          fontWeight: "bold",
          color: "#c818ea",
          marginBottom: "40px",
        }}
      >
        Counter
      </div>
      <div className="counterButton-container">
        <button
          onClick={() => setIsCounterActive(!isCounterActive)}
          className="my_button"
        >
          {isCounterActive ? "Stop Counter" : "Start Counter"}
        </button>
        <button onClick={() => setReset("true")} className="my_button">
          Reset
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

export default CounterPage;
