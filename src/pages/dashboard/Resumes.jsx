import {
  ArrowRight,
  Copy,
  Download,
  FileText,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const initialResumes = [
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

function Resumes() {
  const [resumes, setResumes] = useState(initialResumes);
  const [search, setSearch] = useState("");
  const [menuId, setMenuId] = useState(null);

  const filteredResumes = useMemo(
    () =>
      resumes.filter((resume) =>
        resume.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [resumes, search],
  );

  const duplicateResume = (resume) => {
    setResumes((current) => [
      ...current,
      {
        ...resume,
        id: Date.now(),
        title: `${resume.title} Copy`,
        updated: "Just now",
      },
    ]);
    setMenuId(null);
  };

  const deleteResume = (id) => {
    setResumes((current) => current.filter((resume) => resume.id !== id));
    setMenuId(null);
  };

  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-[#987542]">Workspace</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            My Resumes
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Create, edit and manage all your resume versions.
          </p>
        </div>

        <Link
          to="/builder"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-xs font-semibold text-white hover:bg-zinc-800"
        >
          <Plus size={15} />
          Create Resume
        </Link>
      </div>

      <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{resumes.length} resumes</p>
          <p className="mt-0.5 text-xs text-zinc-400">
            Your saved resume versions
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={15}
            className="absolute left-3 top-2.5 text-zinc-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search resumes..."
            className="h-9 w-full rounded-lg border border-stone-200 pl-9 pr-3 text-xs outline-none focus:border-zinc-900"
          />
        </div>
      </div>

      {filteredResumes.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredResumes.map((resume) => (
            <article
              key={resume.id}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(24,24,27,0.08)]"
            >
              <div className="relative flex h-52 items-center justify-center bg-[#f3f3f0]">
                <div className="h-40 w-28 bg-white p-3 shadow-[0_10px_30px_rgba(24,24,27,0.12)]">
                  <div className="h-2 w-14 bg-zinc-900" />
                  <div className="mt-2 h-1 w-20 bg-stone-200" />
                  <div className="mt-5 h-1 w-full bg-stone-100" />
                  <div className="mt-1.5 h-1 w-full bg-stone-100" />
                  <div className="mt-1.5 h-1 w-16 bg-stone-100" />
                  <div className="mt-4 h-1 w-full bg-stone-100" />
                  <div className="mt-1.5 h-1 w-20 bg-stone-100" />
                </div>

                <div className="absolute right-3 top-3">
                  <button
                    type="button"
                    onClick={() =>
                      setMenuId((current) =>
                        current === resume.id ? null : resume.id,
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-zinc-500 shadow-sm hover:text-zinc-950"
                    aria-label="Resume actions"
                  >
                    <MoreHorizontal size={16} />
                  </button>

                  {menuId === resume.id && (
                    <div className="absolute right-0 top-10 z-20 w-40 overflow-hidden rounded-xl border border-stone-200 bg-white p-1 shadow-xl">
                      <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-stone-50">
                        <Pencil size={13} /> Rename
                      </button>
                      <button
                        onClick={() => duplicateResume(resume)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-stone-50"
                      >
                        <Copy size={13} /> Duplicate
                      </button>
                      <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-stone-50">
                        <Download size={13} /> Download
                      </button>
                      <button
                        onClick={() => deleteResume(resume.id)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold">
                      {resume.title}
                    </h2>
                    <p className="mt-1 text-[10px] text-zinc-400">
                      {resume.template} · Updated {resume.updated}
                    </p>
                  </div>

                  <FileText size={16} className="shrink-0 text-zinc-300" />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400">
                    <span>Completion</span>
                    <span>{resume.progress}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-zinc-950"
                      style={{ width: `${resume.progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  to="/builder"
                  className="mt-5 flex h-9 items-center justify-center gap-2 rounded-lg bg-zinc-950 text-xs font-semibold text-white hover:bg-zinc-800"
                >
                  Edit Resume
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100">
            <FileText size={20} className="text-zinc-500" />
          </div>
          <h2 className="mt-4 text-sm font-semibold">No resumes found</h2>
          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-zinc-500">
            Create your first resume or try a different search term.
          </p>
          <Link
            to="/builder"
            className="mx-auto mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-xs font-semibold text-white"
          >
            <Plus size={15} />
            Create Resume
          </Link>
        </div>
      )}
    </div>
  );
}

export default Resumes;
