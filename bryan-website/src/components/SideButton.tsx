import githubIcon from "../assets/github.png";
import emailIcon from "../assets/email.svg";

interface SideButtonProps {
    label: string;
    pairSDCard?: boolean;
}

function SideButton({ label, pairSDCard }: SideButtonProps) {
    const onClick = () => {
        if (label === "Github") {
            window.open("https://github.com/hiimkimchi")
        } else if (label === "Email") {
            window.open("mailto:wabkim360@gmail.com")
        }
    };

    const iconSrc = label === "Github" ? githubIcon : emailIcon;

    return (
        <div className="flex items-center gap-3 sm:gap-4">
            <button
                className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border-[4px] border-wii-ring
                        bg-white/90 flex items-center justify-center hover:bg-white
                          transition-colors shadow-md"
                onClick={onClick}
            >
                <img
                    src={iconSrc}
                    alt={label}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
            </button>

            {pairSDCard && <div
                className="hidden sm:flex w-7 h-8 bg-gray-400/80 rounded-sm border border-gray-500/50
    items-center justify-center"
            >
                <div className="w-5 h-2.5 bg-gray-300/80 rounded-[1px]" />
            </div>
            }
        </div>
    );
}

export default SideButton;