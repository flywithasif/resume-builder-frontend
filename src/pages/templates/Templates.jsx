import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

const templates = [
  {
    id: "executive",
    name: "Executive",
    description: "A polished, structured layout for experienced professionals and leadership roles.",
    accent: "bg-zinc-900",
    lines: ["bg-zinc-900", "bg-zinc-300", "bg-zinc-200"],
  },
  {
    id: "modern",
    name: "Modern",
    description: "A clean contemporary layout with strong hierarchy and generous spacing.",
    accent: "bg-[#987542]",
    lines: ["bg-[#987542]", "bg-zinc-300", "bg-zinc-200"],
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A simple, distraction-free resume focused on content and readability.",
    accent: "bg-zinc-700",
    lines: ["bg-zinc-700", "bg-zinc-200", "bg-zinc-200"],
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "A professional business-focused design suited to corporate applications.",
    accent: "bg-slate-800",
    lines: ["bg-slate-800", "bg-slate-300", "bg-slate-200"],
  },
  {
    id: "creative",
    name: "Creative",
    description: "A distinctive layout for designers, marketers and creative professionals.",
    accent: "bg-[#987542]",
    lines: ["bg-[#987542]", "bg-zinc-400", "bg-zinc-200"],
  },
  {
    id: "ats",
    name: "ATS",
    description: "A straightforward, parser-friendly structure designed for ATS readability.",
    accent: "bg-zinc-900",
    lines: ["bg-zinc-900", "bg-zinc-300", "bg-zinc-200"],
  },
  {
    id: "tech",
    name: "Tech",
    description: "A crisp technical layout for developers, engineers and technology roles.",
    accent: "bg-slate-700",
    lines: ["bg-slate-700", "bg-slate-300", "bg-zinc-200"],
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "A refined premium style with subtle visual details and strong typography.",
    accent: "bg-[#987542]",
    lines: ["bg-[#987542]", "bg-zinc-300", "bg-zinc-200"],
  },
];

function TemplatePreview({ template, large = false }) {
  const width = large ? "p-8 sm:p-10" : "p-5";
  const titleWidth =
    template.id === "creative"
      ? "w-3/4"
      : template.id === "minimal"
        ? "w-1/2"
        : "w-2/3";

  return (
    <div className={`aspect-[0.707] overflow-hidden bg-stone-100 ${width}`}>
      <div className="relative h-full overflow-hidden bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:p-7">
        {template.id === "creative" && (
          <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[32px] bg-[#987542]/10" />
        )}

        {template.id === "tech" && (
          <div className="absolute left-0 top-0 h-full w-1 bg-slate-700" />
        )}

        <div className={`h-3 ${titleWidth} rounded-sm ${template.accent}`} />
        <div className="mt-2 h-1.5 w-1/2 rounded-sm bg-zinc-200" />

        <div className="mt-6 grid grid-cols-[1fr_2.1fr] gap-4">
          <div className="space-y-2">
            <div className="h-1.5 w-3/4 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-5/6 rounded bg-zinc-200" />
            <div className="mt-4 h-1.5 w-2/3 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-4/5 rounded bg-zinc-200" />
          </div>

          <div className="space-y-2">
            <div className="h-1.5 w-1/3 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-11/12 rounded bg-zinc-200" />
            <div className="h-1.5 w-4/5 rounded bg-zinc-200" />

            <div className="mt-5 h-1.5 w-2/5 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-10/12 rounded bg-zinc-200" />
            <div className="h-1.5 w-3/4 rounded bg-zinc-200" />

            <div className="mt-5 h-1.5 w-1/3 rounded bg-zinc-800" />
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-5/6 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Templates() {
  const navigate = useNavigate();
  const selectedTemplate = localStorage.getItem("resumely_template");

  const chooseTemplate = (template) => {
    localStorage.setItem("resumely_template", template.id);
    localStorage.setItem("resumely_template_name", template.name);
    navigate("/builder?new=1");
  };

  const previewTemplate = (template) => {
    navigate(`/templates/${template.id}`);
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="page-container py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="accent">Resume Templates</Badge>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-6xl">
            Choose a design that
            <span className="block text-[#987542]">fits your career.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            Start with a professionally designed foundation, then build your
            resume with your own experience, skills and achievements.
          </p>
        </div>

        {selectedTemplate && (
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-full border border-[#987542]/20 bg-white px-4 py-2 text-xs text-zinc-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#987542]" />
            Current template:{" "}
            <span className="font-semibold capitalize text-zinc-900">
              {selectedTemplate}
            </span>
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template, index) => (
            <Card
              key={template.id}
              className="group overflow-hidden border border-zinc-200/80 bg-white p-0 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#987542]/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <button
                type="button"
                onClick={() => previewTemplate(template)}
                className="block w-full text-left"
                aria-label={`Preview ${template.name} template`}
              >
                <TemplatePreview template={template} />
              </button>

              <div className="border-t border-zinc-100 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-zinc-950">
                      {template.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {template.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold tracking-[0.16em] text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => previewTemplate(template)}
                    className="flex-1 rounded-xl border border-zinc-200 px-3 py-2.5 text-xs font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => chooseTemplate(template)}
                    className="flex-1 rounded-xl bg-zinc-950 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#987542]"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;
