import { Mail, MapPin, Phone } from "lucide-react";

export const TEMPLATE_META = [
  {
    id: "executive",
    name: "Executive",
    description: "Classic leadership-focused layout with strong hierarchy.",
    category: "Leadership",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean contemporary layout with a sharper visual rhythm.",
    category: "Professional",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Quiet typography and generous whitespace.",
    category: "Minimal",
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Structured professional layout for traditional roles.",
    category: "Business",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Distinctive visual treatment for creative careers.",
    category: "Creative",
  },
  {
    id: "ats",
    name: "ATS",
    description: "Simple machine-readable structure with clear sections.",
    category: "ATS",
  },
  {
    id: "tech",
    name: "Tech",
    description: "Technical profile layout with a modern developer feel.",
    category: "Technology",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Refined centered presentation with premium details.",
    category: "Premium",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional one-column resume with timeless typography.",
    category: "Traditional",
  },
  {
    id: "bold",
    name: "Bold",
    description:
      "Strong headline treatment for confident professional profiles.",
    category: "Impact",
  },
  {
    id: "swiss",
    name: "Swiss",
    description:
      "Grid-led editorial layout inspired by Swiss typography.",
    category: "Editorial",
  },
  {
    id: "compact",
    name: "Compact",
    description:
      "Space-efficient design for detailed one-page resumes.",
    category: "Compact",
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description:
      "Modern two-column profile with a dedicated information rail.",
    category: "Two Column",
  },
  {
    id: "academic",
    name: "Academic",
    description:
      "Research-oriented structure for education and academic careers.",
    category: "Academic",
  },
  {
    id: "startup",
    name: "Startup",
    description:
      "Contemporary product-focused layout for startup professionals.",
    category: "Startup",
  },
  {
    id: "finance",
    name: "Finance",
    description:
      "Conservative high-clarity design for finance and consulting.",
    category: "Finance",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Clear professional layout for healthcare and clinical roles.",
    category: "Healthcare",
  },
  {
    id: "legal",
    name: "Legal",
    description:
      "Formal structured layout designed for legal professionals.",
    category: "Legal",
  },
  {
    id: "consulting",
    name: "Consulting",
    description:
      "Information-dense consulting layout with sharp hierarchy.",
    category: "Consulting",
  },
  {
    id: "editorial",
    name: "Editorial",
    description:
      "Sophisticated magazine-inspired layout with refined spacing.",
    category: "Editorial",
  },
];

export const TEMPLATE_IDS = TEMPLATE_META.map((template) => template.id);

export const TEMPLATE_SAMPLE_RESUME = {
  personal: {
    firstName: "Alex",
    lastName: "Morgan",
    title: "Senior Product Manager",
    email: "alex.morgan@email.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    website: "alexmorgan.com",
  },

  summary:
    "Product leader with 8+ years of experience building digital products, leading cross-functional teams, and translating customer problems into measurable business outcomes.",

  experience: [
    {
      id: "sample-exp-1",
      position: "Senior Product Manager",
      company: "Northstar Technologies",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "Present",
      description:
        "Led product strategy across three product lines, partnered with engineering and design, and improved activation through research-driven product launches.",
    },
    {
      id: "sample-exp-2",
      position: "Product Manager",
      company: "Orbit Digital",
      location: "New York, NY",
      startDate: "2019",
      endDate: "2022",
      description:
        "Owned roadmap planning, customer discovery, analytics, and go-to-market launches across web and mobile experiences.",
    },
  ],

  education: [
    {
      id: "sample-edu-1",
      degree: "B.S. Business Administration",
      school: "University of California",
      location: "Berkeley, CA",
      startDate: "2015",
      endDate: "2019",
    },
  ],

  skills: [
    "Product Strategy",
    "Product Analytics",
    "User Research",
    "Agile",
    "Roadmapping",
    "Figma",
    "SQL",
    "Leadership",
  ],

  projects: [
    {
      id: "sample-project-1",
      name: "Customer Experience Platform",
      link: "product.example.com",
      description:
        "Led development of a self-service platform that improved visibility and reduced manual operations.",
    },
  ],

  certifications: [
    {
      id: "sample-cert-1",
      name: "Certified Product Manager",
      issuer: "Product School",
      year: "2023",
    },
  ],

  languages: [
    {
      id: "sample-lang-1",
      name: "English",
      level: "Professional",
    },
    {
      id: "sample-lang-2",
      name: "Spanish",
      level: "Conversational",
    },
  ],
};

