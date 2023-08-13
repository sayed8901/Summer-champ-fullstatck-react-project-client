import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
      setTimeRemaining(difference);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(timeRemaining % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="grid grid-cols-5 gap-2 sm:gap-6 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-4xl sm:text-5xl">
          <span>{months}</span>
        </span>
        months
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-4xl sm:text-5xl">
          <span>{days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-4xl sm:text-5xl">
          <span>{hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-4xl sm:text-5xl">
          <span>{minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="font-mono text-4xl sm:text-5xl">
          <span className="animate-ping">{seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
