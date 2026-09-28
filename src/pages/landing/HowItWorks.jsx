import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  FileCheck2,
  FileText,
  Layers3,
  MousePointer2,
  PenLine,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    eyebrow: "Start with direction",
    title: "Choose your template.",
    text: "Begin with a professionally structured layout designed around readability, hierarchy and the type of career story you want to present.",
    icon: Layers3,
    tag: "01 / SELECT",
  },
  {
    number: "02",
    eyebrow: "Build your story",
    title: "Add your information.",
    text: "Bring together your profile, experience, education, skills, projects and achievements inside one focused workspace.",
    icon: PenLine,
    tag: "02 / BUILD",
  },
  {
    number: "03",
    eyebrow: "Refine the details",
    title: "Make it yours.",
    text: "Adjust your content and presentation while the live document preview updates alongside you in real time.",
    icon: WandSparkles,
    tag: "03 / REFINE",
  },
  {
    number: "04",
    eyebrow: "Ready for the next step",
    title: "Download & apply.",
    text: "Review the final document, prepare your application materials and move confidently toward your next opportunity.",
    icon: Download,
    tag: "04 / EXPORT",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast workflow",
    text: "Less time formatting. More time improving your application.",
  },
  {
    icon: MousePointer2,
    title: "Focused editing",
    text: "A workspace designed to keep you focused on your content.",
  },
  {
    icon: FileCheck2,
    title: "Professional output",
    text: "Structured layouts built to look polished and readable.",
  },
  {
    icon: Sparkles,
    title: "Premium experience",
    text: "Thoughtful details from your first click to your final document.",
  },
];

