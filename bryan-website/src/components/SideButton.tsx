interface SideButtonProps {
    label: string;
    pairSDCard?: boolean;
}

function SideButton({ label, pairSDCard }: SideButtonProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            <button
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[3px] border-wii-ring
    bg-white/90 flex items-center justify-center hover:bg-white
    transition-colors shadow-md"
            >
                <span className="text-wii-ring font-bold text-xs sm:text-sm tracking-tight">
                    {label}
                </span>
            </button>

            {pairSDCard && <div
                className="hidden sm:flex w-5 h-6 bg-gray-400/80 rounded-sm border border-gray-500/50
    items-center justify-center"
                >
                    <div className="w-3 h-1.5 bg-gray-300/80 rounded-[1px]" />
                </div>
            }
        </div>
    );
}

export default SideButton;