import {
  Menu,
  ArrowRight,
  Bell,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  useState,
} from "react";

import Logo from "../common/Logo";
import Button from "../ui/Button";

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
      <header className="sticky top-0 z-50 h-[72px] border-b border-stone-200/80 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onMenuClick}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 hover:bg-stone-100 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>

            <div className="lg:hidden">
              <Logo compact />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-600 hover:bg-stone-100"
              aria-label="Notifications"
            >
              <Bell size={19} />

              <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#b08d57]" />
            </button>

            <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white">
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
          <div className="flex min-h-[72px] items-center justify-between gap-6">
            
            {/* LOGO */}
            <Link
              to="/"
              className="focus-ring shrink-0"
              onClick={closeMobile}
            >
              <Logo />
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="hidden items-center gap-6 lg:flex xl:gap-8"
              aria-label="Main navigation"
            >
              {publicLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "focus-ring whitespace-nowrap text-sm font-medium transition-colors",
                      isActive
                        ? "text-zinc-950"
                        : "text-zinc-500 hover:text-zinc-950",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                to="/login"
                className="focus-ring rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
              >
                Login
              </Link>

              <Link to="/register">
                <Button size="md">
                  Create Resume
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* MOBILE */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 hover:bg-stone-100 sm:hidden"
              aria-label="Open menu"
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
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobile}
            className="fixed inset-0 z-[70] bg-zinc-950/30 backdrop-blur-sm sm:hidden"
          />

          <div className="fixed left-4 right-4 top-4 z-[80] rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_25px_80px_rgba(24,24,27,0.18)] sm:hidden">
            
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={closeMobile}
                className="focus-ring"
              >
                <Logo />
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100 text-zinc-600"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="mt-6 space-y-1">
              {publicLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    [
                      "flex h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-stone-100 text-zinc-950"
                        : "text-zinc-700 hover:bg-stone-100",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-stone-200 pt-5">
              <Link
                to="/login"
                onClick={closeMobile}
                className="flex h-11 items-center justify-center rounded-xl border border-stone-200 text-sm font-medium text-zinc-800"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMobile}
                className="flex h-11 items-center justify-center rounded-xl bg-zinc-950 text-sm font-medium text-white"
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