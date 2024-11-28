import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginButton from "./Login";
import MainPage from "./MainPage";
import TimeZonePage from "./TimeZonePage";
import TimerPage from "./TimerPage";
import CounterPage from "./CounterPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="My-app">
      <Router>
        <Routes>
          {/* Default login route */}
          <Route path="/" element={<LoginButton />} />
          {/* Main page after login */}
          {isAuthenticated && (
            <>
              <Route path="/*" element={<MainPage />} />
              <Route path="main/country" element={<TimeZonePage />} />
              <Route path="main/timer" element={<TimerPage />} />
              <Route path="main/counter" element={<CounterPage />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