function FloatingDocument() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[540px] [perspective:1400px]">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a36c]/15 blur-[90px]" />

      {/* Background plate */}
      <div className="absolute inset-[8%] rotate-[-5deg] rounded-[30px] border border-zinc-200 bg-[#ece9e2] shadow-[0_40px_100px_rgba(0,0,0,.08)]" />

      {/* Back document */}
      <div className="absolute left-[12%] top-[12%] h-[365px] w-[245px] rotate-[-9deg] rounded-[8px] border border-white/80 bg-[#f0ede6] shadow-[0_30px_70px_rgba(0,0,0,.15)]">
        <div className="p-6">
          <div className="h-2 w-24 rounded-full bg-zinc-400" />
          <div className="mt-2 h-1.5 w-16 rounded-full bg-zinc-300" />

          <div className="mt-9 space-y-5">
            {[72, 88, 62, 82].map((width, index) => (
              <div key={index}>
                <div className="mb-2 h-1.5 w-14 rounded bg-zinc-300" />
                <div className="h-1.5 rounded bg-white">
                  <div
                    className="h-full rounded bg-zinc-400"
                    style={{ width: `${width}%` }}
                  />
                </div>
                <div className="mt-2 h-1.5 w-full rounded bg-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main document */}
      <div className="absolute left-[21%] top-[8%] h-[400px] w-[270px] rotate-[5deg] rounded-[8px] border border-white/90 bg-white p-7 shadow-[0_45px_110px_rgba(0,0,0,.22)] transition duration-700 hover:rotate-0">
        <div className="flex items-start justify-between">
          <div>
            <div className="h-3 w-28 rounded-full bg-zinc-950" />
            <div className="mt-2 h-1.5 w-16 rounded-full bg-zinc-200" />
          </div>

          <div className="h-8 w-8 rounded-full bg-zinc-100" />
        </div>

        <div className="mt-9 space-y-6">
          {[
            ["PROFILE", 86],
            ["EXPERIENCE", 92],
            ["EDUCATION", 75],
            ["SKILLS", 88],
          ].map(([label, width]) => (
            <div key={label}>
              <p className="mb-2 text-[7px] font-bold tracking-[0.18em] text-[#a17b48]">
                {label}
              </p>

              <div className="h-1.5 rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-zinc-700"
                  style={{ width: `${width}%` }}
                />
              </div>

              <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-100" />
              <div className="mt-2 h-1.5 w-[78%] rounded-full bg-zinc-100" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between">
          <span className="text-[7px] font-bold tracking-[0.2em] text-zinc-400">
            RESUMELY
          </span>
          <span className="text-[7px] text-zinc-400">01 / 02</span>
        </div>
      </div>

      {/* Floating status */}
      <div className="absolute bottom-[11%] right-[3%] z-20 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_25px_60px_rgba(0,0,0,.16)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
            <Check size={16} />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400">
              Live preview
            </p>
            <p className="mt-0.5 text-xs font-semibold">
              Looking professional
            </p>
          </div>
        </div>
      </div>

      {/* Floating cursor */}
      <div className="absolute left-[3%] top-[37%] z-20 flex h-11 w-11 rotate-[-12deg] items-center justify-center rounded-xl border border-white/80 bg-white shadow-[0_20px_45px_rgba(0,0,0,.14)]">
        <MousePointer2 size={17} />
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <main className="overflow-hidden bg-[#f7f7f5] text-zinc-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[760px] overflow-hidden border-b border-zinc-200">
        <div className="absolute right-[-12%] top-[8%] h-[500px] w-[500px] rounded-full bg-[#c6a36c]/10 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[400px] w-[400px] rounded-full bg-zinc-300/20 blur-[100px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            {/* Hero copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 shadow-sm backdrop-blur">
                <Sparkles size={12} className="text-[#b08d57]" />
                How Resumely works
              </div>

              <h1 className="mt-8 max-w-4xl text-balance text-[52px] font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[84px]">
                From blank page
                <br />
                to
                <span className="bg-gradient-to-r from-[#9b7847] via-[#c7a66f] to-[#8b693d] bg-clip-text text-transparent">
                  {" "}
                  ready to apply.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                A refined four-step workflow that takes you from choosing a
                direction to creating professional application documents —
                without making the process feel complicated.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
  to="/templates"
  className="
    group
    inline-flex
    w-fit
    shrink-0
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-white/25
    bg-black
    px-6
    py-3.5
    text-sm
    font-semibold
    !text-white
    leading-none
    whitespace-nowrap
    shadow-[0_18px_40px_rgba(0,0,0,0.14)]
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:border-[#ae8954]
    hover:bg-[#ae8954]
    hover:!text-white
    active:scale-[0.98]
  "
>
  <span className="!text-white">
    Start with a Template
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

                <Link
                  to="/register"
                  className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  Create account
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                <ArrowDown size={14} />
                <span>Five minutes can change the way your experience is seen.</span>
              </div>
            </div>

            {/* 3D visual */}
            <FloatingDocument />
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                The workflow
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">
                Simple on the surface.
                <br />
                Thoughtful underneath.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Every stage has one clear purpose. Instead of throwing every
                tool at you at once, Resumely guides you through the document
                one meaningful decision at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM STEPS
      ========================================================= */}
      <section className="bg-[#f7f7f5] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,.08)]"
                >
                  {/* Gold accent */}
                  <div
                    className={`absolute bottom-0 top-0 w-1 bg-gradient-to-b from-[#8e6a3e] via-[#c6a36c] to-transparent ${
                      index % 2 === 0 ? "left-0" : "right-0"
                    }`}
                  />

                  <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[100px_1fr_220px] lg:items-center lg:p-12">
                    {/* Number */}
                    <div>
                      <span className="text-xs font-bold tracking-[0.15em] text-[#a17b48]">
                        {step.number}
                      </span>

                      <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 transition duration-500 group-hover:border-[#d8c29f] group-hover:bg-[#faf7f0]">
                        <Icon
                          size={19}
                          className="text-zinc-700 transition group-hover:text-[#9a7545]"
                        />
                      </div>
                    </div>

                    {/* Main */}
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48]">
                        {step.eyebrow}
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                        {step.title}
                      </h2>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                        {step.text}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="hidden lg:block">
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                          Workflow
                        </span>

                        <ChevronRight
                          size={15}
                          className="text-zinc-300 transition group-hover:translate-x-1 group-hover:text-[#a17b48]"
                        />
                      </div>

                      <p className="mt-4 text-[9px] font-bold tracking-[0.18em] text-zinc-300">
                        {step.tag}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="bg-white py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                Why the workflow feels different
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Every detail removes friction.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              The goal is not to give you more buttons. The goal is to make the
              right actions easier to find.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[22px] border border-zinc-200 bg-[#f8f8f6] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(0,0,0,.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white">
                    <Icon size={17} className="text-[#9a7545]" />
                  </div>

                  <h3 className="mt-7 text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LIVE PREVIEW SECTION
      ========================================================= */}
      <section className="overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
                03 / Live editing
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                See the document.
                <br />
                While you build it.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
                No guessing what the final resume will look like. Your
                information and your document stay connected throughout the
                editing process.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Edit content",
                  "Watch the preview update",
                  "Review hierarchy",
                  "Refine before export",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <Check size={13} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Dark editor mockup */}
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a36c]/10 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_40px_100px_rgba(0,0,0,.35)] backdrop-blur">
                <div className="rounded-[21px] border border-white/10 bg-[#f5f4f1] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2 w-28 rounded-full bg-zinc-900" />
                      <div className="mt-2 h-1.5 w-16 rounded-full bg-zinc-300" />
                    </div>

                    <div className="rounded-lg bg-zinc-900 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white">
                      Live
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[.75fr_1.25fr]">
                    <div className="rounded-xl border border-zinc-200 bg-white p-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                        Editor
                      </p>

                      <div className="mt-5 space-y-4">
                        {["Name", "Professional Summary", "Experience", "Skills"].map(
                          (item, index) => (
                            <div key={item}>
                              <div className="mb-2 text-[8px] font-semibold text-zinc-500">
                                {item}
                              </div>

                              <div
                                className={`h-8 rounded-lg border ${
                                  index === 2
                                    ? "border-[#c6a36c] bg-[#fcfaf6]"
                                    : "border-zinc-100 bg-zinc-50"
                                }`}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#a17b48]">
                        Preview
                      </p>

                      <div className="mt-5">
                        <div className="h-3 w-32 rounded bg-zinc-900" />
                        <div className="mt-2 h-1.5 w-20 rounded bg-zinc-200" />

                        <div className="mt-7 space-y-5">
                          {[1, 2, 3].map((item) => (
                            <div key={item}>
                              <div className="h-1.5 w-20 rounded bg-zinc-800" />
                              <div className="mt-2 h-1.5 w-full rounded bg-zinc-100" />
                              <div className="mt-2 h-1.5 w-[88%] rounded bg-zinc-100" />
                              <div className="mt-2 h-1.5 w-[72%] rounded bg-zinc-100" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#f7f7f5] py-24 sm:py-32">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[35px] bg-white px-7 py-16 text-center shadow-[0_35px_100px_rgba(0,0,0,.07)] sm:px-12 sm:py-24">
            <div className="absolute left-1/2 top-[-170px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#c6a36c]/10 blur-[90px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                <FileText size={21} />
              </div>

              <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                Your next application starts with one document.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                Choose a professional template, tell your story and let
                Resumely handle the complexity of presenting it beautifully.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
  to="/templates"
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
    px-6
    py-3.5
    text-sm
    font-semibold
    !text-white
    leading-none
    whitespace-nowrap
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:border-[#ae8954]
    hover:bg-[#ae8954]
    hover:!text-white
    active:scale-[0.98]
  "
>
  <span className="!text-white">
    Browse Templates
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

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Start building
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-[#a17b48]" />
                  Professional templates
                </span>

                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-[#a17b48]" />
                  Live preview
                </span>

                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-[#a17b48]" />
                  Resume & cover letter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;
