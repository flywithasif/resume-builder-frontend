import { Link } from "react-router-dom";

function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      className="focus-ring inline-flex items-center gap-3"
      aria-label="Resume Builder home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-zinc-950 text-sm font-bold text-white">
        R
      </span>

      {!compact && (
        <span className="text-[17px] font-semibold tracking-[-0.02em] text-zinc-950">
          Resume<span className="text-[#b08d57]">ly</span>
        </span>
      )}
    </Link>
  );
}

export default Logo;
