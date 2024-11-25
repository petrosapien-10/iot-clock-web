import { useState, useEffect } from "react";
import axios from "axios";
export default function TimeZoneData() {
  const [timeZones, setTimeZones] = useState([]);
  useEffect(() => {
    axios
      .get("https://timeapi.io/api/timezone/availabletimezones")
      .then((response) => {
        setTimeZones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return timeZones;
}
