import { useState, useEffect } from "react";

export default function BottomBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[time.getDay()];
  const month = time.getMonth() + 1;
  const date = time.getDate();

  return (
    <div className="relative shrink-0">
      {/* Wave separator */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 md:h-12 block"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(130, 195, 230, 0.5)" />
            <stop offset="60%" stopColor="rgba(160, 185, 200, 0.6)" />
            <stop offset="100%" stopColor="#b8b8b8" />
          </linearGradient>
        </defs>
        <path
          d="M0,35 C240,12 480,48 720,28 C960,8 1200,42 1440,22 L1440,60 L0,60 Z"
          fill="url(#waveGrad)"
        />
      </svg>

      {/* Bar */}
      <div className="bg-gradient-to-b from-[#b8b8b8] to-[#a8a8a8] px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Left: Wii button + SD card */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[3px] border-wii-ring
              bg-white/90 flex items-center justify-center hover:bg-white
              transition-colors shadow-md"
          >
            <span className="text-wii-ring font-bold text-xs sm:text-sm tracking-tight">
              Wii
            </span>
          </button>

          <div
            className="hidden sm:flex w-5 h-6 bg-gray-400/80 rounded-sm border border-gray-500/50
              items-center justify-center"
          >
            <div className="w-3 h-1.5 bg-gray-300/80 rounded-[1px]" />
          </div>
        </div>

        {/* Center: Clock + Date */}
        <div className="flex flex-col items-center">
          <div className="wii-clock flex items-baseline">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
              {displayHours}:{minutes}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 ml-1">
              {ampm}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
            {dayName} {month}/{date}
          </span>
        </div>

        {/* Right: Mail button */}
        <button
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[3px] border-wii-ring
            bg-white/90 flex items-center justify-center hover:bg-white
            transition-colors shadow-md"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-wii-ring"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
