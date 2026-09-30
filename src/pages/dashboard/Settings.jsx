import {
  Bell,
  Check,
  ChevronRight,
  Download,
  FileJson,
  HardDriveDownload,
  Info,
  Keyboard,
  LockKeyhole,
  Mail,
  Monitor,
  Moon,
  Palette,
  RotateCcw,
  Save,
  ShieldCheck,
  Sparkles,
  Sun,
  Trash2,
  UserRound,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  getUserSettings,
  logoutUser,
  updateUserSettings,
} from "../../services/authService";

import { getResumesFromApi } from "../../services/resumeService";
import { getCoverLettersFromApi } from "../../services/coverLetterService";

import { useAuth } from "../../contexts/AuthContext";

const SETTINGS_KEY =
  "resumely_settings";

const TEMPLATE_KEY =
  "resumely_selected_template";

const defaultSettings = {
  theme: "light",
  defaultTemplate: "executive",
  accent: "champagne",

  compactMode: false,
  reducedMotion: false,

  autosave: true,
  autosaveInterval: "30",
  showCompletionTips: true,
  spellcheck: true,
  showPageBreaks: true,

  emailNotifications: true,
  resumeReminders: true,
  securityAlerts: true,
  productUpdates: false,

  profileVisibility: "private",
  analytics: false,
};

const templates = [
  {
    id: "executive",
    label: "Executive",
  },
  {
    id: "modern",
    label: "Modern",
  },
  {
    id: "minimal",
    label: "Minimal",
  },
  {
    id: "corporate",
    label: "Corporate",
  },
  {
    id: "creative",
    label: "Creative",
  },
  {
    id: "ats",
    label: "ATS",
  },
  {
    id: "tech",
    label: "Tech",
  },
  {
    id: "elegant",
    label: "Elegant",
  },
];

const accents = [
  {
    id: "champagne",
    label: "Champagne",
    color: "#ae8954",
  },
  {
    id: "ink",
    label: "Ink",
    color: "#111111",
  },
  {
    id: "slate",
    label: "Slate",
    color: "#475569",
  },
];

/* =========================================================
   TOGGLE
========================================================= */

