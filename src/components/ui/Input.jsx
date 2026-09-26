import { AlertCircle } from "lucide-react";

function Input({
  label,
  error,
  hint,
  id,
  className = "",
  required = false,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-zinc-800"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={[
          "focus-ring h-11 w-full rounded-xl border bg-white px-3.5",
          "text-sm text-zinc-900 placeholder:text-zinc-400",
          "transition-all duration-200",
          "outline-none",
          error
            ? "border-red-300 focus-visible:ring-red-400"
            : "border-stone-200 hover:border-stone-300 focus:border-zinc-900",
          className,
        ].join(" ")}
        {...props}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600"
        >
          <AlertCircle size={13} />
          {error}
        </p>
      )}

      {!error && hint && (
        <p
          id={`${id}-hint`}
          className="mt-1.5 text-xs text-zinc-500"
        >
          {hint}
        </p>
      )}
    </div>
  );
}

export default Input;
