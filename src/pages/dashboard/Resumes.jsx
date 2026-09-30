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
  RefreshCw,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  ResumeRenderer as TemplateRenderer,
  TEMPLATE_SAMPLE_RESUME,
} from "../templates/resumeTemplates";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  duplicateResumeOnApi,
  getResumesFromApi,
  deleteResumeFromApi,
} from "../../services/resumeService";

/* =========================================================
   HELPERS
========================================================= */

function normalizeResume(record) {
  if (!record) {
    return null;
  }

  const data =
    record.data && typeof record.data === "object"
      ? record.data
      : {};

  const serverId = record._id || record.id;

  return {
    ...data,
    ...record,

    id: serverId,
    _id: serverId,

    title:
      record.title ||
      data.title ||
      "Untitled Resume",

    template:
      record.template ||
      data.template ||
      "executive",

    progress: Number(
      record.progress ??
        data.progress ??
        0,
    ),

    updatedAt:
      record.updatedAt ||
      data.updatedAt ||
      record.createdAt ||
      data.createdAt ||
      null,
  };
}

function formatUpdatedAt(value) {
  if (!value) {
    return "Recently updated";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently updated";
  }

  const now = new Date();

  const difference =
    now.getTime() - date.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (difference < minute) {
    return "Just now";
  }

  if (difference < hour) {
    const minutes = Math.floor(
      difference / minute,
    );

    return `${minutes} ${
      minutes === 1
        ? "minute"
        : "minutes"
    } ago`;
  }

  if (difference < day) {
    const hours = Math.floor(
      difference / hour,
    );

    return `${hours} ${
      hours === 1
        ? "hour"
        : "hours"
    } ago`;
  }

  if (difference < 7 * day) {
    const days = Math.floor(
      difference / day,
    );

    return `${days} ${
      days === 1
        ? "day"
        : "days"
    } ago`;
  }

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
}

/* =========================================================
   RESUME PREVIEW
========================================================= */

