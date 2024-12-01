import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectMinute from "./SelectMinute";
import SelectSecond from "./SelectSecond";
import TimerClock from "./TimerClock";

function TimerPage() {
  const [selectedMinute, setSelectedMinute] = useState(0); // Default value of 0
  const [selectedSecond, setSelectedSecond] = useState(0); // Default value of 0
  const [startTimer, setStartTimer] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showSetButton, setShowSetButton] = useState(true); // Control visibility of Set Timer button
  const [timerKey, setTimerKey] = useState(0); // Unique key for TimerClock component

  const sendTimeToBackend = () => {
    // Ensure selectedMinute and selectedSecond are valid numbers
    if (selectedMinute === null || selectedSecond === null) {
      console.error(
        "Please select both minutes and seconds before starting the timer."
      );
      return;
    }

    let seconds = "00";
    let minutes = "00";

    // Format minutes and seconds for display
    selectedMinute.toString().length === 1
      ? (minutes = `0${selectedMinute}`)
      : (minutes = selectedMinute);
    selectedSecond.toString().length === 1
      ? (seconds = `0${selectedSecond}`)
      : (seconds = selectedSecond);

    try {
      console.log("Time sent to backend:", { minutes, seconds });
      setStartTimer(true); // Start the timer
      setIsPaused(false); // Ensure the timer starts running
      setShowSetButton(false); // Hide the Set Timer button
      setTimerKey((prevKey) => prevKey + 1); // Update the timer key to force remount
    } catch (error) {
      console.error("Error sending time to backend:", error);
    }
  };

  const handlePauseResume = () => {
    setIsPaused((prevState) => !prevState); // Toggle pause state
  };

  const handleReset = () => {
    setStartTimer(false); // Stop the timer
    setIsPaused(false); // Ensure the timer is not paused
    setSelectedMinute(0); // Reset to default value
    setSelectedSecond(0); // Reset to default value
    setShowSetButton(true); // Show the Set Timer button again
    setTimerKey((prevKey) => prevKey + 1); // Update the timer key to force remount
  };

  const handleTimerComplete = () => {
    console.log("Timer completed!");
    setStartTimer(false); // Stop the timer
    setShowSetButton(true); // Show the Set Timer button again
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
        Timer
      </div>

      {/* Conditionally render the select boxes */}
      {!startTimer && (
        <div className="timer-container">
          <SelectMinute timeChange={setSelectedMinute} />
          <SelectSecond timeChange={setSelectedSecond} />
        </div>
      )}

      {/* Show Set Timer button only if visible */}
      {showSetButton && (
        <button onClick={sendTimeToBackend} className="my_button">
          Set Timer
        </button>
      )}

      {/* Display TimerClock and action buttons if the timer is started */}
      {startTimer && (
        <div>
          <TimerClock
            key={timerKey} // Unique key to force remount
            minutes={selectedMinute}
            seconds={selectedSecond}
            isPaused={isPaused}
            onComplete={handleTimerComplete}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button onClick={handlePauseResume} className="my_button">
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={handleReset} className="my_button">
              Reset
            </button>
          </div>
        </div>
      )}

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

export default TimerPage;
