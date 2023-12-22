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
    <>
      <div className="clock">
        <div className="hour_hand" style={{ transform: `rotateZ(${hourAngle}deg)` }} />
        <div className="min_hand" style={{ transform: `rotateZ(${minuteAngle}deg)` }} />
        <div className="sec_hand" style={{ transform: `rotateZ(${secondAngle}deg)` }} />
      </div>
      <p>{timeString}</p>
    </>
  );
};

export default AnalogClock;
