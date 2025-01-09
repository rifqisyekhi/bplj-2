import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the date and time to display as you want in GMT+7 (Asia/Jakarta)
  const formattedDate = currentTime.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta", // Set the time zone to Jakarta (GMT+7)
  });
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 12-hour clock with AM/PM
    timeZone: "Asia/Jakarta", // Set the time zone to Jakarta (GMT+7)
  });

  return (
    <div className="text-left mb-4">
      <h1 className="text-blue-950 2xl:text-5xl text-4xl font-bold">
        {formattedDate}
      </h1>
      <h2 className="text-blue-950 2xl:text-6xl text-5xl font-bold">
        {formattedTime} WIB
      </h2>
    </div>
  );
};

export default RealTimeClock;
