import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Globe2,
  Layers3,
  MousePointer2,
  Palette,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/ui/Button";
import {
  ResumeRenderer,
  TEMPLATE_SAMPLE_RESUME,
} from "../templates/resumeTemplates";

const templates = [
  {
    name: "Executive",
    category: "Leadership",
    accent: "#1f2937",
    layout: "executive",
  },
  {
    name: "Modern",
    category: "Professional",
    accent: "#334155",
    layout: "modern",
  },
  {
    name: "Minimal",
    category: "Clean",
    accent: "#18181b",
    layout: "minimal",
  },
  {
    name: "Corporate",
    category: "Business",
    accent: "#1e3a5f",
    layout: "corporate",
  },
  {
    name: "Creative",
    category: "Creative",
    accent: "#8b5e3c",
    layout: "creative",
  },
  {
    name: "ATS",
    category: "ATS Friendly",
    accent: "#111827",
    layout: "ats",
  },
  {
    name: "Tech",
    category: "Technology",
    accent: "#155e75",
    layout: "tech",
  },
  {
    name: "Elegant",
    category: "Premium",
    accent: "#8a6938",
    layout: "elegant",
  },
];

const coverLetterTemplates = [
  {
    id: "modern",
    name: "Modern",
    category: "Professional",
    accent: "#987542",
    layout: "modern",
  },
  {
    id: "professional",
    name: "Professional",
    category: "Business",
    accent: "#334155",
    layout: "professional",
  },
  {
    id: "minimal",
    name: "Minimal",
    category: "Clean",
    accent: "#18181b",
    layout: "minimal",
  },
  {
    id: "executive",
    name: "Executive",
    category: "Leadership",
    accent: "#111111",
    layout: "executive",
  },
  {
    id: "elegant",
    name: "Elegant",
    category: "Premium",
    accent: "#8a6938",
    layout: "elegant",
  },
  {
    id: "classic",
    name: "Classic",
    category: "Traditional",
    accent: "#374151",
    layout: "classic",
  },
];

const features = [
  {
    icon: WandSparkles,
    title: "Smart resume structure",
    description:
      "Organize your experience, education and achievements into a clear professional story.",
  },
  {
    icon: Palette,
    title: "Premium templates",
    description:
      "Choose from carefully designed layouts that look polished without feeling over-designed.",
  },
  {
    icon: Zap,
    title: "Live editing",
    description:
      "Edit your information and instantly see exactly how your finished resume will look.",
  },
  {
    icon: Target,
    title: "ATS-conscious layouts",
    description:
      "Use clean, structured templates designed with readability and parsing in mind.",
  },
  {
    icon: Download,
    title: "Ready to share",
    description:
      "Prepare your resume for applications, interviews, networking and professional profiles.",
  },
  {
    icon: ShieldCheck,
    title: "Your profile, your control",
    description:
      "Keep your resume content organized in one focused workspace built around your career.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a template",
    description:
      "Start with a professional layout that matches your industry, personality and career goals.",
  },
  {
    number: "02",
    title: "Add your experience",
    description:
      "Enter your profile, work history, education, skills and projects in a guided editor.",
  },
  {
    number: "03",
    title: "Make it yours",
    description:
      "Adjust typography, spacing and accent details while watching the live preview update.",
  },
  {
    number: "04",
    title: "Download & apply",
    description:
      "Finish your resume and prepare it for applications, recruiters and professional opportunities.",
  },
];

const examples = [
  {
    role: "Product Manager",
    name: "Alex Morgan",
    category: "Business",
  },
  {
    role: "Software Engineer",
    name: "Daniel Carter",
    category: "Technology",
  },
  {
    role: "Marketing Strategist",
    name: "Sophie Wilson",
    category: "Marketing",
  },
];

const faqs = [
  {
    question: "Can I create more than one resume?",
    answer:
      "Yes. The product architecture is designed around multiple resumes, so you can create different versions for different roles, industries or career directions.",
  },
  {
    question: "Can I change my template after creating a resume?",
    answer:
      "Yes. Your resume information is kept separate from the template presentation, allowing the same content to be rendered through different designs.",
  },
  {
    question: "Will my resume work on mobile?",
    answer:
      "Yes. The product is being designed responsively from the beginning. The builder will use a dedicated mobile editing experience instead of simply shrinking the desktop interface.",
  },
  {
    question: "Can I customize fonts and colors?",
    answer:
      "Yes. The builder architecture includes customization for accent color, typography, font size and spacing.",
  },
  {
    question: "Is the resume preview updated live?",
    answer:
      "Yes. The editor and preview are designed around shared resume state so changes can be reflected immediately.",
  },
  {
    question: "Is the backend connected yet?",
    answer:
      "The current landing page is frontend-only. Authentication, persistence and API integration will be connected in later development stages.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#b08d57]" />
      {children}
    </div>
  );
}

