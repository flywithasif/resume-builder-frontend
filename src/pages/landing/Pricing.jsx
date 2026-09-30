import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Infinity,
  Lock,
  Mail,
  Sparkles,
  Star,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const included = [
  {
    icon: FileText,
    title: "Resume Builder",
    text: "Create polished professional resumes with structured sections and premium layouts.",
  },
  {
    icon: Mail,
    title: "Cover Letter Builder",
    text: "Create matching cover letters designed to complement your resume.",
  },
  {
    icon: WandSparkles,
    title: "Professional Templates",
    text: "Choose from carefully designed templates built for modern applications.",
  },
  {
    icon: Zap,
    title: "Live Preview",
    text: "See your document update while you edit your information.",
  },
  {
    icon: Infinity,
    title: "Build Without Limits",
    text: "Create and refine your application documents without a complicated pricing barrier.",
  },
  {
    icon: Lock,
    title: "Your Workspace",
    text: "Keep your career documents organized inside your own account.",
  },
];

const comparison = [
  ["Resume creation", true],
  ["Cover letter creation", true],
  ["Professional templates", true],
  ["Live document preview", true],
  ["Resume customization", true],
  ["Cover letter customization", true],
  ["Multiple documents", true],
  ["Career document workspace", true],
];

const faqs = [
  {
    q: "Is Resumely actually free?",
    a: "Yes. At the current stage, Resumely is available at ₹0. You can create resumes and cover letters without selecting a paid plan.",
  },
  {
    q: "Do I need a credit card?",
    a: "No. There is no need to enter payment information just to start creating your resume or cover letter.",
  },
  {
    q: "Can I create both a resume and a cover letter?",
    a: "Yes. Resumely is designed for both resume creation and cover-letter creation so your application documents can work together.",
  },
  {
    q: "Can I create more than one resume?",
    a: "The current free experience is designed to let you work on your career documents without forcing you into a paid tier just to explore different versions.",
  },
  {
    q: "Will pricing change in the future?",
    a: "The product may evolve over time. If paid features are introduced in the future, pricing and feature differences should be clearly communicated before any purchase.",
  },
];

function FeatureIcon({ children }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm">
      {children}
    </div>
  );
}

