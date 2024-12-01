import axios from "axios";

const getTime = async (region, city) => {
  try {
    const apiUrl = `https://timeapi.io/api/time/current/zone?timeZone=${region}/${city}`;

    // Make the GET request to the API
    const response = await axios.get(apiUrl);

    console.log("API Response:", response.data); // Debugging: Log the full API response

    // Validate response
    if (
      !response.data ||
      response.data.hour === undefined || // Allow `0` as a valid hour
      response.data.minute === undefined ||
      response.data.seconds === undefined
    ) {
      console.error(
        "Invalid data received from time API for:",
        `${region}/${city}`
      );
      throw new Error("Invalid data received from time API");
    }

    // Extract hour, minute, and second from the response
    const { hour, minute, seconds: second } = response.data;

    console.log("Fetched time:", { hour, minute, second });
    return { hour, minute, second };
  } catch (error) {
    console.error("Error fetching current time:", error.message);

    // Add fallback for regions with invalid data
    throw new Error("Could not fetch current time. Please try again.");
  }
};

export default getTime;
