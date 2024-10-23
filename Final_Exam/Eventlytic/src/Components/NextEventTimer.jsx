import React, { useState, useEffect } from "react";

export const NextEventTimer = () => {
  // Set a target date for the next event 
  const targetDate = new Date("2024-10-15T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-5xl underline text-center font-bold bg-blue-950 text-white pt-4">
        Next Event
      </h1>
      <div className="grid grid-flow-col gap-5 text-center py-5 auto-cols-max w-full justify-center bg-blue-950 pb-4">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{timeLeft.days}</span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">{timeLeft.hours}</span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {timeLeft.minutes}
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {timeLeft.seconds}
          </span>
          sec
        </div>
      </div>
    </>
  );
};
