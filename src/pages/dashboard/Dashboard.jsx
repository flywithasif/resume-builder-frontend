import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Mail,
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

/* =========================================================
   COVER LETTER STORAGE
========================================================= */

const COVER_LETTER_STORAGE_KEY = "resumely_cover_letters";

function getCoverLetters() {
  try {
    const saved = localStorage.getItem(COVER_LETTER_STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* =========================================================
   PROGRESS BAR
========================================================= */

function ProgressBar({ value }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
      <div
        className="h-full rounded-full bg-zinc-950 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

/* =========================================================
   COVER LETTER TEMPLATE COLOR
========================================================= */

function getCoverLetterAccent(template) {
  const accents = {
    modern: "#987542",
    professional: "#1f2937",
    minimal: "#111111",
    executive: "#7c5c2e",
    elegant: "#8b6b4a",
    classic: "#374151",
    corporate: "#334155",
    creative: "#9a6b42",
    clean: "#52525b",
    bold: "#18181b",
    ats: "#222222",
    formal: "#3f3f46",
    simple: "#4b5563",
    contemporary: "#80613d",
    premium: "#987542",
    compact: "#374151",
    traditional: "#44403c",
    startup: "#80613d",
    designer: "#6b5b4b",
    academic: "#374151",
  };

  return accents[template] || "#987542";
}

/* =========================================================
   COVER LETTER THUMBNAIL
========================================================= */

function CoverLetterThumbnail({ letter }) {
  const accent = getCoverLetterAccent(letter.template);

  return (
    <div className="flex h-[150px] w-[110px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-stone-100">
      <div className="relative h-[136px] w-[96px] overflow-hidden bg-white shadow-[0_5px_18px_rgba(0,0,0,0.10)]">
        {/* TOP ACCENT */}

        <div
          className="absolute left-0 right-0 top-0 h-[3px]"
          style={{
            backgroundColor: accent,
          }}
        />

        <div className="px-3.5 py-4">
          {/* NAME */}

          <div
            className="h-2 w-[48px] rounded-sm"
            style={{
              backgroundColor: accent,
            }}
          />

          <div className="mt-1.5 h-[3px] w-[32px] rounded-sm bg-zinc-300" />

          {/* CONTACT */}

          <div className="mt-4 flex gap-1">
            <div className="h-[2px] w-[27px] rounded bg-zinc-200" />
            <div className="h-[2px] w-[22px] rounded bg-zinc-200" />
            <div className="h-[2px] w-[20px] rounded bg-zinc-200" />
          </div>

          {/* RECIPIENT */}

          <div className="mt-5">
            <div className="h-[3px] w-[28px] rounded bg-zinc-700" />

            <div className="mt-1.5 h-[2px] w-[38px] rounded bg-zinc-200" />

            <div className="mt-1 h-[2px] w-[31px] rounded bg-zinc-200" />
          </div>

          {/* SUBJECT */}

          <div
            className="mt-4 h-[3px] w-[45px] rounded"
            style={{
              backgroundColor: accent,
            }}
          />

          {/* PARAGRAPHS */}

          <div className="mt-3 space-y-1">
            <div className="h-[2px] w-full rounded bg-zinc-200" />
            <div className="h-[2px] w-[94%] rounded bg-zinc-200" />
            <div className="h-[2px] w-[87%] rounded bg-zinc-200" />
            <div className="h-[2px] w-[72%] rounded bg-zinc-200" />
          </div>

          <div className="mt-3 space-y-1">
            <div className="h-[2px] w-full rounded bg-zinc-200" />
            <div className="h-[2px] w-[92%] rounded bg-zinc-200" />
            <div className="h-[2px] w-[81%] rounded bg-zinc-200" />
          </div>

          {/* SIGNATURE */}

          <div className="mt-4">
            <div className="h-[2px] w-[25px] rounded bg-zinc-300" />

            <div
              className="mt-2 h-[3px] w-[34px] rounded"
              style={{
                backgroundColor: accent,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {
  const [search, setSearch] = useState("");

  const resumes = getResumes();
  const coverLetters = getCoverLetters();

  /* =======================================================
     RESUME SEARCH
  ======================================================== */

  const filteredResumes = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return resumes;

    return resumes.filter(
      (resume) =>
        resume.title?.toLowerCase().includes(query) ||
        resume.template?.toLowerCase().includes(query)
    );
  }, [search, resumes]);

  /* =======================================================
     RESUME STATS
  ======================================================== */

  const completed = resumes.filter(
    (resume) => (resume.progress || 0) >= 80
  ).length;

  const inProgress = resumes.filter(
    (resume) => (resume.progress || 0) < 80
  ).length;

  /* =======================================================
     COVER LETTER SEARCH
  ======================================================== */

  const filteredCoverLetters = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return coverLetters;

    return coverLetters.filter((letter) => {
      return (
        letter.title?.toLowerCase().includes(query) ||
        letter.company?.toLowerCase().includes(query) ||
        letter.position?.toLowerCase().includes(query) ||
        letter.template?.toLowerCase().includes(query)
      );
    });
  }, [search, coverLetters]);

  return (
    <div className="mx-auto w-full max-w-[1400px] min-w-0">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden rounded-2xl bg-zinc-950 px-4 py-6 text-white sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#987542]/20 blur-3xl" />

        <div className="relative flex min-w-0 flex-col justify-between gap-7 lg:flex-row lg:items-end lg:gap-8">
          {/* HERO CONTENT */}

          <div className="min-w-0 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6a36c]">
              <Sparkles size={14} className="shrink-0" />

              <span>Resume workspace</span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl">
              Welcome back
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Manage your saved resumes and cover letters, continue editing
              your latest versions, and keep every career document organized
              in one place.
            </p>
          </div>

          {/* HERO ACTIONS */}

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3 lg:shrink-0">
            {/* CREATE RESUME */}

            <Link
              to="/builder?new=1"
              className="
                group
                inline-flex
                h-11
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-black
                px-4
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                transition-all
                duration-200
                hover:border-[#ae8954]
                hover:bg-[#ae8954]
                hover:text-white
                active:scale-[0.98]
                sm:w-auto
                sm:min-w-[150px]
                sm:px-5
              "
            >
              <Plus
                size={17}
                strokeWidth={2}
                className="shrink-0 transition-transform duration-200 group-hover:rotate-90"
              />

              <span className="whitespace-nowrap">Create Resume</span>
            </Link>

            {/* CREATE COVER LETTER */}

            <Link
              to="/cover-letter-builder"
              className="
                group
                inline-flex
                h-11
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-black
                px-4
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                transition-all
                duration-200
                hover:border-[#ae8954]
                hover:bg-[#ae8954]
                hover:text-white
                active:scale-[0.98]
                sm:w-auto
                sm:min-w-[180px]
                sm:px-5
              "
            >
              <Mail
                size={17}
                strokeWidth={2}
                className="shrink-0 transition-transform duration-200 group-hover:scale-110"
              />

              <span className="whitespace-nowrap">
                Create Cover Letter
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        {[
          ["Total Resumes", resumes.length, FileText],
          ["Completed", completed, TrendingUp],
          ["In Progress", inProgress, BriefcaseBusiness],
          ["Cover Letters", coverLetters.length, Mail],
        ].map(([label, value, Icon]) => (
          <div
            key={label}
            className="min-w-0 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="min-w-0 text-xs font-medium text-zinc-500">
                {label}
              </span>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-zinc-700">
                <Icon size={16} />
              </div>
            </div>

            <p className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:mt-5">
              {value}
            </p>
          </div>
        ))}
      </section>

      {/* =====================================================
          YOUR RESUMES
      ====================================================== */}

      <section className="mt-6 min-w-0 rounded-2xl border border-stone-200 bg-white p-4 sm:mt-8 sm:p-5 md:p-6">
        <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-zinc-950">
              Your resumes
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Your saved resume versions appear here automatically.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative w-full sm:max-w-xs">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search resumes & cover letters..."
              className="
                h-10
                w-full
                min-w-0
                rounded-xl
                border
                border-stone-200
                bg-stone-50
                px-3
                text-xs
                outline-none
                transition
                focus:border-zinc-900
              "
            />
          </div>
        </div>

        {/* =================================================
            EMPTY RESUME STATE
        ================================================== */}

        {filteredResumes.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-stone-200 bg-stone-50 px-4 py-9 text-center sm:mt-6 sm:px-6 sm:py-10">
            <FileText className="mx-auto text-zinc-300" size={28} />

            <p className="mt-3 text-sm font-medium text-zinc-800">
              {resumes.length
                ? "No matching resumes"
                : "No saved resumes yet"}
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              {resumes.length
                ? "Try another search."
                : "Create a resume and press Save in the builder."}
            </p>

            {!resumes.length && (
              <Link
                to="/builder?new=1"
                className="group mt-5 inline-flex h-9 max-w-full items-center justify-center gap-2 rounded-lg bg-black px-4 text-xs font-semibold !text-white transition-all duration-200 hover:!bg-[#ae8954] hover:!text-white active:scale-[0.98]"
              >
                <Plus
                  size={14}
                  strokeWidth={2.3}
                  className="shrink-0 text-white transition-transform duration-200 group-hover:rotate-90"
                />

                <span className="whitespace-nowrap">
                  Create Resume
                </span>
              </Link>
            )}
          </div>
        ) : (
          /* =================================================
             RESUME LIST
          ================================================== */

          <div className="mt-5 divide-y divide-stone-100 sm:mt-6">
            {filteredResumes.slice(0, 6).map((resume) => {
              const progress =
                resume.progress ||
                calculateResumeProgress(resume.data);

              return (
                <div
                  key={resume.id}
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-4
                    py-4
                    first:pt-0
                    last:pb-0
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-5
                  "
                >
                  {/* RESUME INFO */}

                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-zinc-600">
                      <FileText size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {resume.title}
                      </p>

                      <p className="mt-1 flex min-w-0 items-center gap-2 text-[11px] text-zinc-400">
                        <span className="max-w-[120px] truncate capitalize sm:max-w-none">
                          {resume.template || "Executive"}
                        </span>

                        <span className="shrink-0">·</span>

                        <Clock3 size={11} className="shrink-0" />

                        <span className="truncate">
                          {formatUpdatedAt(resume.updatedAt)}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* PROGRESS + OPEN */}

                  <div className="flex min-w-0 w-full items-center gap-3 sm:w-auto sm:min-w-[280px] sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex justify-between gap-2 text-[10px] text-zinc-400">
                        <span>Progress</span>

                        <span className="font-semibold text-zinc-700">
                          {progress}%
                        </span>
                      </div>

                      <ProgressBar value={progress} />
                    </div>

                    <Link
                      to={`/builder?id=${encodeURIComponent(resume.id)}`}
                      className="
                        flex
                        h-9
                        shrink-0
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border
                        border-stone-200
                        px-3
                        text-xs
                        font-semibold
                        text-zinc-700
                        transition
                        hover:border-[#ae8954]
                        hover:text-[#987542]
                      "
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

        {/* VIEW ALL RESUMES */}

        {resumes.length > 6 && (
          <Link
            to="/dashboard/resumes"
            className="
              mt-5
              flex
              min-h-10
              items-center
              justify-center
              gap-2
              border-t
              border-stone-100
              pt-5
              text-xs
              font-semibold
              text-zinc-600
              transition
              hover:text-[#987542]
              sm:mt-6
            "
          >
            View all resumes

            <ArrowRight size={14} />
          </Link>
        )}
      </section>

      {/* =====================================================
          YOUR COVER LETTERS
      ====================================================== */}

      <section className="mt-6 min-w-0 rounded-2xl border border-stone-200 bg-white p-4 sm:mt-8 sm:p-5 md:p-6">
        {/* HEADER */}

        <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f3ede3] text-[#987542]">
                <Mail size={15} />
              </div>

              <h2 className="min-w-0 truncate text-base font-semibold text-zinc-950">
                Your cover letters
              </h2>
            </div>

            <p className="mt-2 text-xs text-zinc-500">
              Your saved cover letters appear here automatically.
            </p>
          </div>

          <Link
            to="/dashboard/cover-letters"
            className="
              inline-flex
              h-9
              w-full
              shrink-0
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-stone-200
              px-3
              text-xs
              font-semibold
              text-zinc-700
              transition
              hover:border-[#ae8954]
              hover:text-[#987542]
              sm:w-auto
            "
          >
            View all

            <ArrowRight size={13} />
          </Link>
        </div>

        {/* =================================================
            EMPTY COVER LETTERS
        ================================================== */}

        {filteredCoverLetters.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-stone-200 bg-stone-50 px-4 py-10 text-center sm:mt-6 sm:px-6 sm:py-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-zinc-300 shadow-sm">
              <Mail size={22} />
            </div>

            <p className="mt-4 text-sm font-medium text-zinc-800">
              {coverLetters.length
                ? "No matching cover letters"
                : "No cover letters yet"}
            </p>

            <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-zinc-500">
              {coverLetters.length
                ? "Try another search."
                : "Create a professional cover letter and it will appear here."}
            </p>

            {!coverLetters.length && (
              <Link
                to="/cover-letter-builder"
                className="
                  group
                  mt-5
                  inline-flex
                  max-w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/30
                  bg-black
                  px-4
                  py-2
                  text-[13px]
                  font-semibold
                  !text-white
                  leading-none
                  whitespace-nowrap
                  shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-200
                  hover:border-[#ae8954]
                  hover:bg-[#ae8954]
                  hover:!text-white
                  active:scale-[0.98]
                "
              >
                <Plus
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 !text-white transition-transform duration-200 group-hover:rotate-90"
                />

                <span className="!text-white">
                  Create Cover Letter
                </span>
              </Link>
            )}
          </div>
        ) : (
          /* =================================================
             COVER LETTER LIST
          ================================================== */

          <div className="mt-5 divide-y divide-stone-100 sm:mt-6">
            {filteredCoverLetters.slice(0, 6).map((letter) => (
              <div
                key={letter.id}
                className="
                  flex
                  min-w-0
                  flex-col
                  gap-4
                  py-4
                  first:pt-0
                  last:pb-0
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-5
                "
              >
                {/* THUMBNAIL + INFO */}

                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <CoverLetterThumbnail letter={letter} />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-zinc-900">
                      {letter.title || "Untitled Cover Letter"}
                    </p>

                    <p className="mt-1 truncate text-xs text-zinc-500">
                      {letter.company || "No company"}

                      {letter.position
                        ? ` • ${letter.position}`
                        : ""}
                    </p>

                    <p className="mt-2 flex min-w-0 items-center gap-2 text-[10px] text-zinc-400">
                      <span className="max-w-[110px] truncate capitalize sm:max-w-none">
                        {letter.template || "modern"}
                      </span>

                      <span className="shrink-0">·</span>

                      <Clock3 size={10} className="shrink-0" />

                      <span className="truncate">
                        {formatUpdatedAt(
                          letter.updatedAt || letter.createdAt
                        )}
                      </span>
                    </p>
                  </div>
                </div>

                {/* OPEN */}

                <Link
                  to={`/cover-letter-builder?id=${encodeURIComponent(
                    letter.id
                  )}`}
                  className="
                    flex
                    h-9
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    gap-1.5
                    rounded-lg
                    border
                    border-stone-200
                    px-3
                    text-xs
                    font-semibold
                    text-zinc-700
                    transition
                    hover:border-[#ae8954]
                    hover:text-[#987542]
                    sm:w-auto
                  "
                >
                  Open

                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* VIEW ALL */}

        {coverLetters.length > 6 && (
          <Link
            to="/dashboard/cover-letters"
            className="
              mt-5
              flex
              min-h-10
              items-center
              justify-center
              gap-2
              border-t
              border-stone-100
              pt-5
              text-xs
              font-semibold
              text-zinc-600
              transition
              hover:text-[#987542]
              sm:mt-6
            "
          >
            View all cover letters

            <ArrowRight size={14} />
          </Link>
        )}
      </section>
    </div>
  );
}

export default Dashboard;