const TEMPLATE_STYLES = {
  executive: {
    layout: "standard",
    page: "bg-white text-zinc-900",
    header: "border-b-2 border-zinc-900 pb-5",
    name: "text-[30px] font-bold tracking-[-0.04em]",
    title: "text-[14px] font-medium text-zinc-600",
    section:
      "border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
    sectionText: "text-zinc-900",
    accent: "bg-zinc-900",
    accentText: "text-zinc-900",
  },

  modern: {
    layout: "standard",
    page: "bg-white text-zinc-900",
    header:
      "border-l-4 border-[#987542] bg-stone-50 px-5 py-4",
    name: "text-[30px] font-bold tracking-[-0.045em]",
    title: "text-[14px] font-medium text-[#987542]",
    section:
      "border-l-2 border-[#987542] pl-2 text-[11px] font-bold uppercase tracking-[0.14em]",
    sectionText: "text-[#987542]",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },

  minimal: {
    layout: "standard",
    page: "bg-white text-zinc-900",
    header: "pb-5",
    name: "text-[30px] font-semibold tracking-[-0.05em]",
    title: "text-[14px] font-normal text-zinc-500",
    section:
      "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500",
    sectionText: "text-zinc-500",
    accent: "bg-zinc-700",
    accentText: "text-zinc-700",
  },

  corporate: {
    layout: "standard",
    page: "bg-white text-zinc-900",
    header: "border-b border-slate-300 pb-5",
    name:
      "text-[29px] font-bold tracking-[-0.03em] text-slate-900",
    title: "text-[14px] font-medium text-slate-600",
    section:
      "border-b border-slate-300 pb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-800",
    sectionText: "text-slate-800",
    accent: "bg-slate-800",
    accentText: "text-slate-800",
  },

  creative: {
    layout: "creative",
    page: "bg-white text-zinc-900",
    header:
      "relative overflow-hidden rounded-2xl bg-zinc-950 px-5 py-5 text-white",
    name: "text-[30px] font-bold tracking-[-0.045em]",
    title: "text-[14px] font-medium text-[#d8c09b]",
    section:
      "border-b border-[#987542]/30 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#987542]",
    sectionText: "text-[#987542]",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },

  ats: {
    layout: "standard",
    page: "bg-white text-black",
    header: "border-b border-black pb-4",
    name: "text-[28px] font-bold",
    title: "text-[13px] font-medium text-black",
    section:
      "border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.1em]",
    sectionText: "text-black",
    accent: "bg-black",
    accentText: "text-black",
  },

  tech: {
    layout: "tech",
    page: "bg-white text-zinc-900",
    header:
      "border-l-4 border-slate-700 bg-slate-50 px-5 py-4",
    name:
      "text-[29px] font-bold tracking-[-0.04em] text-slate-900",
    title: "text-[13px] font-medium text-slate-600",
    section:
      "border-b border-slate-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700",
    sectionText: "text-slate-700",
    accent: "bg-slate-700",
    accentText: "text-slate-700",
  },

  elegant: {
    layout: "centered",
    page: "bg-white text-zinc-900",
    header:
      "border-b border-[#987542]/40 pb-5 text-center",
    name: "text-[30px] font-semibold tracking-[-0.04em]",
    title: "text-[14px] font-medium text-[#987542]",
    section:
      "border-b border-[#987542]/30 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#987542]",
    sectionText: "text-[#987542]",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },

  classic: {
    layout: "classic",
    page: "bg-white text-zinc-900",
    header: "border-b border-zinc-300 pb-4",
    name:
      "text-[29px] font-serif font-bold tracking-[-0.025em]",
    title: "text-[13px] font-serif italic text-zinc-600",
    section:
      "border-b border-zinc-400 pb-1 text-[10px] font-serif font-bold uppercase tracking-[0.1em]",
    sectionText: "text-zinc-900",
    accent: "bg-zinc-900",
    accentText: "text-zinc-900",
  },

  bold: {
    layout: "bold",
    page: "bg-white text-zinc-950",
    header: "bg-zinc-950 px-6 py-6 text-white",
    name:
      "text-[32px] font-black uppercase tracking-[-0.045em]",
    title:
      "text-[13px] font-semibold uppercase tracking-[0.12em] text-[#d8c09b]",
    section:
      "border-b-2 border-zinc-950 pb-1.5 text-[11px] font-black uppercase tracking-[0.12em]",
    sectionText: "text-zinc-950",
    accent: "bg-[#ae8954]",
    accentText: "text-[#987542]",
  },

  swiss: {
    layout: "swiss",
    page: "bg-white text-zinc-950",
    header: "border-b-4 border-zinc-950 pb-4",
    name:
      "text-[31px] font-bold tracking-[-0.055em]",
    title: "text-[13px] font-medium text-zinc-500",
    section:
      "border-b border-zinc-300 pb-1 text-[10px] font-bold uppercase tracking-[0.22em]",
    sectionText: "text-zinc-950",
    accent: "bg-[#ae8954]",
    accentText: "text-[#987542]",
  },

  compact: {
    layout: "compact",
    page: "bg-white text-zinc-900",
    header: "border-b border-zinc-200 pb-3",
    name:
      "text-[27px] font-bold tracking-[-0.04em]",
    title: "text-[12px] text-zinc-500",
    section:
      "border-b border-zinc-200 pb-1 text-[9px] font-bold uppercase tracking-[0.14em]",
    sectionText: "text-zinc-700",
    accent: "bg-zinc-800",
    accentText: "text-zinc-800",
  },

  sidebar: {
    layout: "sidebar",
    page: "bg-white text-zinc-900",
    header: "pb-4",
    name:
      "text-[28px] font-bold tracking-[-0.04em]",
    title: "text-[13px] font-medium text-[#987542]",
    section:
      "border-b border-zinc-200 pb-1.5 text-[10px] font-bold uppercase tracking-[0.14em]",
    sectionText: "text-zinc-900",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },

  academic: {
    layout: "academic",
    page: "bg-white text-zinc-900",
    header: "border-b border-zinc-900 pb-4",
    name: "text-[27px] font-serif font-bold",
    title: "text-[12px] text-zinc-600",
    section:
      "border-b border-zinc-900 pb-1 text-[10px] font-bold uppercase tracking-[0.08em]",
    sectionText: "text-zinc-900",
    accent: "bg-zinc-900",
    accentText: "text-zinc-900",
  },

  startup: {
    layout: "startup",
    page: "bg-[#fcfbf8] text-zinc-900",
    header: "rounded-2xl bg-[#f2ede4] px-5 py-5",
    name:
      "text-[30px] font-bold tracking-[-0.045em]",
    title: "text-[14px] font-medium text-[#987542]",
    section:
      "text-[10px] font-bold uppercase tracking-[0.18em] text-[#987542]",
    sectionText: "text-[#987542]",
    accent: "bg-[#ae8954]",
    accentText: "text-[#987542]",
  },

  finance: {
    layout: "finance",
    page: "bg-white text-slate-900",
    header: "border-b-2 border-slate-900 pb-4",
    name:
      "text-[28px] font-serif font-bold text-slate-900",
    title: "text-[12px] font-medium text-slate-600",
    section:
      "border-b border-slate-400 pb-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-800",
    sectionText: "text-slate-800",
    accent: "bg-slate-900",
    accentText: "text-slate-900",
  },

  healthcare: {
    layout: "healthcare",
    page: "bg-white text-zinc-900",
    header:
      "border-l-4 border-emerald-700 bg-emerald-50/60 px-5 py-4",
    name:
      "text-[29px] font-bold tracking-[-0.035em]",
    title:
      "text-[13px] font-medium text-emerald-800",
    section:
      "border-b border-emerald-200 pb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800",
    sectionText: "text-emerald-800",
    accent: "bg-emerald-700",
    accentText: "text-emerald-800",
  },

  legal: {
    layout: "legal",
    page: "bg-white text-zinc-900",
    header:
      "border-b border-zinc-900 pb-5 text-center",
    name:
      "text-[27px] font-serif font-bold tracking-[-0.02em]",
    title:
      "text-[12px] uppercase tracking-[0.12em] text-zinc-600",
    section:
      "border-b border-zinc-900 pb-1 text-[10px] font-serif font-bold uppercase tracking-[0.12em]",
    sectionText: "text-zinc-900",
    accent: "bg-zinc-900",
    accentText: "text-zinc-900",
  },

  consulting: {
    layout: "consulting",
    page: "bg-white text-zinc-900",
    header: "border-b-4 border-[#987542] pb-4",
    name:
      "text-[29px] font-bold tracking-[-0.045em]",
    title: "text-[12px] font-medium text-zinc-600",
    section:
      "border-b border-zinc-300 pb-1 text-[10px] font-bold uppercase tracking-[0.16em]",
    sectionText: "text-zinc-900",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },

  editorial: {
    layout: "editorial",
    page: "bg-[#fffdfa] text-zinc-900",
    header:
      "border-b border-[#987542]/40 pb-5",
    name:
      "text-[31px] font-serif font-semibold tracking-[-0.045em]",
    title: "text-[13px] italic text-zinc-500",
    section:
      "border-b border-[#987542]/30 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#987542]",
    sectionText: "text-[#987542]",
    accent: "bg-[#987542]",
    accentText: "text-[#987542]",
  },
};

