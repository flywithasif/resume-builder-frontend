import { Menu, ArrowRight, Bell, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from "../common/Logo";
import Button from "../ui/Button";

/* =========================================================
   PUBLIC NAVIGATION
========================================================= */

const publicLinks = [
  {
    label: "Resume Templates",
    path: "/templates",
  },
  {
    label: "Cover Letter",
    path: "/cover-letter",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "How it works",
    path: "/how-it-works",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
];

function Navbar({
  dashboard = false,
  onMenuClick,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  /* =========================================================
     DASHBOARD NAVBAR
  ========================================================= */

  if (dashboard) {
    return (
      <header className="sticky top-0 z-50 h-[64px] sm:h-[72px] border-b border-stone-200/80 bg-white/95 backdrop-blur-xl">
        <div className="flex h-full items-center justify-between px-3 sm:px-6">
          {/* LEFT */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onMenuClick}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>

            <div className="min-w-0 lg:hidden">
              <Logo compact />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-600 transition-colors hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
              aria-label="Notifications"
            >
              <Bell size={19} />

              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#b08d57]" />
            </button>

            <div className="ml-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white sm:ml-1">
              AS
            </div>
          </div>
        </div>
      </header>
    );
  }

  /* =========================================================
     PUBLIC NAVBAR
  ========================================================= */

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f8f8f6]/95 backdrop-blur-xl">
        <div className="page-container">
          <div className="flex min-h-[64px] items-center justify-between gap-3 sm:min-h-[72px] sm:gap-6">
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobile}
              className="shrink-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-950/10"
              aria-label="Resumely home"
            >
              <Logo />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="hidden items-center gap-5 lg:flex xl:gap-8"
              aria-label="Main navigation"
            >
              {publicLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "relative whitespace-nowrap text-sm font-medium",
                      "transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2",
                      "focus-visible:ring-zinc-950/10",
                      "after:absolute after:-bottom-2 after:left-0",
                      "after:h-[2px] after:rounded-full",
                      "after:bg-zinc-950 after:transition-all after:duration-300",

                      isActive
                        ? "text-zinc-950 after:w-full"
                        : "text-zinc-500 after:w-0 hover:text-zinc-950 hover:after:w-full",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              {/* LOGIN */}
              <Link
                to="/login"
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10"
              >
                Login
              </Link>

              {/* CREATE RESUME */}
              <Link
                to="/register"
                className="shrink-0"
              >
                <Button size="md">
                  Create Resume
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10 sm:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileOpen && (
        <>
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobile}
            className="fixed inset-0 z-[70] bg-zinc-950/30 backdrop-blur-sm sm:hidden"
          />

          {/* MENU CARD */}
          <div className="fixed left-3 right-3 top-3 z-[80] max-h-[calc(100dvh-24px)] overflow-y-auto overscroll-contain rounded-2xl border border-stone-200 bg-white shadow-[0_25px_80px_rgba(24,24,27,0.18)] sm:left-4 sm:right-4 sm:top-4 sm:max-h-[calc(100dvh-32px)] sm:hidden">
            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
              <Link
                to="/"
                onClick={closeMobile}
                className="min-w-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10"
                aria-label="Resumely home"
              >
                <Logo />
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-zinc-600 transition-colors hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================= */}

            <nav
              className="space-y-1 px-4 sm:px-5"
              aria-label="Mobile navigation"
            >
              {publicLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    [
                      "flex min-h-11 items-center rounded-xl px-3 py-2",
                      "text-sm font-medium",
                      "transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2",
                      "focus-visible:ring-zinc-950/10",

                      isActive
                        ? "bg-zinc-950 text-white"
                        : "text-zinc-700 hover:bg-stone-100 hover:text-zinc-950",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div className="mt-5 grid grid-cols-1 gap-2 border-t border-stone-200 p-4 sm:grid-cols-2 sm:p-5">
              {/* LOGIN */}
              <Link
                to="/login"
                onClick={closeMobile}
                className="flex min-h-11 items-center justify-center rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 transition-all hover:border-stone-300 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10"
              >
                Login
              </Link>

              {/* CREATE RESUME */}
              <Link
                to="/register"
                onClick={closeMobile}
                className="flex min-h-11 items-center justify-center rounded-xl bg-zinc-950 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/10"
              >
                Create Resume
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;