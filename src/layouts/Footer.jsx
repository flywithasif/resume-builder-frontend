import {
  ArrowUpRight,
  Check,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   FOOTER NAVIGATION
========================================================= */

const productLinks = [
  { label: "Resume Builder", to: "/builder" },
  { label: "Cover Letter", to: "/cover-letter" },
  { label: "Templates", to: "/templates" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

const companyLinks = [
  { label: "About Resumely", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const resourceLinks = [
  { label: "Resume Tips", to: "/resources" },
  { label: "Career Guide", to: "/career-guide" },
  { label: "Help Center", to: "/help" },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#090909] text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute left-[-25%] top-[5%] h-[280px] w-[280px] rounded-full bg-[#b08d57]/[0.07] blur-[90px] sm:left-[-12%] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

        <div className="absolute right-[-25%] top-[35%] h-[320px] w-[320px] rounded-full bg-white/[0.025] blur-[90px] sm:right-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

        <div className="absolute bottom-[-15%] left-[25%] h-[350px] w-[350px] rounded-full bg-[#b08d57]/[0.045] blur-[110px] sm:bottom-[-20%] sm:left-[35%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT LAYER
      ====================================================== */}

      <div className="relative z-10">
        {/* ===================================================
            TOP CTA
        ==================================================== */}

        <section className="border-b border-white/[0.08]">
          <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
            <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
              {/* LEFT */}
              <div className="min-w-0">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.16em] !text-zinc-500 backdrop-blur sm:px-4 sm:tracking-[0.2em]">
                  <Sparkles
                    size={12}
                    className="shrink-0 !text-[#c6a36c]"
                  />

                  <span className="truncate">
                    Your career starts here
                  </span>
                </div>

                <h2 className="mt-6 max-w-4xl text-[42px] font-semibold leading-[0.95] tracking-[-0.055em] !text-white sm:mt-7 sm:text-6xl lg:text-[78px]">
                  Build a resume
                  <br />
                  worth{" "}
                  <span className="bg-gradient-to-r from-[#9b7847] via-[#d1b27d] to-[#8b693d] bg-clip-text text-transparent">
                    remembering.
                  </span>
                </h2>
              </div>

              {/* RIGHT */}
              <div className="min-w-0">
                <p className="max-w-md text-sm leading-7 !text-zinc-500 sm:text-base">
                  Create professional resumes and cover letters with a
                  focused, premium document-building experience designed
                  around your career.
                </p>

                {/* =================================================
                    CTA BUTTONS
                ================================================== */}

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  {/* START BUILDING */}
                  <Link
                    to="/register"
                    aria-label="Start building your resume"
                    className="
                      group
                      relative
                      z-10
                      inline-flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-[#c6a36c]
                      bg-[#c6a36c]
                      px-5
                      py-3.5
                      text-sm
                      font-semibold
                      !text-zinc-950
                      no-underline
                      shadow-[0_10px_30px_rgba(198,163,108,0.18)]
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-[#d8bd91]
                      hover:bg-[#d8bd91]
                      hover:!text-zinc-950
                      hover:shadow-[0_16px_40px_rgba(198,163,108,0.28)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#c6a36c]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#090909]
                      active:translate-y-0
                      sm:w-auto
                      sm:px-6
                    "
                  >
                    <span className="!text-zinc-950">
                      Start building
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="
                        !text-zinc-950
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </Link>

                  {/* EXPLORE TEMPLATES */}
                  <Link
                    to="/templates"
                    aria-label="Explore resume templates"
                    className="
                      group
                      relative
                      z-10
                      inline-flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/15
                      bg-white/[0.035]
                      px-5
                      py-3.5
                      text-sm
                      font-semibold
                      !text-white
                      no-underline
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-white/25
                      hover:bg-white/[0.09]
                      hover:!text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white/30
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#090909]
                      active:translate-y-0
                      sm:w-auto
                      sm:px-6
                    "
                  >
                    <span className="!text-white">
                      Explore templates
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="
                        !text-white
                        opacity-60
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <section>
          <div className="mx-auto max-w-[1380px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-14">
              {/* =================================================
                  BRAND
              ================================================== */}

              <div className="min-w-0">
                <Link
                  to="/"
                  className="group relative z-10 inline-flex max-w-full items-center gap-3 no-underline"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] shadow-[0_10px_40px_rgba(0,0,0,.2)] transition group-hover:border-[#c6a36c]/40">
                    <FileText
                      size={19}
                      className="!text-[#c6a36c]"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-lg font-semibold tracking-[-0.03em] !text-white">
                      Resumely
                    </div>

                    <div className="text-[8px] font-bold uppercase tracking-[0.22em] !text-zinc-600">
                      Career documents
                    </div>
                  </div>
                </Link>

                <p className="mt-6 max-w-sm text-sm leading-7 !text-zinc-500 sm:mt-7">
                  A modern workspace for creating resumes and cover letters
                  that present your experience with clarity, confidence and
                  professional detail.
                </p>

                {/* TRUST */}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[9px] font-bold uppercase tracking-[0.12em] !text-zinc-600 sm:tracking-[0.15em]">
                  <span className="flex items-center gap-1.5">
                    <Check
                      size={12}
                      className="shrink-0 !text-[#a17b48]"
                    />
                    Resume builder
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Check
                      size={12}
                      className="shrink-0 !text-[#a17b48]"
                    />
                    Cover letters
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Check
                      size={12}
                      className="shrink-0 !text-[#a17b48]"
                    />
                    Premium templates
                  </span>
                </div>
              </div>

              {/* =================================================
                  NAVIGATION
              ================================================== */}

              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10">
                {/* PRODUCT */}
                <FooterColumn
                  title="Product"
                  links={productLinks}
                />

                {/* COMPANY */}
                <FooterColumn
                  title="Company"
                  links={companyLinks}
                />

                {/* RESOURCES */}
                <FooterColumn
                  title="Resources"
                  links={resourceLinks}
                />
              </div>
            </div>

            {/* =================================================
                CONTACT / SOCIAL
            ================================================== */}

            <div className="mt-12 grid gap-7 border-t border-white/[0.08] pt-7 sm:mt-16 sm:pt-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
                {/* EMAIL */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                    <Mail
                      size={15}
                      className="!text-[#c6a36c]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] !text-zinc-600">
                      Email
                    </p>

                    <a
                      href="mailto:hello@resumely.com"
                      className="block max-w-full truncate text-xs !text-zinc-400 no-underline transition hover:!text-white"
                    >
                      hello@resumely.com
                    </a>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                {/* BUILT FOR */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                    <MapPin
                      size={15}
                      className="!text-[#c6a36c]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] !text-zinc-600">
                      Built for
                    </p>

                    <p className="text-xs !text-zinc-400">
                      Professionals everywhere
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[11px] font-bold !text-zinc-500 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:!text-white"
                >
                  in
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[11px] font-bold !text-zinc-500 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:!text-white"
                >
                  IG
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[11px] font-bold !text-zinc-500 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:!text-white"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            HUGE WORDMARK
        ==================================================== */}

        <section className="relative z-10 overflow-hidden border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c6a36c]/30 to-transparent" />

              <p className="pointer-events-none select-none whitespace-nowrap text-center text-[19vw] font-semibold leading-[0.7] tracking-[-0.09em] !text-white/[0.035] sm:text-[18vw]">
                RESUMELY
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <section className="relative z-10 border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-[1380px] flex-col gap-5 px-5 py-6 sm:px-8 sm:py-7 md:flex-row md:items-center md:justify-between lg:px-12">
            <p className="text-[10px] !text-zinc-600">
              © {new Date().getFullYear()} Resumely. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6">
              <Link
                to="/privacy"
                className="relative z-10 text-[10px] !text-zinc-600 no-underline transition hover:!text-zinc-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="relative z-10 text-[10px] !text-zinc-600 no-underline transition hover:!text-zinc-300"
              >
                Terms of Service
              </Link>

              <Link
                to="/contact"
                className="relative z-10 text-[10px] !text-zinc-600 no-underline transition hover:!text-zinc-300"
              >
                Contact
              </Link>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <span className="text-[9px] font-bold uppercase tracking-[0.12em] !text-zinc-700 sm:tracking-[0.15em]">
                Built with intention
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#c6a36c] sm:tracking-[0.2em]">
        {title}
      </p>

      <div className="mt-5 space-y-3.5 sm:mt-6">
        {links.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="
              relative
              z-10
              block
              w-fit
              max-w-full
              text-sm
              !text-zinc-500
              no-underline
              transition-all
              duration-200
              hover:translate-x-1
              hover:!text-white
            "
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;