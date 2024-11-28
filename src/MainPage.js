import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import TimeZonePage from "./TimeZonePage";
import TimerPage from "./TimerPage";
import CounterPage from "./CounterPage";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { logout } = useAuth0();
  return (
    <div className="App">
      <div className="App-title">Time, Timer, and Counter</div>
      <div className="App-nav-container">
        <nav className="App-nav">
          <Link to="main/country">Set Time</Link>
          <Link to="main/timer">Set Timer</Link>
          <Link to="main/counter">Set Counter</Link>
        </nav>
      </div>

      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="my_button"
      >
        Logout
      </button>
    </div>
  );
}

export default App;
