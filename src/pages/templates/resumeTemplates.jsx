import { Mail, MapPin, Phone } from "lucide-react";

export const TEMPLATE_META = [
  {
    id: "executive",
    name: "Executive",
    description: "Classic leadership-focused layout with strong hierarchy.",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean contemporary layout with a sharper visual rhythm.",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Quiet typography and generous whitespace.",
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Structured professional layout for traditional roles.",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Distinctive visual treatment for creative careers.",
  },
  {
    id: "ats",
    name: "ATS",
    description: "Simple machine-readable structure with clear sections.",
  },
  {
    id: "tech",
    name: "Tech",
    description: "Technical profile layout with a modern developer feel.",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Refined centered presentation with premium details.",
  },
];

function ResumeRenderer({ resume, template = "executive" }) {
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


export { ResumeRenderer };
