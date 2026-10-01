import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  Check,
  Eye,
  FileText,
  Sparkles,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ResumeRenderer,
  TEMPLATE_META,
  TEMPLATE_SAMPLE_RESUME,
} from "./resumeTemplates";

/* =========================================================
   RESUME PREVIEW
========================================================= */

function ResumeThumbnail({ template }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.4);

  useLayoutEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return undefined;
    }

    const updateScale = () => {
      const width = element.getBoundingClientRect().width;
      const A4_WIDTH = 794;

      if (!width) {
        return;
      }

      /*
       * ResumeRenderer ko A4 canvas ke exact CSS dimensions
       * ke saath scale kiya ja raha hai. Preview hamesha
       * available card width ke andar fit
       * karte hain. Isme CSS `zoom` use nahi hota, isliye
       * browser zoom ya Dashboard sidebar ke saath thumbnail
       * crop nahi hoga.
       */
      setScale(Math.min(width / A4_WIDTH, 1));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#efede8]"
      style={{
        aspectRatio: "794 / 1123",
      }}
    >
      {/* =====================================================
          A4 RESUME CANVAS

          Native A4 preview ko available card width ke hisaab
          se scale kiya ja raha hai. Browser zoom independent.
          794 x 1123 = A4 CSS pixel ratio at 96 DPI.
      ====================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-0"
        style={{
          width: "794px",
          height: "1123px",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <ResumeRenderer
          resume={TEMPLATE_SAMPLE_RESUME}
          template={template.id}
        />
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#efede8] via-[#efede8]/80 to-transparent" />
    </div>
  );
}

/* =========================================================
   TEMPLATES PAGE
========================================================= */

function Templates() {
  const navigate = useNavigate();
  const location = useLocation();

  /* =======================================================
     AUTHENTICATION
  ======================================================== */

  const isAuthenticated = Boolean(
    localStorage.getItem("resumely_token"),
  );

  /* =======================================================
     USE TEMPLATE
  ======================================================== */

  const useTemplate = (id) => {
    /* -----------------------------------------------
       Save selected template
    ------------------------------------------------ */

    localStorage.setItem(
      "resumely_selected_template",
      id,
    );

    localStorage.setItem(
      "resumely_template",
      id,
    );

    const template = TEMPLATE_META.find(
      (item) => item.id === id,
    );

    if (template) {
      localStorage.setItem(
        "resumely_template_name",
        template.name,
      );
    }

    /* -----------------------------------------------
       Builder destination
    ------------------------------------------------ */

    const destination = "/builder?new=1";

    /* -----------------------------------------------
       Guest user
       Login/Register ke baad builder par wapas.
    ------------------------------------------------ */

    if (!isAuthenticated) {
      localStorage.setItem(
        "resumely_after_login",
        destination,
      );

      navigate("/login", {
        state: {
          from: destination,
        },
      });

      return;
    }

    /* -----------------------------------------------
       Logged-in user
       Direct builder
    ------------------------------------------------ */

    navigate(destination);
  };

  return (
    <div className="pb-8 sm:pb-10 lg:pb-12">
      {/* =====================================================
          LOGGED-IN HEADER
          
          Logged-in user ko landing/marketing hero nahi
          dikhana hai. Sirf template library heading.
      ====================================================== */}

      {isAuthenticated && (
        <section className="relative overflow-hidden rounded-[22px] border border-[#e5dfd5] bg-white px-5 py-6 sm:rounded-[24px] sm:px-8 sm:py-8 md:px-10 lg:px-12 lg:py-9">
          {/* Background glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ae8954]/[0.06] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-zinc-900/[0.025] blur-3xl" />

          <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white shadow-sm">
                <FileText size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ae8954]">
                  Resume Builder
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-3xl">
                  Choose your template
                </h1>

                <p className="mt-2 max-w-xl text-xs leading-5 text-zinc-500 sm:text-sm">
                  Select a professional resume
                  design and start building your
                  resume.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#e5dfd5] bg-[#faf8f4] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ae8954]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {TEMPLATE_META.length} designs
              </span>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          GUEST HERO

          IMPORTANT:
          Ye section sirf logged-out visitors ko dikhega.
      ====================================================== */}

      {!isAuthenticated && (
        <section className="relative overflow-hidden rounded-[22px] bg-[#111111] px-5 py-7 text-white sm:rounded-[24px] sm:px-8 sm:py-9 md:px-10 md:py-11 lg:rounded-[26px] lg:px-12 lg:py-12">
          {/* Background glow */}

          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#ae8954]/10 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative grid gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_285px] lg:items-end">
            {/* LEFT */}

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d2b078]">
                <Sparkles size={13} />

                Resume templates
              </div>

              <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.055em] sm:text-4xl md:text-5xl">
                Choose a design that

                <span className="block text-[#d2b078]">
                  fits your career.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-[14px]">
                Twenty professionally structured
                resume designs, each with its own
                visual system, hierarchy and
                presentation style.
              </p>
            </div>

            {/* RIGHT INFO CARD */}

            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Included
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "20 distinct resume designs",
                  "Real live template previews",
                  "A4-ready layouts",
                  "Live builder preview",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-zinc-300"
                  >
                    <Check
                      size={13}
                      className="mt-0.5 shrink-0 text-[#d2b078]"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          LIBRARY BAR
      ====================================================== */}

      <div className="mt-4 flex min-h-14 flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#e5dfd5] bg-white px-4 py-3 sm:mt-5 sm:px-5 sm:py-0">
        <div className="flex min-w-0 items-center gap-2 text-xs text-zinc-500">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ae8954]" />

          <span className="truncate">
            Your template library
          </span>
        </div>

        <span className="shrink-0 text-xs font-semibold text-zinc-900">
          {TEMPLATE_META.length} designs
        </span>
      </div>

      {/* =====================================================
          TEMPLATE GRID

          Guest:
            sm = 2 columns
            xl = 4 columns

          Logged in:
            sm = 2 columns
            xl = 3 columns
            1800px+ = 4 columns

          This keeps cards readable inside DashboardLayout.
      ====================================================== */}

      <div
        className={`mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 ${
          isAuthenticated
            ? "xl:grid-cols-3 min-[1800px]:grid-cols-4"
            : "xl:grid-cols-4"
        }`}
      >
        {TEMPLATE_META.map(
          (template, index) => (
            <article
              key={template.id}
              className="group min-w-0 overflow-hidden rounded-[20px] border border-[#e4ded5] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d2bea0] hover:shadow-[0_20px_50px_rgba(17,17,17,0.09)] sm:rounded-[22px]"
            >
              {/* =================================================
                  PREVIEW
              ================================================== */}

              <div className="relative min-w-0 overflow-hidden">
                <ResumeThumbnail
                  template={template}
                />

                {/* Category */}

                <div className="absolute left-3 top-3 max-w-[calc(100%-24px)] truncate rounded-full border border-[#e6e1d9] bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600 shadow-[0_3px_12px_rgba(0,0,0,0.07)] backdrop-blur sm:left-4 sm:top-4">
                  {template.category}
                </div>

                {/* Hover Preview */}

                <Link
                  to={`/templates/${template.id}`}
                  state={{
                    from:
                      location.pathname +
                      location.search,
                  }}
                  className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 translate-y-2 items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-[10px] font-semibold text-zinc-900 opacity-0 shadow-[0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex"
                >
                  <Eye size={13} />

                  Preview design
                </Link>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-[15px] font-semibold tracking-[-0.025em] text-zinc-950 sm:text-[16px]">
                      {template.name}
                    </h2>

                    <p className="mt-1.5 line-clamp-2 min-h-[34px] text-[11px] leading-[17px] text-zinc-500">
                      {template.description}
                    </p>
                  </div>

                  {/* Number */}

                  <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-[#f6f1e9] px-2 text-[9px] font-bold text-[#ae8954]">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>

                {/* =================================================
                    ACTIONS
                ================================================== */}

                <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2">
                  {/* PREVIEW */}

                  <Link
                    to={`/templates/${template.id}`}
                    state={{
                      from:
                        location.pathname +
                        location.search,
                    }}
                    className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#e2ddd5] bg-white px-3 text-[10px] font-semibold text-zinc-700 transition-all duration-200 hover:border-[#ae8954] hover:bg-[#faf6ef] hover:text-[#987542]"
                  >
                    <Eye size={13} />

                    <span>
                      Preview
                    </span>
                  </Link>

                  {/* USE TEMPLATE */}

                  <button
                    type="button"
                    onClick={() =>
                      useTemplate(
                        template.id,
                      )
                    }
                    className="inline-flex h-9 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#111111] px-3 text-[10px] font-semibold text-white transition-all duration-200 hover:bg-[#ae8954] active:scale-[0.98]"
                  >
                    <span className="truncate">
                      Use Template
                    </span>

                    <ArrowRight
                      size={13}
                      className="shrink-0"
                    />
                  </button>
                </div>
              </div>
            </article>
          ),
        )}
      </div>

      {/* =====================================================
          FOOTER NOTE
      ====================================================== */}

      <div className="mt-7 flex flex-wrap items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-400 sm:mt-8">
        <FileText
          size={13}
          className="shrink-0"
        />

        <span>
          Resume content stays separate from
          the template design.
        </span>
      </div>
    </div>
  );
}

export default Templates;