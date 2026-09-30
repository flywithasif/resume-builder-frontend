import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Layers3,
  Lock,
  Mail,
  MousePointer2,
  PenLine,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    title: "Clarity over complexity",
    text: "Every interaction is intentionally designed to help you move from a blank page to a professional application document without unnecessary friction.",
    icon: Target,
  },
  {
    number: "02",
    title: "Professional by default",
    text: "Typography, spacing, hierarchy and document structure are carefully considered so your resume looks polished before you make your first adjustment.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Your story stays central",
    text: "Resumely is the system around your career story — not the story itself. Your experience, achievements and ambitions remain the focus.",
    icon: PenLine,
  },
];

const features = [
  {
    icon: FileText,
    title: "Resume Builder",
    text: "Build structured, professional resumes with an editing experience designed around real career information.",
  },
  {
    icon: Mail,
    title: "Cover Letter Builder",
    text: "Create tailored cover letters that complement your resume and communicate your value with clarity.",
  },
  {
    icon: WandSparkles,
    title: "Smart Writing",
    text: "Improve wording, structure and presentation while keeping your actual experience at the centre.",
  },
  {
    icon: Layers3,
    title: "Premium Templates",
    text: "Choose from carefully structured layouts created for modern professionals, graduates and career changers.",
  },
  {
    icon: Zap,
    title: "Live Preview",
    text: "See your document evolve while you edit, so formatting decisions never become guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    text: "Your career information is personal. The product is designed around responsible handling of your application data.",
  },
];

const journey = [
  {
    number: "01",
    title: "Choose your direction",
    text: "Start with a resume, cover letter or both depending on the opportunity you're pursuing.",
  },
  {
    number: "02",
    title: "Build your story",
    text: "Add your experience, education, skills, projects, achievements and career information.",
  },
  {
    number: "03",
    title: "Refine the presentation",
    text: "Use structured layouts, typography and guided editing to turn information into a professional document.",
  },
  {
    number: "04",
    title: "Review everything",
    text: "Check the final document through the live preview before sharing it with an employer.",
  },
  {
    number: "05",
    title: "Move with confidence",
    text: "Export your application materials and take the next step in your career journey.",
  },
];

const faqs = [
  {
    question: "What is Resumely?",
    answer:
      "Resumely is a career-document platform designed to help people create professional resumes and cover letters through structured editing, premium templates and a focused document-building experience.",
  },
  {
    question: "Can I create both resumes and cover letters?",
    answer:
      "Yes. Resumely is being designed as an application-document workspace where your resume and cover letter can work together rather than feeling like two completely separate tools.",
  },
  {
    question: "Do I need design experience?",
    answer:
      "No. The purpose of the templates and structured editor is to handle the difficult design decisions for you while still allowing you to control the information and presentation.",
  },
  {
    question: "Can I customize my resume?",
    answer:
      "Yes. Resumely is built around editable sections and professional layouts so you can shape the document around your own career story.",
  },
  {
    question: "Why focus so much on document quality?",
    answer:
      "Because a resume is more than a collection of text. It is a professional document that needs hierarchy, readability, consistency and a clear presentation of your experience.",
  },
];

