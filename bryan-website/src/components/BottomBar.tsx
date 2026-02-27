import SideButton from "./SideButton";
import { useClock } from "../hooks/useClock";

export default function BottomBar() {
  const { displayHours, minutes, ampm, dayName, month, date } = useClock();

  return (
    <div className="relative shrink-0">
      {/* Wave separator */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-12 md:h-14 block"
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
      <div className="bg-gradient-to-b from-[#b8b8b8] to-[#a8a8a8] px-5 sm:px-10 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Left: Wii button + SD card */}
        <SideButton 
          label="Github" 
          pairSDCard={true} 
        />

        {/* Center: Clock + Date */}
        <div className="flex flex-col items-center">
          <div className="wii-clock flex items-baseline">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
              {displayHours}:{minutes}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-600 ml-1.5">
              {ampm}
            </span>
          </div>
          <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
            {dayName} {month}/{date}
          </span>
        </div>

        {/* Right: Mail button */}
        <SideButton label="Email" />
      </div>
    </div>
  );
}
