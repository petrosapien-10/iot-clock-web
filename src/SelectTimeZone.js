import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TimeZoneData from "./TimeZoneData";

export default function SelectTimeZone({ timeZoneChange }) {
  const [timeZone, setTimeZone] = useState("");
  const timeZoneList = TimeZoneData();
  useEffect(() => {
    timeZoneChange(timeZone);
  }, [timeZone]);
  const handleChange = (event) => {
    setTimeZone(event.target.value);
  };
  console.log("timezone", timeZone);

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          TimeZone
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeZone}
          label="TimeZone"
          onChange={handleChange}
          sx={{
            color: "white",
            fontWeight: "bold",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#0bdbf1", // Set border color to white by default
            },
          }}
        >
          {timeZoneList.map((timeZone) => (
            <MenuItem value={timeZone} key={timeZone}>
              {timeZone}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
