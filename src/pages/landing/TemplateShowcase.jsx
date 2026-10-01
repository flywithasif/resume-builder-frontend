import {
  ArrowRight,
  Check,
  ChevronRight,
  FileCheck2,
  FileText,
  Layers3,
  LayoutTemplate,
  MousePointer2,
  Quote,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import {
  ResumeRenderer,
  TEMPLATE_META,
  TEMPLATE_SAMPLE_RESUME,
} from "../templates/resumeTemplates";

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    number: "01",
    title: "Professional structure",
    text: "Every layout is carefully structured to keep your experience clear, readable and professionally presented.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Premium typography",
    text: "Balanced typography, spacing and hierarchy designed for modern professional applications.",
    icon: PenLineFallback,
  },
  {
    number: "03",
    title: "Easy to customize",
    text: "Choose a design first, then personalize your resume inside the builder without rebuilding the layout.",
    icon: MousePointer2,
  },
  {
    number: "04",
    title: "Built for different careers",
    text: "From executive and corporate to technology, creative, academic and ATS-focused layouts.",
    icon: Layers3,
  },
];

/* =========================================================
   PROCESS
========================================================= */

const steps = [
  {
    number: "01",
    title: "Choose your style",
    text: "Start with a resume design that matches your role, industry and personal style.",
  },
  {
    number: "02",
    title: "Add your experience",
    text: "Enter your professional information, education, skills, projects and achievements.",
  },
  {
    number: "03",
    title: "Make it yours",
    text: "Edit your content while keeping the professional structure of your selected template.",
  },
  {
    number: "04",
    title: "Download & apply",
    text: "Finish your resume and use it confidently for your next opportunity.",
  },
];

/* =========================================================
   SMALL ICON FALLBACK
========================================================= */

function PenLineFallback(props) {
  return <Wand2 {...props} />;
}

/* =========================================================
   RESUME PREVIEW
========================================================= */

function ResumePreview({
  templateId,
  scale = 0.42,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: `${1060 * scale}px`,
      }}
    >
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: "760px",
          maxWidth: "760px",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <ResumeRenderer
          resume={TEMPLATE_SAMPLE_RESUME}
          template={templateId}
        />
      </div>
    </div>
  );
}

/* =========================================================
   TEMPLATE CARD
========================================================= */

