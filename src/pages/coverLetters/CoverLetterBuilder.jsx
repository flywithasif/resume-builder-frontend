import {
  ArrowLeft,
  Download,
  Eye,
  FileText,
  Save,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  Link,
  useSearchParams,
} from "react-router-dom";

import jsPDF from "jspdf";

import coverLetterTemplates from "../../data/coverLetterTemplates";

const STORAGE_KEY = "resumely_cover_letters";

const defaultData = {
  title: "My Cover Letter",
  template: "modern",

  fullName: "Your Name",
  email: "you@example.com",
  phone: "+91 98765 43210",
  location: "Gurgaon, India",

  date: new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),

  hiringManager: "Hiring Manager",
  company: "Company Name",
  companyAddress: "Company Address",
  position: "Job Position",

  subject: "Application for Job Position",

  greeting: "Dear Hiring Manager,",

  opening:
    "I am writing to express my interest in the Job Position at Company Name. With my skills, experience, and strong interest in this opportunity, I believe I can contribute meaningful value to your team.",

  body:
    "Throughout my experience, I have developed strong problem-solving, communication, and collaboration skills. I enjoy taking ownership of my work, learning new technologies and processes, and working with teams to achieve meaningful results.",

  secondBody:
    "What particularly interests me about this opportunity is the chance to contribute to a growing organization while continuing to develop professionally. I am confident that my background and enthusiasm would allow me to make a positive contribution.",

  closing:
    "Thank you for taking the time to review my application. I would welcome the opportunity to discuss how my experience and skills can contribute to your team.",

  signOff: "Sincerely,",
};

