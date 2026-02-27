import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png";

function BackToHome() {
    return (
        <div className="mt-6 flex justify-center">
            <Link
                to="/"
                className="text-wii-ring hover:text-sky-600 font-semibold text-sm sm:text-base transition-colors"
            >
                ← <img src={homeIcon} alt="Home" className="w-8 h-8 inline-block mb-2 ml-1" />
            </Link>
        </div>
    );
}

export default BackToHome;