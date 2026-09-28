import {
  Copy,
  Edit3,
  FileText,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import coverLetterTemplates from "../../data/coverLetterTemplates";

const STORAGE_KEY = "resumely_cover_letters";

function getSavedLetters() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function CoverLetters() {
  const navigate = useNavigate();

  const [letters, setLetters] = useState(getSavedLetters);
  const [search, setSearch] = useState("");

  const filteredLetters = useMemo(() => {
    if (!search.trim()) return letters;

    const query = search.toLowerCase();

    return letters.filter((letter) => {
      return (
        letter.title?.toLowerCase().includes(query) ||
        letter.company?.toLowerCase().includes(query) ||
        letter.position?.toLowerCase().includes(query)
      );
    });
  }, [letters, search]);

  const deleteLetter = (id) => {
    const updated = letters.filter((letter) => letter.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setLetters(updated);
  };

  const duplicateLetter = (letter) => {
    const duplicate = {
      ...letter,
      id: Date.now().toString(),
      title: `${letter.title || "Cover Letter"} Copy`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updated = [duplicate, ...letters];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setLetters(updated);
  };

  const getTemplateName = (templateId) => {
    return (
      coverLetterTemplates.find(
        (template) => template.id === templateId
      )?.name || "Modern"
    );
  };

  return (
    <div className="space-y-8 pb-10">
      {/* HEADER */}
      <section className="relative overflow-hidden rounded-[28px] border border-[#e7e2d9] bg-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f3ede3] blur-3xl" />

        <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7e2d9] bg-[#fbfaf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#987542]">
              <Sparkles size={13} />
              Cover Letters
            </div>

            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
              Your cover letters.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 sm:text-[15px]">
              Create, edit and manage personalized cover letters for your
              job applications.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/cover-letter-builder")}
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white transition-all hover:bg-[#987542] active:scale-[0.98]"
          >
            <Plus size={17} />
            Create Cover Letter
          </button>
        </div>
      </section>

      {/* TOOLBAR */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-950">
            My Cover Letters
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {letters.length}{" "}
            {letters.length === 1 ? "cover letter" : "cover letters"}
          </p>
        </div>

        {letters.length > 0 && (
          <div className="relative w-full sm:w-[280px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cover letters..."
              className="h-10 w-full rounded-xl border border-[#e6e1d8] bg-white pl-10 pr-4 text-xs text-zinc-900 outline-none transition focus:border-[#987542]"
            />
          </div>
        )}
      </section>

      {/* EMPTY */}
      {letters.length === 0 && (
        <section className="rounded-[28px] border border-dashed border-[#dcd5ca] bg-white px-6 py-24 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f3ede3] text-[#987542]">
            <FileText size={27} strokeWidth={1.7} />
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
            No cover letters yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Create your first cover letter and tailor it to the job you
            are applying for.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/cover-letter-builder")}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white hover:bg-[#987542]"
            >
              <Plus size={15} />
              Create Cover Letter
            </button>

            <button
              type="button"
              onClick={() => navigate("/cover-letter-templates")}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#e4ded4] bg-white px-5 text-xs font-semibold text-zinc-700 hover:border-[#cdbb9f]"
            >
              Browse Templates
            </button>
          </div>
        </section>
      )}

      {/* NO SEARCH RESULT */}
      {letters.length > 0 && filteredLetters.length === 0 && (
        <section className="rounded-[24px] border border-dashed border-[#dcd5ca] bg-white px-6 py-20 text-center">
          <Search className="mx-auto text-zinc-300" size={28} />

          <h2 className="mt-4 text-base font-semibold text-zinc-950">
            No cover letters found
          </h2>

          <p className="mt-2 text-xs text-zinc-500">
            Try searching with another title, company or position.
          </p>
        </section>
      )}

      {/* CARDS */}
      {filteredLetters.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredLetters.map((letter) => (
            <article
              key={letter.id}
              className="group overflow-hidden rounded-[24px] border border-[#e7e2d9] bg-white transition-all hover:-translate-y-0.5 hover:border-[#d3c0a5] hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
            >
              <button
                type="button"
                onClick={() =>
                  navigate(`/cover-letter-builder?id=${letter.id}`)
                }
                className="block w-full text-left"
              >
                <div className="bg-[#ece9e3] p-5">
                  <div className="mx-auto aspect-[794/1123] max-w-[210px] overflow-hidden bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                    <div
                      className="h-2 w-20 rounded"
                      style={{
                        backgroundColor:
                          coverLetterTemplates.find(
                            (item) => item.id === letter.template
                          )?.accent || "#987542",
                      }}
                    />

                    <div className="mt-5 h-3 w-32 rounded bg-zinc-900" />

                    <div className="mt-2 h-1.5 w-24 rounded bg-zinc-300" />

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

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-zinc-950">
                      {letter.title || "Untitled Cover Letter"}
                    </h2>

                    <p className="mt-1 truncate text-xs text-zinc-500">
                      {letter.company || "No company"}{" "}
                      {letter.position
                        ? `• ${letter.position}`
                        : ""}
                    </p>

                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#987542]">
                      {getTemplateName(letter.template)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/cover-letter-builder?id=${letter.id}`)
                    }
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e6e1d8] text-zinc-500 hover:bg-[#f8f6f2] hover:text-zinc-950"
                  >
                    <Edit3 size={14} />
                  </button>
                </div>

                <div className="mt-5 flex gap-2 border-t border-[#eeeae3] pt-4">
                  <button
                    type="button"
                    onClick={() => duplicateLetter(letter)}
                    className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#e5dfd5] text-xs font-semibold text-zinc-600 transition hover:bg-[#f8f6f2] hover:text-zinc-950"
                  >
                    <Copy size={14} />
                    Duplicate
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteLetter(letter.id)}
                    className="flex h-9 w-10 items-center justify-center rounded-lg border border-[#eadfdb] text-zinc-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoverLetters;