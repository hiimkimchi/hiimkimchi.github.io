import ChannelTile from "../components/ChannelTile";
import BottomBar from "../components/BottomBar";
import discImg from "../assets/disc.png";
import { FileText, Sun, Library } from "lucide-react";
import { AVATAR_COLORS } from "../models/icons";

export default function Homescreen() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      {/* Channel Grid Area */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 relative mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 w-full max-w-5xl">
          {/* Disc Channel → Recents */}
          <ChannelTile className="bg-white pt-3 pb-2 flex flex-col items-center" to="/recents">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={discImg}
                alt="Disc"
                className="w-24 h-24 object-contain drop-shadow-sm"
              />
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
            <FileText className="w-14 h-14 text-sky-400" strokeWidth={1.5} />
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
                <Sun className="w-16 h-16 text-white/40" strokeWidth={1.5} />
              </div>
            </div>
          </ChannelTile>

          {/* News Channel → Collections */}
          <ChannelTile className="bg-gradient-to-b from-green-900 via-green-700 to-green-600" to="/collections">
            <div className="p-1.5 sm:p-2.5 md:p-3 flex flex-col h-full">
              <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                Collections
              </span>
              <div className="flex-1 flex items-center justify-center">
                <Library className="w-16 h-16 text-green-400/40" strokeWidth={1.5} />
              </div>
            </div>
          </ChannelTile>

          {/* Empty tiles */}
          <ChannelTile isEmpty />
          <ChannelTile isEmpty />

          {/* Additional Empty tiles for non-mobile view */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="hidden md:block">
              <ChannelTile isEmpty />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
