import React, { useState, useEffect } from "react";

function TimeZoneClock({ time }) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    if (!time) return;

    // Initialize the clock with the fetched time
    const initialTime = new Date();
    initialTime.setHours(time.hour, time.minute, time.second);
    setCurrentTime(initialTime);

    // Update the clock every second
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [time]);

  if (!currentTime) {
    return null;
  }

  // Format the time in 24-hour format
  const formattedTime = currentTime.toLocaleTimeString("en-GB", {
    hour12: false,
  });

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
      {formattedTime}
    </div>
  );
}

export default TimeZoneClock;
