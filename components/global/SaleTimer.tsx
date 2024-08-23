"use client";

import { useState, useEffect } from "react";

const SaleTimer = ({
  label,
  deadline
}: {
  label: string;
  deadline: string;
}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-20">
      <p className="text-36px-semibold text-text2">{label}</p>
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="title-12px-medium text-text2">Days</p>
          <p className="text-32px-bold text-text2">{days}</p>
        </div>
        <p className="text-16px-medium text-hover1">:</p>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="title-12px-medium text-text2">Hours</p>
          <p className="text-32px-bold text-text2">{hours}</p>
        </div>
        <p className="text-16px-medium text-hover1">:</p>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="title-12px-medium text-text2">Minutes</p>
          <p className="text-32px-bold text-text2">{minutes}</p>
        </div>
        <p className="text-16px-medium text-hover1">:</p>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="title-12px-medium text-text2">Seconds</p>
          <p className="text-32px-bold text-text2">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default SaleTimer;