function ContactLine({
  resume,
  centered = false,
  muted = false,
}) {
  return (
    <div
      className={[
        "mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[9px]",
        "break-words",
        muted ? "text-zinc-300" : "text-zinc-500",
        centered ? "justify-center" : "",
      ].join(" ")}
    >
      {resume.personal.email && (
        <span className="flex min-w-0 items-center gap-1 break-all">
          <Mail size={9} className="shrink-0" />
          {resume.personal.email}
        </span>
      )}

      {resume.personal.phone && (
        <span className="flex min-w-0 items-center gap-1">
          <Phone size={9} className="shrink-0" />
          {resume.personal.phone}
        </span>
      )}

      {resume.personal.location && (
        <span className="flex min-w-0 items-center gap-1">
          <MapPin size={9} className="shrink-0" />
          {resume.personal.location}
        </span>
      )}

      {resume.personal.website && (
        <span className="break-all">
          {resume.personal.website}
        </span>
      )}
    </div>
  );
}

function ResumeSections({
  resume,
  style,
  compact = false,
  centered = false,
}) {
  const sectionSpacing = compact ? "mt-4" : "mt-6";
  const bodyText = compact ? "text-[8px]" : "text-[8.5px]";
  const headingText = compact ? "text-[10px]" : "text-[11px]";

  const SectionTitle = ({ children }) => (
    <h2 className={`${style.section} ${style.sectionText}`}>
      {children}
    </h2>
  );

  return (
    <>
      {resume.summary && (
        <section className={sectionSpacing}>
          <SectionTitle>
            {style.layout === "academic"
              ? "Research Profile"
              : "Profile"}
          </SectionTitle>

          <p
            className={`mt-2.5 ${bodyText} leading-[1.65] text-zinc-600 break-words`}
          >
            {resume.summary}
          </p>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className={sectionSpacing}>
          <SectionTitle>Experience</SectionTitle>

          <div
            className={
              compact
                ? "mt-2.5 space-y-3"
                : "mt-3 space-y-5"
            }
          >
            {resume.experience.map((item) => (
              <div
                key={item.id}
                className="min-w-0"
              >
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3
                      className={`${headingText} font-bold break-words`}
                    >
                      {item.position}
                    </h3>

                    <p className="mt-0.5 text-[8.5px] font-medium text-zinc-500 break-words">
                      {item.company}
                      {item.location
                        ? ` · ${item.location}`
                        : ""}
                    </p>
                  </div>

                  <span className="shrink-0 text-[8px] text-zinc-400">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>

                <p
                  className={`mt-1.5 ${bodyText} leading-[1.6] text-zinc-600 break-words`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className={sectionSpacing}>
          <SectionTitle>Education</SectionTitle>

          <div
            className={
              compact
                ? "mt-2.5 space-y-3"
                : "mt-3 space-y-4"
            }
          >
            {resume.education.map((item) => (
              <div
                key={item.id}
                className="min-w-0"
              >
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3
                      className={`${
                        compact
                          ? "text-[9px]"
                          : "text-[10px]"
                      } font-bold break-words`}
                    >
                      {item.degree}
                    </h3>

                    <p className="mt-0.5 text-[8.5px] text-zinc-500 break-words">
                      {item.school}
                      {item.location
                        ? ` · ${item.location}`
                        : ""}
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

      {resume.skills?.length > 0 && (
        <section className={sectionSpacing}>
          <SectionTitle>Skills</SectionTitle>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className={[
                  "max-w-full px-2 py-1 text-[8px] font-medium",
                  "break-words",
                  style.layout === "ats"
                    ? "rounded-none border border-black text-black"
                    : style.layout === "editorial" ||
                        style.layout === "centered"
                      ? "rounded-full border border-[#987542]/30 text-[#987542]"
                      : style.layout === "startup"
                        ? "rounded-full bg-[#f2ede4] text-[#987542]"
                        : "rounded bg-zinc-100 text-zinc-600",
                ].join(" ")}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.projects?.length > 0 && (
        <section className={sectionSpacing}>
          <SectionTitle>Projects</SectionTitle>

          <div
            className={
              compact
                ? "mt-2.5 space-y-3"
                : "mt-3 space-y-4"
            }
          >
            {resume.projects.map((item) => (
              <div
                key={item.id}
                className="min-w-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <h3
                    className={`${headingText} font-bold break-words`}
                  >
                    {item.name}
                  </h3>

                  {item.link && (
                    <span className="break-all text-[8px] text-zinc-400">
                      {item.link}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-1.5 ${bodyText} leading-[1.6] text-zinc-600 break-words`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.certifications?.length > 0 && (
        <section className={sectionSpacing}>
          <SectionTitle>Certifications</SectionTitle>

          <div className="mt-3 space-y-2">
            {resume.certifications.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
              >
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold break-words">
                    {item.name}
                  </p>

                  <p className="text-[8px] text-zinc-500 break-words">
                    {item.issuer}
                  </p>
                </div>

                <span className="shrink-0 text-[8px] text-zinc-400">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.languages?.length > 0 && (
        <section className={sectionSpacing}>
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
    </>
  );
}

function ResumeRenderer({
  resume = TEMPLATE_SAMPLE_RESUME,
  template = "executive",
}) {
  const safeResume = {
    ...TEMPLATE_SAMPLE_RESUME,
    ...resume,

    personal: {
      ...TEMPLATE_SAMPLE_RESUME.personal,
      ...(resume?.personal || {}),
    },

    experience: resume?.experience || [],
    education: resume?.education || [],
    skills: resume?.skills || [],
    projects: resume?.projects || [],
    certifications: resume?.certifications || [],
    languages: resume?.languages || [],
  };

  const style =
    TEMPLATE_STYLES[template] ||
    TEMPLATE_STYLES.executive;

  const centered =
    style.layout === "centered" ||
    style.layout === "legal";

  const compact = style.layout === "compact";

  const Header = () => (
    <header className={style.header}>
      {style.layout === "creative" && (
        <>
          <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#987542]/20" />
          <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#987542]/10" />
        </>
      )}

      {style.layout === "bold" && (
        <div className="mb-3 h-1 w-16 bg-[#ae8954]" />
      )}

      {style.layout === "startup" && (
        <div className="mb-3 inline-flex rounded-full bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#987542]">
          Product Professional
        </div>
      )}

      <div className={centered ? "text-center" : ""}>
        <h1 className={`${style.name} break-words`}>
          {safeResume.personal.firstName || "Your"}{" "}
          {safeResume.personal.lastName || "Name"}
        </h1>

        <p
          className={`mt-1 ${style.title} break-words`}
        >
          {safeResume.personal.title ||
            "Professional Title"}
        </p>

        <ContactLine
          resume={safeResume}
          centered={centered}
          muted={
            style.layout === "creative" ||
            style.layout === "bold"
          }
        />
      </div>
    </header>
  );

  /* =========================================================
     SIDEBAR TEMPLATE
  ========================================================= */

  if (style.layout === "sidebar") {
    return (
      <div className="resume-print-area mx-auto w-full max-w-[760px]">
        <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
          <div className="grid min-h-[1060px] grid-cols-1 bg-white sm:grid-cols-[30%_70%]">
            <aside className="bg-zinc-950 p-5 text-white sm:p-[7%]">
              <div className="mb-7">
                <div className="mb-4 h-2 w-10 bg-[#ae8954]" />

                <h1 className="text-[27px] font-bold tracking-[-0.04em] break-words">
                  {safeResume.personal.firstName}
                </h1>

                <h1 className="text-[27px] font-bold tracking-[-0.04em] break-words">
                  {safeResume.personal.lastName}
                </h1>

                <p className="mt-2 text-[11px] font-medium text-[#d8c09b] break-words">
                  {safeResume.personal.title}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-[8px] text-zinc-300 sm:block sm:space-y-3">
                <p className="break-all">
                  {safeResume.personal.email}
                </p>

                <p>
                  {safeResume.personal.phone}
                </p>

                <p className="break-words">
                  {safeResume.personal.location}
                </p>

                <p className="break-all">
                  {safeResume.personal.website}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#d8c09b]">
                  Skills
                </h2>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-1 sm:space-y-1.5">
                  {safeResume.skills.map((skill) => (
                    <p
                      key={skill}
                      className="text-[8px] text-zinc-300 break-words"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#d8c09b]">
                  Languages
                </h2>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-1 sm:space-y-1.5">
                  {safeResume.languages.map((item) => (
                    <p
                      key={item.id}
                      className="text-[8px] text-zinc-300 break-words"
                    >
                      {item.name} · {item.level}
                    </p>
                  ))}
                </div>
              </div>
            </aside>

            <main className="min-w-0 p-5 sm:p-[7%]">
              <ResumeSections
                resume={safeResume}
                style={style}
                compact
              />
            </main>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     SWISS / CONSULTING
  ========================================================= */

  if (
    style.layout === "swiss" ||
    style.layout === "consulting"
  ) {
    return (
      <div className="resume-print-area mx-auto w-full max-w-[760px]">
        <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
          <div
            className={`min-h-[1060px] p-5 sm:p-[7.5%] ${style.page}`}
          >
            <Header />

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[0.38fr_1fr] sm:gap-8">
              <div className="min-w-0">
                <div
                  className={`h-2 w-12 ${style.accent}`}
                />

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Selected strengths
                </p>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 sm:space-y-2">
                  {safeResume.skills
                    .slice(0, 5)
                    .map((skill) => (
                      <p
                        key={skill}
                        className="text-[8px] font-medium text-zinc-600 break-words"
                      >
                        {skill}
                      </p>
                    ))}
                </div>
              </div>

              <div className="min-w-0">
                <ResumeSections
                  resume={safeResume}
                  style={style}
                  compact={style.layout === "consulting"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     ACADEMIC / FINANCE
  ========================================================= */

  if (
    style.layout === "academic" ||
    style.layout === "finance"
  ) {
    return (
      <div className="resume-print-area mx-auto w-full max-w-[760px]">
        <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
          <div
            className={`min-h-[1060px] p-5 sm:p-[8%] ${style.page}`}
          >
            <Header />

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2.2fr] sm:gap-7">
              <aside className="min-w-0">
                <div
                  className={`h-0.5 w-10 ${style.accent}`}
                />

                <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                  Core Skills
                </p>

                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 sm:space-y-2">
                  {safeResume.skills.map((skill) => (
                    <p
                      key={skill}
                      className="text-[8px] text-zinc-600 break-words"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </aside>

              <div className="min-w-0">
                <ResumeSections
                  resume={safeResume}
                  style={style}
                  compact={style.layout === "finance"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     STANDARD TEMPLATES
  ========================================================= */

  return (
    <div className="resume-print-area mx-auto w-full max-w-[760px]">
      <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
        <div
          className={`min-h-[1060px] p-5 sm:p-[8%] ${style.page}`}
        >
          <Header />

          {style.layout === "tech" && (
            <div className="mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3">
              {["Product", "Analytics", "Leadership"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded border border-slate-200 bg-slate-50 px-2 py-1.5 text-center text-[8px] font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}

          {style.layout === "creative" && (
            <div className="mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3">
              {["Strategy", "Research", "Growth"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded bg-zinc-950 px-2 py-1.5 text-center text-[8px] font-semibold text-[#d8c09b]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}

          {style.layout === "startup" && (
            <div className="mt-4 flex flex-wrap gap-2">
              {["Product", "Growth", "Leadership"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d8c09b] px-2.5 py-1 text-[8px] font-semibold text-[#987542]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          )}

          <ResumeSections
            resume={safeResume}
            style={style}
            compact={compact}
            centered={centered}
          />

          <div
            className={`mt-7 h-0.5 w-12 ${style.accent}`}
          />
        </div>
      </div>
    </div>
  );
}

export { ResumeRenderer };