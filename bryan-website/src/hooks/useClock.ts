import { useState, useEffect } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();

  return {
    displayHours: hours % 12 || 12,
    minutes: time.getMinutes().toString().padStart(2, "0"),
    ampm: hours >= 12 ? "PM" : "AM",
    dayName: DAYS[time.getDay()],
    month: time.getMonth() + 1,
    date: time.getDate(),
  };
}
