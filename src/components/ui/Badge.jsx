const variants = {
  neutral: "bg-stone-100 text-stone-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  accent: "bg-[#b08d57]/10 text-[#8a6938]",
};

function Badge({
  children,
  variant = "neutral",
  className = "",
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default Badge;
