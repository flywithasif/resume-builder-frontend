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
import {
  calculateResumeProgress,
  formatUpdatedAt,
  getResumes,
} from "../../utils/resumeStorage";

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
  const resumes = getResumes();

  const filteredResumes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return resumes;

    return resumes.filter(
      (resume) =>
        resume.title.toLowerCase().includes(query) ||
        resume.template?.toLowerCase().includes(query),
    );
  }, [search, resumes]);

  const completed = resumes.filter(
    (resume) => (resume.progress || 0) >= 80,
  ).length;

  const inProgress = resumes.filter(
    (resume) => (resume.progress || 0) < 80,
  ).length;

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
              Manage your saved resumes, continue editing your latest version,
              and keep every career version organized in one place.
            </p>
          </div>

          <Link
            to="/builder?new=1"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-stone-100"
          >
            <Plus size={17} />
            Create New Resume
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total Resumes", resumes.length, FileText],
          ["Completed", completed, TrendingUp],
          ["In Progress", inProgress, BriefcaseBusiness],
          ["Downloads", "—", Download],
        ].map(([label, value, Icon]) => (
          <div
            key={label}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-500">{label}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-zinc-700">
                <Icon size={16} />
              </div>
            </div>
            <p className="mt-5 text-2xl font-semibold tracking-tight text-zinc-950">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-semibold text-zinc-950">
              Your resumes
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Your saved resume versions appear here automatically.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search resumes..."
              className="h-10 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 text-xs outline-none focus:border-zinc-900"
            />
          </div>
        </div>

        {filteredResumes.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-stone-200 bg-stone-50 px-6 py-10 text-center">
            <FileText className="mx-auto text-zinc-300" size={28} />
            <p className="mt-3 text-sm font-medium text-zinc-800">
              {resumes.length ? "No matching resumes" : "No saved resumes yet"}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {resumes.length
                ? "Try another search."
                : "Create a resume and press Save in the builder."}
            </p>
            {!resumes.length && (
              <Link
                to="/builder?new=1"
                className="mt-5 inline-flex h-9 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-xs font-semibold text-white hover:bg-[#987542]"
              >
                <Plus size={14} />
                Create Resume
              </Link>
            )}
          </div>
        ) : (
          <div className="mt-6 divide-y divide-stone-100">
            {filteredResumes.slice(0, 6).map((resume) => {
              const progress = resume.progress || calculateResumeProgress(resume.data);

              return (
                <div
                  key={resume.id}
                  className="flex flex-col gap-4 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-zinc-600">
                      <FileText size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {resume.title}
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-[11px] text-zinc-400">
                        <span className="capitalize">
                          {resume.template || "Executive"}
                        </span>
                        <span>·</span>
                        <Clock3 size={11} />
                        {formatUpdatedAt(resume.updatedAt)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:min-w-[280px]">
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex justify-between text-[10px] text-zinc-400">
                        <span>Progress</span>
                        <span className="font-semibold text-zinc-700">
                          {progress}%
                        </span>
                      </div>
                      <ProgressBar value={progress} />
                    </div>

                    <Link
                      to={`/builder?id=${encodeURIComponent(resume.id)}`}
                      className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-stone-200 px-3 text-xs font-semibold text-zinc-700 hover:border-zinc-900"
                    >
                      Open
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {resumes.length > 6 && (
          <Link
            to="/dashboard/resumes"
            className="mt-6 flex items-center justify-center gap-2 border-t border-stone-100 pt-5 text-xs font-semibold text-zinc-600 hover:text-zinc-950"
          >
            View all resumes
            <ArrowRight size={14} />
          </Link>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