function TemplateCard({ template, index, onUse }) {
  return (
    <div className="group relative min-w-0">
      <div className="relative overflow-hidden rounded-[4px] border border-[#dedbd4] bg-[#e9e7e1] p-3 shadow-[0_25px_70px_rgba(24,24,27,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_35px_90px_rgba(24,24,27,0.16)] sm:p-4 lg:p-5">
        {/* Card top */}
        <div className="mb-4 flex min-w-0 items-center justify-between gap-3 sm:mb-5">
          <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="max-w-[60%] truncate rounded-full border border-black/5 bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500 backdrop-blur">
            {template.category}
          </span>
        </div>

        {/* Resume */}
        <Link
          to={`/templates/${template.id}`}
          className="block w-full overflow-hidden rounded-[3px] bg-white"
        >
          <ResumePreview
            templateId={template.id}
            scale={0.39}
            className="bg-[#e8e5de]"
          />
        </Link>

        {/* Bottom actions */}
        <div className="mt-4 flex min-w-0 items-end justify-between gap-3 px-1 sm:mt-5 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-zinc-950">
              {template.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-zinc-500">
              {template.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onUse(template)}
            className="group/button flex h-9 shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-3 text-[9px] font-bold text-white transition-all duration-300 hover:bg-[#a47d45] sm:px-3.5"
          >
            Use

            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover/button:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FEATURED TEMPLATE
========================================================= */

function FeaturedTemplate({ template, index, onUse }) {
  return (
    <div className="group relative w-[280px] min-w-[280px] sm:w-[330px] sm:min-w-[330px] lg:w-[390px] lg:min-w-[390px]">
      <div className="relative overflow-hidden rounded-[4px] border border-white/10 bg-[#e9e7e1] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_110px_rgba(0,0,0,0.5)] sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            0{index + 1}
          </span>

          <span className="max-w-[55%] truncate rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
            {template.category}
          </span>
        </div>

        <Link
          to={`/templates/${template.id}`}
          className="block overflow-hidden rounded-[3px] bg-white"
        >
          <ResumePreview
            templateId={template.id}
            scale={0.42}
            className="bg-[#e9e7e1]"
          />
        </Link>
      </div>

      <div className="mt-4 flex min-w-0 items-center justify-between gap-3 px-1 sm:mt-5">
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-white">
            {template.name}
          </div>

          <div className="mt-1 max-w-[220px] truncate text-[10px] text-zinc-500">
            {template.description}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to={`/templates/${template.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all hover:border-white/30 hover:bg-white hover:text-zinc-950"
            aria-label={`Preview ${template.name}`}
          >
            <ChevronRight size={15} />
          </Link>

          <button
            type="button"
            onClick={() => onUse(template)}
            className="rounded-full bg-white px-3.5 py-2 text-[9px] font-bold text-zinc-950 transition hover:bg-[#c6a36c] sm:px-4"
          >
            Use
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN LANDING PAGE
========================================================= */

function Templates() {
  const navigate = useNavigate();

  const featuredTemplates = TEMPLATE_META.slice(0, 5);

  const useTemplate = (template) => {
    localStorage.setItem(
      "resumely_selected_template",
      template.id,
    );

    localStorage.setItem(
      "resumely_template",
      template.id,
    );

    localStorage.setItem(
      "resumely_template_name",
      template.name,
    );

    const destination = "/builder?new=1";

    const isAuthenticated = Boolean(
      localStorage.getItem("resumely_token"),
    );

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

    navigate(destination);
  };

  return (
    <div className="min-w-0 overflow-x-hidden bg-[#f7f6f2] text-zinc-950">
      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-[#dedbd4] bg-[#f3f5f8]">
        <div className="pointer-events-none absolute -left-32 top-10 h-[300px] w-[300px] rounded-full bg-[#b89968]/10 blur-3xl sm:h-[460px] sm:w-[460px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[-140px] hidden h-[560px] w-[560px] rounded-full bg-white/80 blur-3xl sm:block" />

        <div className="relative mx-auto max-w-[1450px] px-4 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Top bar */}
          <div className="mb-12 flex items-center justify-between sm:mb-20">
            <div className="flex min-w-0 items-center gap-3 text-xs font-semibold tracking-[-0.01em]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-lg">
                <LayoutTemplate size={16} />
              </span>

              <span className="truncate">
                Resume Templates
              </span>
            </div>

            <Link
              to="/templates/all"
              className="hidden shrink-0 items-center gap-2 text-xs font-semibold text-zinc-500 transition hover:text-zinc-950 sm:flex"
            >
              Explore all templates

              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hero grid */}
          <div className="grid min-w-0 items-center gap-12 md:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* =================================================
                LAYERED RESUME PREVIEWS
            ================================================== */}

            <div className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[540px] sm:max-w-[600px] lg:h-[650px] lg:max-w-[650px]">
              {/* Back card */}
              <div className="absolute left-[2%] top-[8%] h-[70%] w-[43%] rotate-[-10deg] overflow-hidden rounded-[6px] border border-zinc-200 bg-white shadow-[0_25px_60px_rgba(24,24,27,0.12)] sm:left-[5%] sm:top-[7%] sm:h-[74%] sm:rotate-[-14deg]">
                <ResumePreview
                  templateId={
                    featuredTemplates[1]?.id || "modern"
                  }
                  scale={0.31}
                  className="sm:hidden"
                />

                <div className="hidden sm:block">
                  <ResumePreview
                    templateId={
                      featuredTemplates[1]?.id || "modern"
                    }
                    scale={0.42}
                  />
                </div>
              </div>

              {/* Middle card */}
              <div className="absolute left-[20%] top-[2%] z-10 h-[74%] w-[48%] rotate-[-4deg] overflow-hidden rounded-[6px] border border-zinc-200 bg-white shadow-[0_30px_70px_rgba(24,24,27,0.15)] sm:left-[25%] sm:top-[1%] sm:h-[78%] sm:rotate-[-5deg]">
                <ResumePreview
                  templateId={
                    featuredTemplates[2]?.id || "minimal"
                  }
                  scale={0.33}
                  className="sm:hidden"
                />

                <div className="hidden sm:block">
                  <ResumePreview
                    templateId={
                      featuredTemplates[2]?.id || "minimal"
                    }
                    scale={0.43}
                  />
                </div>
              </div>

              {/* Main card */}
              <div className="absolute left-[29%] top-[12%] z-20 h-[75%] w-[53%] rotate-[5deg] overflow-hidden rounded-[6px] border border-zinc-200 bg-white shadow-[0_35px_80px_rgba(24,24,27,0.20)] sm:left-[34%] sm:top-[14%] sm:h-[78%] sm:rotate-[7deg]">
                <ResumePreview
                  templateId={
                    featuredTemplates[0]?.id || "executive"
                  }
                  scale={0.35}
                  className="sm:hidden"
                />

                <div className="hidden sm:block">
                  <ResumePreview
                    templateId={
                      featuredTemplates[0]?.id || "executive"
                    }
                    scale={0.45}
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-[2%] left-0 z-30 rounded-2xl border border-white/80 bg-zinc-950 px-3 py-3 text-white shadow-[0_20px_50px_rgba(24,24,27,0.25)] sm:bottom-[4%] sm:left-[5%] sm:px-5 sm:py-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#a47d45]/15 text-[#d5b47c] sm:h-9 sm:w-9">
                    <FileCheck2 size={16} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[9px] font-bold sm:text-[10px]">
                      Resume ready
                    </div>

                    <div className="mt-0.5 whitespace-nowrap text-[7px] text-zinc-500 sm:text-[8px]">
                      Polished. Personal. Professional.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                HERO COPY
            ================================================== */}

            <div className="min-w-0 max-w-[650px]">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#d9d5cd] bg-white/85 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500 shadow-sm backdrop-blur sm:px-3.5 sm:text-[10px] sm:tracking-[0.19em]">
                <Sparkles
                  size={12}
                  className="shrink-0 text-[#a47d45]"
                />

                <span className="truncate">
                  Designed for better first impressions
                </span>
              </div>

              <h1 className="mt-6 text-[42px] font-semibold leading-[0.96] tracking-[-0.06em] text-zinc-950 sm:mt-7 sm:text-[62px] md:text-[70px] lg:text-[78px]">
                Your experience
                <br />
                deserves a
                <br />
                <span className="text-[#a47d45]">
                  better resume.
                </span>
              </h1>

              <p className="mt-7 max-w-[590px] text-[14px] leading-6 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
                Choose a professionally structured resume template,
                customize your content and create an application that
                looks as strong as the experience behind it.
              </p>

              <div className="mt-8 flex flex-col gap-3 xs:flex-row sm:mt-9 sm:flex-wrap">
                <a
                  href="#templates"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.18)] transition duration-300 hover:bg-[#a47d45] sm:px-7"
                >
                  <span className="text-white">
                    Explore templates
                  </span>

                  <ArrowRight
                    size={16}
                    className="shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/builder?new=1"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d4d0c7] bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-[#a47d45] hover:bg-[#faf8f3] sm:px-7"
                >
                  Build my resume
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-medium text-zinc-500 sm:mt-8 sm:gap-x-7 sm:text-[11px]">
                {[
                  "Professional layouts",
                  "Live resume editing",
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
        <div className="mx-auto grid max-w-[1200px] divide-y divide-[#e8e5df] px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-8">
          {[
            [
              "01",
              `${TEMPLATE_META.length} designs`,
              "Built for different careers",
            ],
            [
              "02",
              "Professional layouts",
              "Clear visual hierarchy",
            ],
            [
              "03",
              "Live editing",
              "See your resume as you build",
            ],
            [
              "04",
              "Ready to apply",
              "Export when you're finished",
            ],
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
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-8 md:gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
              More than a pretty document
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A great resume
              <br />
              should make
              <br />
              <span className="text-zinc-400">
                your story clearer.
              </span>
            </h2>

            <p className="mt-7 max-w-[510px] text-sm leading-7 text-zinc-500 sm:text-base">
              Your experience already has value. The right layout helps
              hiring teams understand your background, skills and
              achievements without unnecessary visual noise.
            </p>

            <a
              href="#templates"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950"
            >
              Find your template

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-5 rounded-[30px] bg-[#e7dfd1]/50 blur-2xl" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="mt-8 sm:mt-12">
                <div className="overflow-hidden rounded-2xl border border-[#dedbd4] bg-white p-2.5 shadow-[0_20px_50px_rgba(24,24,27,0.08)] sm:p-4">
                  <ResumePreview
                    templateId={
                      featuredTemplates[2]?.id || "minimal"
                    }
                    scale={0.32}
                    className="sm:hidden"
                  />

                  <div className="hidden sm:block">
                    <ResumePreview
                      templateId={
                        featuredTemplates[2]?.id || "minimal"
                      }
                      scale={0.36}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#efede7] p-2.5 sm:p-4">
                  <ResumePreview
                    templateId={
                      featuredTemplates[3]?.id || "corporate"
                    }
                    scale={0.32}
                    className="sm:hidden"
                  />

                  <div className="hidden sm:block">
                    <ResumePreview
                      templateId={
                        featuredTemplates[3]?.id || "corporate"
                      }
                      scale={0.36}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — PREMIUM FEATURED TEMPLATES
      ====================================================== */}

      <section className="overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-12">
          <div className="grid min-w-0 items-end gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div className="min-w-0 max-w-[520px]">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c6a36c]">
                Premium resume templates
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Choose a layout
                <br />
                that feels
                <br />
                <span className="text-zinc-500">
                  like you.
                </span>
              </h2>

              <p className="mt-7 max-w-[440px] text-sm leading-7 text-zinc-400 sm:text-base">
                From executive and corporate to modern, minimal and
                creative — choose a structure that gives your
                experience the right visual presence.
              </p>

              <a
                href="#templates"
                className="group mt-8 inline-flex min-h-11 items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#c6a36c]"
              >
                <span className="text-black">
                  Browse all templates
                </span>

                <ArrowRight
                  size={15}
                  className="text-black transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="mt-16 sm:mt-28">
                <div className="flex items-center gap-1 text-[#c6a36c]">
                  {[1, 2, 3, 4].map((item) => (
                    <Star
                      key={item}
                      size={21}
                      fill="currentColor"
                    />
                  ))}

                  <Star
                    size={21}
                    className="text-zinc-700"
                  />
                </div>

                <div className="mt-4 text-sm font-semibold text-white">
                  Professional presentation
                </div>

                <div className="mt-1 text-[10px] text-zinc-500">
                  Designed for modern applications
                </div>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-[#a47d45]/10 blur-3xl" />

              <div className="relative flex max-w-full gap-5 overflow-x-auto overflow-y-visible pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6">
                {featuredTemplates.slice(0, 5).map(
                  (template, index) => (
                    <FeaturedTemplate
                      key={template.id}
                      template={template}
                      index={index}
                      onUse={useTemplate}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — BENEFITS
      ====================================================== */}

      <section className="border-y border-[#dedbd4] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
                Built around your career
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                Everything you need.
                <br />
                Nothing you don't.
              </h2>

              <p className="mt-6 max-w-[390px] text-sm leading-7 text-zinc-500">
                A focused resume experience designed to help your
                information look organized, professional and easy to
                understand.
              </p>
            </div>

            <div className="grid min-w-0 gap-px overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="min-w-0 bg-white p-6 transition hover:bg-[#faf9f6] sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
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
          06 — FULL TEMPLATE LIBRARY
      ====================================================== */}

      <section
        id="templates"
        className="bg-[#f7f6f2] py-20 sm:py-28 lg:py-40"
      >
        <div className="mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a47d45]">
              The complete collection
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Find the resume
              <br />
              <span className="text-zinc-400">
                that fits your career.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-zinc-500 sm:text-base">
              Explore every available design and choose the structure
              that best represents your experience.
            </p>
          </div>

          {/* Category pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12">
            {[
              "All templates",
              "Professional",
              "Minimal",
              "Business",
              "Creative",
              "Technology",
              "Premium",
              "ATS",
            ].map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-3.5 py-2 text-[9px] font-semibold sm:px-4 ${
                  index === 0
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-[#d8d4cc] bg-white text-zinc-500"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid min-w-0 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {TEMPLATE_META.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
                onUse={useTemplate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — EDITOR EXPERIENCE
      ====================================================== */}

      <section className="overflow-hidden bg-zinc-950 py-20 text-white sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
                A better resume experience
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Build on the left.
                <br />
                See it on the right.
              </h2>

              <p className="mt-7 max-w-[450px] text-sm leading-7 text-zinc-400 sm:text-base">
                Your content and document preview stay connected while
                you build. No guessing how the final resume will look.
              </p>

              <Link
                to="/builder?new=1"
                className="group mt-9 inline-flex min-h-11 items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c6a36c]"
              >
                <span className="text-black">
                  Open resume builder
                </span>

                <ArrowRight
                  size={15}
                  className="text-black transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Fake editor visual */}
            <div className="relative min-w-0">
              <div className="absolute -inset-8 rounded-[40px] bg-[#c6a36c]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#18181b] p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.4)] sm:rounded-[24px] sm:p-3">
                <div className="flex h-9 items-center gap-2 border-b border-white/10 px-2 sm:h-10 sm:px-3">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  <div className="ml-auto rounded-md border border-white/10 px-2.5 py-1 text-[7px] text-zinc-500 sm:px-3 sm:text-[8px]">
                    Resume Builder
                  </div>
                </div>

                <div className="grid min-h-[430px] min-w-0 gap-3 p-2 sm:min-h-[450px] sm:p-3 md:grid-cols-[0.7fr_1fr]">
                  {/* Editor side */}
                  <div className="min-w-0 rounded-xl border border-white/10 bg-[#111113] p-3 sm:p-4">
                    <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                      Your details
                    </div>

                    {[
                      "Full name",
                      "Professional title",
                      "Summary",
                      "Experience",
                      "Education",
                      "Skills",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="mt-3 sm:mt-4"
                      >
                        <div className="mb-1.5 text-[7px] text-zinc-600">
                          {item}
                        </div>

                        <div
                          className={`overflow-hidden rounded-md border border-white/5 bg-white/[0.025] px-2.5 py-2 text-[7px] leading-4 text-zinc-500 sm:px-3 sm:text-[8px] ${
                            index > 1
                              ? "min-h-12 sm:min-h-14"
                              : "min-h-7"
                          }`}
                        >
                          {
                            [
                              "Alex Morgan",
                              "Senior Product Manager",
                              "Product leader with experience building digital products and high-performing teams.",
                              "Senior Product Manager — Acme Technologies",
                              "BBA — Business Administration",
                              "Product Strategy · Leadership · Analytics",
                            ][index]
                          }
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Preview side */}
                  <div className="flex min-w-0 items-center justify-center overflow-hidden rounded-xl bg-[#e7e4dd] p-3 sm:p-5">
                    <div className="w-full max-w-[310px] overflow-hidden rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
                      <ResumePreview
                        templateId={
                          featuredTemplates[0]?.id ||
                          "executive"
                        }
                        scale={0.34}
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
          08 — PROCESS
      ====================================================== */}

      <section className="border-b border-[#dedbd4] bg-white py-20 sm:py-28 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="max-w-[680px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
              How it works
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              From blank page
              <br />
              to{" "}
              <span className="text-zinc-400">
                application ready.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid min-w-0 gap-px overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group min-w-0 bg-white p-6 transition hover:bg-[#faf9f6] sm:p-9"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#a47d45]">
                    {step.number}
                  </span>

                  <ArrowRight
                    size={15}
                    className="shrink-0 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-zinc-950"
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
          09 — QUOTE
      ====================================================== */}

      <section className="border-y border-[#dedbd4] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-4 text-center sm:px-8">
          <Quote
            size={28}
            className="mx-auto text-[#b08d57]"
          />

          <p className="mx-auto mt-7 max-w-[820px] text-3xl font-medium leading-[1.2] tracking-[-0.04em] text-zinc-900 sm:text-4xl lg:text-5xl">
            “Your resume should make it easier to understand
            the value you bring.”
          </p>

          <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Your experience deserves clarity
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — FEATURES
      ====================================================== */}

      <section className="bg-[#f7f6f2] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="grid min-w-0 gap-5 md:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-[#dedbd4] bg-white p-6 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
                <LayoutTemplate size={18} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                Designed around professional documents
              </h3>

              <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-500">
                Every layout uses intentional hierarchy, spacing and
                typography so your resume feels polished without
                looking over-designed.
              </p>

              <div className="mt-8 space-y-3">
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

            <div className="min-w-0 rounded-2xl bg-zinc-950 p-6 text-white sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6a36c]">
                <Wand2 size={18} />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                Personal without being complicated
              </h3>

              <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-400">
                Start with a professional structure, then make the
                content yours. Your template handles the visual
                system while you focus on your story.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Multiple styles",
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
          11 — FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-[#a47d45]/10 blur-3xl sm:h-[500px] sm:w-[700px]" />

        <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
            <Zap
              size={19}
              className="text-[#c6a36c]"
            />
          </div>

          <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c6a36c]">
            Make your next application count
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Your experience,
            <br />
            <span className="text-zinc-500">
              beautifully presented.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[560px] text-sm leading-7 text-zinc-400 sm:text-base">
            Choose a template, build your resume and create a
            professional application that represents your work with
            confidence.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/builder?new=1"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-[#c6a36c]"
            >
              <span className="text-black">
                Start building
              </span>

              <ArrowRight
                size={16}
                className="text-black transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#templates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore templates
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-3 text-[10px] text-zinc-500 sm:gap-x-6">
            <span>{TEMPLATE_META.length} resume designs</span>

            <span className="hidden sm:inline">•</span>

            <span>Professional layouts</span>

            <span className="hidden sm:inline">•</span>

            <span>Live editing</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Templates;