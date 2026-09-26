import { LoaderCircle } from "lucide-react";

const variants = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:ring-zinc-950",
  secondary:
    "border border-stone-200 bg-white text-zinc-900 hover:bg-stone-50 focus-visible:ring-zinc-400",
  ghost:
    "bg-transparent text-zinc-700 hover:bg-stone-100 focus-visible:ring-zinc-400",
  accent:
    "bg-[#b08d57] text-white hover:bg-[#987542] focus-visible:ring-[#b08d57]",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-sm",
  xl: "h-13 px-6 text-[15px]",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={[
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl font-medium",
        "transition-all duration-200 ease-out",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      {loading && (
        <LoaderCircle
          size={17}
          className="animate-spin"
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  );
}

export default Button;
