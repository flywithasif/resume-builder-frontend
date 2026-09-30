import {
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import coverLetterTemplates from "../../data/coverLetterTemplates";

/* =========================================================
   REAL COVER LETTER THUMBNAIL
========================================================= */

function CoverLetterThumbnail({ template }) {
  const accent = template?.accent || "#987542";
  const layout = template?.layout || "modern";

  const isBold = layout === "bold";

  const isMinimal =
    layout === "minimal" ||
    layout === "ats" ||
    layout === "simple";

  const isCreative =
    layout === "creative" ||
    layout === "designer";

  const isExecutive =
    layout === "executive" ||
    layout === "premium";

  const isClassic =
    layout === "classic" ||
    layout === "traditional" ||
    layout === "formal" ||
    layout === "academic";

  return (
    <div className="flex aspect-[794/1123] w-full items-center justify-center overflow-hidden bg-[#e9e6df] p-3 sm:p-5 md:p-6 lg:p-7">
      {/* ===================================================
          REAL A4 DOCUMENT
      ==================================================== */}

      <div className="relative h-full w-full max-w-[260px] overflow-hidden bg-white shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
        {/* TOP ACCENT */}
        {!isMinimal && !isClassic && (
          <div
            className="absolute left-0 right-0 top-0 h-[5px]"
            style={{ backgroundColor: accent }}
          />
        )}

        {/* BOLD TEMPLATE */}
        {isBold && (
          <div
            className="absolute left-0 right-0 top-0 h-[72px]"
            style={{ backgroundColor: accent }}
          />
        )}

        <div className="relative h-full px-4 py-4 sm:px-5 sm:py-5 md:px-[22px] md:py-[22px] lg:px-[25px] lg:py-[25px]">
          {/* ===============================================
              HEADER
          ================================================ */}

          <div
            className={`border-b pb-4 ${
              isClassic
                ? "border-zinc-300"
                : "border-zinc-200"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p
                  className={`text-[10px] font-bold leading-none ${
                    isBold
                      ? "mt-12 text-white"
                      : "text-zinc-900"
                  }`}
                  style={
                    !isBold && isExecutive
                      ? { color: accent }
                      : undefined
                  }
                >
                  Olivia Morgan
                </p>

                <p
                  className={`mt-1.5 text-[5px] ${
                    isBold
                      ? "text-white/75"
                      : "text-zinc-500"
                  }`}
                >
                  Marketing Manager
                </p>
              </div>

              {/* CREATIVE CIRCLE */}
              {isCreative && (
                <div
                  className="h-7 w-7 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
              )}
            </div>

            <div
              className={`mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[4.5px] ${
                isBold
                  ? "text-white/70"
                  : "text-zinc-400"
              }`}
            >
              <span>olivia@example.com</span>
              <span>+91 98765 43210</span>
              <span>Gurgaon, India</span>
            </div>
          </div>

          {/* ===============================================
              DATE + COMPANY
          ================================================ */}

          <div className="mt-5 flex justify-between gap-4">
            <div className="min-w-0 text-[5px] leading-[1.65] text-zinc-500">
              <p className="font-semibold text-zinc-800">
                Hiring Manager
              </p>

              <p>Acme Technologies</p>

              <p>Gurgaon, Haryana</p>
            </div>

            <p className="shrink-0 text-right text-[4.5px] text-zinc-400">
              28 September 2026
            </p>
          </div>

          {/* ===============================================
              SUBJECT
          ================================================ */}

          <div className="mt-5">
            <p
              className="text-[5.5px] font-bold"
              style={{ color: accent }}
            >
              Application for Marketing Manager
            </p>
          </div>

          {/* ===============================================
              GREETING
          ================================================ */}

          <div className="mt-4">
            <p className="text-[5px] font-semibold text-zinc-800">
              Dear Hiring Manager,
            </p>
          </div>

          {/* ===============================================
              PARAGRAPH 1
          ================================================ */}

          <div className="mt-4 text-[4.5px] leading-[1.7] text-zinc-500">
            <p>
              I am writing to express my interest in the
              Marketing Manager position at Acme Technologies.
              With my experience, skills and strong interest
              in this opportunity, I believe I can contribute
              meaningful value to your team.
            </p>
          </div>

          {/* ===============================================
              PARAGRAPH 2
          ================================================ */}

          <div className="mt-3 text-[4.5px] leading-[1.7] text-zinc-500">
            <p>
              Throughout my experience, I have developed strong
              communication, problem-solving and collaboration
              skills. I enjoy taking ownership of my work,
              learning new processes and working with teams to
              achieve meaningful results.
            </p>
          </div>

          {/* ===============================================
              PARAGRAPH 3
          ================================================ */}

          <div className="mt-3 text-[4.5px] leading-[1.7] text-zinc-500">
            <p>
              What particularly interests me about this
              opportunity is the chance to contribute to a
              growing organization while continuing to develop
              professionally.
            </p>
          </div>

          {/* ===============================================
              CLOSING
          ================================================ */}

          <div className="mt-4 text-[4.5px] leading-[1.7] text-zinc-500">
            <p>
              Thank you for taking the time to review my
              application. I would welcome the opportunity to
              discuss how my experience and skills can
              contribute to your team.
            </p>
          </div>

          {/* ===============================================
              SIGNATURE
          ================================================ */}

          <div className="mt-5">
            <p className="text-[4.5px] text-zinc-500">
              Sincerely,
            </p>

            <p
              className="mt-2 text-[6px] font-semibold"
              style={{ color: accent }}
            >
              Olivia Morgan
            </p>
          </div>

          {/* ===============================================
              FOOTER
          ================================================ */}

          <div className="absolute bottom-4 left-4 right-4 border-t border-zinc-100 pt-2 sm:left-5 sm:right-5 md:left-[22px] md:right-[22px] lg:left-[25px] lg:right-[25px]">
            <div className="flex min-w-0 justify-between gap-2 text-[3.5px] uppercase tracking-[0.12em] text-zinc-300">
              <span className="min-w-0 truncate">
                Olivia Morgan
              </span>

              <span className="min-w-0 truncate text-right">
                {template?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

function CoverLetterTemplates() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      coverLetterTemplates.map(
        (template) => template.category
      )
    ),
  ];

  const filteredTemplates = useMemo(() => {
    return coverLetterTemplates.filter((template) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        template.name
          .toLowerCase()
          .includes(searchText) ||
        template.description
          .toLowerCase()
          .includes(searchText) ||
        template.category
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All" ||
        template.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="space-y-6 pb-8 sm:space-y-8 sm:pb-10">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section>
        <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#987542]">
          <Sparkles size={13} />

          Cover Letter Templates
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl md:text-4xl">
              Choose your cover letter style.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Start with a professionally designed cover letter
              and customize it for every application.
            </p>
          </div>

          <div className="w-fit shrink-0 rounded-full border border-[#e5dfd5] bg-white px-4 py-2 text-xs font-medium text-zinc-500">
            {coverLetterTemplates.length} templates
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER
      ====================================================== */}

      <section className="rounded-2xl border border-[#e7e2d9] bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-4">
        <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row">
          {/* SEARCH */}

          <div className="relative w-full shrink-0 lg:max-w-[300px]">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="h-11 w-full rounded-xl border border-[#e6e1d8] bg-[#faf9f7] pl-11 pr-4 text-sm text-zinc-900 outline-none transition focus:border-[#987542] focus:bg-white"
            />
          </div>

          {/* CATEGORIES */}

          <div className="min-w-0 flex-1">
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition ${
                    category === item
                      ? "bg-zinc-950 text-white"
                      : "border border-[#e6e1d8] bg-white text-zinc-600 hover:border-[#cdbb9f] hover:text-zinc-950"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEMPLATE GRID
      ====================================================== */}

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {filteredTemplates.map((template) => (
            <article
              key={template.id}
              className="group min-w-0 overflow-hidden rounded-[24px] border border-[#e7e2d9] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d3c0a5] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* REAL PREVIEW */}

              <CoverLetterThumbnail template={template} />

              {/* DETAILS */}

              <div className="min-w-0 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <div
                      className="mb-2 inline-flex max-w-full rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: `${template.accent}15`,
                        color: template.accent,
                      }}
                    >
                      <span className="truncate">
                        {template.category}
                      </span>
                    </div>

                    <h2 className="break-words text-base font-semibold text-zinc-950">
                      {template.name}
                    </h2>

                    <p className="mt-1.5 break-words text-xs leading-5 text-zinc-500">
                      {template.description}
                    </p>
                  </div>

                  {/* ACCENT */}

                  <div
                    className="mt-1 h-7 w-7 shrink-0 rounded-full border-4 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                    style={{
                      backgroundColor: template.accent,
                    }}
                  />
                </div>

                {/* BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/cover-letter-builder?template=${template.id}`
                    )
                  }
                  className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-3 text-xs font-semibold text-white transition-all hover:bg-[#987542] active:scale-[0.98]"
                >
                  <span className="truncate">
                    Use this template
                  </span>

                  <ArrowRight
                    size={14}
                    className="shrink-0"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* ===================================================
           EMPTY SEARCH
        ==================================================== */

        <div className="rounded-[24px] border border-dashed border-[#dcd5ca] bg-white px-4 py-16 text-center sm:px-6 sm:py-20">
          <Search
            className="mx-auto text-zinc-300"
            size={30}
          />

          <h2 className="mt-4 text-lg font-semibold text-zinc-950">
            No templates found
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Try another search or category.
          </p>
        </div>
      )}
    </div>
  );
}

export default CoverLetterTemplates;