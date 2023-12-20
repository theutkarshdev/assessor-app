import React, { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Get hours, minutes, and seconds
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Determine AM or PM
  const meridian = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  const formattedHours = hours % 12 || 12;

  // Display time with AM/PM
  const timeString = `${formattedHours}:${minutes} ${meridian}`;

  // Calculate angles
  const hourAngle = (((hours % 12) + minutes / 60) * 360) / 12;
  const minuteAngle = (minutes * 360) / 60;
  const secondAngle = (seconds * 360) / 60;

  return (
    <div>
      <div className="analog-clock">
        <div className="circle-dot"></div>
        <div className="clock-face">
          <div className="hour-hand" style={{ transform: `rotate(${hourAngle}deg)` }} />
          <div className="minute-hand" style={{ transform: `rotate(${minuteAngle}deg)` }} />
          <div className="second-hand" style={{ transform: `rotate(${secondAngle}deg)` }} />
        </div>
      </div>
      <p>{timeString}</p>
    </div>
  );
};

export default AnalogClock;
