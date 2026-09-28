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
  return (
    <div className="relative h-[390px] w-full overflow-hidden bg-[#efede8]">

      {/* =====================================================
          A4 RESUME CANVAS
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 flex justify-center overflow-hidden">

        <div
          className="shrink-0"
          style={{
            width: "760px",
            zoom: 0.42,
          }}
        >
          <ResumeRenderer
            resume={TEMPLATE_SAMPLE_RESUME}
            template={template.id}
          />
        </div>

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

  /*
    Detect whether the user is logged in.

    Logged-in users see Templates inside DashboardLayout.
    Guests see Templates inside the public layout.
  */

  const isAuthenticated = Boolean(
    localStorage.getItem("resumely_token")
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
      id
    );

    localStorage.setItem(
      "resumely_template",
      id
    );

    const template = TEMPLATE_META.find(
      (item) => item.id === id
    );

    if (template) {
      localStorage.setItem(
        "resumely_template_name",
        template.name
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
        destination
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
    <div className="pb-12">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden rounded-[26px] bg-[#111111] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12">

        {/* Background glow */}

        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#ae8954]/10 blur-3xl" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_285px] lg:items-end">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d2b078]">

              <Sparkles size={13} />

              Resume templates

            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">

              Choose a design that

              <span className="block text-[#d2b078]">
                fits your career.
              </span>

            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">

              Twenty professionally structured resume designs,
              each with its own visual system, hierarchy and
              presentation style.

            </p>

          </div>

          {/* RIGHT INFO CARD */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

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
                  className="flex items-center gap-2 text-xs text-zinc-300"
                >

                  <Check
                    size={13}
                    className="shrink-0 text-[#d2b078]"
                  />

                  {item}

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LIBRARY BAR
      ====================================================== */}

      <div className="mt-5 flex h-14 items-center justify-between rounded-2xl border border-[#e5dfd5] bg-white px-5">

        <div className="flex items-center gap-2 text-xs text-zinc-500">

          <span className="h-2 w-2 rounded-full bg-[#ae8954]" />

          Your template library

        </div>

        <span className="text-xs font-semibold text-zinc-900">
          {TEMPLATE_META.length} designs
        </span>

      </div>

      {/* =====================================================
          TEMPLATE GRID

          IMPORTANT:
          Guest:
            xl = 4 columns

          Logged in:
            xl = 3 columns
            1800px+ = 4 columns

          This prevents cards from becoming too narrow
          inside DashboardLayout.
      ====================================================== */}

      <div
        className={`mt-5 grid gap-5 sm:grid-cols-2 ${
          isAuthenticated
            ? "xl:grid-cols-3 min-[1800px]:grid-cols-4"
            : "xl:grid-cols-4"
        }`}
      >

        {TEMPLATE_META.map((template, index) => (

          <article
            key={template.id}
            className="group overflow-hidden rounded-[22px] border border-[#e4ded5] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d2bea0] hover:shadow-[0_20px_50px_rgba(17,17,17,0.09)]"
          >

            {/* =================================================
                PREVIEW
            ================================================== */}

            <div className="relative overflow-hidden">

              <ResumeThumbnail
                template={template}
              />

              {/* Category */}

              <div className="absolute left-4 top-4 rounded-full border border-[#e6e1d9] bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600 shadow-[0_3px_12px_rgba(0,0,0,0.07)] backdrop-blur">

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
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-[10px] font-semibold text-zinc-900 opacity-0 shadow-[0_8px_25px_rgba(0,0,0,0.12)] backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >

                <Eye size={13} />

                Preview design

              </Link>

            </div>

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="px-5 pb-5 pt-4">

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <h2 className="truncate text-[16px] font-semibold tracking-[-0.025em] text-zinc-950">

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
                    "0"
                  )}

                </span>

              </div>

              {/* =================================================
                  ACTIONS
              ================================================== */}

              <div className="mt-4 flex items-center gap-2">

                {/* PREVIEW */}

                <Link
                  to={`/templates/${template.id}`}
                  state={{
                    from:
                      location.pathname +
                      location.search,
                  }}
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#e2ddd5] bg-white px-3.5 text-[10px] font-semibold text-zinc-700 transition-all duration-200 hover:border-[#ae8954] hover:bg-[#faf6ef] hover:text-[#987542]"
                >

                  <Eye size={13} />

                  Preview

                </Link>

                {/* USE TEMPLATE */}

                <button
                  type="button"
                  onClick={() =>
                    useTemplate(template.id)
                  }
                  className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#111111] px-3 text-[10px] font-semibold text-white transition-all duration-200 hover:bg-[#ae8954] active:scale-[0.98]"
                >

                  <span>
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

        ))}

      </div>

      {/* =====================================================
          FOOTER NOTE
      ====================================================== */}

      <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-zinc-400">

        <FileText size={13} />

        Resume content stays separate from the template design.

      </div>

    </div>
  );
}

export default Templates;