import {
  Copy,
  Edit3,
  FileText,
  Plus,
  Search,
  Sparkles,
  Trash2,
  RefreshCw,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import coverLetterTemplates from "../../data/coverLetterTemplates";

import {
  deleteCoverLetterFromApi,
  duplicateCoverLetterOnApi,
  getCoverLettersFromApi,
} from "../../services/coverLetterService";

/* =========================================================
   HELPERS
========================================================= */

function normalizeCoverLetter(record) {
  if (!record) {
    return null;
  }

  const data =
    record.data &&
    typeof record.data === "object"
      ? record.data
      : {};

  const serverId =
    record._id || record.id;

  return {
    ...data,
    ...record,

    id: serverId,
    _id: serverId,

    title:
      record.title ||
      data.title ||
      "Untitled Cover Letter",

    company:
      record.company ||
      data.company ||
      "",

    position:
      record.position ||
      data.position ||
      "",

    template:
      record.template ||
      data.template ||
      "modern",

    createdAt:
      record.createdAt ||
      data.createdAt ||
      null,

    updatedAt:
      record.updatedAt ||
      data.updatedAt ||
      record.createdAt ||
      data.createdAt ||
      null,
  };
}

/* =========================================================
   COVER LETTERS
========================================================= */

function CoverLetters() {
  const navigate = useNavigate();

  const [letters, setLetters] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  const [actionId, setActionId] =
    useState(null);

  /* =======================================================
     LOAD COVER LETTERS FROM BACKEND
  ======================================================= */

  const loadCoverLetters =
    useCallback(
      async ({ silent = false } = {}) => {
        try {
          if (silent) {
            setRefreshing(true);
          } else {
            setLoading(true);
          }

          setError("");

          const response =
            await getCoverLettersFromApi();

          const apiLetters =
            Array.isArray(
              response?.coverLetters,
            )
              ? response.coverLetters
              : Array.isArray(response)
                ? response
                : [];

          const normalizedLetters =
            apiLetters
              .map(
                normalizeCoverLetter,
              )
              .filter(Boolean);

          setLetters(
            normalizedLetters,
          );
        } catch (err) {
          console.error(
            "Failed to load cover letters:",
            err,
          );

          setError(
            err?.message ||
              "Unable to load your cover letters. Please try again.",
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
    loadCoverLetters();
  }, [loadCoverLetters]);

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredLetters = useMemo(() => {
    if (!search.trim()) {
      return letters;
    }

    const query =
      search.trim().toLowerCase();

    return letters.filter(
      (letter) => {
        return (
          letter.title
            ?.toLowerCase()
            .includes(query) ||
          letter.company
            ?.toLowerCase()
            .includes(query) ||
          letter.position
            ?.toLowerCase()
            .includes(query)
        );
      },
    );
  }, [letters, search]);

  /* =======================================================
     DELETE
  ======================================================= */

  const deleteLetter = async (
    id,
  ) => {
    const confirmed =
      window.confirm(
        "Delete this cover letter? This action cannot be undone.",
      );

    if (!confirmed) {
      return;
    }

    try {
      setActionId(id);
      setError("");

      await deleteCoverLetterFromApi(
        id,
      );

      setLetters((current) =>
        current.filter(
          (letter) =>
            String(letter.id) !==
            String(id),
        ),
      );
    } catch (err) {
      console.error(
        "Failed to delete cover letter:",
        err,
      );

      setError(
        err?.message ||
          "Unable to delete this cover letter.",
      );
    } finally {
      setActionId(null);
    }
  };

  /* =======================================================
     DUPLICATE
  ======================================================= */

  const duplicateLetter = async (
    letter,
  ) => {
    if (!letter?.id) {
      return;
    }

    try {
      setActionId(letter.id);
      setError("");

      const response =
        await duplicateCoverLetterOnApi(
          letter.id,
        );

      const duplicatedLetter =
        normalizeCoverLetter(
          response?.coverLetter ||
            response?.data ||
            response,
        );

      if (duplicatedLetter) {
        setLetters((current) => [
          duplicatedLetter,
          ...current,
        ]);
      } else {
        await loadCoverLetters({
          silent: true,
        });
      }
    } catch (err) {
      console.error(
        "Failed to duplicate cover letter:",
        err,
      );

      setError(
        err?.message ||
          "Unable to duplicate this cover letter.",
      );
    } finally {
      setActionId(null);
    }
  };

  /* =======================================================
     TEMPLATE NAME
  ======================================================= */

  const getTemplateName = (
    templateId,
  ) => {
    return (
      coverLetterTemplates.find(
        (template) =>
          template.id ===
          templateId,
      )?.name || "Modern"
    );
  };

  /* =======================================================
     REFRESH
  ======================================================= */

  const handleRefresh = () => {
    loadCoverLetters({
      silent: true,
    });
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="w-full min-w-0 space-y-6 pb-8 sm:space-y-8 sm:pb-10">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="relative overflow-hidden rounded-[24px] border border-[#e7e2d9] bg-white sm:rounded-[28px]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f3ede3] blur-3xl" />

        <div className="relative flex flex-col gap-6 p-5 sm:gap-7 sm:p-8 md:p-9 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#e7e2d9] bg-[#fbfaf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#987542]">
              <Sparkles
                size={13}
                className="shrink-0"
              />

              <span className="truncate">
                Cover Letters
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl md:text-4xl">
              Your cover letters.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 sm:text-[15px]">
              Create, edit and manage
              personalized cover letters
              for your job applications.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              navigate(
                "/cover-letter-builder",
              )
            }
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white transition-all hover:bg-[#987542] active:scale-[0.98] sm:w-auto"
          >
            <Plus
              size={17}
              className="shrink-0"
            />

            <span>
              Create Cover Letter
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-zinc-950">
            My Cover Letters
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {loading
              ? "Loading..."
              : `${letters.length} ${
                  letters.length === 1
                    ? "cover letter"
                    : "cover letters"
                }`}
          </p>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          {letters.length > 0 && (
            <div className="relative w-full sm:w-[280px] md:w-[300px]">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder="Search cover letters..."
                className="h-10 w-full rounded-xl border border-[#e6e1d8] bg-white pl-10 pr-4 text-xs text-zinc-900 outline-none transition focus:border-[#987542]"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleRefresh}
            disabled={
              loading ||
              refreshing
            }
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e6e1d8] bg-white text-zinc-500 transition hover:border-[#cdbb9f] hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Refresh cover letters"
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
      </section>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <section className="flex flex-col gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              loadCoverLetters({
                silent: true,
              })
            }
            className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-white px-3 text-[11px] font-semibold text-zinc-800 shadow-sm ring-1 ring-red-100 transition hover:bg-zinc-50"
          >
            Try again
          </button>
        </section>
      )}

      {/* =====================================================
          LOADING
      ====================================================== */}

      {loading ? (
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {Array.from({
            length: 3,
          }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[22px] border border-[#e7e2d9] bg-white sm:rounded-[24px]"
            >
              <div className="bg-[#ece9e3] p-4 sm:p-5">
                <div className="mx-auto aspect-[794/1123] w-full max-w-[210px] animate-pulse bg-[#ddd9d1]" />
              </div>

              <div className="p-4 sm:p-5">
                <div className="h-4 w-40 animate-pulse rounded bg-[#eeeae3]" />

                <div className="mt-3 h-3 w-28 animate-pulse rounded bg-[#f3f0ea]" />

                <div className="mt-3 h-3 w-20 animate-pulse rounded bg-[#f3f0ea]" />

                <div className="mt-5 h-px bg-[#eeeae3]" />

                <div className="mt-4 h-9 w-full animate-pulse rounded-lg bg-[#f3f0ea]" />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <>
          {/* =====================================================
              EMPTY STATE
          ====================================================== */}

          {letters.length === 0 && (
            <section className="rounded-[24px] border border-dashed border-[#dcd5ca] bg-white px-5 py-16 text-center sm:rounded-[28px] sm:px-6 sm:py-20 md:py-24">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3ede3] text-[#987542] sm:h-16 sm:w-16">
                <FileText
                  size={25}
                  strokeWidth={1.7}
                  className="sm:hidden"
                />

                <FileText
                  size={27}
                  strokeWidth={1.7}
                  className="hidden sm:block"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                No cover letters yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Create your first cover
                letter and tailor it to the
                job you are applying for.
              </p>

              <div className="mx-auto mt-7 flex w-full max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      "/cover-letter-builder",
                    )
                  }
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white hover:bg-[#987542] sm:w-auto"
                >
                  <Plus
                    size={15}
                    className="shrink-0"
                  />

                  <span>
                    Create Cover Letter
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      "/cover-letter-templates",
                    )
                  }
                  className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#e4ded4] bg-white px-5 text-xs font-semibold text-zinc-700 hover:border-[#cdbb9f] sm:w-auto"
                >
                  <span>
                    Browse Templates
                  </span>
                </button>
              </div>
            </section>
          )}

          {/* =====================================================
              NO SEARCH RESULT
          ====================================================== */}

          {letters.length > 0 &&
            filteredLetters.length === 0 && (
              <section className="rounded-[22px] border border-dashed border-[#dcd5ca] bg-white px-5 py-16 text-center sm:rounded-[24px] sm:px-6 sm:py-20">
                <Search
                  className="mx-auto text-zinc-300"
                  size={28}
                />

                <h2 className="mt-4 text-base font-semibold text-zinc-950">
                  No cover letters found
                </h2>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-zinc-500">
                  Try searching with another
                  title, company or position.
                </p>
              </section>
            )}

          {/* =====================================================
              COVER LETTER CARDS
          ====================================================== */}

          {filteredLetters.length > 0 && (
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {filteredLetters.map(
                (letter) => {
                  const isProcessing =
                    String(actionId) ===
                    String(letter.id);

                  const template =
                    coverLetterTemplates.find(
                      (item) =>
                        item.id ===
                        letter.template,
                    );

                  return (
                    <article
                      key={letter.id}
                      className="group min-w-0 overflow-hidden rounded-[22px] border border-[#e7e2d9] bg-white transition-all hover:-translate-y-0.5 hover:border-[#d3c0a5] hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:rounded-[24px]"
                    >
                      {/* =================================================
                          PREVIEW
                      ================================================= */}

                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/cover-letter-builder?id=${letter.id}`,
                          )
                        }
                        className="block w-full text-left"
                      >
                        <div className="bg-[#ece9e3] p-4 sm:p-5">
                          <div className="mx-auto aspect-[794/1123] w-full max-w-[210px] overflow-hidden bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.10)] sm:p-6">
                            <div
                              className="h-2 w-20 rounded"
                              style={{
                                backgroundColor:
                                  template?.accent ||
                                  "#987542",
                              }}
                            />

                            <div className="mt-5 h-3 w-32 max-w-full rounded bg-zinc-900" />

                            <div className="mt-2 h-1.5 w-24 max-w-full rounded bg-zinc-300" />

                            <div className="mt-7 space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-zinc-200" />

                              <div className="h-1.5 w-[92%] rounded bg-zinc-200" />

                              <div className="h-1.5 w-[85%] rounded bg-zinc-200" />
                            </div>

                            <div className="mt-6 space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-zinc-200" />

                              <div className="h-1.5 w-[95%] rounded bg-zinc-200" />

                              <div className="h-1.5 w-[89%] rounded bg-zinc-200" />

                              <div className="h-1.5 w-[76%] rounded bg-zinc-200" />
                            </div>

                            <div className="mt-6 space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-zinc-200" />

                              <div className="h-1.5 w-[88%] rounded bg-zinc-200" />
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* =================================================
                          CARD CONTENT
                      ================================================= */}

                      <div className="min-w-0 p-4 sm:p-5">
                        <div className="flex min-w-0 items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <h2 className="truncate text-sm font-semibold text-zinc-950">
                              {letter.title ||
                                "Untitled Cover Letter"}
                            </h2>

                            <p className="mt-1 truncate text-xs text-zinc-500">
                              {letter.company ||
                                "No company"}{" "}
                              {letter.position
                                ? `• ${letter.position}`
                                : ""}
                            </p>

                            <p className="mt-2 truncate text-[10px] font-medium uppercase tracking-[0.12em] text-[#987542]">
                              {getTemplateName(
                                letter.template,
                              )}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/cover-letter-builder?id=${letter.id}`,
                              )
                            }
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e6e1d8] text-zinc-500 transition-colors hover:bg-[#f8f6f2] hover:text-zinc-950"
                            aria-label="Edit cover letter"
                          >
                            <Edit3
                              size={14}
                            />
                          </button>
                        </div>

                        {/* =================================================
                            CARD ACTIONS
                        ================================================= */}

                        <div className="mt-5 flex gap-2 border-t border-[#eeeae3] pt-4">
                          <button
                            type="button"
                            disabled={
                              isProcessing
                            }
                            onClick={() =>
                              duplicateLetter(
                                letter,
                              )
                            }
                            className="flex min-h-9 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#e5dfd5] px-2 text-xs font-semibold text-zinc-600 transition hover:bg-[#f8f6f2] hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Copy
                              size={14}
                              className="shrink-0"
                            />

                            <span className="truncate">
                              {isProcessing
                                ? "Duplicating..."
                                : "Duplicate"}
                            </span>
                          </button>

                          <button
                            type="button"
                            disabled={
                              isProcessing
                            }
                            onClick={() =>
                              deleteLetter(
                                letter.id,
                              )
                            }
                            className="flex h-9 w-10 shrink-0 items-center justify-center rounded-lg border border-[#eadfdb] text-zinc-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Delete cover letter"
                          >
                            <Trash2
                              size={14}
                            />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CoverLetters;