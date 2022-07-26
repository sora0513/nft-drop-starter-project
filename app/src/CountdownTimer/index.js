// CountdownTimer/index.js
import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ dropDate }) => {
  // State
  const [timerString, setTimerString] = useState("");

  return (
    <div className="timer-container">
      <p className="timer-header">Candy Drop Starting In</p>
      {dropDate && <p className="timer-value">{`⏰ ${dropDate}`}</p>}
    </div>
  );
};

export default CountdownTimer;