function getSavedLetters() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function getQueryTemplate(searchParams) {
  const queryTemplate = searchParams.get("template");

  return (
    coverLetterTemplates.find(
      (template) => template.id === queryTemplate
    )?.id || "modern"
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-[#e2ddd4] bg-white px-3 text-sm text-zinc-900 outline-none transition focus:border-[#987542] focus:ring-2 focus:ring-[#987542]/10"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  rows = 5,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
        {label}
      </span>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-y rounded-lg border border-[#e2ddd4] bg-white px-3 py-2.5 text-sm leading-6 text-zinc-900 outline-none transition focus:border-[#987542] focus:ring-2 focus:ring-[#987542]/10"
      />
    </label>
  );
}

function CoverLetterPreview({ data, template }) {
  const accent = template?.accent || "#987542";

  const isMinimal =
    template?.layout === "minimal" ||
    template?.layout === "ats" ||
    template?.layout === "simple";

  const isBold = template?.layout === "bold";

  const isExecutive =
    template?.layout === "executive" ||
    template?.layout === "premium";

  const isCreative =
    template?.layout === "creative" ||
    template?.layout === "designer";

  return (
    <div
      id="cover-letter-print-area"
      className="cover-letter-paper relative min-h-[1123px] w-[794px] shrink-0 bg-white px-[72px] py-[66px] text-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {/* MODERN TOP */}
      {!isMinimal && (
        <div
          className="absolute left-0 right-0 top-0 h-2"
          style={{ backgroundColor: accent }}
        />
      )}

      {/* HEADER */}
      <header
        className={`border-b pb-7 ${
          isBold
            ? "border-zinc-900"
            : "border-zinc-200"
        }`}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="min-w-0">
            <h1
              className={`break-words text-[28px] font-bold tracking-[-0.03em] ${
                isBold ? "uppercase" : ""
              }`}
              style={{
                color:
                  isBold || isExecutive
                    ? accent
                    : "#18181b",
              }}
            >
              {data.fullName || "Your Name"}
            </h1>

            <p className="mt-2 text-[11px] font-medium text-zinc-500">
              {data.position || "Job Position"}
            </p>
          </div>

          {isCreative && (
            <div
              className="h-11 w-11 shrink-0 rounded-full"
              style={{ backgroundColor: accent }}
            />
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-zinc-500">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </header>

      {/* RECIPIENT */}
      <section className="mt-9">
        <div className="flex justify-between gap-8">
          <div className="text-[11px] leading-5 text-zinc-600">
            <p className="font-semibold text-zinc-900">
              {data.hiringManager || "Hiring Manager"}
            </p>

            <p>{data.company || "Company Name"}</p>

            {data.companyAddress && (
              <p>{data.companyAddress}</p>
            )}
          </div>

          <p className="text-right text-[10px] text-zinc-500">
            {data.date}
          </p>
        </div>
      </section>

      {/* SUBJECT */}
      <section className="mt-8">
        <p
          className="text-[11px] font-bold"
          style={{ color: accent }}
        >
          {data.subject ||
            `Application for ${data.position || "Job Position"}`}
        </p>
      </section>

      {/* CONTENT */}
      <main
        className={`mt-7 text-[11.5px] leading-[1.8] text-zinc-700 ${
          isExecutive ? "leading-[1.9]" : ""
        }`}
      >
        <p className="font-medium text-zinc-900">
          {data.greeting}
        </p>

        <p className="mt-6 whitespace-pre-line">
          {data.opening}
        </p>

        <p className="mt-5 whitespace-pre-line">
          {data.body}
        </p>

        <p className="mt-5 whitespace-pre-line">
          {data.secondBody}
        </p>

        <p className="mt-5 whitespace-pre-line">
          {data.closing}
        </p>

        <div className="mt-9">
          <p>{data.signOff}</p>

          <p
            className="mt-5 font-semibold"
            style={{ color: accent }}
          >
            {data.fullName || "Your Name"}
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="absolute bottom-9 left-[72px] right-[72px] border-t border-zinc-100 pt-3">
        <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-zinc-400">
          <span>{data.fullName || "Your Name"}</span>
          <span>{template?.name || "Modern"}</span>
        </div>
      </footer>
    </div>
  );
}

function CoverLetterBuilder() {
  const [searchParams] = useSearchParams();

  const editingId = searchParams.get("id");

  const queryTemplate = getQueryTemplate(searchParams);

  const [data, setData] = useState(() => {
    const savedLetters = getSavedLetters();

    if (editingId) {
      const existing = savedLetters.find(
        (item) => item.id === editingId
      );

      if (existing) {
        return {
          ...defaultData,
          ...existing,
        };
      }
    }

    return {
      ...defaultData,
      template: queryTemplate,
    };
  });

  const [saved, setSaved] = useState(false);
  const [previewMobile, setPreviewMobile] = useState(false);

  const selectedTemplate = useMemo(() => {
    return (
      coverLetterTemplates.find(
        (template) => template.id === data.template
      ) || coverLetterTemplates[0]
    );
  }, [data.template]);

  useEffect(() => {
    if (!editingId) {
      setData((current) => ({
        ...current,
        template: queryTemplate,
      }));
    }
  }, [editingId, queryTemplate]);

  const updateField = (field, value) => {
    setSaved(false);

    setData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const existingLetters = getSavedLetters();

    const id =
      editingId ||
      data.id ||
      `${Date.now()}`;

    const letter = {
      ...data,
      id,
      title:
        data.title?.trim() ||
        `${data.position || "Cover Letter"} - ${
          data.company || "Company"
        }`,
      updatedAt: new Date().toISOString(),
      createdAt:
        existingLetters.find((item) => item.id === id)
          ?.createdAt || new Date().toISOString(),
    };

    const index = existingLetters.findIndex(
      (item) => item.id === id
    );

    let updated;

    if (index >= 0) {
      updated = [...existingLetters];
      updated[index] = letter;
    } else {
      updated = [letter, ...existingLetters];
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    setData(letter);
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2200);
  };

  const handleDownload = () => {
    try {
      handleSave();

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

      const hexToRgb = (hex) => {
        const clean = String(hex || "#987542").replace("#", "");
        const value =
          clean.length === 3
            ? clean
                .split("")
                .map((value) => value + value)
                .join("")
            : clean;

        return {
          r: parseInt(value.substring(0, 2), 16) || 152,
          g: parseInt(value.substring(2, 4), 16) || 117,
          b: parseInt(value.substring(4, 6), 16) || 66,
        };
      };

      const accentRgb = hexToRgb(selectedTemplate?.accent);

      if (
        selectedTemplate?.layout !== "minimal" &&
        selectedTemplate?.layout !== "simple" &&
        selectedTemplate?.layout !== "ats"
      ) {
        pdf.setFillColor(
          accentRgb.r,
          accentRgb.g,
          accentRgb.b,
        );
        pdf.rect(0, 0, pageWidth, 3, "F");
      }

      pdf.setTextColor(24, 24, 27);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text(data.fullName || "Your Name", margin, 28);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(113, 113, 122);
      pdf.text(data.position || "Job Position", margin, 35);

      const contact = [
        data.email,
        data.phone,
        data.location,
      ]
        .filter(Boolean)
        .join("   •   ");

      pdf.setFontSize(8);
      pdf.text(contact, margin, 42);

      pdf.setDrawColor(228, 228, 231);
      pdf.line(margin, 49, pageWidth - margin, 49);

      let y = 63;

      pdf.setTextColor(39, 39, 42);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text(
        data.hiringManager || "Hiring Manager",
        margin,
        y,
      );

      y += 5;

      pdf.setFont("helvetica", "normal");
      pdf.text(
        data.company || "Company Name",
        margin,
        y,
      );

      y += 5;

      if (data.companyAddress) {
        pdf.text(data.companyAddress, margin, y);
        y += 5;
      }

      pdf.setTextColor(113, 113, 122);
      pdf.setFontSize(8);
      pdf.text(data.date || "", pageWidth - margin, 63, {
        align: "right",
      });

      y += 13;

      pdf.setTextColor(
        accentRgb.r,
        accentRgb.g,
        accentRgb.b,
      );
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text(
        data.subject ||
          `Application for ${data.position || "Job Position"}`,
        margin,
        y,
      );

      y += 13;

      pdf.setTextColor(63, 63, 70);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9.5);

      const lineHeight = 5.4;

      const addParagraph = (text, spacing = 7) => {
        if (!text) return;

        const lines = pdf.splitTextToSize(
          String(text),
          contentWidth,
        );

        const requiredHeight =
          lines.length * lineHeight + spacing;

        if (y + requiredHeight > pageHeight - 28) {
          pdf.addPage();
          y = margin;
        }

        pdf.text(lines, margin, y);
        y += lines.length * lineHeight + spacing;
      };

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(39, 39, 42);
      pdf.text(
        data.greeting || "Dear Hiring Manager,",
        margin,
        y,
      );

      y += 11;

      pdf.setFont("helvetica", "normal");

      addParagraph(data.opening);
      addParagraph(data.body);
      addParagraph(data.secondBody);
      addParagraph(data.closing);

      y += 4;

      if (y > pageHeight - 45) {
        pdf.addPage();
        y = margin;
      }

      pdf.text(
        data.signOff || "Sincerely,",
        margin,
        y,
      );

      y += 12;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(
        accentRgb.r,
        accentRgb.g,
        accentRgb.b,
      );
      pdf.text(
        data.fullName || "Your Name",
        margin,
        y,
      );

      pdf.setDrawColor(240, 240, 241);
      pdf.line(
        margin,
        pageHeight - 18,
        pageWidth - margin,
        pageHeight - 18,
      );

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(6.5);
      pdf.setTextColor(161, 161, 170);

      pdf.text(
        data.fullName || "Your Name",
        margin,
        pageHeight - 12,
      );

      pdf.text(
        selectedTemplate?.name || "Modern",
        pageWidth - margin,
        pageHeight - 12,
        { align: "right" },
      );

      const safeName = (
        data.title ||
        `${data.position || "Cover Letter"} - ${
          data.company || "Company"
        }`
      )
        .trim()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();

      pdf.save(`${safeName || "cover-letter"}.pdf`);
    } catch (error) {
      console.error(
        "Cover letter PDF download failed:",
        error,
      );

      window.alert(
        "PDF download failed. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#eeece7]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#ddd8cf] bg-white/95 backdrop-blur">
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              to="/dashboard/cover-letters"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e2ddd4] text-zinc-600 transition hover:bg-[#f5f2ed]"
            >
              <ArrowLeft size={17} />
            </Link>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-zinc-950">
                {editingId
                  ? "Edit Cover Letter"
                  : "New Cover Letter"}
              </p>

              <p className="hidden text-[10px] text-zinc-400 sm:block">
                {selectedTemplate.name} template
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setPreviewMobile((current) => !current)
              }
              className="flex h-9 items-center gap-2 rounded-lg border border-[#e2ddd4] bg-white px-3 text-xs font-medium text-zinc-700 hover:bg-[#f5f2ed] lg:hidden"
            >
              <Eye size={15} />
              Preview
            </button>

            <button
              type="button"
              onClick={handleSave}
              className={`flex h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold transition ${
                saved
                  ? "bg-emerald-600 text-white"
                  : "border border-[#e2ddd4] bg-white text-zinc-700 hover:bg-[#f5f2ed]"
              }`}
            >
              <Save size={15} />
              <span className="hidden sm:inline">
                {saved ? "Saved" : "Save"}
              </span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex h-9 items-center gap-2 rounded-lg bg-zinc-950 px-3 text-xs font-semibold text-white transition hover:bg-[#987542]"
            >
              <Download size={15} />
              <span className="hidden sm:inline">
                Download
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          WORKSPACE
      ====================================================== */}

      <main className="mx-auto grid max-w-[1700px] gap-5 p-4 sm:p-6 lg:grid-cols-[430px_minmax(0,1fr)] lg:p-7">
        {/* ===================================================
            LEFT EDITOR
        ==================================================== */}

        <aside
          className={`space-y-4 ${
            previewMobile ? "hidden lg:block" : ""
          }`}
        >
          {/* TEMPLATE */}
          <section className="rounded-2xl border border-[#ded9d0] bg-white p-5">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-[#987542]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#987542]">
                Template
              </p>
            </div>

            <div className="mt-4">
              <select
                value={data.template}
                onChange={(e) =>
                  updateField("template", e.target.value)
                }
                className="h-11 w-full rounded-xl border border-[#e2ddd4] bg-[#faf9f7] px-3 text-sm font-medium text-zinc-900 outline-none focus:border-[#987542]"
              >
                {coverLetterTemplates.map((template) => (
                  <option
                    key={template.id}
                    value={template.id}
                  >
                    {template.name} — {template.category}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* BASIC INFO */}
          <section className="rounded-2xl border border-[#ded9d0] bg-white p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3ede3] text-[#987542]">
                <FileText size={15} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-zinc-950">
                  Personal Information
                </h2>

                <p className="text-[10px] text-zinc-400">
                  Your contact details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <InputField
                label="Letter Name"
                value={data.title}
                onChange={(value) =>
                  updateField("title", value)
                }
                placeholder="My Cover Letter"
              />

              <InputField
                label="Full Name"
                value={data.fullName}
                onChange={(value) =>
                  updateField("fullName", value)
                }
                placeholder="Your Name"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Email"
                  value={data.email}
                  onChange={(value) =>
                    updateField("email", value)
                  }
                  placeholder="you@example.com"
                  type="email"
                />

                <InputField
                  label="Phone"
                  value={data.phone}
                  onChange={(value) =>
                    updateField("phone", value)
                  }
                  placeholder="+91..."
                />
              </div>

              <InputField
                label="Location"
                value={data.location}
                onChange={(value) =>
                  updateField("location", value)
                }
                placeholder="Gurgaon, India"
              />

              <InputField
                label="Date"
                value={data.date}
                onChange={(value) =>
                  updateField("date", value)
                }
                placeholder="28 September 2026"
              />
            </div>
          </section>

          {/* JOB INFO */}
          <section className="rounded-2xl border border-[#ded9d0] bg-white p-5">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#987542]">
                Job Information
              </p>

              <h2 className="mt-1 text-sm font-semibold text-zinc-950">
                Application details
              </h2>
            </div>

            <div className="space-y-4">
              <InputField
                label="Hiring Manager"
                value={data.hiringManager}
                onChange={(value) =>
                  updateField("hiringManager", value)
                }
                placeholder="Hiring Manager"
              />

              <InputField
                label="Company"
                value={data.company}
                onChange={(value) =>
                  updateField("company", value)
                }
                placeholder="Company Name"
              />

              <InputField
                label="Company Address"
                value={data.companyAddress}
                onChange={(value) =>
                  updateField("companyAddress", value)
                }
                placeholder="Company Address"
              />

              <InputField
                label="Position"
                value={data.position}
                onChange={(value) =>
                  updateField("position", value)
                }
                placeholder="Job Position"
              />

              <InputField
                label="Subject"
                value={data.subject}
                onChange={(value) =>
                  updateField("subject", value)
                }
                placeholder="Application for..."
              />

              <InputField
                label="Greeting"
                value={data.greeting}
                onChange={(value) =>
                  updateField("greeting", value)
                }
                placeholder="Dear Hiring Manager,"
              />
            </div>
          </section>

          {/* CONTENT */}
          <section className="rounded-2xl border border-[#ded9d0] bg-white p-5">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#987542]">
                Content
              </p>

              <h2 className="mt-1 text-sm font-semibold text-zinc-950">
                Write your message
              </h2>
            </div>

            <div className="space-y-5">
              <TextAreaField
                label="Opening Paragraph"
                value={data.opening}
                onChange={(value) =>
                  updateField("opening", value)
                }
                rows={6}
              />

              <TextAreaField
                label="Main Body"
                value={data.body}
                onChange={(value) =>
                  updateField("body", value)
                }
                rows={7}
              />

              <TextAreaField
                label="Second Paragraph"
                value={data.secondBody}
                onChange={(value) =>
                  updateField("secondBody", value)
                }
                rows={7}
              />

              <TextAreaField
                label="Closing"
                value={data.closing}
                onChange={(value) =>
                  updateField("closing", value)
                }
                rows={6}
              />

              <InputField
                label="Sign Off"
                value={data.signOff}
                onChange={(value) =>
                  updateField("signOff", value)
                }
                placeholder="Sincerely,"
              />
            </div>
          </section>

          {/* SAVE BOTTOM */}
          <button
            type="button"
            onClick={handleSave}
            className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition ${
              saved
                ? "bg-emerald-600 text-white"
                : "bg-zinc-950 text-white hover:bg-[#987542]"
            }`}
          >
            <Save size={16} />
            {saved ? "Cover Letter Saved" : "Save Cover Letter"}
          </button>
        </aside>

        {/* ===================================================
            RIGHT PREVIEW
        ==================================================== */}

        <section
          className={`min-w-0 rounded-2xl border border-[#d8d3ca] bg-[#dcd9d2] p-3 sm:p-6 lg:p-8 ${
            previewMobile ? "block" : "hidden lg:block"
          }`}
        >
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <p className="text-xs font-semibold text-zinc-600">
              Live Preview
            </p>

            <button
              type="button"
              onClick={() => setPreviewMobile(false)}
              className="text-xs font-semibold text-[#987542]"
            >
              Back to Editor
            </button>
          </div>

          <div className="flex min-w-0 justify-center overflow-auto pb-5">
            <CoverLetterPreview
              data={data}
              template={selectedTemplate}
            />
          </div>
        </section>
      </main>

      {/* =====================================================
          PRINT STYLES
      ====================================================== */}

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          html,
          body {
            background: white !important;
          }

          body * {
            visibility: hidden !important;
          }

          #cover-letter-print-area,
          #cover-letter-print-area * {
            visibility: visible !important;
          }

          #cover-letter-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 18mm !important;
            box-shadow: none !important;
            transform: none !important;
          }

          .cover-letter-paper {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
}

export default CoverLetterBuilder;