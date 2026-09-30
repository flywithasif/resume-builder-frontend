import {
  ArrowRight,
  Check,
  ChevronRight,
  FileCheck2,
  FileText,
  Layers3,
  LayoutTemplate,
  MousePointer2,
  PenLine,
  Quote,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

// Reusable benefit cards
const benefits = [
  {
    number: "01",
    title: "Professional structure",
    text: "A polished structure that makes your introduction easy to read and easy to remember.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Clean typography",
    text: "Balanced spacing, hierarchy and typography designed for modern applications.",
    icon: PenLine,
  },
  {
    number: "03",
    title: "Easy editing",
    text: "Write, refine and update your cover letter without fighting complicated editors.",
    icon: MousePointer2,
  },
  {
    number: "04",
    title: "Reusable content",
    text: "Create multiple versions for different roles, companies and career opportunities.",
    icon: Layers3,
  },
];

// Available cover-letter templates
const templates = [
  {
    name: "Executive",
    type: "Professional",
    accent: "#9b7948",
    layout: "classic",
  },
  {
    name: "Minimal",
    type: "Clean",
    accent: "#27272a",
    layout: "minimal",
  },
  {
    name: "Modern",
    type: "Contemporary",
    accent: "#64748b",
    layout: "modern",
  },
];

// Cover-letter creation steps
const steps = [
  {
    number: "01",
    title: "Choose your style",
    text: "Start with a professional cover-letter layout designed for your industry and role.",
  },
  {
    number: "02",
    title: "Add your story",
    text: "Introduce yourself, explain your motivation and connect your experience to the role.",
  },
  {
    number: "03",
    title: "Make it yours",
    text: "Edit every section with a live preview so your final letter feels personal.",
  },
  {
    number: "04",
    title: "Download & apply",
    text: "Export your finished cover letter and use it alongside your resume.",
  },
];

// Small reusable cover-letter preview
function MiniCoverLetter({
  accent = "#a47d45",
  name = "Alex Morgan",
  position = "Senior Product Designer",
  company = "Acme Technologies",
  variant = "classic",
}) {
  const isModern = variant === "modern";
  const isMinimal = variant === "minimal";

  return (
    <div
      className={`relative w-full overflow-hidden bg-white ${
        isMinimal
          ? "shadow-[0_28px_70px_rgba(24,24,27,0.10)]"
          : "shadow-[0_30px_80px_rgba(24,24,27,0.14)]"
      }`}
    >
      {isModern && (
        <div
          className="absolute left-0 top-0 h-full w-1.5"
          style={{ backgroundColor: accent }}
        />
      )}

      {variant === "classic" && (
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: accent }}
        />
      )}

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-3 sm:gap-5">
          <div className="min-w-0">
            <div className="break-words text-[15px] font-bold tracking-[-0.04em] text-zinc-950 sm:text-[18px]">
              {name}
            </div>

            <div
              className="mt-1 break-words text-[6px] font-medium uppercase tracking-[0.14em] sm:text-[7px] sm:tracking-[0.18em]"
              style={{ color: accent }}
            >
              {position}
            </div>
          </div>

          <div className="shrink-0 text-right text-[5.5px] leading-3.5 text-zinc-500 sm:text-[6.5px] sm:leading-4">
            <div>hello@email.com</div>
            <div>+91 98765 43210</div>
            <div>New Delhi, India</div>
          </div>
        </div>

        <div className="my-4 h-px bg-zinc-200 sm:my-6" />

        <div className="text-[6px] leading-3.5 text-zinc-500 sm:text-[7px] sm:leading-4">
          September 29, 2026
        </div>

        <div className="mt-3 text-[7px] font-semibold text-zinc-900 sm:mt-4 sm:text-[8px]">
          Hiring Manager
        </div>

        <div className="text-[6px] text-zinc-500 sm:text-[7px]">
          {company}
        </div>

        <div className="mt-5 text-[7.5px] font-semibold text-zinc-900 sm:mt-7 sm:text-[9px]">
          Dear Hiring Manager,
        </div>

        <div className="mt-3 space-y-2.5 text-[6px] leading-[1.6] text-zinc-600 sm:mt-4 sm:space-y-3 sm:text-[7px] sm:leading-[1.65]">
          <p>
            I am excited to apply for the {position} position at {company}. My
            experience combines thoughtful problem solving, strong communication
            and a practical approach to delivering work that creates measurable
            value.
          </p>

          <p>
            In my recent work, I have collaborated with cross-functional teams
            to turn complex requirements into clear, useful experiences. I would
            welcome the opportunity to bring the same level of care, ownership
            and curiosity to your team.
          </p>

          <p>
            Thank you for taking the time to review my application. I would be
            glad to discuss how my background and experience could contribute to{" "}
            {company}.
          </p>
        </div>

        <div className="mt-5 text-[6px] leading-3.5 text-zinc-500 sm:mt-7 sm:text-[7px] sm:leading-4">
          Sincerely,
        </div>

        <div
          className="mt-1.5 break-words text-[9px] font-semibold sm:mt-2 sm:text-[10px]"
          style={{ color: accent }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

// Main cover-letter landing page
function CoverLetter() {
  return (
    <div className="overflow-x-hidden bg-[#f7f6f2] text-zinc-950">
      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-[#dedbd4] bg-[#f3f5f8]">
        <div className="absolute -left-32 top-10 h-[300px] w-[300px] rounded-full bg-[#b89968]/10 blur-3xl sm:h-[460px] sm:w-[460px]" />

        <div className="absolute right-[-180px] top-[-140px] h-[380px] w-[380px] rounded-full bg-white/80 blur-3xl sm:h-[560px] sm:w-[560px]" />

        <div className="relative mx-auto max-w-[1450px] px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
          {/* Top bar */}
          <div className="mb-10 flex items-center justify-between gap-4 sm:mb-16 lg:mb-20">
            <div className="flex min-w-0 items-center gap-2.5 text-xs font-semibold tracking-[-0.01em] sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-lg">
                <FileText size={16} />
              </span>

              <span className="truncate">Cover Letter Builder</span>
            </div>

            <Link
              to="/cover-letter-templates"
              className="hidden shrink-0 items-center gap-2 text-xs font-semibold text-zinc-500 transition hover:text-zinc-950 sm:flex"
            >
              Explore templates
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* =================================================
                LAYERED COVER LETTER PREVIEWS
            ================================================== */}

            <div className="relative mx-auto h-[420px] w-full max-w-[650px] xs:h-[460px] sm:h-[560px] lg:h-[650px]">
              {/* Back card */}
              <div className="absolute left-[1%] top-[10%] h-[70%] w-[49%] rotate-[-18deg] overflow-hidden rounded-[7px] border border-zinc-200 bg-white shadow-[0_25px_60px_rgba(24,24,27,0.12)] sm:left-[7%] sm:top-[7%] sm:h-[74%] sm:w-[43%] sm:rotate-[-23deg]">
                <MiniCoverLetter
                  name="Sophie Walton"
                  position="Marketing Lead"
                  company="Northstar"
                  accent="#0f766e"
                  variant="modern"
                />
              </div>

              {/* Middle card */}
              <div className="absolute left-[20%] top-[3%] z-10 h-[75%] w-[53%] rotate-[-5deg] overflow-hidden rounded-[7px] border border-zinc-200 bg-white shadow-[0_25px_65px_rgba(24,24,27,0.15)] sm:left-[27%] sm:top-[1%] sm:h-[78%] sm:w-[47%] sm:rotate-[-7deg]">
                <MiniCoverLetter
                  name="Matthew Jones"
                  position="Financial Analyst"
                  company="Meridian Group"
                  accent="#a47d45"
                  variant="minimal"
                />
              </div>

              {/* Front card */}
              <div className="absolute left-[29%] top-[14%] z-20 h-[76%] w-[58%] rotate-[6deg] overflow-hidden rounded-[7px] border border-zinc-200 bg-white shadow-[0_35px_80px_rgba(24,24,27,0.20)] sm:left-[34%] sm:top-[15%] sm:h-[78%] sm:w-[51%] sm:rotate-[8deg]">
                <MiniCoverLetter
                  name="Alex Morgan"
                  position="Senior Product Designer"
                  company="Acme Technologies"
                  accent="#a47d45"
                  variant="classic"
                />
              </div>

              {/* Status card */}
              <div className="absolute bottom-[1%] left-[1%] z-30 max-w-[230px] rounded-2xl border border-white/80 bg-zinc-950 px-3.5 py-3 text-white shadow-[0_25px_60px_rgba(24,24,27,0.25)] sm:bottom-[4%] sm:left-[5%] sm:max-w-none sm:px-5 sm:py-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#a47d45]/15 text-[#d5b47c] sm:h-9 sm:w-9">
                    <FileCheck2 size={17} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[9px] font-bold sm:text-[10px]">
                      Application ready
                    </div>

                    <div className="mt-0.5 text-[7px] text-zinc-500 sm:text-[8px]">
                      Polished. Personal. Professional.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                HERO COPY
            ================================================== */}

            <div className="max-w-[650px]">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#d9d5cd] bg-white/85 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500 shadow-sm backdrop-blur sm:px-3.5 sm:py-2 sm:text-[10px] sm:tracking-[0.19em]">
                <Sparkles
                  size={12}
                  className="shrink-0 text-[#a47d45]"
                />

                <span>Built for better first impressions</span>
              </div>

              <h1 className="mt-6 text-[40px] font-semibold leading-[0.97] tracking-[-0.06em] text-zinc-950 sm:mt-7 sm:text-[58px] md:text-[66px] lg:text-[78px]">
                Your resume
                <br />
                starts the story.
                <br />
                <span className="text-[#a47d45]">
                  Your letter finishes it.
                </span>
              </h1>

              <p className="mt-6 max-w-[590px] text-[14px] leading-6 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
                Create a refined cover letter that feels personal, reads
                professionally and matches the quality of the resume you worked
                hard to build.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  to="/cover-letter-builder"
                  className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.18)] transition duration-300 hover:bg-[#a47d45] sm:w-auto sm:px-7"
                >
                  <span className="text-white">Create Cover Letter</span>

                  <ArrowRight
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/cover-letter-templates"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#d4d0c7] bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-[#a47d45] hover:bg-[#faf8f3] sm:w-auto sm:px-7"
                >
                  View templates
                </Link>
              </div>

              <div className="mt-7 flex flex-col gap-3 text-[11px] font-medium text-zinc-500 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
                {[
                  "Professional layouts",
                  "Live editing",
                  "PDF-ready output",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#a47d45]"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — TRUST / STATS
      ====================================================== */}

      <section className="border-b border-[#dedbd4] bg-white">
        <div className="mx-auto grid max-w-[1200px] divide-y divide-[#e8e5df] px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4">
          {[
            ["01", "Professional layouts", "Designed around clarity"],
            ["02", "Multiple styles", "Modern to minimal"],
            ["03", "Live editing", "See changes instantly"],
            ["04", "Ready to apply", "Download when finished"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="px-4 py-7 sm:px-8 sm:py-9 lg:py-12"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#a47d45]">
                {number}
              </div>

              <div className="mt-3 text-sm font-semibold text-zinc-950">
                {title}
              </div>

              <div className="mt-1 text-[11px] text-zinc-400">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          03 — STORY
      ====================================================== */}

      <section className="bg-[#f7f6f2] py-20 sm:py-28 lg:py-40">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-8 sm:gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
              Not another generic letter
            </div>

            <h2 className="mt-5 text-[36px] font-semibold leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A cover letter should
              <br />
              sound like <span className="text-zinc-400">you.</span>
            </h2>

            <p className="mt-6 max-w-[510px] text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base">
              Your resume shows what you have done. Your cover letter gives the
              hiring team context — why this role, why this company and why your
              experience matters.
            </p>

            <Link
              to="/cover-letter-builder"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 sm:mt-8"
            >
              Start writing

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-5 rounded-[30px] bg-[#e7dfd1]/50 blur-2xl" />

            <div className="relative grid grid-cols-2 gap-2.5 sm:gap-4">
              <div className="mt-8 sm:mt-12">
                <div className="rounded-2xl border border-[#dedbd4] bg-white p-2.5 shadow-[0_20px_50px_rgba(24,24,27,0.08)] sm:p-4">
                  <MiniCoverLetter
                    name="Sarah Lee"
                    position="Marketing Manager"
                    company="Northstar"
                    accent="#27272a"
                    variant="minimal"
                  />
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-[#dedbd4] bg-[#efede7] p-2.5 sm:p-4">
                  <MiniCoverLetter
                    name="James Wilson"
                    position="Software Engineer"
                    company="Vertex"
                    accent="#667085"
                    variant="modern"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — BENEFITS
      ====================================================== */}

      <section className="border-y border-[#dedbd4] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
                Built around your story
              </div>

              <h2 className="mt-5 text-[36px] font-semibold leading-[1.03] tracking-[-0.05em] sm:text-5xl">
                Everything you need.
                <br />
                Nothing you don't.
              </h2>

              <p className="mt-6 max-w-[390px] text-sm leading-7 text-zinc-500">
                A focused writing experience designed to help you communicate
                clearly and look professional.
              </p>
            </div>

            <div className="grid overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="border-b border-[#dedbd4] bg-white p-6 transition hover:bg-[#faf9f6] sm:p-9 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(odd)]:border-r"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
                        <Icon size={18} />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — TEMPLATE SHOWCASE
      ====================================================== */}

      <section className="overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-12">
          <div className="grid items-end gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div className="max-w-[520px]">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c6a36c]">
                Premium cover-letter templates
              </div>

              <h2 className="mt-5 text-[38px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Choose a layout
                <br />
                that feels
                <br />
                <span className="text-zinc-500">uniquely yours.</span>
              </h2>

              <p className="mt-6 max-w-[440px] text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-base">
                Clean typography, balanced spacing and professional hierarchy —
                designed to make your application feel considered from the first
                glance.
              </p>

              <Link
                to="/cover-letter-templates"
                className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#c6a36c] sm:mt-8"
              >
                <span className="text-black">Select a template</span>

                <ArrowRight
                  size={15}
                  className="text-black transition-transform group-hover:translate-x-1"
                />
              </Link>

              <div className="mt-14 sm:mt-20 lg:mt-28">
                <div className="flex items-center gap-1 text-[#c6a36c]">
                  <Star size={22} fill="currentColor" />
                  <Star size={22} fill="currentColor" />
                  <Star size={22} fill="currentColor" />
                  <Star size={22} fill="currentColor" />
                  <Star size={22} className="text-zinc-700" />
                </div>

                <div className="mt-4 text-sm font-semibold text-white">
                  Professional presentation
                </div>

                <div className="mt-1 text-[10px] text-zinc-500">
                  Designed for modern job applications
                </div>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-[#a47d45]/10 blur-3xl" />

              {/* Mobile/tablet: horizontal scroll.
                  Desktop: original 3-card layout. */}
              <div className="relative -mx-4 overflow-x-auto px-4 pb-8 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
                <div className="flex min-w-max gap-4 sm:gap-6 lg:min-w-0">
                  {[
                    {
                      name: "Executive",
                      accent: "#a47d45",
                      variant: "classic",
                      rotate: "-rotate-1",
                    },
                    {
                      name: "Minimal",
                      accent: "#27272a",
                      variant: "minimal",
                      rotate: "rotate-0",
                    },
                    {
                      name: "Modern",
                      accent: "#64748b",
                      variant: "modern",
                      rotate: "rotate-1",
                    },
                  ].map((template, index) => (
                    <Link
                      key={template.name}
                      to="/cover-letter-templates"
                      className={`group relative w-[285px] shrink-0 sm:w-[320px] lg:min-w-0 lg:flex-1 ${template.rotate}`}
                    >
                      <div className="relative overflow-hidden rounded-[4px] border border-white/10 bg-[#e9e6df] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_110px_rgba(0,0,0,0.5)] sm:p-5">
                        <div className="mb-4 flex items-center justify-between sm:mb-5">
                          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            0{index + 1}
                          </span>

                          <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
                            {template.name}
                          </span>
                        </div>

                        <MiniCoverLetter
                          name={
                            index === 0
                              ? "Matthew Jones"
                              : index === 1
                                ? "Tiffany Giroux"
                                : "Alex Morgan"
                          }
                          position={
                            index === 0
                              ? "Financial Analyst"
                              : index === 1
                                ? "Marketing Director"
                                : "Product Designer"
                          }
                          company={
                            index === 0
                              ? "Meridian Group"
                              : index === 1
                                ? "Northstar"
                                : "Acme Technologies"
                          }
                          accent={template.accent}
                          variant={template.variant}
                        />
                      </div>

                      <div className="mt-5 flex items-center justify-between px-1">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">
                            {template.name}
                          </div>

                          <div className="mt-1 text-[10px] text-zinc-500">
                            Professional cover letter
                          </div>
                        </div>

                        <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition group-hover:border-white group-hover:bg-white group-hover:text-zinc-950">
                          <ChevronRight size={15} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — EDITOR EXPERIENCE
      ====================================================== */}

      <section className="bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
                A better writing experience
              </div>

              <h2 className="mt-5 text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Write on the left.
                <br />
                See it on the right.
              </h2>

              <p className="mt-6 max-w-[450px] text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-base">
                No guessing how the final document will look. Your content and
                professional document preview stay together while you build.
              </p>

              <Link
                to="/cover-letter-builder"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c6a36c]"
              >
                <span className="text-black">Open builder</span>

                <ArrowRight
                  size={15}
                  className="text-black transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative min-w-0">
              <div className="absolute -inset-8 rounded-[40px] bg-[#c6a36c]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#18181b] p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.4)] sm:rounded-[24px] sm:p-3">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 px-2 sm:px-3">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  <div className="ml-auto rounded-md border border-white/10 px-2 py-1 text-[7px] text-zinc-500 sm:px-3 sm:text-[8px]">
                    Cover Letter Builder
                  </div>
                </div>

                <div className="grid gap-3 p-2.5 sm:min-h-[450px] sm:grid-cols-[0.7fr_1fr] sm:p-3">
                  <div className="rounded-xl border border-white/10 bg-[#111113] p-3 sm:p-4">
                    <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                      Your details
                    </div>

                    {[
                      "Full name",
                      "Job position",
                      "Company",
                      "Opening",
                      "Your experience",
                      "Closing",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="mt-3 sm:mt-4"
                      >
                        <div className="mb-1.5 text-[7px] text-zinc-600">
                          {item}
                        </div>

                        <div
                          className={`rounded-md border border-white/5 bg-white/[0.025] px-2.5 py-2 text-[7px] leading-4 text-zinc-500 sm:px-3 sm:text-[8px] ${
                            index > 2 ? "min-h-12 sm:min-h-14" : "min-h-7"
                          }`}
                        >
                          {
                            [
                              "Alex Morgan",
                              "Senior Product Designer",
                              "Acme Technologies",
                              "I am excited to apply for this opportunity and bring thoughtful product thinking to your team.",
                              "My experience combines research, product strategy and hands-on design across digital products.",
                              "Thank you for your consideration. I would welcome the opportunity to discuss my background.",
                            ][index]
                          }
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex min-h-[360px] items-center justify-center rounded-xl bg-[#e7e4dd] p-4 sm:min-h-0 sm:p-5">
                    <div className="w-full max-w-[310px]">
                      <MiniCoverLetter
                        name="Alex Morgan"
                        position="Product Designer"
                        company="Acme Technologies"
                        accent="#987542"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — PROCESS
      ====================================================== */}

      <section className="border-b border-[#dedbd4] bg-white py-20 sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="max-w-[680px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
              How it works
            </div>

            <h2 className="mt-5 text-[38px] font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              From blank page
              <br />
              to <span className="text-zinc-400">application ready.</span>
            </h2>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group border-b border-[#dedbd4] bg-white p-6 transition hover:bg-[#faf9f6] sm:p-9 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } lg:border-b-0 lg:border-r lg:last:border-r-0`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#a47d45]">
                    {step.number}
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-zinc-300 transition group-hover:translate-x-1 group-hover:text-zinc-950"
                  />
                </div>

                <h3 className="mt-10 text-base font-semibold tracking-[-0.02em] sm:mt-14">
                  {step.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-zinc-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — FEATURES
      ====================================================== */}

      <section className="bg-[#f7f6f2] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#dedbd4] bg-white p-6 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
                <LayoutTemplate size={18} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em] sm:mt-8">
                Designed around professional documents
              </h3>

              <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-500">
                Every layout uses intentional hierarchy, spacing and typography
                so your content feels polished without looking over-designed.
              </p>

              <div className="mt-7 space-y-3 sm:mt-8">
                {[
                  "Clear information hierarchy",
                  "Balanced document spacing",
                  "Professional typography",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-xs font-medium text-zinc-700"
                  >
                    <Check
                      size={14}
                      className="shrink-0 text-[#987542]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6 text-white sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6a36c]">
                <Wand2 size={18} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em] sm:mt-8">
                Personal without being complicated
              </h3>

              <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-400">
                Start with structure, then make the language yours. Create
                different versions for different opportunities without
                rebuilding everything from scratch.
              </p>

              <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                {[
                  "Multiple versions",
                  "Easy editing",
                  "Professional output",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-semibold text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — QUOTE / SOCIAL PROOF
      ====================================================== */}

      <section className="border-y border-[#dedbd4] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-4 text-center sm:px-8">
          <Quote
            size={28}
            className="mx-auto text-[#b08d57]"
          />

          <p className="mx-auto mt-6 max-w-[820px] text-[28px] font-medium leading-[1.2] tracking-[-0.04em] text-zinc-900 sm:mt-7 sm:text-4xl lg:text-5xl">
            “The best cover letter does not repeat your resume. It gives the
            recruiter a reason to keep reading.”
          </p>

          <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Your story deserves context
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-36">
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-[#a47d45]/10 blur-3xl sm:h-[500px] sm:w-[700px]" />

        <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
            <Zap
              size={19}
              className="text-[#c6a36c]"
            />
          </div>

          <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c6a36c]">
            Make the next application count
          </div>

          <h2 className="mt-5 text-[40px] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Resume and cover letter,
            <br />
            <span className="text-zinc-500">built together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-base">
            Build a professional cover letter, pair it with your resume and
            present a complete application.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Link
              to="/cover-letter-builder"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-[#c6a36c] sm:w-auto"
            >
              <span className="text-black">Get Started</span>

              <ArrowRight
                size={16}
                className="text-black transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/register"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Start building
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-zinc-500 sm:gap-x-6">
            <Link
              to="/templates"
              className="transition hover:text-white"
            >
              Explore templates
            </Link>

            <span>•</span>

            <Link
              to="/cover-letter-templates"
              className="transition hover:text-white"
            >
              Cover letter templates
            </Link>

            <span>•</span>

            <Link
              to="/cover-letter-builder"
              className="transition hover:text-white"
            >
              Build your letter
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — PREMIUM COVER LETTER TEMPLATE SHOWCASE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#17130d] py-20 text-white sm:py-28 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-[-120px] h-[350px] w-[350px] rounded-full bg-[#c6a36c]/20 blur-[100px] sm:h-[500px] sm:w-[500px]" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#8f6d3b]/30 blur-[100px] sm:h-[550px] sm:w-[550px]" />

        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-20 max-w-[500px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur sm:text-[10px] sm:tracking-[0.2em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6a36c]" />
                Premium Templates
              </div>

              <h2 className="text-[40px] font-bold leading-[1.03] tracking-[-0.055em] sm:text-[54px] lg:text-[62px]">
                Free professionally
                <br />
                designed
                <br />
                <span className="text-white/90">cover letters</span>
              </h2>

              <p className="mt-6 max-w-[460px] text-[14px] leading-7 text-white/75 sm:mt-7 sm:text-[17px] sm:leading-8">
                Create a polished cover letter with professionally designed
                layouts that help your application look clear, modern and ready
                to impress.
              </p>

              <Link
                to="/cover-letter-templates"
                className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#c6a36c] px-6 text-sm font-bold text-zinc-950 shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6b77f] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:mt-8 sm:w-auto"
              >
                Select template

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Rating */}
              <div className="mt-16 sm:mt-20 lg:mt-28">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((item) => (
                    <Star
                      key={item}
                      size={22}
                      fill="currentColor"
                      className="text-[#c6a36c] sm:h-[25px] sm:w-[25px]"
                    />
                  ))}

                  <Star
                    size={22}
                    className="text-white/50 sm:h-[25px] sm:w-[25px]"
                    fill="currentColor"
                  />
                </div>

                <div className="mt-4 text-lg font-semibold">
                  4.8 out of 5
                </div>

                <div className="mt-1 text-[10px] text-white/60 sm:text-[11px]">
                  Loved by professionals building better applications
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — COVER LETTER CARDS
            ================================================== */}

            <div className="relative min-w-0">
              {/* Desktop decorative arrow */}
              <div className="absolute -left-8 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-1 text-white/50 lg:flex">
                <ChevronRight
                  size={22}
                  className="rotate-180"
                />

                <ChevronRight
                  size={22}
                  className="-ml-3 rotate-180"
                />
              </div>

              {/* Mobile/tablet horizontal scroll.
                  Desktop stays in the same row. */}
              <div className="-mx-4 overflow-x-auto px-4 pb-8 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
                <div className="flex min-w-max gap-5 sm:gap-7 lg:min-w-0">
                  {/* =================================================
                      CARD 1
                  ================================================== */}

                  <div className="group relative w-[280px] shrink-0 sm:w-[340px] lg:min-w-0 lg:flex-1">
                    <div className="relative overflow-hidden rounded-[4px] border border-black/10 bg-[#e9e7e1] p-4 shadow-[0_35px_80px_rgba(0,0,0,0.30)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)] sm:p-5">
                      <div className="mb-4 flex items-center justify-between sm:mb-5">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          01
                        </span>

                        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
                          Executive
                        </span>
                      </div>

                      <MiniCoverLetter
                        name="Christopher Carter"
                        position="Senior Business Analyst"
                        company="Acme Corporation"
                        accent="#9b7948"
                        variant="classic"
                      />
                    </div>

                    <div className="mt-5 px-1">
                      <div className="text-sm font-semibold">
                        Executive
                      </div>

                      <div className="mt-1 text-[10px] text-white/50">
                        Professional cover letter
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CARD 2
                  ================================================== */}

                  <div className="group relative w-[280px] shrink-0 sm:w-[340px] lg:min-w-0 lg:flex-1">
                    <div className="relative overflow-hidden rounded-[4px] border border-black/10 bg-[#e9e7e1] p-4 shadow-[0_35px_80px_rgba(0,0,0,0.30)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)] sm:p-5">
                      <div className="mb-4 flex items-center justify-between sm:mb-5">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          02
                        </span>

                        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
                          Minimal
                        </span>
                      </div>

                      <MiniCoverLetter
                        name="Tiffany Giroux"
                        position="Marketing Director"
                        company="Northstar"
                        accent="#27272a"
                        variant="minimal"
                      />
                    </div>

                    <div className="mt-5 px-1">
                      <div className="text-sm font-semibold">
                        Minimal
                      </div>

                      <div className="mt-1 text-[10px] text-white/50">
                        Clean & elegant
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CARD 3
                  ================================================== */}

                  <div className="group relative w-[280px] shrink-0 sm:w-[340px] lg:min-w-0 lg:flex-1">
                    <div className="relative overflow-hidden rounded-[4px] border border-black/10 bg-[#e9e7e1] p-4 shadow-[0_35px_80px_rgba(0,0,0,0.30)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)] sm:p-5">
                      <div className="mb-4 flex items-center justify-between sm:mb-5">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          03
                        </span>

                        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
                          Modern
                        </span>
                      </div>

                      <MiniCoverLetter
                        name="Alex Morgan"
                        position="Product Designer"
                        company="Acme Technologies"
                        accent="#64748b"
                        variant="modern"
                      />
                    </div>

                    <div className="mt-5 px-1">
                      <div className="text-sm font-semibold">
                        Modern
                      </div>

                      <div className="mt-1 text-[10px] text-white/50">
                        Contemporary layout
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop-only bottom fade */}
              <div className="pointer-events-none absolute -right-20 bottom-0 top-0 hidden w-32 bg-gradient-to-l from-[#17130d] to-transparent lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoverLetter;