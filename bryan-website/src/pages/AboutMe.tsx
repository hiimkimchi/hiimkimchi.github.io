import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";

export default function AboutMe() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 mt-8">
        <div className="w-full max-w-3xl px-2 sm:px-4 text-center">
          {/* Header */}
          <p className="text-s font-semibold tracking-[0.25em] text-wii-ring mb-1">
            ABOUT ME
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Bryan Kim
          </h1>

          {/* Gif – same placement on all breakpoints */}
          <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[220px] mx-auto mb-4">
            <img
              src="/gifs/cat-wave.gif"
              alt="Waving cat"
              className="w-full h-auto block"
            />
          </div>
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Hello website viewer! Thanks for stopping by.
          </p>

          {/* Sections */}
          <div className="space-y-5 sm:space-y-6 text-left">
            <section className="pt-3">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                Current Whereabouts
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Currently a senior at Seattle University studying Computer Science and working
                part-time as a Software Engineer at VetRec.
              </p>
            </section>

            <section className="pt-3">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                Hobbies & Interests
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Big collector of music, retro video games, and manga. Also a huge fan of
                occasional travel and going to live concerts and festivals.
              </p>
            </section>

            <section className="pt-3">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-1.5">
                Contact
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Click the email icon in the bottom right corner of the screen to email me.{" "}
                You can also find me on{" "}
                <a
                  href="https://www.linkedin.com/in/bryankimchi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-wii-ring hover:text-sky-600 font-semibold underline underline-offset-2"
                >
                  linkedin.com/in/bryankimchi
                </a>
                .
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
