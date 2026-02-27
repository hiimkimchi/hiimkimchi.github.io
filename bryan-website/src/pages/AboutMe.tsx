import { Link } from "react-router-dom";
import BottomBar from "../components/BottomBar";

export default function AboutMe() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          About Me
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mb-8">Coming soon...</p>
        <Link
          to="/"
          className="text-wii-ring hover:text-sky-600 font-semibold text-sm sm:text-base transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      <BottomBar />
    </div>
  );
}
