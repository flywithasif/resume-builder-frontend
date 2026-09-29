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
function MiniCoverLetter({ accent = "#a47d45", name = "Alex Morgan", position = "Senior Product Designer", company = "Acme Technologies", variant = "classic", }) {
  const isModern = variant === "modern";
  const isMinimal = variant === "minimal";
  return (<div className={`relative w-full overflow-hidden bg-white ${isMinimal ? "shadow-[0_28px_70px_rgba(24,24,27,0.10)]" : "shadow-[0_30px_80px_rgba(24,24,27,0.14)]"}`}>
    {isModern && (<div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: accent }}/>)}

    {variant === "classic" && (<div className="h-1.5 w-full" style={{ backgroundColor: accent }}/>)}

    <div className="p-6 sm:p-8">
    <div className="flex items-start justify-between gap-5">
      <div>
      <div className="text-[18px] font-bold tracking-[-0.04em] text-zinc-950">
        {name}
      </div>
      <div className="mt-1 text-[7px] font-medium uppercase tracking-[0.18em]" style={{ color: accent }}>
        {position}
      </div>
      </div>

      <div className="text-right text-[6.5px] leading-4 text-zinc-500">
      <div>hello@email.com</div>
      <div>+91 98765 43210</div>
      <div>New Delhi, India</div>
      </div>
    </div>

    <div className="my-6 h-px bg-zinc-200"/>

    <div className="text-[7px] leading-4 text-zinc-500">
      September 29, 2026
    </div>

    <div className="mt-4 text-[8px] font-semibold text-zinc-900">
      Hiring Manager
    </div>
    <div className="text-[7px] text-zinc-500">{company}</div>

    <div className="mt-7 text-[9px] font-semibold text-zinc-900">
      Dear Hiring Manager,
    </div>

    <div className="mt-4 space-y-3 text-[7px] leading-[1.65] text-zinc-600">
      <p>
      I am excited to apply for the {position} position at {company}.
      My experience combines thoughtful problem solving, strong
      communication and a practical approach to delivering work that
      creates measurable value.
      </p>

      <p>
      In my recent work, I have collaborated with cross-functional teams
      to turn complex requirements into clear, useful experiences. I
      would welcome the opportunity to bring the same level of care,
      ownership and curiosity to your team.
      </p>

      <p>
      Thank you for taking the time to review my application. I would be
      glad to discuss how my background and experience could contribute
      to {company}.
      </p>
    </div>

    <div className="mt-7 text-[7px] leading-4 text-zinc-500">
      Sincerely,
    </div>

    <div className="mt-2 text-[10px] font-semibold" style={{ color: accent }}>
      {name}
    </div>
    </div>
  </div>);
}
// Main cover-letter landing page
function CoverLetter() {
  return (<div className="overflow-hidden bg-[#f7f6f2] text-zinc-950">
    {/* =====================================================
      01 — HERO
    ====================================================== */}
    <section className="relative overflow-hidden border-b border-[#dedbd4] bg-[#f3f5f8]">
    <div className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-[#b89968]/10 blur-3xl"/>
    <div className="absolute right-[-180px] top-[-140px] h-[560px] w-[560px] rounded-full bg-white/80 blur-3xl"/>

    <div className="relative mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mb-16 flex items-center justify-between sm:mb-20">
      <div className="flex items-center gap-3 text-xs font-semibold tracking-[-0.01em]">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-lg">
        <FileText size={16}/>
        </span>
        <span>Cover Letter Builder</span>
      </div>

      <Link to="/cover-letter-templates" className="hidden items-center gap-2 text-xs font-semibold text-zinc-500 transition hover:text-zinc-950 sm:flex">
        Explore templates
        <ArrowRight size={14}/>
      </Link>
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      {/* Layered cover-letter previews */}
      <div className="relative mx-auto h-[560px] w-full max-w-[650px] sm:h-[650px]">
        <div className="absolute left-[7%] top-[7%] h-[74%] w-[43%] rotate-[-23deg] overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_35px_80px_rgba(24,24,27,0.12)]">
        <MiniCoverLetter name="Sophie Walton" position="Marketing Lead" company="Northstar" accent="#0f766e" variant="modern"/>
        </div>

        <div className="absolute left-[27%] top-[1%] z-10 h-[78%] w-[47%] rotate-[-7deg] overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_35px_80px_rgba(24,24,27,0.15)]">
        <MiniCoverLetter name="Matthew Jones" position="Financial Analyst" company="Meridian Group" accent="#a47d45" variant="minimal"/>
        </div>

        <div className="absolute left-[34%] top-[15%] z-20 h-[78%] w-[51%] rotate-[8deg] overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_45px_100px_rgba(24,24,27,0.20)]">
        <MiniCoverLetter name="Alex Morgan" position="Senior Product Designer" company="Acme Technologies" accent="#a47d45" variant="classic"/>
        </div>

        <div className="absolute bottom-[4%] left-[5%] z-30 rounded-2xl border border-white/80 bg-zinc-950 px-5 py-4 text-white shadow-[0_25px_60px_rgba(24,24,27,0.25)]">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#a47d45]/15 text-[#d5b47c]">
          <FileCheck2 size={17}/>
          </div>
          <div>
          <div className="text-[10px] font-bold">Application ready</div>
          <div className="mt-0.5 text-[8px] text-zinc-500">
            Polished. Personal. Professional.
          </div>
          </div>
        </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="max-w-[650px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d5cd] bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.19em] text-zinc-500 shadow-sm backdrop-blur">
        <Sparkles size={12} className="text-[#a47d45]"/>
        Built for better first impressions
        </div>

        <h1 className="mt-7 text-[52px] font-semibold leading-[0.94] tracking-[-0.065em] text-zinc-950 sm:text-[70px] lg:text-[78px]">
        Your resume
        <br />
        starts the story.
        <br />
        <span className="text-[#a47d45]">Your letter finishes it.</span>
        </h1>

        <p className="mt-8 max-w-[590px] text-[15px] leading-7 text-zinc-600 sm:text-lg sm:leading-8">
        Create a refined cover letter that feels personal, reads
        professionally and matches the quality of the resume you
        worked hard to build.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
        <Link to="/cover-letter-builder" className="group inline-flex h-12 items-center gap-3 rounded-xl bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.18)] transition duration-300 hover:bg-[#a47d45]">
  <span className="text-white">
  Create Cover Letter
  </span>

  <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1"/>
  </Link>

        <Link to="/cover-letter-templates" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#d4d0c7] bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-[#a47d45] hover:bg-[#faf8f3]">
          View templates
        </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-medium text-zinc-500">
        {[
      "Professional layouts",
      "Live editing",
      "PDF-ready output",
    ].map((item) => (<span key={item} className="flex items-center gap-2">
          <Check size={13} className="text-[#a47d45]"/>
          {item}
          </span>))}
        </div>
      </div>
      </div>
    </div>
    </section>

    {/* =====================================================
      02 — TRUST / STATS
    ====================================================== */}

    <section className="border-b border-[#dedbd4] bg-white">
    <div className="mx-auto grid max-w-[1200px] divide-y divide-[#e8e5df] px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
      {[
      ["01", "Professional layouts", "Designed around clarity"],
      ["02", "Multiple styles", "Modern to minimal"],
      ["03", "Live editing", "See changes instantly"],
      ["04", "Ready to apply", "Download when finished"],
    ].map(([number, title, text]) => (<div key={number} className="px-5 py-9 sm:px-8 lg:py-12">
        <div className="text-[10px] font-bold tracking-[0.2em] text-[#a47d45]">
        {number}
        </div>

        <div className="mt-3 text-sm font-semibold text-zinc-950">
        {title}
        </div>

        <div className="mt-1 text-[11px] text-zinc-400">
        {text}
        </div>
      </div>))}
    </div>
    </section>

    {/* =====================================================
      03 — STORY
    ====================================================== */}

    <section className="bg-[#f7f6f2] py-24 sm:py-32 lg:py-40">
    <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
      <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
        Not another generic letter
      </div>

      <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
        A cover letter should
        <br />
        sound like <span className="text-zinc-400">you.</span>
      </h2>

      <p className="mt-7 max-w-[510px] text-sm leading-7 text-zinc-500 sm:text-base">
        Your resume shows what you have done. Your cover
        letter gives the hiring team context — why this role,
        why this company and why your experience matters.
      </p>

      <Link to="/cover-letter-builder" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
        Start writing
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/>
      </Link>
      </div>

      <div className="relative">
      <div className="absolute -inset-5 rounded-[30px] bg-[#e7dfd1]/50 blur-2xl"/>

      <div className="relative grid grid-cols-2 gap-4">
        <div className="mt-12">
        <div className="rounded-2xl border border-[#dedbd4] bg-white p-4 shadow-[0_20px_50px_rgba(24,24,27,0.08)]">
          <MiniCoverLetter name="Sarah Lee" position="Marketing Manager" company="Northstar" accent="#27272a" variant="minimal"/>
        </div>
        </div>

        <div>
        <div className="rounded-2xl border border-[#dedbd4] bg-[#efede7] p-4">
          <MiniCoverLetter name="James Wilson" position="Software Engineer" company="Vertex" accent="#667085" variant="modern"/>
        </div>
        </div>
      </div>
      </div>
    </div>
    </section>


    {/* =====================================================
      05 — TEMPLATE SHOWCASE
    ====================================================== */}
    <section className="overflow-hidden bg-zinc-950 py-24 text-white sm:py-32 lg:py-40">
    <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
      <div className="grid items-end gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
      <div className="max-w-[520px]">
        <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c6a36c]">
        Premium cover-letter templates
        </div>

        <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
        Choose a layout
        <br />
        that feels
        <br />
        <span className="text-zinc-500">uniquely yours.</span>
        </h2>

        <p className="mt-7 max-w-[440px] text-sm leading-7 text-zinc-400 sm:text-base">
        Clean typography, balanced spacing and professional hierarchy
        — designed to make your application feel considered from the
        first glance.
        </p>

        <Link to="/cover-letter-templates" className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#c6a36c]">
  <span className="text-black">
  Select a template
  </span>

  <ArrowRight size={15} className="text-black transition-transform group-hover:translate-x-1"/>
  </Link>

        <div className="mt-28">
        <div className="flex items-center gap-1 text-[#c6a36c]">
          <Star size={22} fill="currentColor"/>
          <Star size={22} fill="currentColor"/>
          <Star size={22} fill="currentColor"/>
          <Star size={22} fill="currentColor"/>
          <Star size={22} className="text-zinc-700"/>
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
        <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-[#a47d45]/10 blur-3xl"/>

        <div className="relative flex gap-6 overflow-visible pb-8">
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
    ].map((template, index) => (<Link key={template.name} to="/cover-letter-templates" className={`group relative min-w-[300px] flex-1 ${template.rotate}`}>
          <div className="relative overflow-hidden rounded-[4px] border border-white/10 bg-[#e9e6df] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_45px_110px_rgba(0,0,0,0.5)]">
            <div className="mb-5 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              0{index + 1}
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
              {template.name}
            </span>
            </div>

            <MiniCoverLetter name={index === 0 ? "Matthew Jones" : index === 1 ? "Tiffany Giroux" : "Alex Morgan"} position={index === 0 ? "Financial Analyst" : index === 1 ? "Marketing Director" : "Product Designer"} company={index === 0 ? "Meridian Group" : index === 1 ? "Northstar" : "Acme Technologies"} accent={template.accent} variant={template.variant}/>
          </div>

          <div className="mt-5 flex items-center justify-between px-1">
            <div>
            <div className="text-sm font-semibold">{template.name}</div>
            <div className="mt-1 text-[10px] text-zinc-500">
              Professional cover letter
            </div>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition group-hover:border-white group-hover:bg-white group-hover:text-zinc-950">
            <ChevronRight size={15}/>
            </span>
          </div>
          </Link>))}
        </div>
      </div>
      </div>
    </div>
    </section>


    {/* =====================================================
      04 — BENEFITS
    ====================================================== */}

    <section className="border-y border-[#dedbd4] bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
        Built around your story
        </div>

        <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
        Everything you need.
        <br />
        Nothing you don't.
        </h2>

        <p className="mt-6 max-w-[390px] text-sm leading-7 text-zinc-500">
        A focused writing experience designed to help you
        communicate clearly and look professional.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] sm:grid-cols-2">
        {benefits.map((item) => {
      const Icon = item.icon;
      return (<div key={item.number} className="bg-white p-7 transition hover:bg-[#faf9f6] sm:p-9">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
            <Icon size={18}/>
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
          </div>);
    })}
      </div>
      </div>
    </div>
    </section>

    
    {/* =====================================================
      06 — EDITOR EXPERIENCE
    ====================================================== */}

    <section className="bg-zinc-950 py-24 text-white sm:py-32 lg:py-40">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c6a36c]">
        A better writing experience
        </div>

        <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
        Write on the left.
        <br />
        See it on the right.
        </h2>

        <p className="mt-7 max-w-[450px] text-sm leading-7 text-zinc-400 sm:text-base">
        No guessing how the final document will look.
        Your content and professional document preview stay
        together while you build.
        </p>

        <Link to="/cover-letter-builder" className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c6a36c]">
  <span className="text-black">
  Open builder
  </span>

  <ArrowRight size={15} className="text-black transition-transform group-hover:translate-x-1"/>
  </Link>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 rounded-[40px] bg-[#c6a36c]/10 blur-3xl"/>

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#18181b] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-white/20"/>
          <span className="h-2 w-2 rounded-full bg-white/20"/>
          <span className="h-2 w-2 rounded-full bg-white/20"/>

          <div className="ml-auto rounded-md border border-white/10 px-3 py-1 text-[8px] text-zinc-500">
          Cover Letter Builder
          </div>
        </div>

        <div className="grid min-h-[450px] gap-3 p-3 sm:grid-cols-[0.7fr_1fr]">
          <div className="rounded-xl border border-white/10 bg-[#111113] p-4">
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
    ].map((item, index) => (<div key={item} className="mt-4">
            <div className="mb-1.5 text-[7px] text-zinc-600">
              {item}
            </div>

            <div className={`rounded-md border border-white/5 bg-white/[0.025] px-3 py-2 text-[8px] leading-4 text-zinc-500 ${index > 2 ? "min-h-14" : "min-h-7"}`}>
              {[
        "Alex Morgan",
        "Senior Product Designer",
        "Acme Technologies",
        "I am excited to apply for this opportunity and bring thoughtful product thinking to your team.",
        "My experience combines research, product strategy and hands-on design across digital products.",
        "Thank you for your consideration. I would welcome the opportunity to discuss my background.",
      ][index]}
            </div>
            </div>))}
          </div>

          <div className="flex items-center justify-center rounded-xl bg-[#e7e4dd] p-5">
          <div className="w-full max-w-[310px]">
            <MiniCoverLetter name="Alex Morgan" position="Product Designer" company="Acme Technologies" accent="#987542"/>
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

    <section className="border-b border-[#dedbd4] bg-white py-24 sm:py-32 lg:py-40">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <div className="max-w-[680px]">
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a47d45]">
        How it works
      </div>

      <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
        From blank page
        <br />
        to <span className="text-zinc-400">application ready.</span>
      </h2>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#dedbd4] bg-[#dedbd4] md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (<div key={step.number} className="group bg-white p-7 transition hover:bg-[#faf9f6] sm:p-9">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#a47d45]">
          {step.number}
          </span>

          <ArrowRight size={15} className="text-zinc-300 transition group-hover:translate-x-1 group-hover:text-zinc-950"/>
        </div>

        <h3 className="mt-14 text-base font-semibold tracking-[-0.02em]">
          {step.title}
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-zinc-500">
          {step.text}
        </p>
        </div>))}
      </div>
    </div>
    </section>

    
    {/* =====================================================
      09 — QUOTE / SOCIAL PROOF
    ====================================================== */}

    <section className="border-y border-[#dedbd4] bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
      <Quote size={28} className="mx-auto text-[#b08d57]"/>

      <p className="mx-auto mt-7 max-w-[820px] text-3xl font-medium leading-[1.2] tracking-[-0.04em] text-zinc-900 sm:text-4xl lg:text-5xl">
      “The best cover letter does not repeat your resume.
      It gives the recruiter a reason to keep reading.”
      </p>

      <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
      Your story deserves context
      </div>
    </div>
    </section>








    {/* =====================================================
      10 — FINAL CTA
    ====================================================== */}

    <section className="relative overflow-hidden bg-zinc-950 py-28 text-white sm:py-36">
    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#a47d45]/10 blur-3xl"/>

    <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
      <Zap size={19} className="text-[#c6a36c]"/>
      </div>

      <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c6a36c]">
      Make the next application count
      </div>

      <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
      Resume and cover letter,
      <br />
      <span className="text-zinc-500">
        built together.
      </span>
      </h2>

      <p className="mx-auto mt-7 max-w-[560px] text-sm leading-7 text-zinc-400 sm:text-base">
      Build a professional cover letter, pair it with your
      resume and present a complete application.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
      <Link to="/cover-letter-builder" className="group inline-flex h-12 items-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-[#c6a36c]">
  <span className="text-black">
  Get Started
  </span>

  <ArrowRight size={16} className="text-black transition-transform group-hover:translate-x-1"/>
  </Link>

      <Link to="/register" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/10">
        Start building
      </Link>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] text-zinc-500">
      <Link to="/templates" className="transition hover:text-white">
        Explore templates
      </Link>

      <span>•</span>

      <Link to="/cover-letter-templates" className="transition hover:text-white">
        Cover letter templates
      </Link>

      <span>•</span>

      <Link to="/cover-letter-builder" className="transition hover:text-white">
        Build your letter
      </Link>
      </div>
    </div>
    </section>


    {/* =====================================================
          08 — FEATURES
        ====================================================== */}

    <section className="bg-[#f7f6f2] py-24 sm:py-32">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
      <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-[#dedbd4] bg-white p-8 sm:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee5] text-[#987542]">
        <LayoutTemplate size={18}/>
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
        Designed around professional documents
        </h3>

        <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-500">
        Every layout uses intentional hierarchy, spacing and
        typography so your content feels polished without
        looking over-designed.
        </p>

        <div className="mt-8 space-y-3">
        {[
      "Clear information hierarchy",
      "Balanced document spacing",
      "Professional typography",
    ].map((item) => (<div key={item} className="flex items-center gap-3 text-xs font-medium text-zinc-700">
          <Check size={14} className="text-[#987542]"/>
          {item}
          </div>))}
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 p-8 text-white sm:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6a36c]">
        <Wand2 size={18}/>
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
        Personal without being complicated
        </h3>

        <p className="mt-4 max-w-[450px] text-sm leading-7 text-zinc-400">
        Start with structure, then make the language yours.
        Create different versions for different opportunities
        without rebuilding everything from scratch.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
        {[
      "Multiple versions",
      "Easy editing",
      "Professional output",
    ].map((item) => (<span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-semibold text-zinc-400">
          {item}
          </span>))}
        </div>
      </div>
      </div>
    </div>
    </section>



    {/* =========================================================
    PREMIUM COVER LETTER TEMPLATE SHOWCASE
    Add this section wherever you want
  ========================================================= */}

  <section className="relative overflow-hidden bg-[#17130d] py-24 text-white sm:py-28 lg:py-32">
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-[#c6a36c]/20 blur-[100px]"/>

  <div className="pointer-events-none absolute right-[-150px] bottom-[-180px] h-[550px] w-[550px] rounded-full bg-[#8f6d3b]/30 blur-[100px]"/>

  <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

  <div className="grid items-center gap-14 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">

    {/* =====================================================
      LEFT CONTENT
    ====================================================== */}

    <div className="relative z-20 max-w-[500px]">

    {/* Small label */}
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-[#c6a36c]"/>
      Premium Templates
    </div>

    {/* Heading */}
    <h2 className="max-w-[500px] text-[44px] font-bold leading-[1.03] tracking-[-0.055em] sm:text-[54px] lg:text-[62px]">
      Free professionally
      <br />
      designed
      <br />
      <span className="text-white/90">
      cover letters
      </span>
    </h2>

    {/* Description */}
    <p className="mt-7 max-w-[460px] text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
      Create a polished cover letter with professionally designed
      layouts that help your application look clear, modern and
      ready to impress.
    </p>

    {/* CTA */}
    <Link to="/cover-letter-templates" className="
      group
      mt-8
      inline-flex
      h-12
      items-center
      gap-3
      rounded-lg
      bg-[#c6a36c]
      px-6
      text-sm
      font-bold
      text-zinc-950
      shadow-[0_15px_40px_rgba(0,0,0,0.18)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#d6b77f]
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
      ">
      Select template

      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1"/>
    </Link>

    {/* =================================================
      RATING
    ================================================== */}

    <div className="mt-28">

      <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((item) => (<Star key={item} size={25} fill="currentColor" className="text-[#c6a36c]"/>))}

      <Star size={25} className="text-white/50" fill="currentColor"/>
      </div>

      <div className="mt-4 text-lg font-semibold">
      4.8 out of 5
      </div>

      <div className="mt-1 text-[11px] text-white/60">
      Loved by professionals building better applications
      </div>

    </div>

    </div>


    {/* =====================================================
      RIGHT — COVER LETTER CARDS
    ====================================================== */}

    <div className="relative min-w-0">

    {/* Decorative arrow */}
    <div className="absolute -left-8 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-1 text-white/50 lg:flex">
      <ChevronRight size={22} className="rotate-180"/>

      <ChevronRight size={22} className="rotate-180 -ml-3"/>
    </div>


    {/* Cards wrapper */}
    <div className="
      flex
      gap-7
      overflow-visible
      pb-8
      ">

      {/* =================================================
      CARD 1
    ================================================== */}

      <div className="group relative min-w-[310px] sm:min-w-[350px] lg:min-w-[390px]">

      <div className="
        relative
        overflow-hidden
        rounded-[4px]
        border
        border-black/10
        bg-[#e9e7e1]
        p-5
        shadow-[0_35px_80px_rgba(0,0,0,0.30)]
        transition-all
        duration-500
        group-hover:-translate-y-3
        group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)]
        ">

        <div className="mb-5 flex items-center justify-between">

        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
          01
        </span>

        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
          Executive
        </span>

        </div>

        <MiniCoverLetter name="Christopher Carter" position="Senior Business Analyst" company="Acme Corporation" accent="#9b7948" variant="classic"/>

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

      <div className="group relative min-w-[310px] sm:min-w-[350px] lg:min-w-[390px]">

      <div className="
        relative
        overflow-hidden
        rounded-[4px]
        border
        border-black/10
        bg-[#e9e7e1]
        p-5
        shadow-[0_35px_80px_rgba(0,0,0,0.30)]
        transition-all
        duration-500
        group-hover:-translate-y-3
        group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)]
        ">

        <div className="mb-5 flex items-center justify-between">

        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
          02
        </span>

        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
          Minimal
        </span>

        </div>

        <MiniCoverLetter name="Tiffany Giroux" position="Marketing Director" company="Northstar" accent="#27272a" variant="minimal"/>

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

      <div className="group relative min-w-[310px] sm:min-w-[350px] lg:min-w-[390px]">

      <div className="
        relative
        overflow-hidden
        rounded-[4px]
        border
        border-black/10
        bg-[#e9e7e1]
        p-5
        shadow-[0_35px_80px_rgba(0,0,0,0.30)]
        transition-all
        duration-500
        group-hover:-translate-y-3
        group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.40)]
        ">

        <div className="mb-5 flex items-center justify-between">

        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
          03
        </span>

        <span className="rounded-full bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-zinc-500">
          Modern
        </span>

        </div>

        <MiniCoverLetter name="Alex Morgan" position="Product Designer" company="Acme Technologies" accent="#64748b" variant="modern"/>

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


    {/* Bottom fade for premium carousel feel */}
    <div className="pointer-events-none absolute -right-20 bottom-0 top-0 w-32 bg-gradient-to-l from-[#17130d] to-transparent"/>

    </div>

  </div>

  </div>
  </section>
  </div>);
}
export default CoverLetter;
