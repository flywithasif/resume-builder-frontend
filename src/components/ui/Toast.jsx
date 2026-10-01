import {
  CheckCircle2,
  XCircle,
  Info,
  X,
} from "lucide-react";

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export default function Toast({
  message,
  type = "success",
  onClose,
}) {
  if (!message) return null;

  const Icon = icons[type] || Info;

  return (
    <div className="fixed right-4 top-4 z-[9999] w-[calc(100%-2rem)] max-w-sm">
      <div className="flex items-start gap-3 border border-zinc-200 bg-white px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
        <Icon
          size={20}
          className={
            type === "success"
              ? "mt-0.5 shrink-0 text-emerald-600"
              : type === "error"
                ? "mt-0.5 shrink-0 text-red-600"
                : "mt-0.5 shrink-0 text-[#ae8954]"
          }
        />

        <p className="flex-1 text-sm font-medium leading-5 text-zinc-800">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-zinc-400 transition hover:text-zinc-950"
          aria-label="Close notification"
        >
          <X size={17} />
        </button>
      </div>
    </div>
  );
}