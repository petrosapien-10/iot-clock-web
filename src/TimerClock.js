import React, { useState, useEffect } from "react";

function TimerClock({ minutes, seconds, isPaused, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (minutes === null || seconds === null) return;

    // Initialize timeLeft in seconds
    const totalTimeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    setTimeLeft(totalTimeInSeconds);
  }, [minutes, seconds]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) {
      if (timeLeft === 0 && onComplete) {
        onComplete();
      }
      return;
    }

    // Skip the interval update when paused
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [timeLeft, isPaused, onComplete]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        fontSize: "32px",
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      {timeLeft !== null ? formatTime(timeLeft) : "00:00"}
    </div>
  );
}

export default TimerClock;
