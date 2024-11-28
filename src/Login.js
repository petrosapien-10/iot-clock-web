import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to MainPage after login
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [isAuthenticated]);

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()} className="my_button">
          Login
        </button>
      ) : (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="my_button"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginButton;
