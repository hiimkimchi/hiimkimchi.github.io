import ChannelTile from "../components/ChannelTile";
import BottomBar from "../components/BottomBar";

const AVATAR_COLORS = [
  "bg-amber-300",
  "bg-pink-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-purple-300",
  "bg-red-300",
  "bg-yellow-200",
  "bg-teal-300",
  "bg-orange-300",
  "bg-indigo-300",
  "bg-rose-200",
  "bg-lime-300",
];

export default function Homescreen() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      {/* Channel Grid Area */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 relative mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 w-full max-w-5xl">
          {/* Disc Channel → Home */}
          <ChannelTile className="bg-white pt-3 pb-2 flex flex-col items-center">
            <div className="flex-1 flex items-center justify-center">
              <div className="wii-disc w-24 h-24 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white shadow-inner" />
              </div>
            </div>
          </ChannelTile>

          {/* Mii Channel → About Me */}
          <ChannelTile className="bg-white" to="/about">
            <div className="flex-1 flex flex-wrap items-center justify-center gap-1 p-2 content-center">
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  className={`w-5 h-6 rounded-full ${color} border border-white shadow-sm`}
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 pb-1 sm:pb-1.5 text-center font-medium">
              About Me
            </div>
          </ChannelTile>

          {/* Photo Channel → Projects */}
          <ChannelTile className="bg-white" to="/projects">
            <div className="bg-gradient-to-r from-amber-700 to-amber-500 px-2 py-0.5 sm:py-1 w-full">
              <span className="text-white text-xs sm:text-sm font-bold drop-shadow-sm">
                Projects
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 p-1.5 sm:p-2">
              <div className="w-14 h-10 bg-emerald-400 rounded-sm shadow-sm -rotate-3" />
              <div className="w-14 h-10 bg-amber-400 rounded-sm shadow-sm rotate-2 -ml-1" />
              <div className="hidden sm:block w-14 h-10 bg-sky-400 rounded-sm shadow-sm -rotate-1 -ml-1" />
            </div>
          </ChannelTile>

          {/* Wii Shop Channel → Resume */}
          <ChannelTile className="bg-white items-center justify-center gap-1 sm:gap-2" to="/resume">
            <svg
              className="w-14 h-14 text-sky-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm-2 10V9.5l4 2.5-4 2.5V14z" />
            </svg>
            <span className="text-xs sm:text-sm text-sky-500 font-bold">
              Resume
            </span>
          </ChannelTile>

          {/* Forecast Channel → Skills */}
          <ChannelTile className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500" to="/skills">
            <div className="p-1.5 sm:p-2.5 md:p-3 flex flex-col h-full">
              <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                Skills
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
            </div>
          </ChannelTile>

          {/* News Channel → Blog */}
          <ChannelTile className="bg-gradient-to-b from-green-900 via-green-700 to-green-600" to="/blog">
            <div className="p-1.5 sm:p-2.5 md:p-3 flex flex-col h-full">
              <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                Blog
              </span>
              <div className="flex-1 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-green-400/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
            </div>
          </ChannelTile>

          {/* Empty tiles */}
          <ChannelTile isEmpty />
          <ChannelTile isEmpty />
          <ChannelTile isEmpty />
          <ChannelTile isEmpty />
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
