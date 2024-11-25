import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TimeZonePage from "./TimeZonePage";
import TimerPage from "./TimerPage";
import CounterPage from "./CounterPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="App-title">Time, Timer, and Counter</h1>
        <div className="App-nav-container">
          <nav className="App-nav">
            <Link to="/country">Set Time</Link>
            <Link to="/timer">Set Timer</Link>
            <Link to="/counter">Set Counter</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/country" element={<TimeZonePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
