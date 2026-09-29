import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  FileText,
  GripVertical,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  Save,
  Trash2,
  User,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  FolderKanban,
  Award,
  Languages,
  X,
  Check,
} from "lucide-react";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  calculateResumeProgress,
  getResumeById,
  getResumes,
  saveResumes,
  makeResumeTitle,
} from "../../utils/resumeStorage";
import { Link, useSearchParams } from "react-router-dom";
import {
  createResume,
  getResumeFromApi,
  updateResumeOnApi,
} from "../../services/resumeService";
import { ResumeRenderer as TemplateRenderer } from "../templates/resumeTemplates";

const initialResume = {
  personal: {
    firstName: "Alex",
    lastName: "Morgan",
    title: "Product Manager",
    email: "alex.morgan@email.com",
    phone: "+91 98765 43210",
    location: "Gurugram, Haryana",
    website: "alexmorgan.com",
  },

  summary:
    "Product-focused professional with experience building digital products, working with cross-functional teams and turning complex problems into simple user experiences.",

  experience: [
    {
      id: 1,
      company: "Nova Technologies",
      position: "Senior Product Manager",
      location: "Gurugram, India",
      startDate: "2023",
      endDate: "Present",
      description:
        "Led product strategy and collaborated with engineering, design and business teams to deliver customer-focused digital products.",
    },
    {
      id: 2,
      company: "Orbit Digital",
      position: "Product Manager",
      location: "New Delhi, India",
      startDate: "2021",
      endDate: "2023",
      description:
        "Managed product roadmaps, gathered customer insights and coordinated product launches across multiple teams.",
    },
  ],

  education: [
    {
      id: 1,
      school: "University of Delhi",
      degree: "Bachelor of Business Administration",
      location: "New Delhi, India",
      startDate: "2018",
      endDate: "2021",
    },
  ],

  skills: [
    "Product Strategy",
    "Project Management",
    "User Research",
    "Agile",
    "Figma",
    "Analytics",
    "Leadership",
    "Roadmapping",
  ],

  projects: [
    {
      id: 1,
      name: "Customer Experience Platform",
      link: "project.example.com",
      description:
        "Led the development of a customer experience platform that improved workflow visibility and reduced manual processes.",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Certified Product Manager",
      issuer: "Product School",
      year: "2023",
    },
  ],

  languages: [
    {
      id: 1,
      name: "English",
      level: "Professional",
    },
    {
      id: 2,
      name: "Hindi",
      level: "Native",
    },
  ],
};

const sectionMeta = [
  {
    id: "personal",
    label: "Personal Information",
    icon: User,
  },
  {
    id: "summary",
    label: "Professional Summary",
    icon: FileText,
  },
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: Award,
  },
  {
    id: "languages",
    label: "Languages",
    icon: Languages,
  },
];

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-zinc-600">
        {label}
      </label>

      <input
        type={type}
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/5"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-zinc-600">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm leading-6 text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/5"
      />
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
  onRemove,
  canRemove = false,
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white">
          <Icon size={16} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">
            {title}
          </h2>

          {description && (
            <p className="mt-0.5 text-xs leading-5 text-zinc-500">
              {description}
            </p>
          )}
        </div>
      </div>

      {canRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-red-50 hover:text-red-600"
          title="Remove section"
        >
          <Trash2 size={15} />
        </button>
      )}
    </div>
  );
}

