import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Download,
  FileText,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const resumeData = [
  {
    id: 1,
    title: "Product Manager Resume",
    template: "Executive",
    updated: "Today",
    progress: 82,
  },
  {
    id: 2,
    title: "Software Engineer Resume",
    template: "Modern",
    updated: "2 days ago",
    progress: 64,
  },
  {
    id: 3,
    title: "General Resume",
    template: "Minimal",
    updated: "Last week",
    progress: 46,
  },
];

function ProgressBar({ value }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-stone-100">
      <div
        className="h-full rounded-full bg-zinc-950 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredResumes = useMemo(() => {
    return resumeData.filter((resume) =>
      resume.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-[1400px]">
      <section className="relative overflow-hidden rounded-2xl bg-zinc-950 px-6 py-8 text-white sm:px-8 sm:py-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#987542]/20 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6a36c]">
              <Sparkles size={14} />
              Resume workspace
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Welcome back
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Manage your resumes, continue editing your latest version, and
              keep your professional profile ready for the next opportunity.
            </p>
          </div>

          <Link
            to="/builder"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-stone-100"
          >
            <Plus size={17} />
            Create New Resume
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total Resumes", "3", FileText],
          ["Completed", "1", TrendingUp],
          ["In Progress", "2", BriefcaseBusiness],
          ["Downloads", "12", Download],
        ].map(([label, value, Icon]) => (
          <div
            key={label}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-500">{label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-zinc-600">
                <Icon size={15} />
              </span>
            </div>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-stone-200 bg-white">
          <div className="flex flex-col gap-4 border-b border-stone-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold">Recent Resumes</h2>
              <p className="mt-1 text-xs text-zinc-500">
                Continue where you left off.
              </p>
            </div>

            <div className="relative">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search resumes..."
                className="h-9 w-full rounded-lg border border-stone-200 px-3 text-xs outline-none focus:border-zinc-900 sm:w-52"
              />
            </div>
          </div>

          <div className="divide-y divide-stone-100">
            {filteredResumes.map((resume) => (
              <div
                key={resume.id}
                className="flex flex-col gap-4 p-5 transition hover:bg-stone-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50">
                    <FileText size={18} className="text-zinc-600" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold">
                      {resume.title}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-zinc-400">
                      <span>{resume.template} template</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock3 size={11} />
                        {resume.updated}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-28">
                        <ProgressBar value={resume.progress} />
                      </div>
                      <span className="text-[10px] text-zinc-400">
                        {resume.progress}% complete
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/builder"
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-3 text-xs font-semibold text-white hover:bg-zinc-800"
                >
                  Continue
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}

            {filteredResumes.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-sm font-medium">No resumes found</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Try a different search term.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#987542]">
            Quick start
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-tight">
            Build a stronger resume
          </h2>

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Start with your experience, skills and achievements. You can refine
            the design later.
          </p>

          <div className="mt-5 space-y-3">
            {[
              ["01", "Add your experience"],
              ["02", "Highlight your skills"],
              ["03", "Review the final design"],
            ].map(([number, text]) => (
              <div
                key={number}
                className="flex items-center gap-3 rounded-xl bg-stone-50 p-3"
              >
                <span className="text-[10px] font-semibold text-[#987542]">
                  {number}
                </span>
                <span className="text-xs font-medium text-zinc-700">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/builder"
            className="mt-5 flex h-10 items-center justify-center gap-2 rounded-lg border border-stone-200 text-xs font-semibold hover:bg-stone-50"
          >
            Open Builder
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
