import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

const templates = [
  "Executive",
  "Modern",
  "Minimal",
  "Corporate",
  "Creative",
  "ATS",
  "Tech",
  "Elegant",
];

function Templates() {
  return (
    <div className="page-container py-14 sm:py-20">
      <div className="max-w-2xl">
        <Badge variant="accent">Resume Templates</Badge>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
          Templates designed to make your experience stand out.
        </h1>

        <p className="mt-5 text-base leading-7 text-zinc-500">
          Choose a professional foundation for your resume. More detailed
          template designs will be introduced in the next stages.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => (
          <Card
            key={template}
            className="group cursor-pointer overflow-hidden p-0 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="aspect-[0.707] bg-stone-100 p-5">
              <div className="h-full bg-white p-5 shadow-sm">
                <div className="h-3 w-2/3 bg-zinc-900" />
                <div className="mt-2 h-1.5 w-1/2 bg-zinc-200" />

                <div className="mt-6 space-y-2">
                  <div className="h-1.5 w-full bg-zinc-200" />
                  <div className="h-1.5 w-5/6 bg-zinc-200" />
                  <div className="h-1.5 w-4/6 bg-zinc-200" />
                </div>

                <div className="mt-6 space-y-2">
                  <div className="h-1.5 w-3/4 bg-zinc-900" />
                  <div className="h-1.5 w-full bg-zinc-200" />
                  <div className="h-1.5 w-5/6 bg-zinc-200" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-sm font-semibold text-zinc-900">
                {template}
              </span>

              <span className="text-xs text-zinc-400">
                0{index + 1}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Templates;
