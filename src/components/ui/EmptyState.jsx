import { FileText } from "lucide-react";

function EmptyState({
  icon: Icon = FileText,
  title = "Nothing here yet",
  description = "There is no data to display right now.",
  action,
}) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-zinc-500">
        <Icon size={24} strokeWidth={1.7} />
      </div>

      <h3 className="text-base font-semibold text-zinc-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export default EmptyState;
