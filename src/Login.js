import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ClockImage from "./iot-clock-image.jpg"; // Import the clock image

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to MainPage after login
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Heading */}
      <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#c818ea" }}>
        Command Your Clock!
      </h1>
      {/* Clock Image */}
      <img
        src={ClockImage}
        alt="Clock"
        style={{
          width: "100%",
          maxWidth: "600px", // Set a reasonable max width for responsiveness
          height: "auto", // Maintain aspect ratio
          margin: "20px auto",
          display: "block",
        }}
      />
      {/* Login/Logout Button */}
      <div>
        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="my_button"
            style={{
              display: "block",
              margin: "20px auto", // Center the button horizontally
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="my_button"
            style={{
              display: "block",
              margin: "20px auto", // Center the button horizontally
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginButton;
