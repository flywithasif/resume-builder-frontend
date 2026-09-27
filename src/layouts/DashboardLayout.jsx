import { useState } from "react";
import {
  Bell,
  ChevronDown,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  UserRound,
  X,
  Layers3,
} from "lucide-react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { logoutUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "My Resumes",
    path: "/dashboard/resumes",
    icon: FileText,
  },
  {
    label: "Templates",
    path: "/templates",
    icon: Layers3,
  },
];

const accountNavigation = [
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const pageMeta = {
  "/dashboard": {
    eyebrow: "Workspace",
    title: "Dashboard",
  },
  "/dashboard/resumes": {
    eyebrow: "Workspace",
    title: "My Resumes",
  },
  "/templates": {
    eyebrow: "Workspace",
    title: "Templates",
  },
  "/dashboard/profile": {
    eyebrow: "Account",
    title: "Profile",
  },
  "/dashboard/settings": {
    eyebrow: "Account",
    title: "Settings",
  },
};

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const storedUser = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("resumely_user") || "null",
      );
    } catch {
      return null;
    }
  })();

  const currentUser = user || storedUser;

  const displayName =
    currentUser?.name?.trim() ||
    currentUser?.email?.split("@")[0] ||
    "User";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item.charAt(0).toUpperCase())
    .join("");

  const meta =
    pageMeta[location.pathname] || {
      eyebrow: "Workspace",
      title: "Resumely",
    };

  const handleLogout = () => {
    logoutUser();

    if (typeof logout === "function") {
      logout();
    }

    navigate("/login", { replace: true });
  };

  const renderNavigation = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.end}
          onClick={() => setMobileOpen(false)}
          className={({ isActive }) =>
            [
              "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200",

              isActive
                ? "bg-[#f3ede3] text-zinc-950 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                : "text-zinc-600 hover:bg-[#f3f1ec] hover:text-zinc-950",
            ].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-[#ae8954]" />
              )}

              {/* Icon */}
              <span
                className={[
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-[#e9dcc8] text-[#987542]"
                    : "bg-transparent text-zinc-400 group-hover:text-zinc-700",
                ].join(" ")}
              >
                <Icon
                  size={17}
                  strokeWidth={isActive ? 2 : 1.7}
                />
              </span>

              {/* Label */}
              <span className="flex-1">
                {item.label}
              </span>

              {/* Active dot */}
              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#ae8954]" />
              )}
            </>
          )}
        </NavLink>
      );
    });

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-zinc-950">
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-zinc-950/35 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-[#e7e2d9] bg-[#fbfaf7] transition-transform duration-300",
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        {/* ===================================================
            BRAND
        ==================================================== */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#e7e2d9] px-5">
          <NavLink
            to="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold text-white">
              R
            </div>

            <div className="text-[18px] font-semibold tracking-[-0.035em]">
              Resume
              <span className="text-[#ae8954]">ly</span>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-[#efede8] hover:text-zinc-900 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* ===================================================
            NAVIGATION
        ==================================================== */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          {/* Workspace */}
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Workspace
          </p>

          <nav className="mt-3 space-y-1">
            {renderNavigation(navigation)}
          </nav>

          <div className="my-7 h-px bg-[#e7e2d9]" />

          {/* Account */}
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Account
          </p>

          <nav className="mt-3 space-y-1">
            {renderNavigation(accountNavigation)}
          </nav>
        </div>

        {/* ===================================================
            USER / LOGOUT
        ==================================================== */}
        <div className="shrink-0 border-t border-[#e7e2d9] p-4">
          <div className="mb-2 flex items-center gap-3 rounded-xl bg-[#f2efe9] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[11px] font-semibold text-white">
              {initials || "U"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-zinc-900">
                {displayName}
              </p>

              <p className="truncate text-[10px] text-zinc-500">
                {currentUser?.email || "Account"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-zinc-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut
              size={17}
              className="text-zinc-400 transition group-hover:text-red-500"
            />

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="min-h-screen lg:pl-[270px]">
        {/* ===================================================
            TOPBAR
        ==================================================== */}
        <header className="sticky top-0 z-30 h-[76px] border-b border-[#e7e2d9] bg-[#fbfaf7]/95 backdrop-blur">
          <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-9">
            <div className="flex items-center gap-3">
              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e2d9] bg-white text-zinc-600 lg:hidden"
              >
                <Menu size={19} />
              </button>

              <div className="hidden sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ae8954]">
                  {meta.eyebrow}
                </p>

                <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                  {meta.title}
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-[#efede8] hover:text-zinc-900"
              >
                <Bell size={19} strokeWidth={1.7} />

                <span className="absolute right-[9px] top-[8px] h-1.5 w-1.5 rounded-full bg-[#ae8954]" />
              </button>

              {/* Profile */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setProfileOpen((value) => !value)
                  }
                  className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[#efede8]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-[11px] font-semibold text-white">
                    {initials || "U"}
                  </span>

                  <ChevronDown
                    size={15}
                    className="hidden text-zinc-400 sm:block"
                  />
                </button>

                {/* Profile dropdown */}
                {profileOpen && (
                  <>
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setProfileOpen(false)}
                      className="fixed inset-0 z-10 cursor-default"
                    />

                    <div className="absolute right-0 top-12 z-20 w-56 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                      <div className="px-3 py-2.5">
                        <p className="truncate text-xs font-semibold">
                          {displayName}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-zinc-400">
                          {currentUser?.email || ""}
                        </p>
                      </div>

                      <div className="my-1 h-px bg-[#eeeae3]" />

                      {/* Profile */}
                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/dashboard/profile");
                        }}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                      >
                        <UserRound size={15} />
                        Profile
                      </button>

                      {/* Settings */}
                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/dashboard/settings");
                        }}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-zinc-600 hover:bg-[#f6f3ee] hover:text-zinc-950"
                      >
                        <Settings size={15} />
                        Settings
                      </button>

                      {/* Logout */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-red-500 hover:bg-red-50"
                      >
                        <LogOut size={15} />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
        ==================================================== */}
        <main className="px-4 py-7 sm:px-6 lg:px-9 lg:py-9">
          <div className="mx-auto w-full max-w-[1450px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;