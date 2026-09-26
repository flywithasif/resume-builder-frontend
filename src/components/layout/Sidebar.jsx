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
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-zinc-950/30 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}

      <aside
        className={[
          "fixed left-0 top-0 z-50 h-screen w-[260px]",
          "border-r border-stone-200 bg-white",
          "transition-transform duration-300",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-stone-200 px-5">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 hover:bg-stone-100 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={19} />
          </button>
        </div>

        <div className="flex h-[calc(100vh-72px)] flex-col px-3 py-5">
          <nav className="space-y-1">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Workspace
            </p>

            {dashboardNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "focus-ring flex h-11 items-center gap-3 rounded-xl px-3",
                      "text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-zinc-950 text-white"
                        : "text-zinc-600 hover:bg-stone-100 hover:text-zinc-950",
                    ].join(" ")
                  }
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-stone-200 pt-4">
            <button
              type="button"
              onClick={handleLogout}
              className="focus-ring flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
