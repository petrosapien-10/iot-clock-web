import React from "react";

function CounterClock({ value }) {
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
        fontSize: "40px",
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      {formatTime(value)}
    </div>
  );
}

export default CounterClock;
