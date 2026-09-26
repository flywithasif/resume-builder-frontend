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
import {
  duplicateResumeRecord,
  formatUpdatedAt,
  getResumes,
  saveResumes,
} from "../../utils/resumeStorage";

function ResumeThumbnail({ resume }) {
  const template = resume.template || "executive";

  return (
    <div className="aspect-[0.707] overflow-hidden bg-stone-100 p-4">
      <div className="relative h-full overflow-hidden bg-white p-4 shadow-sm">
        {template === "creative" && (
          <div className="absolute right-0 top-0 h-14 w-14 rounded-bl-3xl bg-[#987542]/10" />
        )}

        {template === "tech" && (
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-700" />
        )}

        <div
          className={`h-2.5 w-2/3 rounded-sm ${
            template === "modern" || template === "elegant"
              ? "bg-[#987542]"
              : "bg-zinc-900"
          }`}
        />
        <div className="mt-1.5 h-1 w-1/2 rounded bg-zinc-200" />

        <div className="mt-5 grid grid-cols-[1fr_2fr] gap-3">
          <div className="space-y-1.5">
            <div className="h-1 w-3/4 rounded bg-zinc-700" />
            <div className="h-1 w-full rounded bg-zinc-200" />
            <div className="h-1 w-5/6 rounded bg-zinc-200" />
            <div className="mt-3 h-1 w-2/3 rounded bg-zinc-700" />
            <div className="h-1 w-full rounded bg-zinc-200" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1 w-1/3 rounded bg-zinc-700" />
            <div className="h-1 w-full rounded bg-zinc-200" />
            <div className="h-1 w-11/12 rounded bg-zinc-200" />
            <div className="h-1 w-4/5 rounded bg-zinc-200" />
            <div className="mt-3 h-1 w-2/5 rounded bg-zinc-700" />
            <div className="h-1 w-full rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

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

function Resumes() {
  const [resumes, setResumes] = useState(() => getResumes());
  const [search, setSearch] = useState("");
  const [menuId, setMenuId] = useState(null);

  const filteredResumes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return resumes;

    return resumes.filter(
      (resume) =>
        resume.title.toLowerCase().includes(query) ||
        resume.template?.toLowerCase().includes(query),
    );
  }, [resumes, search]);

  const duplicateResume = (resume) => {
    const copy = duplicateResumeRecord(resume);
    const next = [copy, ...resumes];

    saveResumes(next);
    setResumes(next);
    setMenuId(null);
  };

  const deleteResume = (id) => {
    const next = resumes.filter((resume) => String(resume.id) !== String(id));

    saveResumes(next);
    setResumes(next);
    setMenuId(null);

    const activeId = localStorage.getItem("resumely_active_resume_id");
    if (String(activeId) === String(id)) {
      localStorage.removeItem("resumely_active_resume_id");
    }
  };

  const downloadResume = (resume) => {
    localStorage.setItem("resumely_active_resume_id", String(resume.id));
    localStorage.setItem("resumely_template", resume.template || "executive");
    window.open(`/builder?id=${encodeURIComponent(resume.id)}`, "_blank");
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
          to="/builder?new=1"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-[#987542]"
        >
          <Plus size={17} />
          Create New Resume
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search resumes..."
            className="h-11 w-full rounded-xl border border-stone-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-zinc-900"
          />
        </div>

        <div className="flex h-11 items-center rounded-xl border border-stone-200 bg-white px-4 text-xs text-zinc-500">
          {resumes.length} {resumes.length === 1 ? "resume" : "resumes"}
        </div>
      </div>

      {resumes.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-zinc-500">
            <FileText size={24} />
          </div>
          <h2 className="mt-5 text-lg font-semibold text-zinc-950">
            No resumes yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Create your first resume and it will automatically appear here
            whenever you save it.
          </p>
          <Link
            to="/builder?new=1"
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white hover:bg-[#987542]"
          >
            <Plus size={15} />
            Create Resume
          </Link>
        </div>
      ) : filteredResumes.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white px-6 py-14 text-center">
          <p className="text-sm font-medium text-zinc-800">
            No matching resumes
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Try another name or template.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredResumes.map((resume) => (
            <div
              key={resume.id}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
            >
              <Link to={`/builder?id=${encodeURIComponent(resume.id)}`}>
                <ResumeThumbnail resume={resume} />
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-zinc-950">
                      {resume.title}
                    </h2>
                    <p className="mt-1 text-xs text-zinc-500">
                      {resume.template || "Executive"} ·{" "}
                      {formatUpdatedAt(resume.updatedAt)}
                    </p>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setMenuId((current) =>
                          current === resume.id ? null : resume.id,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-stone-100 hover:text-zinc-700"
                      aria-label="Resume actions"
                    >
                      <MoreHorizontal size={17} />
                    </button>

                    {menuId === resume.id && (
                      <div className="absolute right-0 top-9 z-20 w-44 overflow-hidden rounded-xl border border-stone-200 bg-white p-1.5 shadow-xl">
                        <Link
                          to={`/builder?id=${encodeURIComponent(resume.id)}`}
                          onClick={() => setMenuId(null)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-stone-100"
                        >
                          <Pencil size={14} />
                          Edit Resume
                        </Link>

                        <button
                          type="button"
                          onClick={() => duplicateResume(resume)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-700 hover:bg-stone-100"
                        >
                          <Copy size={14} />
                          Duplicate
                        </button>

                        <button
                          type="button"
                          onClick={() => downloadResume(resume)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-700 hover:bg-stone-100"
                        >
                          <Download size={14} />
                          Open for PDF
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteResume(resume.id)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-zinc-500">
                    <span>Completion</span>
                    <span className="font-semibold text-zinc-800">
                      {resume.progress || 0}%
                    </span>
                  </div>
                  <ProgressBar value={resume.progress || 0} />
                </div>

                <Link
                  to={`/builder?id=${encodeURIComponent(resume.id)}`}
                  className="mt-5 flex h-10 items-center justify-center gap-2 rounded-xl border border-stone-200 text-xs font-semibold text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-950"
                >
                  Continue Editing
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Resumes;
