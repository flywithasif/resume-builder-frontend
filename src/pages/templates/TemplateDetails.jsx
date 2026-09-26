import { useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/ui/Badge";

const templates = {
  executive: {
    name: "Executive",
    description:
      "A polished, structured layout for experienced professionals and leadership roles.",
    accent: "bg-zinc-900",
  },
  modern: {
    name: "Modern",
    description:
      "A clean contemporary layout with strong hierarchy and generous spacing.",
    accent: "bg-[#987542]",
  },
  minimal: {
    name: "Minimal",
    description:
      "A simple, distraction-free resume focused on content and readability.",
    accent: "bg-zinc-700",
  },
  corporate: {
    name: "Corporate",
    description:
      "A professional business-focused design suited to corporate applications.",
    accent: "bg-slate-800",
  },
  creative: {
    name: "Creative",
    description:
      "A distinctive layout for designers, marketers and creative professionals.",
    accent: "bg-[#987542]",
  },
  ats: {
    name: "ATS",
    description:
      "A straightforward, parser-friendly structure designed for ATS readability.",
    accent: "bg-zinc-900",
  },
  tech: {
    name: "Tech",
    description:
      "A crisp technical layout for developers, engineers and technology roles.",
    accent: "bg-slate-700",
  },
  elegant: {
    name: "Elegant",
    description:
      "A refined premium style with subtle visual details and strong typography.",
    accent: "bg-[#987542]",
  },
};

function Preview({ template }) {
  return (
    <div className="aspect-[0.707] w-full max-w-[520px] overflow-hidden bg-stone-100 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:p-10">
      <div className="relative h-full bg-white p-7 shadow-sm sm:p-9">
        {template.name === "Creative" && (
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[42px] bg-[#987542]/10" />
        )}

        {template.name === "Tech" && (
          <div className="absolute left-0 top-0 h-full w-1.5 bg-slate-700" />
        )}

        <div className={`h-4 w-2/3 rounded-sm ${template.accent}`} />
        <div className="mt-2 h-2 w-1/2 rounded-sm bg-zinc-200" />

        <div className="mt-8 grid grid-cols-[1fr_2.2fr] gap-7">
          <div className="space-y-3">
            <div className="h-2 w-3/4 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-200" />
            <div className="h-2 w-5/6 rounded bg-zinc-200" />
            <div className="mt-7 h-2 w-2/3 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-200" />
            <div className="h-2 w-4/5 rounded bg-zinc-200" />
            <div className="h-2 w-11/12 rounded bg-zinc-200" />
          </div>

          <div className="space-y-3">
            <div className="h-2 w-1/3 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-200" />
            <div className="h-2 w-11/12 rounded bg-zinc-200" />
            <div className="h-2 w-4/5 rounded bg-zinc-200" />

            <div className="mt-7 h-2 w-2/5 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-200" />
            <div className="h-2 w-10/12 rounded bg-zinc-200" />
            <div className="h-2 w-3/4 rounded bg-zinc-200" />

            <div className="mt-7 h-2 w-1/3 rounded bg-zinc-800" />
            <div className="h-2 w-full rounded bg-zinc-200" />
            <div className="h-2 w-5/6 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateDetails() {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const template = templates[templateId];

  if (!template) {
    return (
      <div className="min-h-screen bg-[#faf9f7]">
        <div className="page-container py-24 text-center">
          <Badge variant="accent">Template</Badge>
          <h1 className="mt-5 text-4xl font-semibold text-zinc-950">
            Template not found
          </h1>
          <button
            type="button"
            onClick={() => navigate("/templates")}
            className="mt-8 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-[#987542]"
          >
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  const useTemplate = () => {
    localStorage.setItem("resumely_template", templateId);
    localStorage.setItem("resumely_template_name", template.name);
    navigate("/builder");
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="page-container py-10 sm:py-14 lg:py-20">
        <button
          type="button"
          onClick={() => navigate("/templates")}
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
        >
          ← Back to templates
        </button>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Badge variant="accent">Resume Template</Badge>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              {template.name}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              {template.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={useTemplate}
                className="rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#987542]"
              >
                Use This Template
              </button>

              <button
                type="button"
                onClick={() => navigate("/templates")}
                className="rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300"
              >
                View All Templates
              </button>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              {["Professional", "Responsive", "ATS Ready"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-white p-3 text-center text-[11px] font-medium text-zinc-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Preview template={template} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateDetails;
