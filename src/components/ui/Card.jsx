function Card({
  children,
  className = "",
  padding = "p-5",
  ...props
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-stone-200/80 bg-white",
        "shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
        padding,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
