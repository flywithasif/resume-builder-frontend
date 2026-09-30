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
    <div className="relative mx-auto h-[390px] w-full max-w-[540px] sm:h-[450px] lg:h-[500px] [perspective:1400px]">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a36c]/15 blur-[70px] sm:h-[300px] sm:w-[300px] sm:blur-[85px] lg:h-[330px] lg:w-[330px] lg:blur-[90px]" />

      {/* Background plate */}
      <div className="absolute inset-[7%] rotate-[-5deg] rounded-[24px] border border-zinc-200 bg-[#ece9e2] shadow-[0_30px_80px_rgba(0,0,0,.08)] sm:rounded-[30px] sm:shadow-[0_40px_100px_rgba(0,0,0,.08)]" />

      {/* Back document */}
      <div className="absolute left-[10%] top-[12%] h-[285px] w-[190px] rotate-[-9deg] rounded-[7px] border border-white/80 bg-[#f0ede6] shadow-[0_25px_55px_rgba(0,0,0,.15)] sm:left-[12%] sm:top-[12%] sm:h-[330px] sm:w-[220px] sm:rounded-[8px] sm:shadow-[0_30px_70px_rgba(0,0,0,.15)] lg:h-[365px] lg:w-[245px]">
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="h-1.5 w-20 rounded-full bg-zinc-400 sm:h-2 sm:w-24" />
          <div className="mt-2 h-1.5 w-12 rounded-full bg-zinc-300 sm:w-16" />

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5 lg:mt-9">
            {[72, 88, 62, 82].map((width, index) => (
              <div key={index}>
                <div className="mb-1.5 h-1.5 w-12 rounded bg-zinc-300 sm:mb-2 sm:w-14" />

                <div className="h-1.5 rounded bg-white">
                  <div
                    className="h-full rounded bg-zinc-400"
                    style={{ width: `${width}%` }}
                  />
                </div>

                <div className="mt-1.5 h-1.5 w-full rounded bg-white sm:mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main document */}
      <div className="absolute left-[20%] top-[8%] h-[315px] w-[215px] rotate-[5deg] rounded-[7px] border border-white/90 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,.22)] transition duration-700 hover:rotate-0 sm:left-[21%] sm:top-[8%] sm:h-[365px] sm:w-[245px] sm:rounded-[8px] sm:p-6 sm:shadow-[0_40px_100px_rgba(0,0,0,.22)] lg:h-[400px] lg:w-[270px] lg:p-7 lg:shadow-[0_45px_110px_rgba(0,0,0,.22)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="h-2 w-20 rounded-full bg-zinc-950 sm:h-2.5 sm:w-24 lg:h-3 lg:w-28" />
            <div className="mt-2 h-1.5 w-12 rounded-full bg-zinc-200 sm:w-14 lg:w-16" />
          </div>

          <div className="h-6 w-6 shrink-0 rounded-full bg-zinc-100 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
        </div>

        <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5 lg:mt-9 lg:space-y-6">
          {[
            ["PROFILE", 86],
            ["EXPERIENCE", 92],
            ["EDUCATION", 75],
            ["SKILLS", 88],
          ].map(([label, width]) => (
            <div key={label}>
              <p className="mb-1.5 text-[6px] font-bold tracking-[0.16em] text-[#a17b48] sm:mb-2 sm:text-[7px] sm:tracking-[0.18em]">
                {label}
              </p>

              <div className="h-1.5 rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-zinc-700"
                  style={{ width: `${width}%` }}
                />
              </div>

              <div className="mt-1.5 h-1.5 w-full rounded-full bg-zinc-100 sm:mt-2" />
              <div className="mt-1.5 h-1.5 w-[78%] rounded-full bg-zinc-100 sm:mt-2" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between sm:bottom-5 sm:left-6 sm:right-6 lg:bottom-6 lg:left-7 lg:right-7">
          <span className="text-[6px] font-bold tracking-[0.16em] text-zinc-400 sm:text-[7px] sm:tracking-[0.2em]">
            RESUMELY
          </span>

          <span className="text-[6px] text-zinc-400 sm:text-[7px]">
            01 / 02
          </span>
        </div>
      </div>

      {/* Floating status */}
      <div className="absolute bottom-[7%] right-0 z-20 rounded-xl border border-white/80 bg-white/90 p-2.5 shadow-[0_20px_45px_rgba(0,0,0,.16)] backdrop-blur-xl sm:bottom-[9%] sm:right-[1%] sm:rounded-2xl sm:p-3 lg:bottom-[11%] lg:right-[3%] lg:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white sm:h-9 sm:w-9 sm:rounded-xl">
            <Check size={14} className="sm:h-4 sm:w-4" />
          </div>

          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-zinc-400 sm:text-[9px] sm:tracking-[0.15em]">
              Live preview
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[10px] font-semibold sm:text-xs">
              Looking professional
            </p>
          </div>
        </div>
      </div>

      {/* Floating cursor */}
      <div className="absolute left-0 top-[36%] z-20 flex h-9 w-9 rotate-[-12deg] items-center justify-center rounded-lg border border-white/80 bg-white shadow-[0_15px_35px_rgba(0,0,0,.14)] sm:left-[2%] sm:h-10 sm:w-10 sm:rounded-xl lg:left-[3%] lg:h-11 lg:w-11">
        <MousePointer2 size={15} className="sm:h-[17px] sm:w-[17px]" />
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
      <section className="relative min-h-0 overflow-hidden border-b border-zinc-200 lg:min-h-[760px]">
        <div className="absolute right-[-30%] top-[5%] h-[320px] w-[320px] rounded-full bg-[#c6a36c]/10 blur-[80px] sm:right-[-15%] sm:top-[8%] sm:h-[420px] sm:w-[420px] sm:blur-[90px] lg:right-[-12%] lg:h-[500px] lg:w-[500px] lg:blur-[100px]" />

        <div className="absolute bottom-[-10%] left-[-25%] h-[300px] w-[300px] rounded-full bg-zinc-300/20 blur-[80px] sm:left-[-15%] sm:h-[350px] sm:w-[350px] lg:bottom-[-15%] lg:left-[-10%] lg:h-[400px] lg:w-[400px] lg:blur-[100px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32 lg:px-12 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            {/* Hero copy */}
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500 shadow-sm backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                <Sparkles size={11} className="shrink-0 text-[#b08d57]" />
                <span>How Resumely works</span>
              </div>

              <h1 className="mt-7 max-w-4xl text-balance text-[42px] font-semibold leading-[0.96] tracking-[-0.06em] sm:mt-8 sm:text-6xl md:text-7xl lg:text-[84px]">
                From blank page
                <br />
                to
                <span className="bg-gradient-to-r from-[#9b7847] via-[#c7a66f] to-[#8b693d] bg-clip-text text-transparent">
                  {" "}
                  ready to apply.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
                A refined four-step workflow that takes you from choosing a
                direction to creating professional application documents —
                without making the process feel complicated.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <Link
                  to="/templates"
                  className="
                    group
                    inline-flex
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-white/25
                    bg-black
                    px-5
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
                    sm:w-fit
                    sm:px-6
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
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 sm:w-fit sm:px-6"
                >
                  Create account
                </Link>
              </div>

              <div className="mt-8 flex max-w-xl items-start gap-3 text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-zinc-400 sm:mt-10 sm:items-center sm:text-[10px] sm:tracking-[0.18em]">
                <ArrowDown size={14} className="mt-0.5 shrink-0 sm:mt-0" />

                <span>
                  Five minutes can change the way your experience is seen.
                </span>
              </div>
            </div>

            {/* 3D visual */}
            <div className="min-w-0">
              <FloatingDocument />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
                The workflow
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Simple on the surface.
                <br />
                Thoughtful underneath.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base">
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
      <section className="bg-[#f7f7f5] py-16 sm:py-24 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[22px] border border-zinc-200 bg-white shadow-[0_15px_45px_rgba(0,0,0,.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,.08)] sm:rounded-[28px]"
                >
                  {/* Gold accent */}
                  <div
                    className={`absolute bottom-0 top-0 w-1 bg-gradient-to-b from-[#8e6a3e] via-[#c6a36c] to-transparent ${
                      index % 2 === 0 ? "left-0" : "right-0"
                    }`}
                  />

                  <div className="grid gap-7 p-6 sm:gap-8 sm:p-8 md:p-10 lg:grid-cols-[100px_1fr_220px] lg:items-center lg:p-12">
                    {/* Number */}
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.15em] text-[#a17b48] sm:text-xs">
                        {step.number}
                      </span>

                      <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50 transition duration-500 group-hover:border-[#d8c29f] group-hover:bg-[#faf7f0] sm:mt-6 sm:h-12 sm:w-12">
                        <Icon
                          size={18}
                          className="text-zinc-700 transition group-hover:text-[#9a7545]"
                        />
                      </div>
                    </div>

                    {/* Main */}
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a17b48] sm:text-[9px] sm:tracking-[0.2em]">
                        {step.eyebrow}
                      </p>

                      <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:mt-3 sm:text-2xl md:text-3xl">
                        {step.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-7">
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
      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end md:gap-10">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
                Why the workflow feels different
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:mt-5 sm:text-5xl md:text-6xl">
                Every detail removes friction.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              The goal is not to give you more buttons. The goal is to make the
              right actions easier to find.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[20px] border border-zinc-200 bg-[#f8f8f6] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(0,0,0,.07)] sm:rounded-[22px] sm:p-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white sm:h-11 sm:w-11">
                    <Icon size={16} className="text-[#9a7545]" />
                  </div>

                  <h3 className="mt-6 text-sm font-semibold sm:mt-7">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-6 text-zinc-500 sm:mt-3">
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
      <section className="overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c6a36c] sm:text-[10px] sm:tracking-[0.22em]">
                03 / Live editing
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:mt-5 sm:text-5xl md:text-6xl">
                See the document.
                <br />
                While you build it.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 sm:mt-7">
                No guessing what the final resume will look like. Your
                information and your document stay connected throughout the
                editing process.
              </p>

              <div className="mt-7 space-y-3 sm:mt-8">
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
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check size={13} />
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark editor mockup */}
            <div className="relative min-w-0">
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a36c]/10 blur-[80px] sm:h-[280px] sm:w-[360px] sm:blur-[90px] lg:h-[300px] lg:w-[400px] lg:blur-[100px]" />

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.045] p-2.5 shadow-[0_35px_90px_rgba(0,0,0,.35)] backdrop-blur sm:rounded-[28px] sm:p-3">
                <div className="rounded-[17px] border border-zinc-200/70 bg-[#f5f4f1] p-3 sm:rounded-[21px] sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="h-2 w-24 rounded-full bg-zinc-900 sm:h-2 sm:w-28" />
                      <div className="mt-2 h-1.5 w-14 rounded-full bg-zinc-300 sm:w-16" />
                    </div>

                    <div className="shrink-0 rounded-lg bg-zinc-900 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.12em] text-white sm:px-3 sm:py-2 sm:text-[8px] sm:tracking-[0.14em]">
                      Live
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:grid-cols-[.75fr_1.25fr]">
                    <div className="rounded-xl border border-zinc-200 bg-white p-3 sm:p-4">
                      <p className="text-[7px] font-bold uppercase tracking-[0.13em] text-zinc-400 sm:text-[8px] sm:tracking-[0.15em]">
                        Editor
                      </p>

                      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                        {[
                          "Name",
                          "Professional Summary",
                          "Experience",
                          "Skills",
                        ].map((item, index) => (
                          <div key={item}>
                            <div className="mb-1.5 text-[7px] font-semibold text-zinc-500 sm:mb-2 sm:text-[8px]">
                              {item}
                            </div>

                            <div
                              className={`h-7 rounded-lg border sm:h-8 ${
                                index === 2
                                  ? "border-[#c6a36c] bg-[#fcfaf6]"
                                  : "border-zinc-100 bg-zinc-50"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
                      <p className="text-[7px] font-bold uppercase tracking-[0.13em] text-[#a17b48] sm:text-[8px] sm:tracking-[0.15em]">
                        Preview
                      </p>

                      <div className="mt-4 sm:mt-5">
                        <div className="h-2.5 w-28 rounded bg-zinc-900 sm:h-3 sm:w-32" />
                        <div className="mt-2 h-1.5 w-16 rounded bg-zinc-200 sm:w-20" />

                        <div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
                          {[1, 2, 3].map((item) => (
                            <div key={item}>
                              <div className="h-1.5 w-16 rounded bg-zinc-800 sm:w-20" />
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
      <section className="bg-[#f7f7f5] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-white px-5 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,.07)] sm:rounded-[35px] sm:px-10 sm:py-20 md:px-12 md:py-24">
            <div className="absolute left-1/2 top-[-150px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#c6a36c]/10 blur-[80px] sm:top-[-170px] sm:h-[360px] sm:w-[360px] sm:blur-[90px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white sm:h-14 sm:w-14">
                <FileText size={19} className="sm:h-[21px] sm:w-[21px]" />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-8 sm:text-5xl md:text-6xl">
                Your next application starts with one document.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
                Choose a professional template, tell your story and let
                Resumely handle the complexity of presenting it beautifully.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
                <Link
                  to="/templates"
                  className="
                    group
                    inline-flex
                    w-full
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
                    sm:w-fit
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-fit"
                >
                  Start building
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[8px] font-bold uppercase tracking-[0.13em] text-zinc-400 sm:mt-8 sm:gap-x-5 sm:text-[9px] sm:tracking-[0.16em]">
                <span className="flex items-center gap-1.5">
                  <Check size={11} className="shrink-0 text-[#a17b48]" />
                  Professional templates
                </span>

                <span className="flex items-center gap-1.5">
                  <Check size={11} className="shrink-0 text-[#a17b48]" />
                  Live preview
                </span>

                <span className="flex items-center gap-1.5">
                  <Check size={11} className="shrink-0 text-[#a17b48]" />
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