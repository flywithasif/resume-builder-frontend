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

import { useState } from "react";
import { Link } from "react-router-dom";

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

function ResumePreview({ resume }) {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(24,24,27,0.12)]">
        <div className="min-h-[1060px] p-[8%] text-zinc-900">
          {/* Header */}
          <header className="border-b-2 border-zinc-900 pb-5">
            <h1 className="text-[30px] font-bold tracking-[-0.04em]">
              {resume.personal.firstName || "Your"}{" "}
              {resume.personal.lastName || "Name"}
            </h1>

            <p className="mt-1 text-[14px] font-medium text-zinc-600">
              {resume.personal.title || "Professional Title"}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] text-zinc-500">
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
          </header>

          {/* Summary */}
          {resume.summary && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Profile
              </h2>

              <p className="mt-2.5 text-[9px] leading-[1.7] text-zinc-600">
                {resume.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {resume.experience.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Experience
              </h2>

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
                          {item.location
                            ? ` · ${item.location}`
                            : ""}
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

          {/* Education */}
          {resume.education.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Education
              </h2>

              <div className="mt-3 space-y-4">
                {resume.education.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[10px] font-bold">
                          {item.degree}
                        </h3>

                        <p className="mt-0.5 text-[8.5px] text-zinc-500">
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

          {/* Skills */}
          {resume.skills.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Skills
              </h2>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {resume.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-zinc-100 px-2 py-1 text-[8px] font-medium text-zinc-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {resume.projects.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Projects
              </h2>

              <div className="mt-3 space-y-4">
                {resume.projects.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[10px] font-bold">
                        {item.name}
                      </h3>

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

          {/* Certifications */}
          {resume.certifications.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Certifications
              </h2>

              <div className="mt-3 space-y-2">
                {resume.certifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[9px] font-semibold">
                        {item.name}
                      </p>

                      <p className="text-[8px] text-zinc-500">
                        {item.issuer}
                      </p>
                    </div>

                    <span className="text-[8px] text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {resume.languages.length > 0 && (
            <section className="mt-6">
              <h2 className="border-b border-zinc-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Languages
              </h2>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
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
        </div>
      </div>
    </div>
  );
}

function Builder() {
  const [resume, setResume] = useState(initialResume);

  const [activeSection, setActiveSection] =
    useState("personal");

  const [mobileEditorOpen, setMobileEditorOpen] =
    useState(false);

  const [saved, setSaved] = useState(false);

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

  const handleSave = () => {
    localStorage.setItem(
      "resume_builder_draft",
      JSON.stringify(resume),
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
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

                <span className="text-sm font-semibold text-zinc-900">
                  Alex Morgan — Resume
                </span>
              </div>

              <p className="mt-0.5 hidden text-[10px] text-zinc-400 sm:block">
                Professional resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
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

            <ResumePreview resume={resume} />
          </div>
        </main>
      </div>
    </div>
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