function ResumePreview({ resume, template = "executive" }) {
  const templateStyles = {
    executive: {
      page: "bg-white text-zinc-900",
      header: "border-b-2 border-zinc-900 pb-5",
      name: "text-[30px] font-bold tracking-[-0.04em]",
      title: "text-[14px] font-medium text-zinc-600",
      section:
        "border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
      accent: "bg-zinc-900",
    },
    modern: {
      page: "bg-white text-zinc-900",
      header: "border-l-4 border-[#987542] bg-stone-50 px-5 py-4",
      name: "text-[30px] font-bold tracking-[-0.045em]",
      title: "text-[14px] font-medium text-[#987542]",
      section:
        "border-l-2 border-[#987542] pl-2 text-[11px] font-bold uppercase tracking-[0.14em]",
      accent: "bg-[#987542]",
    },
    minimal: {
      page: "bg-white text-zinc-900",
      header: "pb-5",
      name: "text-[30px] font-semibold tracking-[-0.05em]",
      title: "text-[14px] font-normal text-zinc-500",
      section:
        "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500",
      accent: "bg-zinc-700",
    },
    corporate: {
      page: "bg-white text-zinc-900",
      header: "border-b border-slate-300 pb-5",
      name: "text-[29px] font-bold tracking-[-0.03em] text-slate-900",
      title: "text-[14px] font-medium text-slate-600",
      section:
        "border-b border-slate-300 pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-800",
      accent: "bg-slate-800",
    },
    creative: {
      page: "bg-white text-zinc-900",
      header: "relative overflow-hidden rounded-2xl bg-zinc-950 px-5 py-5 text-white",
      name: "text-[30px] font-bold tracking-[-0.045em]",
      title: "text-[14px] font-medium text-[#d8c09b]",
      section:
        "border-b border-[#987542]/30 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#987542]",
      accent: "bg-[#987542]",
    },
    ats: {
      page: "bg-white text-black",
      header: "border-b border-black pb-4",
      name: "text-[28px] font-bold",
      title: "text-[13px] font-medium text-black",
      section:
        "border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.1em]",
      accent: "bg-black",
    },
    tech: {
      page: "bg-white text-zinc-900",
      header: "border-l-4 border-slate-700 bg-slate-50 px-5 py-4",
      name: "text-[29px] font-bold tracking-[-0.04em] text-slate-900",
      title: "text-[13px] font-medium text-slate-600",
      section:
        "border-b border-slate-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700",
      accent: "bg-slate-700",
    },
    elegant: {
      page: "bg-white text-zinc-900",
      header: "border-b border-[#987542]/40 pb-5 text-center",
      name: "text-[30px] font-semibold tracking-[-0.04em]",
      title: "text-[14px] font-medium text-[#987542]",
      section:
        "border-b border-[#987542]/30 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#987542]",
      accent: "bg-[#987542]",
    },
  };

  const style = templateStyles[template] || templateStyles.executive;
  const centered = template === "elegant";

  const SectionTitle = ({ children }) => (
    <h2 className={style.section}>{children}</h2>
  );

  return (
    <div id="resume-print-area" className="resume-print-area mx-auto w-full max-w-[760px]">
      <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
        <div className={`min-h-[1060px] p-[8%] ${style.page}`}>
          <header className={style.header}>
            {template === "creative" && (
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#987542]/20" />
            )}

            <div className={centered ? "text-center" : ""}>
              <h1 className={style.name}>
                {resume.personal.firstName || "Your"}{" "}
                {resume.personal.lastName || "Name"}
              </h1>

              <p className={`mt-1 ${style.title}`}>
                {resume.personal.title || "Professional Title"}
              </p>

              <div
                className={[
                  "mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[9px]",
                  template === "creative"
                    ? "text-zinc-300"
                    : "text-zinc-500",
                  centered ? "justify-center" : "",
                ].join(" ")}
              >
                {resume.personal.email && (
                  <span className="flex items-center gap-1">
                    <Mail size={9} />
                    {resume.personal.email}
                  </span>
                )}
                {resume.personal.phone && (
                  <span className="flex items-center gap-1">
                    <Phone size={9} />
                    {resume.personal.phone}
                  </span>
                )}
                {resume.personal.location && (
                  <span className="flex items-center gap-1">
                    <MapPin size={9} />
                    {resume.personal.location}
                  </span>
                )}
                {resume.personal.website && (
                  <span>{resume.personal.website}</span>
                )}
              </div>
            </div>
          </header>

          {resume.summary && (
            <section className="mt-6">
              <SectionTitle>
                {template === "elegant" ? "Professional Profile" : "Profile"}
              </SectionTitle>
              <p className="mt-2.5 text-[9px] leading-[1.7] text-zinc-600">
                {resume.summary}
              </p>
            </section>
          )}

          {resume.experience.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Experience</SectionTitle>
              <div className="mt-3 space-y-5">
                {resume.experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[11px] font-bold">
                          {item.position}
                        </h3>
                        <p className="mt-0.5 text-[9px] font-medium text-zinc-500">
                          {item.company}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                      </div>
                      <span className="shrink-0 text-[8px] text-zinc-400">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[8.5px] leading-[1.65] text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.education.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-3 space-y-4">
                {resume.education.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[10px] font-bold">{item.degree}</h3>
                        <p className="mt-0.5 text-[8.5px] text-zinc-500">
                          {item.school}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                      </div>
                      <span className="shrink-0 text-[8px] text-zinc-400">
                        {item.startDate} — {item.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.skills.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Skills</SectionTitle>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {resume.skills.map((skill) => (
                  <span
                    key={skill}
                    className={[
                      "px-2 py-1 text-[8px] font-medium",
                      template === "ats"
                        ? "rounded-none border border-black text-black"
                        : template === "elegant"
                          ? "rounded-full border border-[#987542]/30 text-[#987542]"
                          : "rounded bg-zinc-100 text-zinc-600",
                    ].join(" ")}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {resume.projects.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Projects</SectionTitle>
              <div className="mt-3 space-y-4">
                {resume.projects.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[10px] font-bold">{item.name}</h3>
                      {item.link && (
                        <span className="text-[8px] text-zinc-400">
                          {item.link}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[8.5px] leading-[1.65] text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.certifications.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Certifications</SectionTitle>
              <div className="mt-3 space-y-2">
                {resume.certifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[9px] font-semibold">{item.name}</p>
                      <p className="text-[8px] text-zinc-500">{item.issuer}</p>
                    </div>
                    <span className="text-[8px] text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.languages.length > 0 && (
            <section className="mt-6">
              <SectionTitle>Languages</SectionTitle>
              <div
                className={[
                  "mt-3 flex flex-wrap gap-x-6 gap-y-2",
                  centered ? "justify-center" : "",
                ].join(" ")}
              >
                {resume.languages.map((item) => (
                  <div key={item.id}>
                    <span className="text-[9px] font-semibold">
                      {item.name}
                    </span>
                    <span className="ml-1.5 text-[8px] text-zinc-400">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className={`mt-7 h-0.5 w-12 ${style.accent}`} />
        </div>
      </div>
    </div>
  );
}

function Builder() {
  const [searchParams] = useSearchParams();

  const requestedResumeId = searchParams.get("id");
  const isNewResume = searchParams.get("new") === "1";

  const [activeResumeId, setActiveResumeId] = useState(
    () => (!isNewResume ? requestedResumeId : null),
  );

  const [resume, setResume] = useState(() => {
    try {
      if (!isNewResume && requestedResumeId) {
        const stored = getResumeById(requestedResumeId);
        if (stored?.data) return stored.data;
      }

      if (!isNewResume) {
        const activeId = localStorage.getItem("resumely_active_resume_id");
        const stored = activeId ? getResumeById(activeId) : null;
        if (stored?.data) return stored.data;
      }

      const savedDraft = localStorage.getItem("resume_builder_draft");
      return savedDraft ? JSON.parse(savedDraft) : initialResume;
    } catch {
      return initialResume;
    }
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    try {
      if (!isNewResume && requestedResumeId) {
        const stored = getResumeById(requestedResumeId);
        if (stored?.template) return stored.template;
      }

      return localStorage.getItem("resumely_template") || "executive";
    } catch {
      return "executive";
    }
  });

  const [activeSection, setActiveSection] =
    useState("personal");

  const [mobileEditorOpen, setMobileEditorOpen] =
    useState(false);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("resumely_token");

    if (!token || isNewResume || !requestedResumeId) {
      return;
    }

    let cancelled = false;

    async function loadResumeFromBackend() {
      try {
        const result = await getResumeFromApi(requestedResumeId);
        const serverResume = result?.resume;

        if (cancelled || !serverResume) {
          return;
        }

        setResume(serverResume.data || initialResume);
        setSelectedTemplate(serverResume.template || "executive");
        setActiveResumeId(serverResume._id || requestedResumeId);

        localStorage.setItem(
          "resume_builder_draft",
          JSON.stringify(serverResume.data || initialResume),
        );
        localStorage.setItem(
          "resumely_active_resume_id",
          String(serverResume._id || requestedResumeId),
        );
        localStorage.setItem(
          "resumely_template",
          serverResume.template || "executive",
        );
      } catch (error) {
        console.error("Resume API load failed:", error);
      }
    }

    loadResumeFromBackend();

    return () => {
      cancelled = true;
    };
  }, [isNewResume, requestedResumeId]);


  const handleDownload = () => {
    try {
      /*
        Resume PDF download intentionally uses the same approach as the
        Cover Letter builder: build the PDF directly with jsPDF.

        This avoids html2canvas completely, so the browser's rendered CSS,
        Tailwind colors, shadows, overflow and viewport size cannot break
        the PDF download.
      */
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;

      const templateColors = {
        executive: {
          accent: "#18181b",
          heading: "#18181b",
          muted: "#71717a",
        },
        modern: {
          accent: "#987542",
          heading: "#18181b",
          muted: "#71717a",
        },
        minimal: {
          accent: "#52525b",
          heading: "#18181b",
          muted: "#71717a",
        },
        corporate: {
          accent: "#1e293b",
          heading: "#0f172a",
          muted: "#64748b",
        },
        creative: {
          accent: "#987542",
          heading: "#18181b",
          muted: "#71717a",
        },
        ats: {
          accent: "#000000",
          heading: "#000000",
          muted: "#333333",
        },
        tech: {
          accent: "#475569",
          heading: "#0f172a",
          muted: "#64748b",
        },
        elegant: {
          accent: "#987542",
          heading: "#18181b",
          muted: "#71717a",
        },
      };

      const colors =
        templateColors[selectedTemplate] ||
        templateColors.executive;

      const hexToRgb = (hex) => {
        const clean = String(hex || "#18181b").replace("#", "");
        const value =
          clean.length === 3
            ? clean
                .split("")
                .map((item) => item + item)
                .join("")
            : clean;

        return {
          r: parseInt(value.substring(0, 2), 16) || 24,
          g: parseInt(value.substring(2, 4), 16) || 24,
          b: parseInt(value.substring(4, 6), 16) || 27,
        };
      };

      const accentRgb = hexToRgb(colors.accent);
      const headingRgb = hexToRgb(colors.heading);
      const mutedRgb = hexToRgb(colors.muted);

      let y = 20;

      const addPageIfNeeded = (requiredHeight = 10) => {
        if (y + requiredHeight > pageHeight - 18) {
          pdf.addPage();
          y = margin;
          return true;
        }

        return false;
      };

      const addSectionTitle = (title) => {
        addPageIfNeeded(16);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.setTextColor(
          headingRgb.r,
          headingRgb.g,
          headingRgb.b,
        );

        pdf.text(String(title).toUpperCase(), margin, y);

        pdf.setDrawColor(
          accentRgb.r,
          accentRgb.g,
          accentRgb.b,
        );
        pdf.setLineWidth(0.35);
        pdf.line(
          margin,
          y + 2,
          margin + contentWidth,
          y + 2,
        );

        y += 9;
      };

      const addParagraph = (
        value,
        {
          fontSize = 8.5,
          lineHeight = 4.2,
          color = mutedRgb,
          spacing = 4,
        } = {},
      ) => {
        if (!value) return;

        const lines = pdf.splitTextToSize(
          String(value),
          contentWidth,
        );

        const requiredHeight =
          lines.length * lineHeight + spacing;

        addPageIfNeeded(requiredHeight);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(fontSize);
        pdf.setTextColor(color.r, color.g, color.b);
        pdf.text(lines, margin, y);

        y += requiredHeight;
      };

      const addEntry = ({
        title,
        subtitle,
        date,
        description,
      }) => {
        const descriptionLines = description
          ? pdf.splitTextToSize(
              String(description),
              contentWidth,
            )
          : [];

        const requiredHeight =
          7 +
          (subtitle ? 4 : 0) +
          (date ? 4 : 0) +
          (descriptionLines.length
            ? descriptionLines.length * 3.8 + 3
            : 0);

        addPageIfNeeded(requiredHeight);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.setTextColor(
          headingRgb.r,
          headingRgb.g,
          headingRgb.b,
        );

        if (date) {
          const safeDate = String(date);
          const titleWidth =
            contentWidth -
            pdf.getTextWidth(safeDate) -
            5;

          const titleLines = pdf.splitTextToSize(
            String(title || ""),
            Math.max(titleWidth, 40),
          );

          pdf.text(titleLines, margin, y);

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7.5);
          pdf.setTextColor(
            mutedRgb.r,
            mutedRgb.g,
            mutedRgb.b,
          );
          pdf.text(
            safeDate,
            pageWidth - margin,
            y,
            { align: "right" },
          );

          y += titleLines.length * 4;
        } else {
          const titleLines = pdf.splitTextToSize(
            String(title || ""),
            contentWidth,
          );

          pdf.text(titleLines, margin, y);
          y += titleLines.length * 4;
        }

        if (subtitle) {
          const subtitleLines = pdf.splitTextToSize(
            String(subtitle),
            contentWidth,
          );

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(8);
          pdf.setTextColor(
            mutedRgb.r,
            mutedRgb.g,
            mutedRgb.b,
          );
          pdf.text(subtitleLines, margin, y);
          y += subtitleLines.length * 3.8;
        }

        if (description) {
          const lines = pdf.splitTextToSize(
            String(description),
            contentWidth,
          );

          addPageIfNeeded(lines.length * 3.8 + 2);

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(8);
          pdf.setTextColor(
            mutedRgb.r,
            mutedRgb.g,
            mutedRgb.b,
          );
          pdf.text(lines, margin, y);
          y += lines.length * 3.8 + 2;
        }

        y += 3;
      };

      // =========================================================
      // HEADER
      // =========================================================

      pdf.setFillColor(
        accentRgb.r,
        accentRgb.g,
        accentRgb.b,
      );
      pdf.rect(0, 0, pageWidth, 3, "F");

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(22);
      pdf.setTextColor(
        headingRgb.r,
        headingRgb.g,
        headingRgb.b,
      );

      const fullName =
        `${resume.personal.firstName || ""} ${
          resume.personal.lastName || ""
        }`.trim() || "Your Name";

      pdf.text(fullName, margin, y + 5);
      y += 11;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(
        accentRgb.r,
        accentRgb.g,
        accentRgb.b,
      );
      pdf.text(
        resume.personal.title || "Professional Title",
        margin,
        y,
      );
      y += 6;

      const contact = [
        resume.personal.email,
        resume.personal.phone,
        resume.personal.location,
        resume.personal.website,
      ]
        .filter(Boolean)
        .join("   |   ");

      if (contact) {
        const contactLines = pdf.splitTextToSize(
          contact,
          contentWidth,
        );

        pdf.setFontSize(7.5);
        pdf.setTextColor(
          mutedRgb.r,
          mutedRgb.g,
          mutedRgb.b,
        );
        pdf.text(contactLines, margin, y);
        y += contactLines.length * 3.5;
      }

      pdf.setDrawColor(225, 225, 226);
      pdf.setLineWidth(0.3);
      pdf.line(
        margin,
        y + 2,
        pageWidth - margin,
        y + 2,
      );

      y += 11;

      // =========================================================
      // SUMMARY
      // =========================================================

      if (resume.summary) {
        addSectionTitle("Profile");
        addParagraph(resume.summary);
      }

      // =========================================================
      // EXPERIENCE
      // =========================================================

      if (resume.experience?.length > 0) {
        addSectionTitle("Experience");

        resume.experience.forEach((item) => {
          addEntry({
            title: item.position || "Position",
            subtitle: [
              item.company,
              item.location,
            ]
              .filter(Boolean)
              .join(" | "),
            date: [
              item.startDate,
              item.endDate,
            ]
              .filter(Boolean)
              .join(" — "),
            description: item.description,
          });
        });
      }

      // =========================================================
      // EDUCATION
      // =========================================================

      if (resume.education?.length > 0) {
        addSectionTitle("Education");

        resume.education.forEach((item) => {
          addEntry({
            title: item.degree || "Degree",
            subtitle: [
              item.school,
              item.location,
            ]
              .filter(Boolean)
              .join(" | "),
            date: [
              item.startDate,
              item.endDate,
            ]
              .filter(Boolean)
              .join(" — "),
          });
        });
      }

      // =========================================================
      // SKILLS
      // =========================================================

      if (resume.skills?.length > 0) {
        addSectionTitle("Skills");

        const skills = resume.skills
          .filter(Boolean)
          .join("  •  ");

        addParagraph(skills, {
          fontSize: 8.5,
          lineHeight: 4,
          color: headingRgb,
          spacing: 5,
        });
      }

      // =========================================================
      // PROJECTS
      // =========================================================

      if (resume.projects?.length > 0) {
        addSectionTitle("Projects");

        resume.projects.forEach((item) => {
          const projectDescription = [
            item.description,
            item.link ? `Link: ${item.link}` : "",
          ]
            .filter(Boolean)
            .join("\n");

          addEntry({
            title: item.name || "Project",
            description: projectDescription,
          });
        });
      }

      // =========================================================
      // CERTIFICATIONS
      // =========================================================

      if (resume.certifications?.length > 0) {
        addSectionTitle("Certifications");

        resume.certifications.forEach((item) => {
          addEntry({
            title: item.name || "Certification",
            subtitle: item.issuer || "",
            date: item.year || "",
          });
        });
      }

      // =========================================================
      // LANGUAGES
      // =========================================================

      if (resume.languages?.length > 0) {
        addSectionTitle("Languages");

        const languages = resume.languages
          .filter((item) => item?.name)
          .map((item) =>
            item.level
              ? `${item.name} - ${item.level}`
              : item.name,
          )
          .join("  |  ");

        addParagraph(languages, {
          fontSize: 8.5,
          lineHeight: 4,
          color: headingRgb,
          spacing: 5,
        });
      }

      // =========================================================
      // FOOTER ON ALL PAGES
      // =========================================================

      const totalPages = pdf.getNumberOfPages();

      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
        pdf.setPage(pageNumber);

        pdf.setDrawColor(235, 235, 236);
        pdf.setLineWidth(0.25);
        pdf.line(
          margin,
          pageHeight - 13,
          pageWidth - margin,
          pageHeight - 13,
        );

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(6.5);
        pdf.setTextColor(161, 161, 170);

        pdf.text(
          fullName,
          margin,
          pageHeight - 8,
        );

        pdf.text(
          `${selectedTemplate || "executive"}  |  ${pageNumber}/${totalPages}`,
          pageWidth - margin,
          pageHeight - 8,
          { align: "right" },
        );
      }

      const safeName =
        makeResumeTitle(resume)
          .replace(/[^a-z0-9]+/gi, "-")
          .replace(/^-+|-+$/g, "")
          .toLowerCase() || "resume";

      pdf.save(`${safeName}.pdf`);
    } catch (error) {
      console.error(
        "Resume PDF download failed:",
        error,
      );

      window.alert(
        "PDF download failed. Please try again.",
      );
    }
  };

  const updatePersonal = (field, value) => {
    setResume((current) => ({
      ...current,
      personal: {
        ...current.personal,
        [field]: value,
      },
    }));

    setSaved(false);
  };

  const updateResumeField = (field, value) => {
    setResume((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const updateExperience = (id, field, value) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));

    setSaved(false);
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setResume((current) => ({
      ...current,
      experience: [
        ...current.experience,
        newExperience,
      ],
    }));

    setActiveSection("experience");
    setSaved(false);
  };

  const removeExperience = (id) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter(
        (item) => item.id !== id,
      ),
    }));

    setSaved(false);
  };

  const updateEducation = (id, field, value) => {
    setResume((current) => ({
      ...current,
      education: current.education.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));

    setSaved(false);
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      school: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
    };

    setResume((current) => ({
      ...current,
      education: [
        ...current.education,
        newEducation,
      ],
    }));

    setActiveSection("education");
    setSaved(false);
  };

  const removeEducation = (id) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter(
        (item) => item.id !== id,
      ),
    }));

    setSaved(false);
  };

  const updateProject = (id, field, value) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));

    setSaved(false);
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: "",
      link: "",
      description: "",
    };

    setResume((current) => ({
      ...current,
      projects: [
        ...current.projects,
        newProject,
      ],
    }));

    setActiveSection("projects");
    setSaved(false);
  };

  const removeProject = (id) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.filter(
        (item) => item.id !== id,
      ),
    }));

    setSaved(false);
  };

  const updateCertification = (id, field, value) => {
    setResume((current) => ({
      ...current,
      certifications:
        current.certifications.map((item) =>
          item.id === id
            ? {
                ...item,
                [field]: value,
              }
            : item,
        ),
    }));

    setSaved(false);
  };

  const addCertification = () => {
    const newCertification = {
      id: Date.now(),
      name: "",
      issuer: "",
      year: "",
    };

    setResume((current) => ({
      ...current,
      certifications: [
        ...current.certifications,
        newCertification,
      ],
    }));

    setActiveSection("certifications");
    setSaved(false);
  };

  const removeCertification = (id) => {
    setResume((current) => ({
      ...current,
      certifications:
        current.certifications.filter(
          (item) => item.id !== id,
        ),
    }));

    setSaved(false);
  };

  const updateLanguage = (id, field, value) => {
    setResume((current) => ({
      ...current,
      languages: current.languages.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));

    setSaved(false);
  };

  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      name: "",
      level: "",
    };

    setResume((current) => ({
      ...current,
      languages: [
        ...current.languages,
        newLanguage,
      ],
    }));

    setActiveSection("languages");
    setSaved(false);
  };

  const removeLanguage = (id) => {
    setResume((current) => ({
      ...current,
      languages: current.languages.filter(
        (item) => item.id !== id,
      ),
    }));

    setSaved(false);
  };

  const addSkill = () => {
    setResume((current) => ({
      ...current,
      skills: [
        ...current.skills,
        `New Skill ${current.skills.length + 1}`,
      ],
    }));

    setSaved(false);
  };

  const removeSkill = (skillIndex) => {
    setResume((current) => ({
      ...current,
      skills: current.skills.filter(
        (_, index) => index !== skillIndex,
      ),
    }));

    setSaved(false);
  };

  const handleSave = async () => {
    const now = new Date().toISOString();
    const token = localStorage.getItem("resumely_token");
    const title = makeResumeTitle(resume);
    const payload = {
      title,
      template: selectedTemplate,
      data: resume,
    };

    if (token) {
      try {
        const isMongoId =
          typeof activeResumeId === "string" &&
          /^[a-f\d]{24}$/i.test(activeResumeId);

        const result = isMongoId
          ? await updateResumeOnApi(activeResumeId, payload)
          : await createResume(payload);

        const serverResume = result?.resume;

        if (!serverResume?._id) {
          throw new Error("Resume was not returned by the server.");
        }

        const recordId = serverResume._id;
        const localRecord = {
          id: recordId,
          title: serverResume.title || title,
          template: serverResume.template || selectedTemplate,
          progress:
            serverResume.progress ??
            calculateResumeProgress(resume),
          createdAt: serverResume.createdAt || now,
          updatedAt: serverResume.updatedAt || now,
          data: serverResume.data || resume,
        };

        const existing = getResumes();
        const withoutCurrent = existing.filter(
          (item) => String(item.id) !== String(recordId),
        );

        saveResumes([localRecord, ...withoutCurrent]);
        setActiveResumeId(recordId);

        localStorage.setItem(
          "resume_builder_draft",
          JSON.stringify(serverResume.data || resume),
        );
        localStorage.setItem(
          "resumely_active_resume_id",
          String(recordId),
        );
        localStorage.setItem(
          "resumely_template",
          serverResume.template || selectedTemplate,
        );
        localStorage.setItem(
          "resumely_template_name",
          (serverResume.template || selectedTemplate)
            .charAt(0)
            .toUpperCase() +
            (serverResume.template || selectedTemplate).slice(1),
        );

        setSaved(true);

        window.setTimeout(() => {
          setSaved(false);
        }, 2500);

        return;
      } catch (error) {
        console.error("Resume cloud save failed:", error);
        window.alert(
          error?.message ||
            "Resume could not be saved to your account. Please try again.",
        );
        return;
      }
    }

    // Keep local storage as a fallback for signed-out/local development use.
    const existing = getResumes();
    let recordId = activeResumeId;

    if (recordId) {
      const next = existing.map((item) =>
        String(item.id) === String(recordId)
          ? {
              ...item,
              title,
              template: selectedTemplate,
              progress: calculateResumeProgress(resume),
              updatedAt: now,
              data: resume,
            }
          : item,
      );

      saveResumes(next);
    } else {
      const localId = Date.now();
      recordId = localId;
      setActiveResumeId(localId);

      saveResumes([
        {
          id: localId,
          title,
          template: selectedTemplate,
          progress: calculateResumeProgress(resume),
          createdAt: now,
          updatedAt: now,
          data: resume,
        },
        ...existing,
      ]);
    }

    localStorage.setItem(
      "resume_builder_draft",
      JSON.stringify(resume),
    );
    localStorage.setItem(
      "resumely_active_resume_id",
      String(recordId),
    );
    localStorage.setItem("resumely_template", selectedTemplate);
    localStorage.setItem(
      "resumely_template_name",
      selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1),
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          html,
          body {
            width: 210mm;
            min-width: 210mm;
            background: #fff !important;
          }

          body {
            margin: 0 !important;
            padding: 0 !important;
          }

          body * {
            visibility: hidden !important;
          }

          .resume-print-area,
          .resume-print-area * {
            visibility: visible !important;
          }

          .resume-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            max-width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          .resume-print-area > div {
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          .resume-print-area * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#f3f3f0] text-zinc-950">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard/resumes"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-zinc-600 transition hover:bg-stone-100"
              title="Back to resumes"
            >
              <ArrowLeft size={17} />
            </Link>

            <div className="hidden h-6 w-px bg-stone-200 sm:block" />

            <div>
              <div className="flex items-center gap-2">
                <FileText
                  size={15}
                  className="text-[#987542]"
                />

                <span className="max-w-[260px] truncate text-sm font-semibold text-zinc-900">
                  {makeResumeTitle(resume)}
                </span>
              </div>

              <p className="mt-0.5 hidden text-[10px] text-zinc-400 sm:block">
                Professional resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/templates"
              className="hidden items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600 transition hover:bg-stone-50 sm:flex"
              title="Change template"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#987542]" />
              <span className="capitalize">{selectedTemplate}</span>
              <span className="text-zinc-400">· Change</span>
            </Link>

            {saved && (
              <span className="hidden items-center gap-1.5 text-xs font-medium text-emerald-600 sm:flex">
                <Check size={14} />
                Saved
              </span>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="flex h-9 items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 text-xs font-medium text-zinc-700 transition hover:bg-stone-50"
            >
              <Save size={15} />
              <span className="hidden sm:inline">
                Save
              </span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex h-9 items-center gap-2 rounded-lg bg-zinc-950 px-3 text-xs font-medium text-white transition hover:bg-zinc-800"
            >
              <Download size={15} />
              <span className="hidden sm:inline">
                Download
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileEditorOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-zinc-600 lg:hidden"
              title="Open editor"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          BUILDER BODY
      ====================================================== */}

      <div className="flex min-h-[calc(100vh-68px)]">
        {/* ===================================================
            DESKTOP EDITOR
        ==================================================== */}

        <aside className="hidden w-[390px] shrink-0 border-r border-stone-200 bg-white lg:block">
          <div className="sticky top-[68px] h-[calc(100vh-68px)] overflow-y-auto">
            <div className="border-b border-stone-200 px-5 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-950">
                    Resume Editor
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500">
                    Build your resume section by section.
                  </p>
                </div>

                <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
                  Draft
                </div>
              </div>
            </div>

            <EditorPanel
              resume={resume}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              updatePersonal={updatePersonal}
              updateResumeField={updateResumeField}
              updateExperience={updateExperience}
              addExperience={addExperience}
              removeExperience={removeExperience}
              updateEducation={updateEducation}
              addEducation={addEducation}
              removeEducation={removeEducation}
              updateProject={updateProject}
              addProject={addProject}
              removeProject={removeProject}
              updateCertification={updateCertification}
              addCertification={addCertification}
              removeCertification={removeCertification}
              updateLanguage={updateLanguage}
              addLanguage={addLanguage}
              removeLanguage={removeLanguage}
              addSkill={addSkill}
              removeSkill={removeSkill}
            />
          </div>
        </aside>

        {/* ===================================================
            MOBILE EDITOR
        ==================================================== */}

        {mobileEditorOpen && (
          <>
            <button
              type="button"
              aria-label="Close editor"
              onClick={() => setMobileEditorOpen(false)}
              className="fixed inset-0 z-[60] bg-zinc-950/30 lg:hidden"
            />

            <aside className="fixed bottom-0 left-0 top-0 z-[70] w-[92%] max-w-[390px] overflow-y-auto bg-white shadow-2xl lg:hidden">
              <div className="sticky top-0 z-10 flex h-[68px] items-center justify-between border-b border-stone-200 bg-white px-5">
                <div>
                  <h2 className="text-sm font-semibold">
                    Resume Editor
                  </h2>

                  <p className="text-[10px] text-zinc-400">
                    Edit your resume
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileEditorOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-zinc-600"
                >
                  <X size={17} />
                </button>
              </div>

              <EditorPanel
                resume={resume}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                updatePersonal={updatePersonal}
                updateResumeField={updateResumeField}
                updateExperience={updateExperience}
                addExperience={addExperience}
                removeExperience={removeExperience}
                updateEducation={updateEducation}
                addEducation={addEducation}
                removeEducation={removeEducation}
                updateProject={updateProject}
                addProject={addProject}
                removeProject={removeProject}
                updateCertification={updateCertification}
                addCertification={addCertification}
                removeCertification={removeCertification}
                updateLanguage={updateLanguage}
                addLanguage={addLanguage}
                removeLanguage={removeLanguage}
                addSkill={addSkill}
                removeSkill={removeSkill}
              />
            </aside>
          </>
        )}

        {/* ===================================================
            PREVIEW
        ==================================================== */}

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="min-h-full px-4 py-7 sm:px-8 lg:px-10 lg:py-10">
            <div className="mx-auto mb-5 flex max-w-[760px] items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#987542]">
                  Live Preview
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  Changes appear instantly
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-zinc-500 shadow-sm">
                <Eye size={14} />
                A4 Preview
              </div>
            </div>

            <div
              id="resume-download-area"
              className="mx-auto w-full max-w-[760px] bg-white"
            >
              <TemplateRenderer
                resume={resume}
                template={selectedTemplate}
              />
            </div>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}

function EditorPanel({
  resume,
  activeSection,
  setActiveSection,
  updatePersonal,
  updateResumeField,
  updateExperience,
  addExperience,
  removeExperience,
  updateEducation,
  addEducation,
  removeEducation,
  updateProject,
  addProject,
  removeProject,
  updateCertification,
  addCertification,
  removeCertification,
  updateLanguage,
  addLanguage,
  removeLanguage,
  addSkill,
  removeSkill,
}) {
  return (
    <div className="p-5">
      {/* Section navigation */}
      <div className="mb-6 space-y-1">
        {sectionMeta.map((section) => {
          const Icon = section.icon;
          const isActive =
            activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() =>
                setActiveSection(section.id)
              }
              className={[
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition",
                isActive
                  ? "bg-zinc-950 text-white"
                  : "text-zinc-600 hover:bg-stone-100",
              ].join(" ")}
            >
              <Icon size={16} />

              <span className="text-xs font-medium">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-stone-200 pt-6">
        {/* =================================================
            PERSONAL
        ================================================== */}

        {activeSection === "personal" && (
          <section>
            <SectionHeader
              icon={User}
              title="Personal Information"
              description="Your basic contact details."
            />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="First name"
                  value={resume.personal.firstName}
                  onChange={(value) =>
                    updatePersonal(
                      "firstName",
                      value,
                    )
                  }
                  placeholder="Alex"
                />

                <InputField
                  label="Last name"
                  value={resume.personal.lastName}
                  onChange={(value) =>
                    updatePersonal(
                      "lastName",
                      value,
                    )
                  }
                  placeholder="Morgan"
                />
              </div>

              <InputField
                label="Professional title"
                value={resume.personal.title}
                onChange={(value) =>
                  updatePersonal(
                    "title",
                    value,
                  )
                }
                placeholder="Software Engineer"
              />

              <InputField
                label="Email"
                type="email"
                value={resume.personal.email}
                onChange={(value) =>
                  updatePersonal(
                    "email",
                    value,
                  )
                }
                placeholder="you@example.com"
              />

              <InputField
                label="Phone"
                value={resume.personal.phone}
                onChange={(value) =>
                  updatePersonal(
                    "phone",
                    value,
                  )
                }
                placeholder="+91 98765 43210"
              />

              <InputField
                label="Location"
                value={resume.personal.location}
                onChange={(value) =>
                  updatePersonal(
                    "location",
                    value,
                  )
                }
                placeholder="Gurugram, Haryana"
              />

              <InputField
                label="Website"
                value={resume.personal.website}
                onChange={(value) =>
                  updatePersonal(
                    "website",
                    value,
                  )
                }
                placeholder="yourwebsite.com"
              />
            </div>
          </section>
        )}

        {/* =================================================
            SUMMARY
        ================================================== */}

        {activeSection === "summary" && (
          <section>
            <SectionHeader
              icon={FileText}
              title="Professional Summary"
              description="A short introduction to your professional profile."
            />

            <TextareaField
              label="Summary"
              value={resume.summary}
              onChange={(value) =>
                updateResumeField(
                  "summary",
                  value,
                )
              }
              placeholder="Write a concise professional summary..."
              rows={9}
            />

            <p className="mt-2 text-[10px] leading-5 text-zinc-400">
              Keep this section focused on your experience, strengths and
              professional direction.
            </p>
          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {activeSection === "experience" && (
          <section>
            <SectionHeader
              icon={BriefcaseBusiness}
              title="Experience"
              description="Add your professional work history."
            />

            <div className="space-y-5">
              {resume.experience.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GripVertical
                          size={14}
                          className="text-zinc-300"
                        />

                        <span className="text-[11px] font-semibold text-zinc-700">
                          Experience {index + 1}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeExperience(
                            item.id,
                          )
                        }
                        className="text-zinc-400 hover:text-red-600"
                        title="Remove experience"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <InputField
                        label="Position"
                        value={item.position}
                        onChange={(value) =>
                          updateExperience(
                            item.id,
                            "position",
                            value,
                          )
                        }
                        placeholder="Senior Software Engineer"
                      />

                      <InputField
                        label="Company"
                        value={item.company}
                        onChange={(value) =>
                          updateExperience(
                            item.id,
                            "company",
                            value,
                          )
                        }
                        placeholder="Company name"
                      />

                      <InputField
                        label="Location"
                        value={item.location}
                        onChange={(value) =>
                          updateExperience(
                            item.id,
                            "location",
                            value,
                          )
                        }
                        placeholder="Gurugram, India"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <InputField
                          label="Start"
                          value={item.startDate}
                          onChange={(value) =>
                            updateExperience(
                              item.id,
                              "startDate",
                              value,
                            )
                          }
                          placeholder="2022"
                        />

                        <InputField
                          label="End"
                          value={item.endDate}
                          onChange={(value) =>
                            updateExperience(
                              item.id,
                              "endDate",
                              value,
                            )
                          }
                          placeholder="Present"
                        />
                      </div>

                      <TextareaField
                        label="Description"
                        value={item.description}
                        onChange={(value) =>
                          updateExperience(
                            item.id,
                            "description",
                            value,
                          )
                        }
                        placeholder="Describe your responsibilities and achievements..."
                        rows={5}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addExperience}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 transition hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Experience
            </button>
          </section>
        )}

        {/* =================================================
            EDUCATION
        ================================================== */}

        {activeSection === "education" && (
          <section>
            <SectionHeader
              icon={GraduationCap}
              title="Education"
              description="Add your academic background."
            />

            <div className="space-y-5">
              {resume.education.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-zinc-700">
                        Education {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeEducation(
                            item.id,
                          )
                        }
                        className="text-zinc-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <InputField
                        label="Degree"
                        value={item.degree}
                        onChange={(value) =>
                          updateEducation(
                            item.id,
                            "degree",
                            value,
                          )
                        }
                        placeholder="Bachelor's Degree"
                      />

                      <InputField
                        label="School / University"
                        value={item.school}
                        onChange={(value) =>
                          updateEducation(
                            item.id,
                            "school",
                            value,
                          )
                        }
                        placeholder="University name"
                      />

                      <InputField
                        label="Location"
                        value={item.location}
                        onChange={(value) =>
                          updateEducation(
                            item.id,
                            "location",
                            value,
                          )
                        }
                        placeholder="New Delhi, India"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <InputField
                          label="Start"
                          value={item.startDate}
                          onChange={(value) =>
                            updateEducation(
                              item.id,
                              "startDate",
                              value,
                            )
                          }
                          placeholder="2018"
                        />

                        <InputField
                          label="End"
                          value={item.endDate}
                          onChange={(value) =>
                            updateEducation(
                              item.id,
                              "endDate",
                              value,
                            )
                          }
                          placeholder="2021"
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addEducation}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 transition hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Education
            </button>
          </section>
        )}

        {/* =================================================
            SKILLS
        ================================================== */}

        {activeSection === "skills" && (
          <section>
            <SectionHeader
              icon={Code2}
              title="Skills"
              description="Highlight your strongest professional skills."
            />

            <div className="space-y-2">
              {resume.skills.map(
                (skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <input
                      value={skill}
                      onChange={(event) => {
                        const value =
                          event.target.value;

                        setResumeSkills(
                          value,
                          index,
                        );
                      }}
                      className="h-10 min-w-0 flex-1 rounded-lg border border-stone-200 bg-white px-3 text-sm outline-none focus:border-zinc-900"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeSkill(index)
                      }
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addSkill}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Skill
            </button>
          </section>
        )}

        {/* =================================================
            PROJECTS
        ================================================== */}

        {activeSection === "projects" && (
          <section>
            <SectionHeader
              icon={FolderKanban}
              title="Projects"
              description="Showcase relevant work and achievements."
            />

            <div className="space-y-5">
              {resume.projects.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-zinc-700">
                        Project {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeProject(
                            item.id,
                          )
                        }
                        className="text-zinc-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <InputField
                        label="Project name"
                        value={item.name}
                        onChange={(value) =>
                          updateProject(
                            item.id,
                            "name",
                            value,
                          )
                        }
                        placeholder="Project name"
                      />

                      <InputField
                        label="Project link"
                        value={item.link}
                        onChange={(value) =>
                          updateProject(
                            item.id,
                            "link",
                            value,
                          )
                        }
                        placeholder="project.com"
                      />

                      <TextareaField
                        label="Description"
                        value={item.description}
                        onChange={(value) =>
                          updateProject(
                            item.id,
                            "description",
                            value,
                          )
                        }
                        placeholder="Describe the project..."
                        rows={5}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addProject}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Project
            </button>
          </section>
        )}

        {/* =================================================
            CERTIFICATIONS
        ================================================== */}

        {activeSection === "certifications" && (
          <section>
            <SectionHeader
              icon={Award}
              title="Certifications"
              description="Add relevant professional certifications."
            />

            <div className="space-y-5">
              {resume.certifications.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-zinc-700">
                        Certification {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeCertification(
                            item.id,
                          )
                        }
                        className="text-zinc-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <InputField
                        label="Certification"
                        value={item.name}
                        onChange={(value) =>
                          updateCertification(
                            item.id,
                            "name",
                            value,
                          )
                        }
                        placeholder="Certification name"
                      />

                      <InputField
                        label="Issuer"
                        value={item.issuer}
                        onChange={(value) =>
                          updateCertification(
                            item.id,
                            "issuer",
                            value,
                          )
                        }
                        placeholder="Issuing organization"
                      />

                      <InputField
                        label="Year"
                        value={item.year}
                        onChange={(value) =>
                          updateCertification(
                            item.id,
                            "year",
                            value,
                          )
                        }
                        placeholder="2025"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addCertification}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Certification
            </button>
          </section>
        )}

        {/* =================================================
            LANGUAGES
        ================================================== */}

        {activeSection === "languages" && (
          <section>
            <SectionHeader
              icon={Languages}
              title="Languages"
              description="Add languages and proficiency levels."
            />

            <div className="space-y-4">
              {resume.languages.map(
                (item, index) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-zinc-700">
                        Language {index + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          removeLanguage(
                            item.id,
                          )
                        }
                        className="text-zinc-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <InputField
                        label="Language"
                        value={item.name}
                        onChange={(value) =>
                          updateLanguage(
                            item.id,
                            "name",
                            value,
                          )
                        }
                        placeholder="English"
                      />

                      <InputField
                        label="Level"
                        value={item.level}
                        onChange={(value) =>
                          updateLanguage(
                            item.id,
                            "level",
                            value,
                          )
                        }
                        placeholder="Professional"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={addLanguage}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-stone-300 text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:bg-stone-50"
            >
              <Plus size={15} />
              Add Language
            </button>
          </section>
        )}
      </div>
    </div>
  );

  function setResumeSkills(value, index) {
    const nextSkills = [...resume.skills];
    nextSkills[index] = value;

    updateResumeField("skills", nextSkills);
  }
}

export default Builder;