import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";

export default function Projects() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Projects
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mb-8">Coming soon...</p>
        <BackToHome />
      </div>
      <BottomBar />
    </div>
  );
}