function ResumeMiniPreview({
  variant = "executive",
  className = "",
}) {
  const templateId =
    variant === "default" ? "executive" : variant;

  return (
    <div
      className={[
        "relative aspect-[0.707] w-full overflow-hidden bg-[#efede8]",
        "border border-stone-200 shadow-[0_18px_50px_rgba(24,24,27,0.10)]",
        className,
      ].join(" ")}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: "760px",
          transform: "scale(0.39)",
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


function CoverLetterMiniPreview({ template }) {
  const isDark = template.layout === "executive";
  const isMinimal = template.layout === "minimal";
  const isClassic = template.layout === "classic";
  const isElegant = template.layout === "elegant";
  const isProfessional = template.layout === "professional";

  return (
    <div className="relative aspect-[0.707] w-full overflow-hidden bg-[#efede8] border border-stone-200 shadow-[0_18px_50px_rgba(24,24,27,0.10)]">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: "794px",
          transform: "scale(0.575)",
        }}
      >
        <div className="relative min-h-[1123px] w-[794px] overflow-hidden bg-white text-zinc-900 shadow-[0_18px_45px_rgba(24,24,27,0.12)]">
          {isDark && (
            <div className="absolute inset-x-0 top-0 h-[185px] bg-zinc-950" />
          )}

          {!isMinimal && !isDark && (
            <div
              className="absolute left-0 top-0 h-[9px] w-full"
              style={{ backgroundColor: template.accent }}
            />
          )}

          {isProfessional && (
            <div
              className="absolute left-0 top-[9px] h-full w-[12px]"
              style={{ backgroundColor: template.accent }}
            />
          )}

          <div className="relative px-[72px] py-[68px]">
            <header
              className={[
                "border-b pb-8",
                isDark ? "border-white/15" : "border-zinc-200",
                isElegant ? "text-center" : "",
              ].join(" ")}
            >
              <h3
                className={[
                  "text-[34px] font-bold tracking-[-0.045em]",
                  isClassic || isElegant ? "font-serif" : "",
                  isDark ? "text-white" : "text-zinc-950",
                ].join(" ")}
              >
                Alex Morgan
              </h3>

              <p
                className={[
                  "mt-2 text-[14px] font-medium",
                  isDark ? "text-[#d8c09b]" : "text-zinc-500",
                ].join(" ")}
              >
                Senior Product Manager
              </p>

              <div
                className={[
                  "mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[11px]",
                  isElegant ? "justify-center" : "",
                  isDark ? "text-zinc-400" : "text-zinc-500",
                ].join(" ")}
              >
                <span>alex.morgan@email.com</span>
                <span>+1 415 555 0198</span>
                <span>San Francisco, CA</span>
              </div>
            </header>

            <main
              className={[
                "mt-10 text-[13px] leading-[1.85]",
                isDark ? "text-zinc-300" : "text-zinc-600",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-10">
                <div>
                  <p className={isDark ? "font-semibold text-white" : "font-semibold text-zinc-950"}>
                    Hiring Manager
                  </p>
                  <p>Northstar Technologies</p>
                  <p>San Francisco, CA</p>
                </div>
                <p className={isDark ? "text-zinc-500" : "text-zinc-400"}>
                  October 12, 2026
                </p>
              </div>

              <p
                className="mt-9 text-[14px] font-bold"
                style={{ color: template.accent }}
              >
                Application for Senior Product Manager
              </p>

              <p className={["mt-9", isDark ? "text-white" : "text-zinc-950"].join(" ")}>
                Dear Hiring Manager,
              </p>

              <p className="mt-6">
                I am writing to express my interest in the Senior Product Manager
                position at Northstar Technologies. My experience building digital
                products and leading cross-functional teams aligns closely with
                this opportunity.
              </p>

              <p className="mt-6">
                Throughout my career, I have translated customer problems into
                measurable product outcomes while partnering closely with design,
                engineering and business teams.
              </p>

              <p className="mt-6">
                I would welcome the opportunity to bring this experience to your
                team and contribute to meaningful product growth.
              </p>

              <p className="mt-6">
                Thank you for your time and consideration. I look forward to
                discussing the opportunity with you.
              </p>

              <div className="mt-10">
                <p>Sincerely,</p>
                <p
                  className={[
                    "mt-7 text-[20px] font-semibold",
                    isClassic || isElegant ? "font-serif" : "",
                  ].join(" ")}
                  style={{ color: template.accent }}
                >
                  Alex Morgan
                </p>
              </div>
            </main>

            <footer
              className={[
                "absolute bottom-8 left-[72px] right-[72px] border-t pt-4 text-[9px] uppercase tracking-[0.16em]",
                isDark ? "border-white/10 text-zinc-500" : "border-zinc-100 text-zinc-400",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span>Alex Morgan</span>
                <span>{template.name}</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuilderPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <motion.div
        initial={{ opacity: 0, y: 25, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_30px_90px_rgba(24,24,27,0.14)]"
      >
        <div className="flex h-11 items-center justify-between border-b border-stone-200 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-stone-200 px-3 py-1.5 sm:flex">
            <FileText size={12} className="text-zinc-400" />
            <span className="text-[10px] font-medium text-zinc-600">
              Alex Morgan — Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] text-zinc-400 sm:block">
              Saved
            </span>

            <div className="h-6 w-6 rounded-full bg-zinc-950" />
          </div>
        </div>

        <div className="grid min-h-[390px] grid-cols-[43%_57%] bg-[#f5f5f3]">
          <div className="border-r border-stone-200 bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Content
              </span>

              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-100 text-zinc-500"
              >
                <Plus size={12} />
              </button>
            </div>

            <div className="space-y-2">
              {[
                "Personal Information",
                "Summary",
                "Experience",
                "Education",
                "Skills",
                "Projects",
              ].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "rounded-lg border px-3 py-2.5",
                    index === 0
                      ? "border-zinc-900 bg-zinc-950 text-white"
                      : "border-stone-200 bg-white text-zinc-600",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium">
                      {item}
                    </span>

                    <ChevronRight
                      size={12}
                      className={
                        index === 0
                          ? "text-white/60"
                          : "text-zinc-300"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-stone-200 bg-stone-50 p-3">
              <div className="mb-2 h-1.5 w-16 rounded-full bg-zinc-800" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-zinc-200" />
                <div className="h-1.5 w-4/5 rounded-full bg-zinc-200" />
                <div className="h-1.5 w-3/5 rounded-full bg-zinc-200" />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center overflow-hidden p-4 sm:p-6">
            <div className="w-[88%] max-w-[300px]">
              <ResumeMiniPreview />
            </div>
          </div>
        </div>

        <div className="flex h-11 items-center justify-between border-t border-stone-200 bg-white px-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-400">
              Template
            </span>

            <span className="text-[10px] font-semibold text-zinc-700">
              Executive
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md px-2 py-1 text-[10px] font-medium text-zinc-500"
            >
              Preview
            </button>

            <button
              type="button"
              className="rounded-md bg-zinc-950 px-2.5 py-1 text-[10px] font-medium text-white"
            >
              Download
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="absolute -right-4 top-[18%] z-20 hidden w-[150px] rounded-xl border border-stone-200 bg-white p-3 shadow-[0_15px_45px_rgba(24,24,27,0.12)] sm:block lg:-right-10"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Check size={14} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-zinc-900">
              Resume score
            </p>
            <p className="text-[9px] text-zinc-400">
              Looking polished
            </p>
          </div>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-stone-100">
          <div className="h-full w-[91%] rounded-full bg-zinc-900" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="absolute -bottom-5 -left-4 z-20 hidden w-[170px] rounded-xl border border-stone-200 bg-white p-3 shadow-[0_15px_45px_rgba(24,24,27,0.12)] sm:block lg:-left-9"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b08d57]/10 text-[#8a6938]">
            <Palette size={14} />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-zinc-900">
              Live customization
            </p>
            <p className="text-[9px] text-zinc-400">
              Changes update instantly
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TemplateCard({ template, index }) {
  const variants = {
    executive: "executive",
    modern: "modern",
    minimal: "minimal",
    corporate: "corporate",
    creative: "creative",
    ats: "ats",
    tech: "tech",
    elegant: "elegant",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.05, 0.25),
      }}
      className="group"
    >
      <Link
        to={`/templates/${template.name.toLowerCase()}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-stone-300 group-hover:shadow-[0_18px_45px_rgba(24,24,27,0.10)] sm:p-5">
          <ResumeMiniPreview
            variant={variants[template.layout]}
          />

          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between rounded-xl border border-white/70 bg-white/95 px-3 py-2.5 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-5 sm:bottom-5">
            <span className="text-xs font-semibold text-zinc-900">
              Use template
            </span>

            <ArrowRight size={14} />
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              {template.name}
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              {template.category}
            </p>
          </div>

          <span
            className="mt-0.5 h-2.5 w-2.5 rounded-full border border-white shadow-sm"
            style={{
              backgroundColor: template.accent,
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-zinc-900 sm:text-[15px]">
          {item.question}
        </span>

        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-200 text-zinc-500">
          {isOpen ? (
            <X size={14} />
          ) : (
            <Plus size={14} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-5 pr-10 text-sm leading-6 text-zinc-500">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="overflow-hidden bg-[#f8f8f6] text-zinc-950">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative border-b border-stone-200/70">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#b08d57]/[0.045] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
              }}
              className="max-w-2xl"
            >
              <SectionLabel>
                Premium resume builder
              </SectionLabel>

              <h1 className="mt-6 text-balance text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-zinc-950 sm:text-[62px] lg:text-[70px] xl:text-[78px]">
                Build a resume
                <br />
                <span className="text-zinc-400">
                  that gets noticed.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
                Create a polished, professional resume with beautifully
                designed templates, a distraction-free editor and a live
                preview that updates as you build.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/register">
                  <Button
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    Create My Resume
                    <ArrowRight size={17} />
                  </Button>
                </Link>

                <Link to="/templates">
                  <Button
                    variant="secondary"
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    Explore Templates
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="text-emerald-600"
                  />
                  Premium templates
                </div>

                <div className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="text-emerald-600"
                  />
                  Live preview
                </div>

                <div className="flex items-center gap-2">
                  <Check
                    size={14}
                    className="text-emerald-600"
                  />
                  Multiple resumes
                </div>
              </div>
            </motion.div>

            <div className="relative pt-2 lg:pt-8">
              <BuilderPreview />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-stone-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {[
            {
              value: "01",
              title: "Designed for clarity",
              text: "Every element has a purpose.",
            },
            {
              value: "08",
              title: "Professional templates",
              text: "Different layouts for different careers.",
            },
            {
              value: "100%",
              title: "Your story",
              text: "Your content stays at the center.",
            },
          ].map((item) => (
            <div
              key={item.value}
              className="flex items-center gap-4 py-5 sm:px-7 sm:py-7"
            >
              <span className="text-lg font-semibold tracking-tight text-zinc-300">
                {item.value}
              </span>

              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  {item.title}
                </p>

                <p className="mt-0.5 text-xs text-zinc-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRODUCT PREVIEW
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="max-w-xl">
              <SectionLabel>
                The workspace
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
                Everything you need.
                <br />
                Nothing you don't.
              </h2>

              <p className="mt-5 text-base leading-7 text-zinc-500">
                A focused resume workspace that keeps your content,
                customization and final document in one place.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Structured editing sections",
                  "Live A4 resume preview",
                  "Instant template switching",
                  "Typography and spacing controls",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Check size={13} />
                    </span>

                    <span className="text-sm font-medium text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-[#8a6938]"
              >
                Start building
                <ArrowRight size={15} />
              </Link>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              className="rounded-2xl border border-stone-200 bg-[#f5f5f3] p-3 shadow-[0_25px_70px_rgba(24,24,27,0.08)] sm:p-5"
            >
              <BuilderPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEMPLATES
      ========================================================= */}

      <section
        id="templates"
        className="scroll-mt-20 border-y border-stone-200 bg-[#f8f8f6] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionLabel>
                Template collection
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
                A design for every
                <br />
                professional chapter.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
                Eight distinct starting points, each built with a different
                visual hierarchy instead of simply changing colors.
              </p>
            </div>

            <Link
              to="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-[#8a6938]"
            >
              View all templates
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((template, index) => (
              <TemplateCard
                key={template.name}
                template={template}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          COVER LETTER TEMPLATES
      ========================================================= */}
      <section
        id="cover-letter-templates"
        className="border-y border-stone-200 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionLabel>
                Cover letter collection
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
                Match your cover letter
                <br />
                to your resume.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
                Professional cover letter layouts with real typography,
                spacing and content structure — designed to work alongside
                your resume.
              </p>
            </div>

            <Link
              to="/cover-letter-templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-[#8a6938]"
            >
              View all cover letter templates
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {coverLetterTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                className="group"
              >
                <Link
                  to={`/cover-letter-templates`}
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-stone-300 group-hover:shadow-[0_18px_45px_rgba(24,24,27,0.10)] sm:p-5">
                    <CoverLetterMiniPreview template={template} />

                    <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between rounded-xl border border-white/70 bg-white/95 px-3 py-2.5 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-5 sm:bottom-5">
                      <span className="text-xs font-semibold text-zinc-900">
                        Use template
                      </span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {template.name}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500">
                        {template.category}
                      </p>
                    </div>

                    <span
                      className="mt-0.5 h-2.5 w-2.5 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: template.accent }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section
        id="features"
        className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel>
              Built around you
            </SectionLabel>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
              Less formatting.
              <br />
              More focus.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              The product takes care of the presentation so you can focus on
              the experience, skills and achievements that make you valuable.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.04, 0.2),
                  }}
                  className="group bg-white p-7 transition-colors hover:bg-stone-50 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-zinc-700 transition-colors group-hover:bg-zinc-950 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-zinc-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section
        id="how-it-works"
        className="scroll-mt-20 border-y border-stone-200 bg-[#f8f8f6] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <SectionLabel>
                Simple process
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
                From blank page
                <br />
                to ready to apply.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-zinc-500">
                A straightforward workflow designed to keep you moving instead
                of making you fight with document formatting.
              </p>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950"
              >
                Build your resume
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:py-9"
                >
                  <span className="text-sm font-semibold text-[#b08d57]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESUME EXAMPLES
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionLabel>
                Resume examples
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
                Built for real career paths.
              </h2>

              <p className="mt-5 text-base leading-7 text-zinc-500">
                Different careers need different visual priorities. Your
                resume should reflect the role you're applying for.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-zinc-400 sm:flex">
              <Globe2 size={14} />
              Professional layouts
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {examples.map((example, index) => (
              <motion.div
                key={example.role}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f5f5f3]"
              >
                <div className="relative mx-auto max-w-[360px] px-7 pt-7">
                  <ResumeMiniPreview
                    variant={
                      index === 1
                        ? "modern"
                        : index === 2
                          ? "creative"
                          : "default"
                    }
                  />

                  <div className="pointer-events-none absolute inset-x-7 bottom-0 h-20 bg-gradient-to-t from-[#f5f5f3] to-transparent" />
                </div>

                <div className="border-t border-stone-200 bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#987542]">
                        {example.category}
                      </p>

                      <h3 className="mt-1 text-base font-semibold text-zinc-950">
                        {example.role}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-500">
                        {example.name}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOMIZATION
      ========================================================= */}

      <section className="border-y border-stone-200 bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionLabel>
                Make it yours
              </SectionLabel>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Your experience.
                <br />
                Your visual identity.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                Fine-tune the presentation without manually rebuilding your
                document. Typography, spacing and accent details are designed
                to work together.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Accent colors",
                  "Typography",
                  "Font sizing",
                  "Section spacing",
                  "Template switching",
                  "Live preview",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-300"
                  >
                    <Check
                      size={15}
                      className="text-[#c6a36c]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Appearance
                    </p>

                    <p className="mt-1 text-[10px] text-zinc-500">
                      Customize your resume
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    {[
                      "#18181b",
                      "#8a6938",
                      "#155e75",
                      "#334155",
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-5 w-5 rounded-full border border-white/20"
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 pt-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">
                        Font
                      </span>

                      <span className="text-[10px] font-medium text-zinc-300">
                        Inter
                      </span>
                    </div>

                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <div className="h-full w-[70%] rounded-full bg-white/50" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">
                        Spacing
                      </span>

                      <span className="text-[10px] font-medium text-zinc-300">
                        Balanced
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <span
                          key={item}
                          className={[
                            "h-1.5 flex-1 rounded-full",
                            item <= 3
                              ? "bg-white/60"
                              : "bg-white/10",
                          ].join(" ")}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white p-5">
                  <div className="h-3 w-1/2 bg-zinc-900" />
                  <div className="mt-2 h-1.5 w-1/3 bg-zinc-300" />

                  <div className="mt-7 grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-1.5 w-1/3 bg-zinc-800" />
                      <div className="h-1.5 w-full bg-zinc-200" />
                      <div className="h-1.5 w-5/6 bg-zinc-200" />
                      <div className="h-1.5 w-4/6 bg-zinc-200" />
                    </div>

                    <div className="space-y-2">
                      <div className="h-1.5 w-1/3 bg-zinc-800" />
                      <div className="h-1.5 w-full bg-zinc-200" />
                      <div className="h-1.5 w-4/5 bg-zinc-200" />
                      <div className="h-1.5 w-3/5 bg-zinc-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <section
        id="pricing"
        className="scroll-mt-20 bg-[#f8f8f6] py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>
              Simple pricing
            </SectionLabel>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
              Start building without complexity.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              A clean pricing experience can be connected to the real
              subscription system later. For now, this section is purely
              frontend.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-md">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 p-7 text-white shadow-[0_25px_70px_rgba(24,24,27,0.15)] sm:p-8">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#b08d57]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      Professional
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Everything you need to build confidently.
                    </p>
                  </div>

                  <Sparkles
                    size={20}
                    className="text-[#c6a36c]"
                  />
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.05em]">
                    —
                  </span>

                  <span className="pb-2 text-sm text-zinc-500">
                    pricing coming soon
                  </span>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-7">
                  {[
                    "Premium resume templates",
                    "Live resume preview",
                    "Multiple resumes",
                    "Customization controls",
                    "Professional export flow",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        size={15}
                        className="text-[#c6a36c]"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
  to="/register"
  className="
    group
    mt-8
    flex
    h-12
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-white/25
    bg-black
    text-sm
    font-semibold
    !text-white
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
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

                <p className="mt-4 text-center text-[11px] text-zinc-600">
                  No payment functionality is connected in this frontend stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section
        id="faq"
        className="scroll-mt-20 border-t border-stone-200 bg-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="text-center">
            <SectionLabel>
              FAQ
            </SectionLabel>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-5xl">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
              Everything you need to know about the product experience.
            </p>
          </div>

          <div className="mt-12 border-t border-stone-200">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openFaq === index}
                onToggle={() =>
                  setOpenFaq(
                    openFaq === index ? -1 : index,
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="bg-[#f8f8f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1380px] overflow-hidden rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <FileText
                size={22}
                className="text-[#c6a36c]"
              />
            </div>

            <h2 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Your next opportunity
              <br />
              deserves a better resume.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Start with a premium template, tell your story and build a
              resume you're proud to send.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button
                  variant="secondary"
                  size="xl"
                  className="w-full border-white bg-white text-zinc-950 hover:bg-stone-100 sm:w-auto"
                >
                  Create My Resume
                  <ArrowRight size={17} />
                </Button>
              </Link>

              <a href="#templates">
                <Button
                  size="xl"
                  className="w-full border border-white/15 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
                >
                  Browse Templates
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="max-w-sm">
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-zinc-950 text-sm font-bold text-white">
                  R
                </span>

                <span className="text-[17px] font-semibold tracking-tight">
                  Resume<span className="text-[#b08d57]">ly</span>
                </span>
              </Link>

              <p className="mt-5 text-sm leading-6 text-zinc-500">
                A premium resume builder designed to help professionals turn
                their experience into a clear, polished story.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-zinc-500 transition-colors hover:bg-stone-100 hover:text-zinc-950"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[15px] w-[15px]"
                  >
                    <path d="M6.5 8.4H3.2V21h3.3V8.4ZM4.85 3A2 2 0 1 0 4.8 7a2 2 0 0 0 .05-4ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2.1V8.4H9.2V21h3.3v-6.2c0-1.6.3-3.1 2.3-3.1 2 0 2 1.8 2 3.2V21H21v-7.2Z"/>
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-zinc-500 transition-colors hover:bg-stone-100 hover:text-zinc-950"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[15px] w-[15px]"
                  >
                    <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Product
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="#features"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Features
                </a>

                <Link
                  to="/templates"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Templates
                </Link>

                <a
                  href="#pricing"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Pricing
                </a>

                <a
                  href="#faq"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Account
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  to="/login"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Create account
                </Link>

                <Link
                  to="/forgot-password"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Forgot password
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Workspace
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  to="/dashboard"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Dashboard
                </Link>

                <Link
                  to="/dashboard/resumes"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  My resumes
                </Link>

                <Link
                  to="/dashboard/profile"
                  className="block text-sm text-zinc-500 hover:text-zinc-950"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Resumely. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-zinc-400">
              <span>Privacy</span>
              <span>Terms</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Frontend preview
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;