import {
  ArrowRight,
  Check,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Professional structure",
  "Clean typography",
  "Easy editing",
  "Reusable content",
];

function CoverLetter() {
  return (
    <div className="bg-[#f8f8f6] text-zinc-950">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

            {/* LEFT */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                <Sparkles
                  size={12}
                  className="text-[#b08d57]"
                />

                Cover letters
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Make your
                <br />

                <span className="text-zinc-400">
                  introduction count.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
                Create a clean, professional cover letter that
                complements your resume and gives employers more
                context about your story.
              </p>

              {/* =================================================
                  ACTIONS
              ================================================== */}

              <div className="mt-9 flex flex-wrap gap-3">

                {/* CREATE */}

               <Link
  to="/cover-letter-builder"
  className="
    group
    inline-flex
    w-fit
    shrink-0
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-white/25
    bg-black
    px-5
    py-3
    text-sm
    font-semibold
    !text-white
    leading-none
    whitespace-nowrap
    shadow-[0_8px_25px_rgba(0,0,0,0.18)]
    transition-all
    duration-200
    hover:border-[#ae8954]
    hover:bg-[#ae8954]
    hover:!text-white
    active:scale-[0.98]
  "
>
  <span className="!text-white">
    Create Cover Letter
  </span>

  <ArrowRight
    size={16}
    strokeWidth={2}
    className="shrink-0 !text-white transition-transform duration-200 group-hover:translate-x-1"
  />
</Link>

                {/* VIEW COVER LETTER TEMPLATES */}

                <Link
                  to="/cover-letter-templates"
                  className="inline-flex items-center rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-[#cdbb9f] hover:bg-stone-50"
                >
                  View templates
                </Link>

              </div>

            </div>

            {/* =================================================
                PREVIEW
            ================================================== */}

            <div className="rounded-2xl border border-stone-200 bg-stone-100 p-5 shadow-[0_30px_90px_rgba(24,24,27,0.10)] sm:p-8">

              <div className="mx-auto max-w-[420px] bg-white p-8 shadow-[0_15px_50px_rgba(24,24,27,0.08)] sm:p-10">

                <div className="h-3 w-2/5 bg-zinc-900" />

                <div className="mt-2 h-1.5 w-1/4 bg-zinc-300" />

                <div className="mt-10 space-y-2">
                  <div className="h-1.5 w-1/3 bg-zinc-300" />
                  <div className="h-1.5 w-1/4 bg-zinc-300" />
                </div>

                <div className="mt-8 space-y-2.5">
                  <div className="h-1.5 w-full bg-zinc-200" />
                  <div className="h-1.5 w-full bg-zinc-200" />
                  <div className="h-1.5 w-[92%] bg-zinc-200" />
                  <div className="h-1.5 w-[86%] bg-zinc-200" />
                </div>

                <div className="mt-8 space-y-2.5">
                  <div className="h-1.5 w-full bg-zinc-200" />
                  <div className="h-1.5 w-[94%] bg-zinc-200" />
                  <div className="h-1.5 w-[82%] bg-zinc-200" />
                </div>

                <div className="mt-10 h-1.5 w-1/3 bg-zinc-800" />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => (

              <div
                key={item}
                className="bg-white p-7"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100">
                  <Check size={17} />
                </div>

                <p className="mt-5 text-sm font-semibold text-zinc-900">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-zinc-950 py-20 text-white sm:py-24">

        <div className="mx-auto max-w-[800px] px-5 text-center">

          <FileText className="mx-auto h-8 w-8 text-[#c6a36c]" />

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Resume and cover letter,
            <br />
            together.
          </h2>

         <Link
  to="/cover-letter-builder"
  className="
    group
    mt-8
    inline-flex
    w-fit
    shrink-0
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-white/25
    bg-black
    px-5
    py-3
    text-sm
    font-semibold
    !text-white
    leading-none
    whitespace-nowrap
    shadow-[0_8px_25px_rgba(0,0,0,0.18)]
    transition-all
    duration-200
    hover:border-[#ae8954]
    hover:bg-[#ae8954]
    hover:!text-white
    active:scale-[0.98]
  "
>
  <span className="!text-white">
    Get Started
  </span>

  <ArrowRight
    size={16}
    strokeWidth={2}
    className="
      shrink-0
      !text-white
      transition-transform
      duration-200
      group-hover:translate-x-1
    "
  />
</Link>

        </div>

      </section>

    </div>
  );
}

export default CoverLetter;