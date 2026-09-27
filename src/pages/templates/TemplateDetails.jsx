import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  Maximize2,
  Sparkles,
} from "lucide-react";

import Badge from "../../components/ui/Badge";

import {
  ResumeRenderer,
  TEMPLATE_META,
  TEMPLATE_SAMPLE_RESUME,
} from "./resumeTemplates";

function TemplateDetails() {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const template = TEMPLATE_META.find(
    (item) => item.id === templateId
  );

  /* =========================================================
     TEMPLATE NOT FOUND
  ========================================================== */

  if (!template) {
    return (
      <div className="min-h-screen bg-[#faf9f7]">
        <div className="mx-auto max-w-[1200px] px-5 py-24 text-center sm:px-8">
          <Badge variant="accent">Template</Badge>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-zinc-950">
            Template not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
            This resume design does not exist in the current template
            library.
          </p>

          <button
            type="button"
            onClick={() => navigate("/templates")}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-zinc-950 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#987542]"
          >
            <ArrowLeft size={16} />
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================
     USE TEMPLATE
  ========================================================== */

  const useTemplate = () => {
    localStorage.setItem(
      "resumely_selected_template",
      template.id
    );

    localStorage.setItem(
      "resumely_template",
      template.id
    );

    localStorage.setItem(
      "resumely_template_name",
      template.name
    );

    navigate("/builder?new=1");
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-950">
      {/* =======================================================
          TOP BACK BAR
      ======================================================== */}

      <div className="border-b border-zinc-200/70 bg-[#faf9f7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate("/templates")}
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-950"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />

            Back to templates
          </button>
        </div>
      </div>

      {/* =======================================================
          MAIN
      ======================================================== */}

      <main className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid items-start gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[440px_minmax(0,1fr)] xl:gap-20">
          {/* =====================================================
              LEFT — TEMPLATE INFORMATION
          ====================================================== */}

          <section className="lg:sticky lg:top-8">
            {/* Eyebrow */}

            <div className="flex items-center gap-2">
              <span className="h-px w-7 bg-[#ae8954]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#987542]">
                Resume Template
              </span>
            </div>

            {/* Title */}

            <h1 className="mt-5 text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-zinc-950 sm:text-[56px] lg:text-[60px]">
              {template.name}
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-[390px] text-[15px] leading-7 text-zinc-500">
              {template.description}
            </p>

            {/* Category */}

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#e4ddd2] bg-white px-4 py-2.5 text-xs font-semibold text-zinc-600 shadow-[0_4px_20px_rgba(24,24,27,0.035)]">
              <span className="flex h-2 w-2 rounded-full bg-[#ae8954]" />

              {template.category}
            </div>

            {/* =================================================
                FEATURE SPECIFICATIONS
            ================================================== */}

            <div className="mt-9 overflow-hidden rounded-2xl border border-[#e5ded4] bg-white shadow-[0_10px_35px_rgba(24,24,27,0.035)]">
              <div className="grid grid-cols-3 divide-x divide-[#ece7df]">
                {/* A4 */}

                <div className="px-3 py-5 text-center sm:px-4">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f0e7] text-[#987542]">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700">
                    A4 Ready
                  </p>

                  <p className="mt-1 text-[9px] text-zinc-400">
                    Print ready
                  </p>
                </div>

                {/* Preview */}

                <div className="px-3 py-5 text-center sm:px-4">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f0e7] text-[#987542]">
                    <Eye size={14} strokeWidth={2.2} />
                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700">
                    Live Preview
                  </p>

                  <p className="mt-1 text-[9px] text-zinc-400">
                    Real template
                  </p>
                </div>

                {/* ATS */}

                <div className="px-3 py-5 text-center sm:px-4">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f0e7] text-[#987542]">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700">
                    ATS Conscious
                  </p>

                  <p className="mt-1 text-[9px] text-zinc-400">
                    Clean structure
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={useTemplate}
                className="group inline-flex h-13 flex-1 items-center justify-center gap-2.5 rounded-2xl bg-zinc-950 px-6 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(24,24,27,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#987542] hover:shadow-[0_18px_40px_rgba(152,117,66,0.18)]"
              >
                Use This Template

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => navigate("/templates")}
                className="inline-flex h-13 flex-1 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50"
              >
                View All Templates
              </button>
            </div>

            {/* =================================================
                PREMIUM NOTE
            ================================================== */}

            <div className="mt-8 border-t border-zinc-200 pt-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e6ddcf] bg-[#f6f0e7] text-[#987542]">
                  <Sparkles size={16} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    Crafted for professional applications
                  </p>

                  <p className="mt-1.5 max-w-[330px] text-xs leading-5 text-zinc-500">
                    Start with this professionally structured layout
                    and customize every section inside the builder.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT — PREMIUM PREVIEW EXPERIENCE
          ====================================================== */}

          <section className="min-w-0">
            <div className="overflow-hidden rounded-[30px] border border-[#e1dbd1] bg-[#ebe8e2] shadow-[0_30px_100px_rgba(24,24,27,0.09)]">
              {/* =================================================
                  PREVIEW HEADER
              ================================================== */}

              <div className="flex h-[70px] items-center justify-between border-b border-[#ddd7ce] bg-[#f4f2ee] px-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ded8cf] bg-white text-zinc-600 shadow-[0_3px_10px_rgba(24,24,27,0.04)]">
                    <Eye size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Live Preview
                    </p>

                    <p className="mt-0.5 text-[10px] text-zinc-400">
                      Exact template appearance
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden rounded-full border border-[#ded8cf] bg-white px-3 py-1.5 text-[10px] font-semibold text-zinc-500 sm:inline-flex">
                    {template.name}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ded8cf] bg-white text-zinc-400">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>

              {/* =================================================
                  DOCUMENT STAGE
              ================================================== */}

              <div className="relative min-h-[720px] overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.98)_0%,rgba(242,239,233,0.98)_42%,rgba(229,225,217,1)_100%)] px-4 py-10 sm:min-h-[820px] sm:px-8 sm:py-12 lg:min-h-[940px] lg:px-10 lg:py-14">
                {/* Ambient shadow */}

                <div className="pointer-events-none absolute left-1/2 top-14 h-40 w-[65%] -translate-x-1/2 rounded-full bg-black/[0.08] blur-[55px]" />

                {/* Small stage label */}

                <div className="absolute left-5 top-5 hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ae8954]" />
                  A4 Document
                </div>

                {/* =================================================
                    REAL RESUME

                    CSS ZOOM is intentionally used here.
                    Do NOT change this back to transform scale.
                ================================================== */}

                <div className="relative z-10 flex w-full justify-center">
                  <div
                    className="
                      shrink-0
                      [zoom:0.46]
                      sm:[zoom:0.56]
                      md:[zoom:0.62]
                      lg:[zoom:0.68]
                      xl:[zoom:0.73]
                    "
                  >
                    <ResumeRenderer
                      resume={TEMPLATE_SAMPLE_RESUME}
                      template={template.id}
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  PREVIEW FOOTER
              ================================================== */}

              <div className="flex items-center justify-between border-t border-[#ddd7ce] bg-[#f4f2ee] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>

                  <span className="text-[10px] font-semibold text-zinc-500">
                    Preview ready
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400">
                    {template.name}
                  </span>

                  <span className="text-zinc-300">·</span>

                  <span className="text-[10px] font-medium text-zinc-400">
                    A4
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TemplateDetails;