import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";
import { SKILL_CATEGORIES } from "../models/skills";

export default function Skills() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
        <div className="w-full max-w-3xl px-2 sm:px-4">
          <div className="text-center mb-8">
            <p className="text-s font-semibold tracking-[0.25em] text-wii-ring mb-1">
              SKILLS CHANNEL
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Things I've Worked With
            </h1>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {SKILL_CATEGORIES.map((category) => (
              <section
                key={category.title}
                className="bg-white/40 backdrop-blur-sm rounded-xl px-5 py-4 sm:px-6 sm:py-5"
              >
                <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
                  {category.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.shields.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-7 sm:h-8 rounded object-contain"
                      loading="lazy"
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <BackToHome />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
