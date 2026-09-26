import {
  Menu,
  ArrowRight,
  Bell,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../common/Logo";
import Button from "../ui/Button";

const publicLinks = [
  {
    label: "Templates",
    path: "/templates",
  },
  {
    label: "Features",
    path: "/#features",
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

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f8f8f6]/90 backdrop-blur-xl">
      <div className="page-container">
        <div className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {publicLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "focus-ring text-sm font-medium transition-colors",
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

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to="/login"
              className="focus-ring rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
            >
              Login
            </Link>

            <Button
              size="md"
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Create Resume
              <ArrowRight size={16} />
            </Button>
          </div>

          <div className="flex sm:hidden">
            <Link
              to="/login"
              className="focus-ring rounded-xl px-3 py-2 text-sm font-medium text-zinc-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
