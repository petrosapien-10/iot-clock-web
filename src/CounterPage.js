import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CounterClock from "./CounterClock"; // Import CounterClock

function CounterPage() {
  const [counterState, setCounterState] = useState("stopped"); // stopped, running, paused
  const [counterValue, setCounterValue] = useState(0); // Current counter value
  const [reset, setReset] = useState(false);

  // Effect to handle the counter functionality
  useEffect(() => {
    let interval;

    if (counterState === "running") {
      interval = setInterval(() => {
        setCounterValue((prevValue) => prevValue + 1);
      }, 1000); // Increment counter every second
    }

    if (counterState === "paused" || counterState === "stopped") {
      clearInterval(interval); // Stop incrementing
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [counterState]);

  // Effect to handle the reset functionality
  useEffect(() => {
    if (reset) {
      setCounterValue(0); // Reset the counter to zero
      sendResetToBackend(); // Notify backend about reset
      setReset(false); // Reset the reset state
      setCounterState("stopped"); // Stop the counter
    }
  }, [reset]);

  // Send counter state to backend
  const sendCounterStateToBackend = async (state) => {
    try {
      console.log("Counter state sent to backend:", state);
    } catch (error) {
      console.error("Error sending counter state to backend:", error);
    }
  };

  // Send reset action to backend
  const sendResetToBackend = async () => {
    try {
      console.log("Reset sent to backend");
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

      {/* Use CounterClock to show the counter value */}
      <CounterClock value={counterValue} />

      <div className="counterButton-container">
        {/* Start Button: Show only if the counter is stopped */}
        {counterState === "stopped" && (
          <button
            onClick={() => setCounterState("running")}
            className="my_button"
          >
            Start
          </button>
        )}

        {/* Pause Button: Show only if the counter is running */}
        {counterState === "running" && (
          <button
            onClick={() => setCounterState("paused")}
            className="my_button"
          >
            Pause
          </button>
        )}

        {/* Resume Button: Show only if the counter is paused */}
        {counterState === "paused" && (
          <button
            onClick={() => setCounterState("running")}
            className="my_button"
          >
            Resume
          </button>
        )}

        {/* Reset Button: Show only if the counter is running or paused */}
        {(counterState === "running" || counterState === "paused") && (
          <button onClick={() => setReset(true)} className="my_button">
            Reset
          </button>
        )}
      </div>

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

export default CounterPage;
