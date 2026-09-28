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
  Play,
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
    <div className="relative h-[360px] w-[250px] rotate-[-6deg] rounded-[10px] border border-white/70 bg-white p-6 shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between">
        <div>
          <div className="h-3 w-24 rounded-full bg-zinc-950" />
          <div className="mt-2 h-1.5 w-14 rounded-full bg-zinc-200" />
        </div>
        <div className="h-8 w-8 rounded-full bg-zinc-100" />
      </div>

      <div className="mt-8 space-y-5">
        {[70, 88, 55, 82].map((width, index) => (
          <div key={index}>
            <div className="mb-2 h-1.5 w-14 rounded-full bg-zinc-300" />
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

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
          RESUMELY
        </span>
        <span className="text-[8px] text-zinc-400">01 / 02</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <main className="overflow-hidden bg-[#f7f7f5] text-zinc-950">
      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <section className="relative min-h-[760px] overflow-hidden border-b border-zinc-200 bg-[#f7f7f5]">
        <FloatingOrb className="right-[-12%] top-[10%] h-[420px] w-[420px] bg-[#c6a36c]/15" />
        <FloatingOrb className="left-[-15%] bottom-[-10%] h-[400px] w-[400px] bg-zinc-300/30" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 shadow-sm backdrop-blur">
                <Sparkles size={12} className="text-[#b08d57]" />
                The Resumely story
              </div>

              <h1 className="mt-8 max-w-5xl text-balance text-[52px] font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[88px]">
                Your career
                <br />
                deserves a
                <span className="bg-gradient-to-r from-[#9b7847] via-[#c7a66f] to-[#8b693d] bg-clip-text text-transparent">
                  {" "}
                  better stage.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                Resumely is building a more thoughtful way to create resumes
                and cover letters — combining professional document design,
                focused editing and a premium experience into one career
                workspace.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/templates"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  Explore templates
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  Start building
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#a9824e]" />
                  Resume builder
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#a9824e]" />
                  Cover letters
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#a9824e]" />
                  Premium templates
                </span>
              </div>
            </div>

            {/* 3D PRODUCT COMPOSITION */}
            <div className="relative mx-auto flex h-[560px] w-full max-w-[570px] items-center justify-center">
              <div className="absolute h-[410px] w-[410px] rounded-full bg-[#d7bd91]/20 blur-3xl" />

              <div className="absolute right-[5%] top-[13%] h-14 w-14 rounded-2xl border border-white/70 bg-white/80 shadow-xl backdrop-blur">
                <div className="flex h-full items-center justify-center">
                  <Sparkles size={21} className="text-[#a17b48]" />
                </div>
              </div>

              <div className="absolute bottom-[13%] left-[5%] z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,.14)] backdrop-blur">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <Check size={17} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                    Document ready
                  </p>
                  <p className="mt-0.5 text-xs font-semibold">
                    Professionally structured
                  </p>
                </div>
              </div>

              <div className="absolute right-[8%] top-[29%] z-30 w-[185px] rotate-[8deg] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_30px_70px_rgba(0,0,0,.18)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Cover letter
                  </span>
                  <Mail size={14} className="text-[#a17b48]" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-[90%] rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-[72%] rounded-full bg-zinc-200" />
                  <div className="mt-5 h-1.5 w-full rounded-full bg-zinc-100" />
                  <div className="h-1.5 w-[82%] rounded-full bg-zinc-100" />
                </div>
              </div>

              <div className="relative z-10 [perspective:1400px]">
                <div className="relative rotate-[4deg] transform-gpu transition-transform duration-700 hover:rotate-0">
                  <MiniResumeCard />

                  <div className="absolute -bottom-5 -right-12 h-[330px] w-[220px] rotate-[8deg] rounded-[8px] border border-white/70 bg-[#eeeae1] shadow-[0_35px_90px_rgba(0,0,0,.22)]">
                    <div className="p-6">
                      <div className="h-2 w-20 rounded bg-zinc-300" />
                      <div className="mt-7 space-y-4">
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
        <div className="mx-auto max-w-[1380px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                Why Resumely exists
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Creating a resume should feel like building your professional
                identity — not fighting with a document editor.
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-zinc-500 sm:grid-cols-2">
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
            <div key={number} className="px-5 py-10 first:pl-0 md:px-8">
              <span className="text-xs font-semibold text-[#c6a36c]">
                {number}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          04 — PRINCIPLES
      ========================================================= */}
      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-[1380px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                The principles
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Designed with intention.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              Every product decision starts with one question: does this make
              creating a strong application easier?
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,.08)] sm:p-9"
                >
                  <div className="absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full bg-[#c7a66f]/10 blur-2xl transition group-hover:bg-[#c7a66f]/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#a17b48]">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50">
                        <Icon size={17} />
                      </div>
                    </div>

                    <h3 className="mt-14 text-xl font-semibold tracking-tight">
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
      <section className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-40">
        <FloatingOrb className="right-[-8%] top-[-10%] h-[450px] w-[450px] bg-[#b08d57]/10" />

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
                One career workspace
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                More than a resume builder.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
                Resumely is being built around the complete application
                journey — from your first draft to the final document you send
                to an employer.
              </p>

              <Link
                to="/templates"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Explore the product
                <ArrowRight size={16} className="text-[#c6a36c]" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[20px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <Icon size={18} className="text-[#c6a36c]" />
                    </div>

                    <h3 className="mt-6 text-base font-semibold">
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
      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-[570px] [perspective:1400px]">
              <div className="relative aspect-square rounded-[35px] border border-zinc-200 bg-[#f4f2ed] shadow-[0_40px_100px_rgba(0,0,0,.08)]">
                <div className="absolute inset-8 rounded-[25px] border border-zinc-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,.08)] [transform:rotateX(7deg)_rotateY(-8deg)]">
                  <div className="border-b border-zinc-100 px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-24 rounded-full bg-zinc-900" />
                        <div className="mt-2 h-1.5 w-16 rounded bg-zinc-200" />
                      </div>

                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                        <span className="h-2 w-2 rounded-full bg-zinc-200" />
                      </div>
                    </div>
                  </div>

                  <div className="grid h-[calc(100%-73px)] grid-cols-[.75fr_1.25fr]">
                    <div className="border-r border-zinc-100 bg-zinc-50 p-5">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                        Sections
                      </p>

                      <div className="mt-5 space-y-2">
                        {[
                          "Profile",
                          "Experience",
                          "Education",
                          "Skills",
                          "Projects",
                        ].map((item, i) => (
                          <div
                            key={item}
                            className={`rounded-lg px-3 py-2 text-[9px] font-medium ${
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

                    <div className="p-7">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a17b48]">
                        Experience
                      </p>

                      <div className="mt-5 space-y-6">
                        {[1, 2, 3].map((item) => (
                          <div key={item}>
                            <div className="h-2 w-32 rounded bg-zinc-800" />
                            <div className="mt-3 h-1.5 w-full rounded bg-zinc-100" />
                            <div className="mt-2 h-1.5 w-[86%] rounded bg-zinc-100" />
                            <div className="mt-2 h-1.5 w-[70%] rounded bg-zinc-100" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl">
                  <MousePointer2 size={15} />
                  <span className="text-[10px] font-semibold">
                    Focused editing
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                Built around your workflow
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                From information to application-ready document.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                The product is structured around the way people actually build
                applications: collect your information, shape the story,
                refine the presentation and review the final result.
              </p>

              <div className="mt-10 space-y-7">
                {journey.map((item) => (
                  <div key={item.number} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-bold text-white">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
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
      <section className="bg-[#f7f7f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
                The design philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
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
                interface should feel sophisticated without becoming distracting
                from the document you are trying to create.
              </p>

              <div className="grid gap-3 pt-4 sm:grid-cols-2">
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
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3"
                  >
                    <Check size={15} className="text-[#a17b48]" />
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
      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[30px] bg-zinc-950 text-white shadow-[0_40px_100px_rgba(0,0,0,.12)]">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#c6a36c]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Lock size={21} className="text-[#c6a36c]" />
                  </div>

                  <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Your career data deserves care.
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
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
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="border-b border-white/10 p-7 last:border-b-0 sm:border-r sm:p-9 lg:last:border-r-0"
                    >
                      <Icon size={19} className="text-[#c6a36c]" />
                      <h3 className="mt-6 text-sm font-semibold">
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
      <section className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[20%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#c6a36c]/10 blur-[100px]" />
          <div className="absolute bottom-[0%] right-[10%] h-[350px] w-[350px] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Rocket size={25} className="text-[#c6a36c]" />
          </div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
            The bigger vision
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Build the document.
            <br />
            Build the opportunity.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            Resumely is not only about making a prettier resume. The larger
            vision is to create a career-document experience that helps people
            communicate their value with more clarity at every important
            professional moment.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
            {[
              ["01", "Create", "Turn experience into a clear professional story."],
              ["02", "Present", "Use design that makes information easier to understand."],
              ["03", "Apply", "Move from document creation to your next opportunity."],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="text-xs font-bold text-[#c6a36c]">{num}</span>
                <h3 className="mt-7 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          10 — TESTIMONIAL STYLE BRAND STATEMENT
      ========================================================= */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <Quote
            size={32}
            className="mx-auto text-[#c6a36c]"
            strokeWidth={1.5}
          />

          <blockquote className="mt-7 text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-zinc-900 sm:text-5xl">
            “The best career document is not the one with the most design. It
            is the one that makes your experience impossible to misunderstand.”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-9 w-9 rounded-full bg-zinc-950" />
            <div className="text-left">
              <p className="text-xs font-semibold">The Resumely philosophy</p>
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
      <section className="bg-[#f7f7f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17b48]">
              Questions
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              About Resumely.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              A few things worth knowing before you start building.
            </p>
          </div>

          <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                  <span className="text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-zinc-500">
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
      <section className="relative overflow-hidden bg-[#f7f7f5] pb-24 pt-10 sm:pb-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[35px] bg-zinc-950 px-7 py-16 text-center text-white shadow-[0_40px_120px_rgba(0,0,0,.16)] sm:px-12 sm:py-24">
            <div className="absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#c6a36c]/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Star size={20} className="text-[#c6a36c]" />
              </div>

              <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Your next opportunity deserves a better introduction.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                Create a resume and cover letter that present your experience
                with clarity, confidence and professional detail.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
  to="/register"
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
    Create Your Resume
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
                  to="/templates"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View templates
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <Check size={12} />
                  Resume
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="flex items-center gap-1.5">
                  <Check size={12} />
                  Cover Letter
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
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
