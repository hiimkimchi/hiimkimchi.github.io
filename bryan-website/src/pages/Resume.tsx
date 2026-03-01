import BottomBar from "../components/BottomBar";
import BackToHome from "../components/BackToHome";

export default function Resume() {
  return (
    <div className="wii-bg min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-10">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Resume
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-5">
            Won't publicly post my resume here due to not wanting to expose employer's codebase details as well as personal details.
            Most of my details should be available right on this website. Why is this page here? 
            Because the Resume Channel icon looked good on the homepage lol.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            If you're interested in my background or experience in resume form, please reach
            out via the email icon in the bottom-right corner or my LinkedIn{" "}
            <a
              href="https://www.linkedin.com/in/bryankimchi/"
              target="_blank"
              rel="noreferrer"
              className="text-wii-ring hover:text-sky-600 font-semibold underline underline-offset-2"
            >
              linkedin.com/in/bryankimchi
            </a>
            !
          </p>
          <BackToHome />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