function FloatingOrb({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function MiniResumeCard() {
  return (
    <div className="relative h-[300px] w-[210px] rounded-[10px] border border-white/70 bg-white p-5 shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:h-[360px] sm:w-[250px] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="h-3 w-20 rounded-full bg-zinc-950 sm:w-24" />
          <div className="mt-2 h-1.5 w-12 rounded-full bg-zinc-200 sm:w-14" />
        </div>

        <div className="h-7 w-7 rounded-full bg-zinc-100 sm:h-8 sm:w-8" />
      </div>

      <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
        {[70, 88, 55, 82].map((width, index) => (
          <div key={index}>
            <div className="mb-2 h-1.5 w-12 rounded-full bg-zinc-300 sm:w-14" />

            <div className="h-1.5 rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-zinc-700"
                style={{ width: `${width}%` }}
              />
            </div>

            <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-100" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
        <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:text-[8px]">
          RESUMELY
        </span>

        <span className="text-[7px] text-zinc-400 sm:text-[8px]">
          01 / 02
        </span>
      </div>
    </div>
  );
}

function About() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f7f7f5] text-zinc-950">
      {/* =========================================================
          01 — HERO
      ========================================================= */}

      <section className="relative min-h-0 overflow-hidden border-b border-zinc-200 bg-[#f7f7f5] lg:min-h-[760px]">
        <FloatingOrb className="right-[-25%] top-[8%] h-[280px] w-[280px] bg-[#c6a36c]/15 sm:right-[-15%] sm:h-[350px] sm:w-[350px] lg:right-[-12%] lg:h-[420px] lg:w-[420px]" />

        <FloatingOrb className="bottom-[-8%] left-[-25%] h-[280px] w-[280px] bg-zinc-300/30 sm:left-[-15%] sm:h-[350px] sm:w-[350px] lg:bottom-[-10%] lg:left-[-15%] lg:h-[400px] lg:w-[400px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 md:pb-24 md:pt-28 lg:px-12 lg:pb-32 lg:pt-32">
          <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1.05fr_.95fr]">
            {/* HERO CONTENT */}

            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500 shadow-sm backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                <Sparkles
                  size={12}
                  className="shrink-0 text-[#b08d57]"
                />

                <span className="truncate">
                  The Resumely story
                </span>
              </div>

              <h1 className="mt-7 max-w-5xl text-balance text-[42px] font-semibold leading-[0.96] tracking-[-0.06em] sm:mt-8 sm:text-6xl md:text-7xl lg:text-[88px]">
                Your career
                <br />
                deserves a
                <span className="bg-gradient-to-r from-[#9b7847] via-[#c7a66f] to-[#8b693d] bg-clip-text text-transparent">
                  {" "}
                  better stage.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                Resumely is building a more thoughtful way to create resumes
                and cover letters — combining professional document design,
                focused editing and a premium experience into one career
                workspace.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
                <Link
                  to="/templates"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800 sm:w-auto"
                >
                  <span className="text-white">
                    Explore templates
                  </span>

                  <ArrowRight
                    size={16}
                    className="shrink-0 text-white transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 sm:w-auto"
                >
                  Start building
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-400 sm:mt-10 sm:gap-x-7">
                <span className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="shrink-0 text-[#a9824e]"
                  />
                  Resume builder
                </span>

                <span className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="shrink-0 text-[#a9824e]"
                  />
                  Cover letters
                </span>

                <span className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="shrink-0 text-[#a9824e]"
                  />
                  Premium templates
                </span>
              </div>
            </div>

            {/* =================================================
                3D PRODUCT COMPOSITION
            ================================================= */}

            <div className="relative mx-auto flex h-[420px] w-full max-w-[570px] items-center justify-center sm:h-[500px] md:h-[540px] lg:h-[560px]">
              <div className="absolute h-[270px] w-[270px] rounded-full bg-[#d7bd91]/20 blur-3xl sm:h-[350px] sm:w-[350px] md:h-[410px] md:w-[410px]" />

              {/* SPARKLE CARD */}

              <div className="absolute right-[2%] top-[6%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-xl backdrop-blur sm:right-[5%] sm:top-[13%] sm:h-14 sm:w-14">
                <Sparkles
                  size={18}
                  className="text-[#a17b48] sm:h-[21px] sm:w-[21px]"
                />
              </div>

              {/* STATUS CARD */}

              <div className="absolute bottom-[7%] left-[0%] z-20 flex max-w-[185px] items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,.14)] backdrop-blur sm:bottom-[13%] sm:left-[5%] sm:max-w-none sm:gap-3 sm:px-4 sm:py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white sm:h-9 sm:w-9">
                  <Check size={15} />
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-400 sm:text-[10px] sm:tracking-[0.16em]">
                    Document ready
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold sm:text-xs">
                    Professionally structured
                  </p>
                </div>
              </div>

              {/* COVER LETTER CARD */}

              <div className="absolute right-[0%] top-[25%] z-30 w-[145px] rotate-[8deg] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_30px_70px_rgba(0,0,0,.18)] backdrop-blur sm:right-[5%] sm:top-[29%] sm:w-[185px] sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-zinc-400 sm:text-[9px] sm:tracking-[0.15em]">
                    Cover letter
                  </span>

                  <Mail
                    size={12}
                    className="shrink-0 text-[#a17b48] sm:h-[14px] sm:w-[14px]"
                  />
                </div>

                <div className="mt-4 space-y-2 sm:mt-5">
                  <div className="h-1.5 w-full rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-[90%] rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-[72%] rounded-full bg-zinc-200" />
                  <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-100 sm:mt-5" />
                  <div className="h-1.5 w-[82%] rounded-full bg-zinc-100" />
                </div>
              </div>

              {/* RESUME STACK */}

              <div className="relative z-10 [perspective:1400px]">
                <div className="relative rotate-[3deg] transform-gpu transition-transform duration-700 hover:rotate-0 sm:rotate-[4deg]">
                  <MiniResumeCard />

                  {/* BACK RESUME */}

                  <div className="absolute -bottom-3 -right-7 h-[275px] w-[180px] rotate-[8deg] rounded-[8px] border border-white/70 bg-[#eeeae1] shadow-[0_35px_90px_rgba(0,0,0,.22)] sm:-bottom-5 sm:-right-12 sm:h-[330px] sm:w-[220px]">
                    <div className="p-5 sm:p-6">
                      <div className="h-2 w-16 rounded bg-zinc-300 sm:w-20" />

                      <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
                        {[80, 62, 91, 70].map((w, i) => (
                          <div key={i}>
                            <div className="h-1.5 rounded bg-white">
                              <div
                                className="h-full rounded bg-zinc-400"
                                style={{ width: `${w}%` }}
                              />
                            </div>

                            <div className="mt-2 h-1.5 w-full rounded bg-white" />
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

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-400 lg:flex">
          <ArrowDownRight size={14} />
          Scroll to explore
        </div>
      </section>

      {/* =========================================================
          02 — BRAND STATEMENT
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 sm:py-28 md:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                Why Resumely exists
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="max-w-5xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
                Creating a resume should feel like building your professional
                identity — not fighting with a document editor.
              </h2>

              <div className="mt-8 grid gap-7 text-sm leading-7 text-zinc-500 sm:mt-10 sm:grid-cols-2 sm:gap-8">
                <p>
                  Too many career tools make people spend their time adjusting
                  margins, fixing spacing and fighting inconsistent formatting.
                </p>

                <p>
                  We believe the technology should disappear into the
                  experience, leaving you with more time to think about the
                  work you have actually done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — NUMBERS / PREMIUM STRIP
      ========================================================= */}

      <section className="border-y border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-[1380px] divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-12">
          {[
            ["01", "Resume creation", "Structured from start to finish"],
            ["02", "Cover letters", "Built for targeted applications"],
            ["03", "Design system", "Premium typography & layouts"],
            ["04", "Career workspace", "Everything in one place"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="px-0 py-8 first:pt-9 md:px-6 md:py-10 md:first:pl-0 lg:px-8"
            >
              <span className="text-xs font-semibold text-[#c6a36c]">
                {number}
              </span>

              <h3 className="mt-4 text-base font-semibold sm:text-lg">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-zinc-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          04 — PRINCIPLES
      ========================================================= */}

      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 sm:py-28 md:py-32 lg:px-12 lg:py-40">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end md:gap-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                The principles
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Designed with intention.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              Every product decision starts with one question: does this make
              creating a strong application easier?
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,.08)] sm:p-8 md:p-9"
                >
                  <div className="absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full bg-[#c7a66f]/10 blur-2xl transition group-hover:bg-[#c7a66f]/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#a17b48]">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50">
                        <Icon size={17} />
                      </div>
                    </div>

                    <h3 className="mt-12 text-lg font-semibold tracking-tight sm:mt-14 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — PRODUCT ECOSYSTEM
      ========================================================= */}

      <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 md:py-32 lg:py-40">
        <FloatingOrb className="right-[-20%] top-[-10%] h-[300px] w-[300px] bg-[#b08d57]/10 sm:right-[-10%] sm:h-[400px] sm:w-[400px] lg:right-[-8%] lg:h-[450px] lg:w-[450px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
                One career workspace
              </p>

              <h2 className="mt-6 text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                More than a resume builder.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 sm:mt-7">
                Resumely is being built around the complete application
                journey — from your first draft to the final document you send
                to an employer.
              </p>

              <Link
                to="/templates"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white sm:mt-9"
              >
                Explore the product

                <ArrowRight
                  size={16}
                  className="text-[#c6a36c]"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[20px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07] sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <Icon
                        size={18}
                        className="text-[#c6a36c]"
                      />
                    </div>

                    <h3 className="mt-5 text-base font-semibold sm:mt-6">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — 3D WORKFLOW
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 sm:gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
            {/* PRODUCT PREVIEW */}

            <div className="relative mx-auto w-full max-w-[570px] [perspective:1400px]">
              <div className="relative aspect-square w-full rounded-[28px] border border-zinc-200 bg-[#f4f2ed] shadow-[0_40px_100px_rgba(0,0,0,.08)] sm:rounded-[35px]">
                <div className="absolute inset-4 rounded-[20px] border border-zinc-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)] [transform:rotateX(5deg)_rotateY(-5deg)] sm:inset-6 sm:rounded-[25px] sm:[transform:rotateX(7deg)_rotateY(-8deg)] md:inset-8">
                  <div className="border-b border-zinc-100 px-4 py-4 sm:px-6 sm:py-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="h-2 w-20 rounded-full bg-zinc-900 sm:w-24" />
                        <div className="mt-2 h-1.5 w-12 rounded bg-zinc-200 sm:w-16" />
                      </div>

                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                      </div>
                    </div>
                  </div>

                  <div className="grid h-[calc(100%-65px)] grid-cols-[.8fr_1.2fr] sm:h-[calc(100%-73px)]">
                    <div className="overflow-hidden border-r border-zinc-100 bg-zinc-50 p-3 sm:p-5">
                      <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-zinc-400 sm:text-[8px] sm:tracking-[0.18em]">
                        Sections
                      </p>

                      <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
                        {[
                          "Profile",
                          "Experience",
                          "Education",
                          "Skills",
                          "Projects",
                        ].map((item, i) => (
                          <div
                            key={item}
                            className={`truncate rounded-lg px-2 py-1.5 text-[7px] font-medium sm:px-3 sm:py-2 sm:text-[9px] ${
                              i === 1
                                ? "bg-zinc-950 text-white"
                                : "text-zinc-400"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="overflow-hidden p-4 sm:p-7">
                      <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#a17b48] sm:text-[8px] sm:tracking-[0.18em]">
                        Experience
                      </p>

                      <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-6">
                        {[1, 2, 3].map((item) => (
                          <div key={item}>
                            <div className="h-1.5 w-20 rounded bg-zinc-800 sm:h-2 sm:w-32" />
                            <div className="mt-2 h-1.5 w-full rounded bg-zinc-100 sm:mt-3" />
                            <div className="mt-2 h-1.5 w-[86%] rounded bg-zinc-100" />
                            <div className="mt-2 h-1.5 w-[70%] rounded bg-zinc-100" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 flex max-w-[150px] items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2.5 shadow-xl sm:bottom-7 sm:left-7 sm:max-w-none sm:gap-3 sm:px-4 sm:py-3">
                  <MousePointer2
                    size={13}
                    className="shrink-0 sm:h-[15px] sm:w-[15px]"
                  />

                  <span className="text-[9px] font-semibold sm:text-[10px]">
                    Focused editing
                  </span>
                </div>
              </div>
            </div>

            {/* WORKFLOW CONTENT */}

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                Built around your workflow
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                From information to application-ready document.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base">
                The product is structured around the way people actually build
                applications: collect your information, shape the story,
                refine the presentation and review the final result.
              </p>

              <div className="mt-9 space-y-6 sm:mt-10 sm:space-y-7">
                {journey.map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4 sm:gap-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[9px] font-bold text-white sm:h-9 sm:w-9 sm:text-[10px]">
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          07 — DESIGN PHILOSOPHY
      ========================================================= */}

      <section className="bg-[#f7f7f5] py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                The design philosophy
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Quietly premium.
                <br />
                Intentionally useful.
              </h2>
            </div>

            <div className="space-y-7 text-sm leading-7 text-zinc-500">
              <p>
                Premium does not mean adding more decoration. It means making
                every detail feel considered — the spacing, typography,
                transitions, hierarchy and way information is presented.
              </p>

              <p>
                Resumely follows that principle across the product. The
                interface should feel sophisticated without becoming
                distracting from the document you are trying to create.
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2 sm:pt-4">
                {[
                  "Editorial typography",
                  "Structured layouts",
                  "Clear visual hierarchy",
                  "Thoughtful motion",
                  "Responsive by design",
                  "Professional document output",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-12 items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3"
                  >
                    <Check
                      size={15}
                      className="shrink-0 text-[#a17b48]"
                    />

                    <span className="text-xs font-medium text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — TRUST / PRIVACY
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[26px] bg-zinc-950 text-white shadow-[0_40px_100px_rgba(0,0,0,.12)] sm:rounded-[30px]">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative overflow-hidden p-7 sm:p-10 md:p-12 lg:p-16">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#c6a36c]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-14 sm:w-14">
                    <Lock
                      size={19}
                      className="text-[#c6a36c] sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                  <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] sm:mt-8 sm:text-5xl">
                    Your career data deserves care.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500 sm:mt-6">
                    Your resume contains information about your professional
                    life. Resumely is designed with that responsibility in
                    mind, with a product experience that puts control and
                    clarity first.
                  </p>
                </div>
              </div>

              <div className="grid border-t border-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Privacy-minded",
                    text: "Your professional information is treated as personal application data.",
                  },
                  {
                    icon: Lock,
                    title: "Account control",
                    text: "Your documents belong to your career workspace and should remain under your control.",
                  },
                  {
                    icon: FileText,
                    title: "Document clarity",
                    text: "Your information remains structured and understandable throughout the creation process.",
                  },
                  {
                    icon: Check,
                    title: "Built responsibly",
                    text: "The product experience is designed around usefulness instead of unnecessary complexity.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`p-6 sm:p-8 md:p-9 ${
                        index < 3
                          ? "border-b border-white/10"
                          : ""
                      } ${
                        index % 2 === 0
                          ? "sm:border-r sm:border-white/10"
                          : ""
                      } lg:border-b-0`}
                    >
                      <Icon
                        size={19}
                        className="text-[#c6a36c]"
                      />

                      <h3 className="mt-5 text-sm font-semibold sm:mt-6">
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
          </div>
        </div>
      </section>

      {/* =========================================================
          09 — FUTURE / VISION
      ========================================================= */}

      <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[10%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#c6a36c]/10 blur-[100px] sm:left-[20%] sm:h-[300px] sm:w-[300px]" />

          <div className="absolute bottom-[0%] right-[5%] h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px] sm:right-[10%] sm:h-[350px] sm:w-[350px]" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-16 sm:w-16">
            <Rocket
              size={22}
              className="text-[#c6a36c] sm:h-[25px] sm:w-[25px]"
            />
          </div>

          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c] sm:mt-8">
            The bigger vision
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            Build the document.
            <br />
            Build the opportunity.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base">
            Resumely is not only about making a prettier resume. The larger
            vision is to create a career-document experience that helps people
            communicate their value with more clarity at every important
            professional moment.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:mt-14 sm:grid-cols-3">
            {[
              [
                "01",
                "Create",
                "Turn experience into a clear professional story.",
              ],
              [
                "02",
                "Present",
                "Use design that makes information easier to understand.",
              ],
              [
                "03",
                "Apply",
                "Move from document creation to your next opportunity.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"
              >
                <span className="text-xs font-bold text-[#c6a36c]">
                  {num}
                </span>

                <h3 className="mt-6 text-sm font-semibold sm:mt-7">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          10 — TESTIMONIAL STYLE BRAND STATEMENT
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28 md:py-32">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <Quote
            size={28}
            className="mx-auto text-[#c6a36c] sm:h-8 sm:w-8"
            strokeWidth={1.5}
          />

          <blockquote className="mt-6 text-2xl font-medium leading-[1.15] tracking-[-0.04em] text-zinc-900 sm:mt-7 sm:text-4xl md:text-5xl">
            “The best career document is not the one with the most design. It
            is the one that makes your experience impossible to misunderstand.”
          </blockquote>

          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8">
            <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-950" />

            <div className="text-left">
              <p className="text-xs font-semibold">
                The Resumely philosophy
              </p>

              <p className="mt-0.5 text-[10px] text-zinc-400">
                Product & design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          11 — FAQ
      ========================================================= */}

      <section className="bg-[#f7f7f5] py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
              Questions
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl">
              About Resumely.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              A few things worth knowing before you start building.
            </p>
          </div>

          <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 sm:mt-14">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group py-5 sm:py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="min-w-0 pr-2 text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-3xl pr-2 text-sm leading-7 text-zinc-500 sm:pr-10">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          12 — FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7f7f5] pb-16 pt-8 sm:pb-24 sm:pt-10 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-zinc-950 px-6 py-12 text-center text-white shadow-[0_40px_120px_rgba(0,0,0,.16)] sm:rounded-[35px] sm:px-12 sm:py-20 md:py-24">
            <div className="absolute left-1/2 top-[-180px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#c6a36c]/10 blur-[100px] sm:h-[400px] sm:w-[400px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-14 sm:w-14">
                <Star
                  size={18}
                  className="text-[#c6a36c] sm:h-5 sm:w-5"
                />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:mt-8 sm:text-5xl md:text-6xl">
                Your next opportunity deserves a better introduction.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
                Create a resume and cover letter that present your experience
                with clarity, confidence and professional detail.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
                <Link
                  to="/register"
                  className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/25 bg-black px-6 py-3.5 text-sm font-semibold leading-none !text-white whitespace-nowrap shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-200 hover:border-[#ae8954] hover:bg-[#ae8954] hover:!text-white active:scale-[0.98] sm:w-auto"
                >
                  <span className="!text-white">
                    Create Your Resume
                  </span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 !text-white transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/templates"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  View templates
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-600 sm:mt-8 sm:gap-5 sm:text-[10px] sm:tracking-[0.15em]">
                <span className="flex items-center gap-1.5">
                  <Check size={12} />
                  Resume
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

                <span className="flex items-center gap-1.5">
                  <Check size={12} />
                  Cover Letter
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

                <span className="flex items-center gap-1.5">
                  <Check size={12} />
                  Premium Templates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;