function Toggle({
  checked,
  onChange,
  label,
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={checked}
      onClick={() =>
        onChange(!checked)
      }
      className={[
        "relative h-6 w-11 shrink-0 rounded-full transition-all duration-200",
        checked
          ? "bg-[#ae8954]"
          : "bg-zinc-200",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200",
          checked
            ? "left-6"
            : "left-1",
        ].join(" ")}
      />
    </button>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
        <Icon size={17} />
      </div>

      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-zinc-950">
          {title}
        </h2>

        <p className="mt-1 text-xs leading-5 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SETTING ROW
========================================================= */

function SettingRow({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <div className="flex min-w-0 flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        {Icon && (
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f2ec] text-zinc-500">
            <Icon size={15} />
          </div>
        )}

        <div className="min-w-0">
          <p className="text-xs font-semibold text-zinc-900">
            {title}
          </p>

          {description && (
            <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-500">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="w-full shrink-0 sm:w-auto">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function Settings() {
  const navigate = useNavigate();
  const fileInputRef =
    useRef(null);

  const {
    user,
    logout,
  } = useAuth();

  const [settings, setSettings] =
    useState(defaultSettings);

  const [saved, setSaved] =
    useState(false);

  const [hasChanges, setHasChanges] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [exporting, setExporting] =
    useState(false);

  const [importing, setImporting] =
    useState(false);

  const [error, setError] =
    useState("");

  /* =========================================================
     LOAD SETTINGS FROM BACKEND
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadSettings() {
      try {
        setLoading(true);
        setError("");

        const result =
          await getUserSettings();

        if (!mounted) {
          return;
        }

        const serverSettings = {
          ...defaultSettings,
          ...(result?.settings || {}),
        };

        setSettings(
          serverSettings,
        );

        localStorage.setItem(
          SETTINGS_KEY,
          JSON.stringify(
            serverSettings,
          ),
        );

        if (
          serverSettings.defaultTemplate
        ) {
          localStorage.setItem(
            TEMPLATE_KEY,
            serverSettings.defaultTemplate,
          );
        }
      } catch (err) {
        console.error(
          "Failed to load settings:",
          err,
        );

        if (!mounted) {
          return;
        }

        /*
          Backend unavailable hone par
          existing local settings fallback.
        */

        try {
          const localSettings =
            JSON.parse(
              localStorage.getItem(
                SETTINGS_KEY,
              ) || "null",
            );

          if (localSettings) {
            setSettings({
              ...defaultSettings,
              ...localSettings,
            });
          }
        } catch {
          setSettings(
            defaultSettings,
          );
        }

        setError(
          err?.message ||
            "Unable to load settings from the server.",
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadSettings();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================================
     APPLY LOCAL UI PREFERENCES
  ========================================================= */

  useEffect(() => {
    document.documentElement.style.colorScheme =
      settings.theme === "dark"
        ? "dark"
        : "light";

    document.documentElement.dataset.resumelyTheme =
      settings.theme;

    document.documentElement.dataset.resumelyAccent =
      settings.accent;

    document.documentElement.dataset.resumelyDensity =
      settings.compactMode
        ? "compact"
        : "comfortable";

    document.documentElement.dataset.resumelyMotion =
      settings.reducedMotion
        ? "reduced"
        : "normal";

    if (
      settings.defaultTemplate
    ) {
      localStorage.setItem(
        TEMPLATE_KEY,
        settings.defaultTemplate,
      );
    }
  }, [
    settings.theme,
    settings.accent,
    settings.compactMode,
    settings.reducedMotion,
    settings.defaultTemplate,
  ]);

  /* =========================================================
     CURRENT USER
  ========================================================= */

  const currentUser = user;

  /* =========================================================
     UPDATE SETTING
  ========================================================= */

  const update = (
    field,
    value,
  ) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
    setHasChanges(true);
    setError("");
  };

  /* =========================================================
     SAVE SETTINGS TO BACKEND
  ========================================================= */

  const saveSettings =
    async () => {
      try {
        setSaving(true);
        setSaved(false);
        setError("");

        const result =
          await updateUserSettings(
            settings,
          );

        const nextSettings = {
          ...defaultSettings,
          ...(result?.settings ||
            settings),
        };

        setSettings(
          nextSettings,
        );

        localStorage.setItem(
          SETTINGS_KEY,
          JSON.stringify(
            nextSettings,
          ),
        );

        localStorage.setItem(
          TEMPLATE_KEY,
          nextSettings.defaultTemplate,
        );

        setSaved(true);
        setHasChanges(false);

        window.setTimeout(() => {
          setSaved(false);
        }, 2500);
      } catch (err) {
        console.error(
          "Failed to save settings:",
          err,
        );

        setError(
          err?.message ||
            "Unable to save settings.",
        );
      } finally {
        setSaving(false);
      }
    };

  /* =========================================================
     RESET SETTINGS
  ========================================================= */

  const resetSettings =
    async () => {
      const confirmed =
        window.confirm(
          "Reset all Resumely preferences to their default values?",
        );

      if (!confirmed) {
        return;
      }

      try {
        setSaving(true);
        setError("");

        const result =
          await updateUserSettings(
            defaultSettings,
          );

        const nextSettings = {
          ...defaultSettings,
          ...(result?.settings ||
            defaultSettings),
        };

        setSettings(
          nextSettings,
        );

        localStorage.setItem(
          SETTINGS_KEY,
          JSON.stringify(
            nextSettings,
          ),
        );

        localStorage.setItem(
          TEMPLATE_KEY,
          nextSettings.defaultTemplate,
        );

        setSaved(true);
        setHasChanges(false);

        window.setTimeout(() => {
          setSaved(false);
        }, 2500);
      } catch (err) {
        console.error(
          "Failed to reset settings:",
          err,
        );

        setError(
          err?.message ||
            "Unable to reset settings.",
        );
      } finally {
        setSaving(false);
      }
    };

  /* =========================================================
     EXPORT SETTINGS
  ========================================================= */

  const exportSettings =
    () => {
      try {
        const payload = {
          product: "Resumely",
          exportedAt:
            new Date().toISOString(),
          settings,
        };

        const blob =
          new Blob(
            [
              JSON.stringify(
                payload,
                null,
                2,
              ),
            ],
            {
              type: "application/json",
            },
          );

        const url =
          URL.createObjectURL(
            blob,
          );

        const anchor =
          document.createElement(
            "a",
          );

        anchor.href = url;
        anchor.download =
          "resumely-settings.json";

        anchor.click();

        URL.revokeObjectURL(
          url,
        );
      } catch {
        window.alert(
          "Unable to export settings right now.",
        );
      }
    };

  /* =========================================================
     EXPORT WORKSPACE FROM BACKEND
  ========================================================= */

  const exportWorkspace =
    async () => {
      setExporting(true);

      try {
        const [
          resumeResult,
          coverLetterResult,
        ] = await Promise.all([
          getResumesFromApi(),
          getCoverLettersFromApi(),
        ]);

        const workspace = {
          product: "Resumely",

          exportedAt:
            new Date().toISOString(),

          user:
            currentUser || null,

          settings,

          resumes:
            resumeResult?.resumes ||
            [],

          coverLetters:
            coverLetterResult?.coverLetters ||
            [],
        };

        const blob =
          new Blob(
            [
              JSON.stringify(
                workspace,
                null,
                2,
              ),
            ],
            {
              type: "application/json",
            },
          );

        const url =
          URL.createObjectURL(
            blob,
          );

        const anchor =
          document.createElement(
            "a",
          );

        anchor.href = url;

        anchor.download = `resumely-workspace-${new Date()
          .toISOString()
          .slice(0, 10)}.json`;

        anchor.click();

        URL.revokeObjectURL(
          url,
        );
      } catch (err) {
        console.error(
          "Failed to export workspace:",
          err,
        );

        window.alert(
          err?.message ||
            "Unable to export your workspace.",
        );
      } finally {
        window.setTimeout(() => {
          setExporting(false);
        }, 700);
      }
    };

  /* =========================================================
     IMPORT SETTINGS
  ========================================================= */

  const importSettings =
    async (event) => {
      const file =
        event.target.files?.[0];

      if (!file) {
        return;
      }

      setImporting(true);
      setError("");

      try {
        const text =
          await file.text();

        const parsed =
          JSON.parse(text);

        const incoming =
          parsed?.settings ||
          parsed;

        const nextSettings = {
          ...defaultSettings,
          ...incoming,
        };

        const result =
          await updateUserSettings(
            nextSettings,
          );

        const savedSettings = {
          ...defaultSettings,
          ...(result?.settings ||
            nextSettings),
        };

        setSettings(
          savedSettings,
        );

        localStorage.setItem(
          SETTINGS_KEY,
          JSON.stringify(
            savedSettings,
          ),
        );

        localStorage.setItem(
          TEMPLATE_KEY,
          savedSettings.defaultTemplate,
        );

        setSaved(true);
        setHasChanges(false);

        window.setTimeout(() => {
          setSaved(false);
        }, 2500);
      } catch (err) {
        console.error(
          "Failed to import settings:",
          err,
        );

        window.alert(
          err?.message ||
            "This settings file is not valid.",
        );
      } finally {
        setImporting(false);

        if (
          fileInputRef.current
        ) {
          fileInputRef.current.value =
            "";
        }
      }
    };

  /* =========================================================
     CLEAR DRAFT
  ========================================================= */

  const clearDraft =
    () => {
      const confirmed =
        window.confirm(
          "Clear the current unsaved resume draft? This cannot be undone.",
        );

      if (!confirmed) {
        return;
      }

      localStorage.removeItem(
        "resume_builder_draft",
      );

      setSaved(true);

      window.setTimeout(() => {
        setSaved(false);
      }, 2500);
    };

  /* =========================================================
     CLEAR LOCAL WORKSPACE
  ========================================================= */

  const clearLocalWorkspace =
    () => {
      const confirmed =
        window.confirm(
          "This will remove locally stored resumes and drafts from this browser. Continue?",
        );

      if (!confirmed) {
        return;
      }

      localStorage.removeItem(
        "resumely_resumes",
      );

      localStorage.removeItem(
        "resume_builder_draft",
      );

      setSaved(true);

      window.setTimeout(() => {
        setSaved(false);
      }, 2500);
    };

  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout =
    () => {
      logoutUser();

      if (
        typeof logout ===
        "function"
      ) {
        logout();
      }

      navigate("/login", {
        replace: true,
      });
    };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-[1100px] px-3 pb-20 sm:px-5 lg:px-6">
        <div className="animate-pulse">
          <div className="h-3 w-20 rounded bg-zinc-200" />

          <div className="mt-3 h-8 w-32 rounded bg-zinc-200" />

          <div className="mt-3 h-4 w-80 max-w-full rounded bg-zinc-100" />

          <div className="mt-8 space-y-5">
            {Array.from({
              length: 5,
            }).map((_, index) => (
              <div
                key={index}
                className="h-40 rounded-2xl bg-zinc-100"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-3 pb-20 sm:px-5 sm:pb-16 lg:px-6">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ae8954]">
          Account
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
          Personalize your Resumely
          workspace, editor, notifications,
          privacy and data preferences.
        </p>
      </div>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
          {error}
        </div>
      )}

      {/* =====================================================
          SAVE STATUS
      ====================================================== */}

      <div className="mt-6 flex min-w-0 flex-col gap-3 rounded-2xl border border-[#e7e2d9] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div
            className={[
              "h-2 w-2 shrink-0 rounded-full",
              hasChanges
                ? "bg-[#ae8954]"
                : "bg-emerald-500",
            ].join(" ")}
          />

          <p className="text-xs text-zinc-500">
            {hasChanges
              ? "You have unsaved changes."
              : "All settings are up to date."}
          </p>
        </div>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <Check size={14} />
              Saved successfully
            </span>
          )}

          <button
            type="button"
            onClick={saveSettings}
            disabled={
              saving || !hasChanges
            }
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 text-xs font-semibold text-white transition-all hover:bg-[#ae8954] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-5"
          >
            <Save size={14} />

            {saving
              ? "Saving..."
              : "Save changes"}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {/* ===================================================
            APPEARANCE
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <SectionHeader
              icon={Palette}
              title="Appearance"
              description="Control the visual style and density of your Resumely workspace."
            />
          </div>

          <div className="p-4 sm:p-6">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-900">
                Theme
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Choose your preferred color
                scheme.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    id: "light",
                    label: "Light",
                    icon: Sun,
                  },
                  {
                    id: "system",
                    label: "System",
                    icon: Monitor,
                  },
                  {
                    id: "dark",
                    label: "Dark",
                    icon: Moon,
                  },
                ].map(
                  ({
                    id,
                    label,
                    icon: Icon,
                  }) => {
                    const active =
                      settings.theme ===
                      id;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() =>
                          update(
                            "theme",
                            id,
                          )
                        }
                        className={[
                          "flex min-w-0 items-center gap-3 rounded-xl border p-3.5 text-left transition-all",
                          active
                            ? "border-[#ae8954] bg-[#f6f1e8]"
                            : "border-[#e5e0d8] hover:border-[#ae8954]",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                            active
                              ? "bg-[#111111] text-white"
                              : "bg-[#f3f0ea] text-zinc-500",
                          ].join(" ")}
                        >
                          <Icon size={16} />
                        </span>

                        <span className="truncate text-xs font-semibold text-zinc-900">
                          {label}
                        </span>

                        {active && (
                          <Check
                            size={15}
                            className="ml-auto shrink-0 text-[#ae8954]"
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>

              <div className="mt-3 flex min-w-0 gap-2 rounded-xl bg-[#faf8f4] p-3">
                <Info
                  size={14}
                  className="mt-0.5 shrink-0 text-[#ae8954]"
                />

                <p className="min-w-0 text-[11px] leading-5 text-zinc-500">
                  Your preference is saved
                  to your Resumely account.
                </p>
              </div>
            </div>

            {/* Accent */}

            <div className="mt-7 min-w-0 border-t border-[#eeeae3] pt-7">
              <p className="text-xs font-semibold text-zinc-900">
                Accent style
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Choose your workspace accent.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {accents.map(
                  (item) => {
                    const active =
                      settings.accent ===
                      item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          update(
                            "accent",
                            item.id,
                          )
                        }
                        className={[
                          "flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all",
                          active
                            ? "border-[#111111] bg-[#f6f3ed]"
                            : "border-[#e5e0d8] hover:border-[#ae8954]",
                        ].join(" ")}
                      >
                        <span
                          className="h-3 w-3 shrink-0 rounded-full"
                          style={{
                            backgroundColor:
                              item.color,
                          }}
                        />

                        {item.label}

                        {active && (
                          <Check
                            size={13}
                            className="text-[#ae8954]"
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* Density */}

            <div className="mt-7 min-w-0 border-t border-[#eeeae3] pt-2">
              <SettingRow
                icon={Monitor}
                title="Compact workspace"
                description="Reduce spacing around workspace controls."
              >
                <Toggle
                  checked={
                    settings.compactMode
                  }
                  onChange={(value) =>
                    update(
                      "compactMode",
                      value,
                    )
                  }
                  label="Toggle compact workspace"
                />
              </SettingRow>

              <div className="border-t border-[#eeeae3]" />

              <SettingRow
                icon={Sparkles}
                title="Reduced motion"
                description="Reduce interface animations and transitions."
              >
                <Toggle
                  checked={
                    settings.reducedMotion
                  }
                  onChange={(value) =>
                    update(
                      "reducedMotion",
                      value,
                    )
                  }
                  label="Toggle reduced motion"
                />
              </SettingRow>
            </div>
          </div>
        </section>

        {/* ===================================================
            RESUME & EDITOR
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <SectionHeader
              icon={Zap}
              title="Resume & Editor"
              description="Set the defaults that control how you create and edit resumes."
            />
          </div>

          <div className="px-4 sm:px-6">
            <SettingRow
              icon={FileJson}
              title="Default resume template"
              description="This template will be selected when you start a new resume."
            >
              <select
                value={
                  settings.defaultTemplate
                }
                onChange={(event) =>
                  update(
                    "defaultTemplate",
                    event.target.value,
                  )
                }
                className="h-10 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-xs font-medium outline-none transition focus:border-[#ae8954] sm:w-auto sm:min-w-[180px]"
              >
                {templates.map(
                  (template) => (
                    <option
                      key={template.id}
                      value={template.id}
                    >
                      {template.label}
                    </option>
                  ),
                )}
              </select>
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Save}
              title="Auto-save"
              description="Automatically save resume changes while you work."
            >
              <Toggle
                checked={
                  settings.autosave
                }
                onChange={(value) =>
                  update(
                    "autosave",
                    value,
                  )
                }
                label="Toggle auto-save"
              />
            </SettingRow>

            {settings.autosave && (
              <>
                <div className="border-t border-[#eeeae3]" />

                <SettingRow
                  icon={RotateCcw}
                  title="Auto-save interval"
                  description="How often the editor should attempt an automatic save."
                >
                  <select
                    value={
                      settings.autosaveInterval
                    }
                    onChange={(event) =>
                      update(
                        "autosaveInterval",
                        event.target.value,
                      )
                    }
                    className="h-10 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-xs font-medium outline-none focus:border-[#ae8954] sm:w-auto sm:min-w-[140px]"
                  >
                    <option value="15">
                      Every 15 seconds
                    </option>

                    <option value="30">
                      Every 30 seconds
                    </option>

                    <option value="60">
                      Every minute
                    </option>

                    <option value="120">
                      Every 2 minutes
                    </option>
                  </select>
                </SettingRow>
              </>
            )}

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Keyboard}
              title="Spellcheck"
              description="Keep browser spellcheck enabled inside resume fields."
            >
              <Toggle
                checked={
                  settings.spellcheck
                }
                onChange={(value) =>
                  update(
                    "spellcheck",
                    value,
                  )
                }
                label="Toggle spellcheck"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Monitor}
              title="Page-break guides"
              description="Show page boundaries while editing an A4 resume."
            >
              <Toggle
                checked={
                  settings.showPageBreaks
                }
                onChange={(value) =>
                  update(
                    "showPageBreaks",
                    value,
                  )
                }
                label="Toggle page-break guides"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Sparkles}
              title="Resume completion tips"
              description="Show helpful suggestions when important resume sections are incomplete."
            >
              <Toggle
                checked={
                  settings.showCompletionTips
                }
                onChange={(value) =>
                  update(
                    "showCompletionTips",
                    value,
                  )
                }
                label="Toggle completion tips"
              />
            </SettingRow>
          </div>
        </section>

        {/* ===================================================
            NOTIFICATIONS
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <SectionHeader
              icon={Bell}
              title="Notifications"
              description="Choose which Resumely messages you want to receive."
            />
          </div>

          <div className="px-4 sm:px-6">
            <SettingRow
              icon={Mail}
              title="Email notifications"
              description="Receive important product and workspace messages by email."
            >
              <Toggle
                checked={
                  settings.emailNotifications
                }
                onChange={(value) =>
                  update(
                    "emailNotifications",
                    value,
                  )
                }
                label="Toggle email notifications"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={RotateCcw}
              title="Resume reminders"
              description="Receive reminders when you have unfinished resume work."
            >
              <Toggle
                checked={
                  settings.resumeReminders
                }
                onChange={(value) =>
                  update(
                    "resumeReminders",
                    value,
                  )
                }
                label="Toggle resume reminders"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={ShieldCheck}
              title="Security alerts"
              description="Keep important sign-in and account security notifications enabled."
            >
              <Toggle
                checked={
                  settings.securityAlerts
                }
                onChange={(value) =>
                  update(
                    "securityAlerts",
                    value,
                  )
                }
                label="Toggle security alerts"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Sparkles}
              title="Product updates"
              description="Occasional updates about new Resumely features and improvements."
            >
              <Toggle
                checked={
                  settings.productUpdates
                }
                onChange={(value) =>
                  update(
                    "productUpdates",
                    value,
                  )
                }
                label="Toggle product updates"
              />
            </SettingRow>
          </div>
        </section>

        {/* ===================================================
            PRIVACY & DATA
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <SectionHeader
              icon={ShieldCheck}
              title="Privacy & Data"
              description="Control your privacy preferences and download a copy of your workspace."
            />
          </div>

          <div className="px-4 sm:px-6">
            <SettingRow
              icon={UserRound}
              title="Profile visibility"
              description="Control whether your profile is treated as private or visible."
            >
              <select
                value={
                  settings.profileVisibility
                }
                onChange={(event) =>
                  update(
                    "profileVisibility",
                    event.target.value,
                  )
                }
                className="h-10 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-xs font-medium outline-none focus:border-[#ae8954] sm:w-auto sm:min-w-[140px]"
              >
                <option value="private">
                  Private
                </option>

                <option value="public">
                  Public
                </option>
              </select>
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Info}
              title="Product analytics"
              description="Allow anonymous product usage information as a preference."
            >
              <Toggle
                checked={
                  settings.analytics
                }
                onChange={(value) =>
                  update(
                    "analytics",
                    value,
                  )
                }
                label="Toggle product analytics"
              />
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={HardDriveDownload}
              title="Export workspace"
              description="Download your MongoDB resumes, cover letters and settings as one JSON file."
            >
              <button
                type="button"
                onClick={
                  exportWorkspace
                }
                disabled={
                  exporting
                }
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#e5e0d8] bg-white px-4 text-xs font-semibold text-zinc-700 transition hover:border-[#ae8954] hover:text-[#987542] disabled:opacity-50 sm:w-auto"
              >
                <Download size={14} />

                {exporting
                  ? "Preparing..."
                  : "Export data"}
              </button>
            </SettingRow>

            <div className="border-t border-[#eeeae3]" />

            <SettingRow
              icon={Trash2}
              title="Clear current draft"
              description="Remove the unsaved builder draft stored in this browser."
            >
              <button
                type="button"
                onClick={
                  clearDraft
                }
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#ead8d8] bg-white px-4 text-xs font-semibold text-red-600 transition hover:bg-red-50 sm:w-auto"
              >
                <Trash2 size={14} />
                Clear draft
              </button>
            </SettingRow>
          </div>
        </section>

        {/* ===================================================
            ACCOUNT & SECURITY
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <SectionHeader
              icon={LockKeyhole}
              title="Account & Security"
              description="Manage your account identity and security-related actions."
            />
          </div>

          <div className="p-4 sm:p-6">
            <div className="min-w-0 rounded-2xl bg-[#f7f4ee] p-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-semibold text-white">
                  {currentUser?.name
                    ?.split(" ")
                    .map(
                      (part) =>
                        part.charAt(0),
                    )
                    .join("")
                    .slice(0, 2)
                    .toUpperCase() ||
                    "U"}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-950">
                    {currentUser?.name ||
                      "Resumely User"}
                  </p>

                  <p className="truncate text-xs text-zinc-500">
                    {currentUser?.email ||
                      "Account email"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/dashboard/profile",
                  )
                }
                className="group flex min-w-0 items-center justify-between rounded-xl border border-[#e5e0d8] p-4 text-left transition hover:border-[#ae8954] hover:bg-[#faf8f4]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <UserRound
                    size={17}
                    className="shrink-0 text-zinc-500 group-hover:text-[#987542]"
                  />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold">
                      Profile
                    </p>

                    <p className="mt-1 truncate text-[11px] text-zinc-500">
                      Personal information
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={15}
                  className="ml-3 shrink-0 text-zinc-400"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/dashboard/profile",
                  )
                }
                className="group flex min-w-0 items-center justify-between rounded-xl border border-[#e5e0d8] p-4 text-left transition hover:border-[#ae8954] hover:bg-[#faf8f4]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <LockKeyhole
                    size={17}
                    className="shrink-0 text-zinc-500 group-hover:text-[#987542]"
                  />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold">
                      Password & Security
                    </p>

                    <p className="mt-1 truncate text-[11px] text-zinc-500">
                      Manage account security
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={15}
                  className="ml-3 shrink-0 text-zinc-400"
                />
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            SETTINGS BACKUP
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white p-4 sm:p-6">
          <SectionHeader
            icon={FileJson}
            title="Settings backup"
            description="Keep a portable copy of your Resumely preferences."
          />

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={
                exportSettings
              }
              className="flex min-w-0 items-center justify-between rounded-xl border border-[#e5e0d8] p-4 text-left transition hover:border-[#ae8954] hover:bg-[#faf8f4]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Download
                  size={17}
                  className="shrink-0 text-zinc-500"
                />

                <div className="min-w-0">
                  <p className="text-xs font-semibold">
                    Export settings
                  </p>

                  <p className="mt-1 truncate text-[11px] text-zinc-500">
                    Download a JSON backup
                  </p>
                </div>
              </div>

              <ChevronRight
                size={15}
                className="ml-3 shrink-0 text-zinc-400"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              disabled={importing}
              className="flex min-w-0 items-center justify-between rounded-xl border border-[#e5e0d8] p-4 text-left transition hover:border-[#ae8954] hover:bg-[#faf8f4] disabled:opacity-50"
            >
              <div className="flex min-w-0 items-center gap-3">
                <FileJson
                  size={17}
                  className="shrink-0 text-zinc-500"
                />

                <div className="min-w-0">
                  <p className="text-xs font-semibold">
                    Import settings
                  </p>

                  <p className="mt-1 truncate text-[11px] text-zinc-500">
                    Restore a JSON backup
                  </p>
                </div>
              </div>

              <ChevronRight
                size={15}
                className="ml-3 shrink-0 text-zinc-400"
              />
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            onChange={
              importSettings
            }
            className="hidden"
          />
        </section>

        {/* ===================================================
            DANGER ZONE
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-red-100 bg-white">
          <div className="border-b border-red-100 p-4 sm:p-6">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Trash2 size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-zinc-950">
                  Danger zone
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Actions in this area can
                  remove locally stored
                  workspace data.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex min-w-0 flex-col gap-4 rounded-xl border border-red-100 bg-red-50/40 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-zinc-900">
                  Clear local workspace
                </p>

                <p className="mt-1 max-w-xl text-[11px] leading-5 text-zinc-500">
                  Remove locally stored
                  resumes and builder drafts
                  from this browser. This
                  does not delete data already
                  stored on the backend.
                </p>
              </div>

              <button
                type="button"
                onClick={
                  clearLocalWorkspace
                }
                className="inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white sm:w-auto"
              >
                <Trash2 size={14} />
                Clear workspace
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            ACCOUNT ACTIONS
        ==================================================== */}

        <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white p-4 sm:p-6">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-900">
                Sign out of Resumely
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Sign out from this browser
                and return to the login
                screen.
              </p>
            </div>

            <button
              type="button"
              onClick={
                handleLogout
              }
              className="inline-flex h-10 w-full shrink-0 items-center justify-center rounded-xl border border-[#e5e0d8] px-5 text-xs font-semibold text-zinc-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:w-auto"
            >
              Sign out
            </button>
          </div>
        </section>

        {/* ===================================================
            BOTTOM ACTION BAR
        ==================================================== */}

        <div className="sticky bottom-3 z-20 flex min-w-0 flex-col gap-3 rounded-2xl border border-[#e7e2d9] bg-[#fbfaf7]/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur sm:bottom-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={
              resetSettings
            }
            disabled={saving}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#e5e0d8] bg-white px-4 text-xs font-semibold text-zinc-600 transition hover:border-[#ae8954] hover:text-[#987542] disabled:opacity-50 sm:w-auto"
          >
            <RotateCcw size={14} />
            Reset preferences
          </button>

          <div className="flex w-full items-center gap-3 sm:w-auto">
            {saved && (
              <span className="hidden items-center gap-1.5 text-xs font-medium text-emerald-600 sm:flex">
                <Check size={14} />
                Saved
              </span>
            )}

            <button
              type="button"
              onClick={
                saveSettings
              }
              disabled={
                saving ||
                !hasChanges
              }
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 text-xs font-semibold text-white transition-all hover:bg-[#ae8954] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
            >
              <Save size={14} />

              {saving
                ? "Saving..."
                : "Save changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;