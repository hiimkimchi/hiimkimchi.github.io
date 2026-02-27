import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";

export default function Recents() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
        <div className="w-full max-w-3xl px-2 sm:px-4">
          <div className="text-center mb-8">
            <p className="text-s font-semibold tracking-[0.25em] text-wii-ring mb-1">
              DISC CHANNEL
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                What I'm on
            </h1>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <section className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Current Favorite Album
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {/* TODO: fill with album + artist */}
                —
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Current Favorite Video Game
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {/* TODO: fill with game title */}
                —
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Next Event Coming Up
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {/* TODO: fill with artist + date + venue */}
                —
              </p>
            </section>
          </div>

          <BackToHome />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
