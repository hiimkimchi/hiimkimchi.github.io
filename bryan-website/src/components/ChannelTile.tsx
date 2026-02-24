import { Link } from "react-router-dom";

interface ChannelTileProps {
  children?: React.ReactNode;
  className?: string;
  isEmpty?: boolean;
  to?: string;
  onClick?: () => void;
}

export default function ChannelTile({
  children,
  className = "",
  isEmpty = false,
  to,
  onClick,
}: ChannelTileProps) {
  if (isEmpty) {
    return (
      <div className="wii-empty rounded-lg aspect-[4/3] flex items-center justify-center">
        <span className="text-white/25 text-lg font-bold italic tracking-wider">
          Wii
        </span>
      </div>
    );
  }

  const tileClasses = `wii-tile rounded-lg aspect-[4/3] overflow-hidden cursor-pointer
    shadow-md border-0 p-0 flex flex-col no-underline ${className}`;

  if (to) {
    return (
      <Link to={to} className={tileClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={tileClasses}>
      {children}
    </button>
  );
}
