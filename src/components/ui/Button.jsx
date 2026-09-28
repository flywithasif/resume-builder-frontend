import { LoaderCircle } from "lucide-react";

const variants = {
  /* =========================================================
     PRIMARY
     Main CTA — premium black
  ========================================================= */
  primary:
    "bg-zinc-950 text-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:bg-zinc-800 hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] focus-visible:ring-zinc-950",

  /* =========================================================
     SECONDARY
     Light premium button
  ========================================================= */
  secondary:
    "border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md focus-visible:ring-zinc-400",

  /* =========================================================
     GHOST
     No strong background
  ========================================================= */
  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:ring-zinc-400",

  /* =========================================================
     ACCENT
     Resumely luxury gold
  ========================================================= */
  accent:
    "bg-[#b08d57] text-white shadow-[0_8px_24px_rgba(176,141,87,0.18)] hover:bg-[#9c7948] hover:shadow-[0_12px_30px_rgba(176,141,87,0.25)] focus-visible:ring-[#b08d57]",

  /* =========================================================
     DANGER
  ========================================================= */
  danger:
    "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-600",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-sm",
  xl: "h-[52px] px-6 text-[15px]",
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
  const selectedVariant = variants[variant] || variants.primary;
  const selectedSize = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={[
        /* Base */
        "inline-flex items-center justify-center gap-2",
        "rounded-xl",
        "font-medium",
        "whitespace-nowrap",

        /* Interaction */
        "transition-all duration-200 ease-out",
        "active:scale-[0.98]",

        /* Accessibility */
        "outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-white",

        /* Disabled */
        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        /* Theme */
        selectedVariant,
        selectedSize,

        /* Custom */
        className,
      ].join(" ")}
      {...props}
    >
      {loading && (
        <LoaderCircle
          size={17}
          strokeWidth={2}
          className="animate-spin"
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  );
}

export default Button;