function ResumePreview({
  template = "executive",
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#efede8]">
      <div
        className="absolute left-1/2 top-0 w-[760px] origin-top-left"
        style={{
          transform:
            "translateX(-50%) scale(0.15)",
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
  const [resumes, setResumes] = useState([]);
  const [search, setSearch] = useState("");
  const [menuId, setMenuId] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] = useState("");

  const [actionId, setActionId] =
    useState(null);

  /* =======================================================
     LOAD RESUMES FROM BACKEND
  ======================================================= */

  const loadResumes = useCallback(
    async ({ silent = false } = {}) => {
      try {
        if (silent) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        setError("");

        const response =
          await getResumesFromApi();

        const apiResumes =
          Array.isArray(
            response?.resumes,
          )
            ? response.resumes
            : Array.isArray(response)
              ? response
              : [];

        const normalizedResumes =
          apiResumes
            .map(normalizeResume)
            .filter(Boolean);

        setResumes(
          normalizedResumes,
        );
      } catch (err) {
        console.error(
          "Failed to load resumes:",
          err,
        );

        setError(
          err?.message ||
            "Unable to load your resumes. Please try again.",
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [],
  );

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  useEffect(() => {
    loadResumes();
  }, [loadResumes]);

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredResumes = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) {
      return resumes;
    }

    return resumes.filter(
      (resume) =>
        resume.title
          ?.toLowerCase()
          .includes(query) ||
        resume.template
          ?.toLowerCase()
          .includes(query),
    );
  }, [resumes, search]);

  /* =======================================================
     DUPLICATE
  ======================================================= */

  const duplicateResume = async (
    resume,
  ) => {
    if (!resume?.id) {
      return;
    }

    try {
      setActionId(resume.id);
      setMenuId(null);
      setError("");

      const response =
        await duplicateResumeOnApi(
          resume.id,
        );

      const duplicatedResume =
        normalizeResume(
          response?.resume ||
            response?.data ||
            response,
        );

      if (duplicatedResume) {
        setResumes((current) => [
          duplicatedResume,
          ...current,
        ]);
      } else {
        await loadResumes({
          silent: true,
        });
      }
    } catch (err) {
      console.error(
        "Failed to duplicate resume:",
        err,
      );

      setError(
        err?.message ||
          "Unable to duplicate this resume.",
      );
    } finally {
      setActionId(null);
    }
  };

  /* =======================================================
     DELETE
  ======================================================= */

  const deleteResume = async (
    id,
  ) => {
    const confirmed =
      window.confirm(
        "Delete this resume? This action cannot be undone.",
      );

    if (!confirmed) {
      return;
    }

    try {
      setActionId(id);
      setMenuId(null);
      setError("");

      await deleteResumeFromApi(id);

      setResumes((current) =>
        current.filter(
          (resume) =>
            String(resume.id) !==
            String(id),
        ),
      );

      const activeId =
        localStorage.getItem(
          "resumely_active_resume_id",
        );

      if (
        String(activeId) ===
        String(id)
      ) {
        localStorage.removeItem(
          "resumely_active_resume_id",
        );
      }
    } catch (err) {
      console.error(
        "Failed to delete resume:",
        err,
      );

      setError(
        err?.message ||
          "Unable to delete this resume.",
      );
    } finally {
      setActionId(null);
    }
  };

  /* =======================================================
     PREVIEW / PRINT
  ======================================================= */

  const downloadResume = (
    resume,
  ) => {
    if (!resume?.id) {
      return;
    }

    localStorage.setItem(
      "resumely_active_resume_id",
      String(resume.id),
    );

    localStorage.setItem(
      "resumely_template",
      resume.template ||
        "executive",
    );

    window.open(
      `/builder?id=${encodeURIComponent(
        resume.id,
      )}`,
      "_blank",
    );
  };

  /* =======================================================
     REFRESH
  ======================================================= */

  const handleRefresh = () => {
    loadResumes({
      silent: true,
    });
  };

  /* =======================================================
     RENDER
  ======================================================= */

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
            Create, edit and manage all
            your professional resume
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
          <div className="flex items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-zinc-950">
                {loading
                  ? "—"
                  : resumes.length}
              </span>

              <span className="text-xs text-zinc-400">
                {resumes.length === 1
                  ? "resume"
                  : "resumes"}
              </span>
            </div>

            <button
              type="button"
              onClick={
                handleRefresh
              }
              disabled={
                loading ||
                refreshing
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[#f3f0ea] hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Refresh resumes"
            >
              <RefreshCw
                size={15}
                className={
                  refreshing
                    ? "animate-spin"
                    : ""
                }
              />
            </button>
          </div>

          <div className="relative w-full sm:max-w-sm md:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value,
                )
              }
              placeholder="Search resumes..."
              className="h-10 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-xs outline-none transition focus:border-zinc-900"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              loadResumes({
                silent: true,
              })
            }
            className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-white px-3 text-[11px] font-semibold text-zinc-800 shadow-sm ring-1 ring-red-100 transition hover:bg-zinc-50"
          >
            Try again
          </button>
        </div>
      )}

      {/* =====================================================
          LOADING
      ====================================================== */}

      {loading ? (
        <div className="mt-4 space-y-3 sm:mt-5">
          {Array.from({
            length: 3,
          }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white"
            >
              <div className="flex min-w-0 flex-col gap-4 p-3.5 sm:gap-5 sm:p-5 md:flex-row md:items-center">
                <div className="h-[190px] w-full shrink-0 animate-pulse rounded-xl bg-[#f0eee9] sm:h-[150px] sm:w-[115px]" />

                <div className="min-w-0 flex-1">
                  <div className="h-5 w-48 animate-pulse rounded bg-[#eeeae3]" />

                  <div className="mt-3 h-3 w-32 animate-pulse rounded bg-[#f3f0ea]" />

                  <div className="mt-8 h-2 w-full max-w-xl animate-pulse rounded bg-[#eeeae3]" />

                  <div className="mt-5 h-9 w-24 animate-pulse rounded-lg bg-[#f3f0ea]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredResumes.length > 0 ? (
        /* =====================================================
           RESUME LIST
        ====================================================== */

        <div className="mt-4 space-y-3 sm:mt-5">
          {filteredResumes.map(
            (resume) => {
              const progress = Math.min(
                100,
                Math.max(
                  0,
                  Number(
                    resume.progress ||
                      0,
                  ),
                ),
              );

              const isProcessing =
                String(actionId) ===
                String(resume.id);

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
                        template={
                          resume.template
                        }
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
                                  resume.updatedAt,
                                )}
                              </span>
                            </span>

                            <span>
                              Resume version
                            </span>
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
                                menuId ===
                                  resume.id
                                  ? null
                                  : resume.id,
                              )
                            }
                            disabled={
                              isProcessing
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-[#f3f0ea] hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Resume options"
                          >
                            <MoreHorizontal
                              size={18}
                            />
                          </button>

                          {menuId ===
                            resume.id && (
                            <>
                              <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() =>
                                  setMenuId(
                                    null,
                                  )
                                }
                                className="fixed inset-0 z-10 cursor-default"
                              />

                              <div className="absolute right-0 top-10 z-20 w-[min(11rem,calc(100vw-2rem))] rounded-xl border border-[#e5e0d8] bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                                {/* EDIT */}

                                <Link
                                  to={`/builder?id=${encodeURIComponent(
                                    resume.id,
                                  )}`}
                                  onClick={() =>
                                    setMenuId(
                                      null,
                                    )
                                  }
                                  className="flex min-h-9 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                                >
                                  <Pencil
                                    size={14}
                                  />

                                  Edit resume
                                </Link>

                                {/* PREVIEW */}

                                <button
                                  type="button"
                                  onClick={() => {
                                    downloadResume(
                                      resume,
                                    );

                                    setMenuId(
                                      null,
                                    );
                                  }}
                                  className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                                >
                                  <Download
                                    size={14}
                                  />

                                  Preview /
                                  Print
                                </button>

                                {/* DUPLICATE */}

                                <button
                                  type="button"
                                  disabled={
                                    isProcessing
                                  }
                                  onClick={() =>
                                    duplicateResume(
                                      resume,
                                    )
                                  }
                                  className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <Copy
                                    size={14}
                                  />

                                  {isProcessing
                                    ? "Duplicating..."
                                    : "Duplicate"}
                                </button>

                                <div className="my-1 h-px bg-[#eeeae3]" />

                                {/* DELETE */}

                                <button
                                  type="button"
                                  disabled={
                                    isProcessing
                                  }
                                  onClick={() =>
                                    deleteResume(
                                      resume.id,
                                    )
                                  }
                                  className="flex min-h-9 w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <Trash2
                                    size={14}
                                  />

                                  {isProcessing
                                    ? "Deleting..."
                                    : "Delete"}
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
                          to={`/builder?id=${encodeURIComponent(
                            resume.id,
                          )}`}
                          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-3.5 text-[11px] font-semibold transition-all duration-200"
                          style={{
                            backgroundColor:
                              "#000000",
                            color:
                              "#ffffff",
                          }}
                          onMouseEnter={(
                            event,
                          ) => {
                            event.currentTarget.style.backgroundColor =
                              "#987542";

                            event.currentTarget.style.color =
                              "#ffffff";
                          }}
                          onMouseLeave={(
                            event,
                          ) => {
                            event.currentTarget.style.backgroundColor =
                              "#000000";

                            event.currentTarget.style.color =
                              "#ffffff";
                          }}
                        >
                          <Pencil
                            size={13}
                          />

                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            downloadResume(
                              resume,
                            )
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
            },
          )}
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