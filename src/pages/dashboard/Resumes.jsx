import {
  Copy,
  FileText,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
  Eye,
  Download,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  ResumeRenderer as TemplateRenderer,
  TEMPLATE_SAMPLE_RESUME,
} from "../templates/resumeTemplates";

import { useMemo, useState } from "react";

import {
  duplicateResumeRecord,
  formatUpdatedAt,
  getResumes,
  saveResumes,
} from "../../utils/resumeStorage";

/* =========================================================
   RESUME PREVIEW
========================================================= */

function ResumePreview({ template = "executive" }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#efede8]">
      <div
        className="absolute left-1/2 top-0 w-[760px] origin-top-left"
        style={{
          transform: "translateX(-50%) scale(0.15)",
        }}
      >
        <TemplateRenderer
          resume={TEMPLATE_SAMPLE_RESUME}
          template={template}
        />
      </div>
    </div>
  );
}

/* =========================================================
   MY RESUMES
========================================================= */

function Resumes() {
  const [resumes, setResumes] = useState(() => getResumes());
  const [search, setSearch] = useState("");
  const [menuId, setMenuId] = useState(null);

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredResumes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return resumes;
    }

    return resumes.filter(
      (resume) =>
        resume.title?.toLowerCase().includes(query) ||
        resume.template?.toLowerCase().includes(query)
    );
  }, [resumes, search]);

  /* =======================================================
     DUPLICATE
  ======================================================= */

  const duplicateResume = (resume) => {
    const copy = duplicateResumeRecord(resume);
    const next = [copy, ...resumes];

    saveResumes(next);
    setResumes(next);
    setMenuId(null);
  };

  /* =======================================================
     DELETE
  ======================================================= */

  const deleteResume = (id) => {
    const confirmed = window.confirm(
      "Delete this resume? This action cannot be undone."
    );

    if (!confirmed) return;

    const next = resumes.filter(
      (resume) => String(resume.id) !== String(id)
    );

    saveResumes(next);
    setResumes(next);
    setMenuId(null);

    const activeId = localStorage.getItem(
      "resumely_active_resume_id"
    );

    if (String(activeId) === String(id)) {
      localStorage.removeItem("resumely_active_resume_id");
    }
  };

  /* =======================================================
     PREVIEW / PRINT
  ======================================================= */

  const downloadResume = (resume) => {
    localStorage.setItem(
      "resumely_active_resume_id",
      String(resume.id)
    );

    localStorage.setItem(
      "resumely_template",
      resume.template || "executive"
    );

    window.open(
      `/builder/${encodeURIComponent(resume.id)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full min-w-0">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex min-w-0 flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ae8954]">
            Workspace
          </p>

          <h1 className="mt-2 break-words text-2xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-3xl">
            My Resumes
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-zinc-500">
            Create, edit and manage all your professional resume
            versions.
          </p>
        </div>

        {/* ===================================================
            CREATE NEW RESUME
        ==================================================== */}

        <Link
          to="/templates"
          className="group inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#987542] hover:text-white hover:shadow-md active:scale-[0.98] sm:w-auto"
        >
          <Plus
            size={17}
            strokeWidth={2.3}
            className="shrink-0 text-white transition-transform duration-200 group-hover:rotate-90"
          />

          <span className="whitespace-nowrap text-white">
            Create New Resume
          </span>
        </Link>
      </div>

      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <div className="mt-6 rounded-2xl border border-[#e7e2d9] bg-white p-3 sm:mt-7 sm:p-4">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 px-1">
            <span className="text-sm font-semibold text-zinc-950">
              {resumes.length}
            </span>

            <span className="text-xs text-zinc-400">
              {resumes.length === 1 ? "resume" : "resumes"}
            </span>
          </div>

          <div className="relative w-full sm:max-w-sm md:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search resumes..."
              className="h-10 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-xs outline-none transition focus:border-zinc-900"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          RESUME LIST
      ====================================================== */}

      {filteredResumes.length > 0 ? (
        <div className="mt-4 space-y-3 sm:mt-5">
          {filteredResumes.map((resume) => {
            const progress = Number(resume.progress || 0);

            return (
              <article
                key={resume.id}
                className="group relative min-w-0 overflow-visible rounded-2xl border border-[#e7e2d9] bg-white transition hover:border-[#d7d0c5] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
              >
                <div className="flex min-w-0 flex-col gap-4 p-3.5 sm:gap-5 sm:p-5 md:flex-row md:items-center">
                  {/* =================================================
                      PREVIEW
                  ================================================== */}

                  <div className="h-[190px] w-full shrink-0 overflow-hidden rounded-xl border border-[#e5e0d8] bg-[#f0eee9] sm:h-[150px] sm:w-[115px]">
                    <ResumePreview
                      template={resume.template}
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <h2 className="max-w-full break-words text-base font-semibold text-zinc-950 sm:truncate">
                            {resume.title ||
                              "Untitled Resume"}
                          </h2>

                          <span className="shrink-0 rounded-full bg-[#f3f0ea] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#987542]">
                            {resume.template ||
                              "Executive"}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-400">
                          <span className="flex items-center gap-1.5">
                            <Clock3
                              size={12}
                              className="shrink-0"
                            />

                            <span className="whitespace-nowrap">
                              {formatUpdatedAt(
                                resume.updatedAt
                              )}
                            </span>
                          </span>

                          <span>Resume version</span>
                        </div>
                      </div>

                      {/* =================================================
                          MORE MENU
                      ================================================== */}

                      <div className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            setMenuId(
                              menuId === resume.id
                                ? null
                                : resume.id
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[#f3f0ea] hover:text-zinc-900"
                          aria-label="Resume options"
                        >
                          <MoreHorizontal size={18} />
                        </button>

                        {menuId === resume.id && (
                          <>
                            <button
                              type="button"
                              aria-label="Close menu"
                              onClick={() =>
                                setMenuId(null)
                              }
                              className="fixed inset-0 z-10 cursor-default"
                            />

                            <div className="absolute right-0 top-10 z-20 w-[min(11rem,calc(100vw-2rem))] rounded-xl border border-[#e5e0d8] bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                              {/* EDIT */}

                              <Link
                                to={`/builder/${resume.id}`}
                                onClick={() =>
                                  setMenuId(null)
                                }
                                className="flex min-h-9 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                              >
                                <Pencil size={14} />
                                Edit resume
                              </Link>

                              {/* PREVIEW */}

                              <button
                                type="button"
                                onClick={() => {
                                  downloadResume(
                                    resume
                                  );
                                  setMenuId(null);
                                }}
                                className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                              >
                                <Download size={14} />
                                Preview / Print
                              </button>

                              {/* DUPLICATE */}

                              <button
                                type="button"
                                onClick={() =>
                                  duplicateResume(
                                    resume
                                  )
                                }
                                className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                              >
                                <Copy size={14} />
                                Duplicate
                              </button>

                              <div className="my-1 h-px bg-[#eeeae3]" />

                              {/* DELETE */}

                              <button
                                type="button"
                                onClick={() =>
                                  deleteResume(
                                    resume.id
                                  )
                                }
                                className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50"
                              >
                                <Trash2 size={14} />
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        PROGRESS
                    ================================================== */}

                    <div className="mt-5 w-full max-w-xl sm:mt-7">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                          Completion
                        </span>

                        <span className="shrink-0 text-[11px] font-semibold text-zinc-700">
                          {progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#eeeae3]">
                        <div
                          className="h-full rounded-full bg-zinc-950 transition-all"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================== */}

                    <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
                      <Link
                        to={`/builder/${resume.id}`}
                        className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-3.5 text-[11px] font-semibold transition-all duration-200"
                        style={{
                          backgroundColor: "#000000",
                          color: "#ffffff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "#987542";
                          e.currentTarget.style.color =
                            "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "#000000";
                          e.currentTarget.style.color =
                            "#ffffff";
                        }}
                      >
                        <Pencil size={13} />
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          downloadResume(resume)
                        }
                        className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-[#e3ded6] px-3.5 text-[11px] font-semibold text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
                      >
                        <Eye size={13} />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* =====================================================
           EMPTY STATE
        ====================================================== */

        <div className="mt-4 rounded-2xl border border-dashed border-[#dcd6cd] bg-white px-4 py-14 text-center sm:mt-5 sm:px-6 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f0ea] text-zinc-500">
            <FileText size={23} />
          </div>

          <h2 className="mt-5 text-base font-semibold text-zinc-950">
            {resumes.length
              ? "No matching resumes"
              : "Your workspace is empty"}
          </h2>

          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-zinc-500">
            {resumes.length
              ? "Try another search term."
              : "Create your first professional resume and it will appear here."}
          </p>

          {!resumes.length && (
            <Link
              to="/templates"
              className="group mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#ae8954] hover:text-white active:scale-[0.98]"
            >
              <Plus
                size={14}
                strokeWidth={2.3}
                className="text-white transition-transform duration-200 group-hover:rotate-90"
              />

              <span className="text-white">
                Create Resume
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Resumes;