import { X, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

import Logo from "../common/Logo";
import { dashboardNavigation } from "../../data/navigation";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ open, onClose }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose?.();
  };

  return (
    <>
      {/* =====================================================
          MOBILE / TABLET BACKDROP
      ===================================================== */}

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-zinc-950/30 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={[
          "fixed left-0 top-0 z-50 h-[100dvh] w-[260px]",
          "border-r border-stone-200 bg-white",
          "transition-transform duration-300 ease-out",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* =================================================
            SIDEBAR HEADER
        ================================================= */}

        <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-stone-200 px-4 sm:h-[72px] sm:px-5">
          <div className="min-w-0">
            <Logo />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-zinc-500 transition-colors hover:bg-stone-100 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={19} />
          </button>
        </div>

        {/* =================================================
            SIDEBAR CONTENT
        ================================================= */}

        <div className="flex h-[calc(100dvh-64px)] min-h-0 flex-col px-3 py-4 sm:h-[calc(100dvh-72px)] sm:py-5">
          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Workspace
            </p>

            <div className="space-y-1">
              {dashboardNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      [
                        "focus-ring flex min-h-11 items-center gap-3 rounded-xl px-3",
                        "text-sm font-medium transition-all duration-200",
                        "whitespace-nowrap",
                        isActive
                          ? "bg-zinc-950 text-white"
                          : "text-zinc-600 hover:bg-stone-100 hover:text-zinc-950",
                      ].join(" ")
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />

                    <span className="min-w-0 truncate">
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </nav>

          {/* =================================================
              LOGOUT
          ================================================= */}

          <div className="mt-4 shrink-0 border-t border-stone-200 pt-4">
            <button
              type="button"
              onClick={handleLogout}
              className="focus-ring flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOut
                size={18}
                className="shrink-0"
              />

              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;