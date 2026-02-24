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
        <SideButton 
          label="Github" 
          pairSDCard={true} 
        />

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
        <SideButton label="Email" />
      </div>
    </div>
  );
}