function Pricing() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f7f7f5] text-zinc-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute right-[-25%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#c6a36c]/10 blur-[90px] sm:right-[-15%] sm:top-[-15%] sm:h-[500px] sm:w-[500px] sm:blur-[110px]" />

        <div className="absolute bottom-[-10%] left-[-25%] h-[280px] w-[280px] rounded-full bg-zinc-300/20 blur-[80px] sm:bottom-[-15%] sm:left-[-10%] sm:h-[420px] sm:w-[420px] sm:blur-[100px]" />

        <div className="relative mx-auto max-w-[1380px] px-4 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-14 sm:gap-16 lg:grid-cols-[1fr_.8fr] lg:gap-24">
            {/* =====================================================
                HERO CONTENT
            ===================================================== */}

            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500 shadow-sm backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                <Sparkles
                  size={12}
                  className="shrink-0 text-[#b08d57]"
                />

                <span>Simple pricing</span>
              </div>

              <h1 className="mt-7 max-w-4xl text-balance text-[clamp(2.75rem,10vw,5.375rem)] font-semibold leading-[0.94] tracking-[-0.065em] sm:mt-8">
                Everything you need.
                <br />
                <span className="bg-gradient-to-r from-[#96703f] via-[#c6a36c] to-[#8c693d] bg-clip-text text-transparent">
                  Nothing to pay.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
                Create professional resumes and cover letters with Resumely
                while the platform is free. No complicated plans. No pricing
                maze. Just build your application.
              </p>

              {/* =================================================
                  HERO ACTIONS
              ================================================= */}

              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row">
                <Link
                  to="/register"
                  className="
                    group
                    inline-flex
                    min-h-12
                    w-full
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
                    shadow-[0_18px_45px_rgba(0,0,0,0.14)]
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
                    Start for Free
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
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:w-fit"
                >
                  Explore templates
                </Link>
              </div>

              {/* =================================================
                  HERO BENEFITS
              ================================================= */}

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[9px] font-bold uppercase tracking-[0.13em] text-zinc-400 sm:mt-9 sm:text-[10px] sm:tracking-[0.15em]">
                <span className="flex items-center gap-2">
                  <Check
                    size={13}
                    className="shrink-0 text-[#a17b48]"
                  />
                  ₹0 today
                </span>

                <span className="flex items-center gap-2">
                  <Check
                    size={13}
                    className="shrink-0 text-[#a17b48]"
                  />
                  No credit card
                </span>

                <span className="flex items-center gap-2">
                  <Check
                    size={13}
                    className="shrink-0 text-[#a17b48]"
                  />
                  Resume + cover letter
                </span>
              </div>
            </div>

            {/* =====================================================
                3D FREE CARD
            ===================================================== */}

            <div className="relative mx-auto w-full max-w-[500px] min-w-0 px-1 [perspective:1400px] sm:px-0">
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a36c]/15 blur-[80px] sm:h-[330px] sm:w-[330px] sm:blur-[100px]" />

              {/* Back card */}
              <div className="absolute left-[4%] top-[5%] hidden h-[460px] w-[330px] rotate-[-8deg] rounded-[25px] border border-white/70 bg-[#ebe7df] shadow-[0_40px_100px_rgba(0,0,0,.12)] sm:block" />

              {/* Main pricing card */}
              <div className="relative z-10 w-full rounded-[24px] border border-white bg-white p-5 shadow-[0_35px_90px_rgba(0,0,0,.14)] sm:rounded-[28px] sm:p-9 sm:shadow-[0_45px_120px_rgba(0,0,0,.17)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#b08d57]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400 sm:text-[9px] sm:tracking-[0.2em]">
                        Current access
                      </span>
                    </div>

                    <h2 className="mt-6 text-xl font-semibold tracking-[-0.04em] sm:mt-7 sm:text-2xl">
                      Resumely Free
                    </h2>

                    <p className="mt-2 max-w-[270px] text-xs leading-6 text-zinc-500">
                      Everything you need to create your next application.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-lg sm:h-11 sm:w-11">
                    <Star size={17} />
                  </div>
                </div>

                <div className="mt-7 flex items-end gap-2 sm:mt-9">
                  <span className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
                    ₹0
                  </span>

                  <span className="mb-1.5 text-[11px] text-zinc-400 sm:mb-2 sm:text-xs">
                    / currently
                  </span>
                </div>

                <div className="my-6 h-px bg-zinc-100 sm:my-8" />

                <div className="space-y-3.5 sm:space-y-4">
                  {[
                    "Resume builder",
                    "Cover letter builder",
                    "Professional templates",
                    "Live preview",
                    "Career document workspace",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-700"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f6f1e8]">
                        <Check
                          size={13}
                          className="text-[#987542]"
                        />
                      </span>

                      <span className="min-w-0">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/register"
                  className="
                    group
                    mt-7
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
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
                    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-200
                    hover:border-[#ae8954]
                    hover:bg-[#ae8954]
                    hover:!text-white
                    active:scale-[0.98]
                    sm:mt-8
                  "
                >
                  <span className="!text-white">
                    Create My Account
                  </span>

                  <ArrowRight
                    size={15}
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

                <p className="mt-3 text-center text-[8px] uppercase tracking-[0.12em] text-zinc-400 sm:mt-4 sm:text-[9px] sm:tracking-[0.15em]">
                  No payment information required
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-2 z-20 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,.12)] backdrop-blur sm:-bottom-5 sm:-left-5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white sm:h-9 sm:w-9">
                    <Check size={15} />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-400 sm:text-[9px] sm:tracking-[0.14em]">
                      Access
                    </p>

                    <p className="text-[10px] font-semibold sm:text-xs">
                      ₹0 to get started
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY FREE
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1380px] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
                Our pricing philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl">
                Your career should not start with a pricing wall.
              </h2>
            </div>

            <div className="min-w-0">
              <p className="max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                At this stage, Resumely is focused on making the core resume
                and cover-letter experience accessible. That means you can
                explore the product, create your documents and understand the
                workflow without first choosing between complicated plans.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
                {[
                  "No confusing tiers",
                  "No credit-card gate",
                  "No trial countdown",
                  "No forced upgrade to start",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-12 items-center gap-3 rounded-xl border border-zinc-200 bg-[#f8f8f6] px-4 py-3"
                  >
                    <Check
                      size={15}
                      className="shrink-0 text-[#a17b48]"
                    />

                    <span className="text-xs font-semibold text-zinc-700">
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
          EVERYTHING INCLUDED
      ========================================================= */}

      <section className="bg-[#f7f7f5] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
              Included
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Everything you need to apply.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              One free workspace for creating professional career documents.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[22px] border border-zinc-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,.03)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,.07)] sm:rounded-[24px] sm:p-7"
                >
                  <FeatureIcon>
                    <Icon
                      size={18}
                      className="text-[#987542]"
                    />
                  </FeatureIcon>

                  <h3 className="mt-6 text-base font-semibold sm:mt-7">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a17b48] opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    <Check size={12} />
                    Included at ₹0
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DARK FEATURE STATEMENT
      ========================================================= */}

      <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="absolute right-[-25%] top-[-15%] h-[350px] w-[350px] rounded-full bg-[#c6a36c]/10 blur-[90px] sm:right-[-10%] sm:top-[-20%] sm:h-[500px] sm:w-[500px] sm:blur-[110px]" />

        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-24">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c6a36c] sm:text-[10px] sm:tracking-[0.22em]">
                One price
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">
                Free should feel
                <br />
                premium too.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base">
                Free does not have to mean a stripped-down interface. The
                product experience, templates and document workflow are
                designed to feel considered from the very first interaction.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
                {[
                  "Resume",
                  "Cover Letter",
                  "Templates",
                  "Live Preview",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[9px] font-semibold text-zinc-400 sm:px-4 sm:text-[10px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                WORKSPACE MOCKUP
            ================================================= */}

            <div className="relative mx-auto w-full max-w-[430px] min-w-0">
              <div className="absolute inset-10 rounded-full bg-[#c6a36c]/10 blur-[80px] sm:blur-[90px]" />

              <div className="relative rounded-[25px] border border-white/10 bg-white/[0.045] p-3.5 shadow-[0_35px_90px_rgba(0,0,0,.35)] backdrop-blur-xl sm:rounded-[30px] sm:p-5">
                <div className="rounded-[19px] border border-white/10 bg-black/20 p-5 sm:rounded-[22px] sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-500 sm:text-[9px] sm:tracking-[0.2em]">
                        Resumely
                      </span>

                      <h3 className="mt-3 text-lg font-semibold sm:mt-4 sm:text-xl">
                        Your workspace
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-950 sm:h-10 sm:w-10">
                      <FileText size={17} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
                    {[
                      "My Resume",
                      "Product Designer Resume",
                      "Software Engineer Resume",
                      "Cover Letter",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex min-h-11 items-center justify-between gap-3 rounded-xl border px-3.5 py-3 sm:px-4 ${
                          index === 0
                            ? "border-[#c6a36c]/30 bg-[#c6a36c]/10"
                            : "border-white/5 bg-white/[0.025]"
                        }`}
                      >
                        <span className="min-w-0 truncate text-[11px] text-zinc-300 sm:text-xs">
                          {item}
                        </span>

                        <ChevronDown
                          size={13}
                          className="shrink-0 rotate-[-90deg] text-zinc-600"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex min-h-11 items-center gap-3 rounded-xl bg-white px-3.5 py-3 text-zinc-950 sm:mt-6 sm:px-4">
                    <Sparkles
                      size={15}
                      className="shrink-0 text-[#987542]"
                    />

                    <span className="text-[10px] font-semibold sm:text-xs">
                      Everything currently included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[900px] px-4 sm:px-8">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
              What's included
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              One simple experience.
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[22px] border border-zinc-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,.05)] sm:mt-14 sm:rounded-[25px]">
            <div className="grid grid-cols-[minmax(0,1fr)_80px] border-b border-zinc-200 bg-[#f8f8f6] px-4 py-4 sm:grid-cols-[1fr_110px] sm:px-8 sm:py-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400 sm:text-[10px] sm:tracking-[0.18em]">
                Feature
              </span>

              <span className="text-center text-[9px] font-bold uppercase tracking-[0.14em] text-[#987542] sm:text-[10px] sm:tracking-[0.18em]">
                Free
              </span>
            </div>

            {comparison.map(([name, available]) => (
              <div
                key={name}
                className="grid grid-cols-[minmax(0,1fr)_80px] items-center border-b border-zinc-100 px-4 py-4 last:border-b-0 sm:grid-cols-[1fr_110px] sm:px-8 sm:py-5"
              >
                <span className="min-w-0 pr-3 text-xs font-medium text-zinc-700 sm:text-sm">
                  {name}
                </span>

                <div className="flex justify-center">
                  {available && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f6f1e8]">
                      <Check
                        size={14}
                        className="text-[#987542]"
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW PRICING WORKS
      ========================================================= */}

      <section className="bg-[#f7f7f5] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create",
                text: "Sign up and start building your career documents.",
              },
              {
                number: "02",
                title: "Customize",
                text: "Add your experience and refine your presentation.",
              },
              {
                number: "03",
                title: "Apply",
                text: "Use your finished resume and cover letter for your next opportunity.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[22px] border border-zinc-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,.035)] sm:rounded-[24px] sm:p-7"
              >
                <span className="text-xs font-bold text-[#a17b48]">
                  {item.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold sm:mt-8">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[950px] px-4 sm:px-8">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b48] sm:text-[10px] sm:tracking-[0.22em]">
              Frequently asked
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Pricing questions.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200 sm:mt-14">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group py-5 sm:py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="min-w-0 pr-2 text-sm font-semibold sm:text-base">
                    {item.q}
                  </span>

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-zinc-400 transition duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-3xl pr-2 text-sm leading-7 text-zinc-500 sm:pr-8">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#f7f7f5] px-4 pb-20 sm:px-8 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-[28px] bg-zinc-950 px-5 py-14 text-center text-white shadow-[0_35px_100px_rgba(0,0,0,.14)] sm:rounded-[35px] sm:px-12 sm:py-24">
            <div className="absolute left-1/2 top-[-150px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#c6a36c]/10 blur-[85px] sm:top-[-180px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-14 sm:w-14">
                <Sparkles
                  size={21}
                  className="text-[#c6a36c]"
                />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:mt-8 sm:text-6xl">
                Your next resume starts at ₹0.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
                No pricing maze. No credit card. Just choose a template and
                start building.
              </p>

              <Link
                to="/register"
                className="
                  group
                  mt-8
                  inline-flex
                  min-h-12
                  w-full
                  max-w-full
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
                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#ae8954]
                  hover:bg-[#ae8954]
                  hover:!text-white
                  active:scale-[0.98]
                  sm:mt-9
                  sm:w-fit
                "
              >
                <span className="!text-white">
                  Create Your Free Resume
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

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600 sm:mt-8 sm:gap-x-5 sm:text-[9px] sm:tracking-[0.16em]">
                <span>Resume</span>
                <span>•</span>
                <span>Cover Letter</span>
                <span>•</span>
                <span>Templates</span>
                <span>•</span>
                <span>Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;