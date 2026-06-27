import { useEffect, useRef, useState } from "react";

const Task4 = () => {
  // Current Time
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Stopwatch
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  // Current Clock
  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  // Start
  const handleStart = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // Stop
  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Resume
  const handleResume = () => {
    handleStart();
  };

  // Reset
  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Digital Clock & Stopwatch</h1>

      <h2>Current Time</h2>
      <h3>{currentTime}</h3>

      <h2>Stopwatch</h2>
      <h3>{seconds} Seconds</h3>

      <button onClick={handleStart}>Start</button>

      <button onClick={handleStop}>Stop</button>

      <button onClick={handleResume}>Resume</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Task4;