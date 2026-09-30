import {
  Bell,
  Check,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  changePassword,
  getCurrentUser,
  updateProfile,
} from "../../services/authService";

import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: true,
  });

  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] =
    useState(false);
  const [changingPassword, setChangingPassword] =
    useState(false);

  const [saved, setSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] =
    useState(false);

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] =
    useState("");

  /* =========================================================
     LOAD USER
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadUser() {
      try {
        setLoading(true);
        setError("");

        const result =
          await getCurrentUser();

        if (!mounted) {
          return;
        }

        const currentUser =
          result?.user || user;

        setForm((current) => ({
          ...current,

          name:
            currentUser?.name || "",

          email:
            currentUser?.email || "",

          phone:
            currentUser?.phone || "",
        }));

        localStorage.setItem(
          "resumely_user",
          JSON.stringify(
            currentUser || {},
          ),
        );
      } catch (err) {
        if (!mounted) {
          return;
        }

        console.error(
          "Failed to load profile:",
          err,
        );

        setError(
          err?.message ||
            "Unable to load your profile.",
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      mounted = false;
    };
  }, [user]);

  /* =========================================================
     UPDATE FIELD
  ========================================================= */

  const update = (
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
    setPasswordSaved(false);

    if (field === "currentPassword" ||
        field === "newPassword" ||
        field === "confirmPassword") {
      setPasswordError("");
    } else {
      setError("");
    }
  };

  /* =========================================================
     SAVE PROFILE
  ========================================================= */

  const saveProfile = async (
    event,
  ) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError(
        "Please enter your full name.",
      );
      return;
    }

    if (!form.email.trim()) {
      setError(
        "Please enter your email address.",
      );
      return;
    }

    try {
      setSavingProfile(true);
      setError("");
      setSaved(false);

      const result =
        await updateProfile({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        });

      const updatedUser =
        result?.user;

      if (updatedUser) {
        setForm((current) => ({
          ...current,

          name:
            updatedUser.name ||
            current.name,

          email:
            updatedUser.email ||
            current.email,

          phone:
            updatedUser.phone ||
            "",
        }));
      }

      setSaved(true);

      window.setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch (err) {
      console.error(
        "Failed to update profile:",
        err,
      );

      setError(
        err?.message ||
          "Unable to update your profile.",
      );
    } finally {
      setSavingProfile(false);
    }
  };

  /* =========================================================
     CHANGE PASSWORD
  ========================================================= */

  const handlePasswordChange =
    async () => {
      if (!form.currentPassword) {
        setPasswordError(
          "Please enter your current password.",
        );
        return;
      }

      if (!form.newPassword) {
        setPasswordError(
          "Please enter a new password.",
        );
        return;
      }

      if (
        form.newPassword.length < 8
      ) {
        setPasswordError(
          "New password must be at least 8 characters.",
        );
        return;
      }

      if (
        form.newPassword !==
        form.confirmPassword
      ) {
        setPasswordError(
          "New password and confirm password do not match.",
        );
        return;
      }

      try {
        setChangingPassword(true);
        setPasswordError("");
        setPasswordSaved(false);

        await changePassword({
          currentPassword:
            form.currentPassword,

          newPassword:
            form.newPassword,
        });

        setForm((current) => ({
          ...current,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));

        setPasswordSaved(true);

        window.setTimeout(() => {
          setPasswordSaved(false);
        }, 2500);
      } catch (err) {
        console.error(
          "Failed to change password:",
          err,
        );

        setPasswordError(
          err?.message ||
            "Unable to update your password.",
        );
      } finally {
        setChangingPassword(false);
      }
    };

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-[1050px]">
        <div className="animate-pulse">
          <div className="h-3 w-20 rounded bg-zinc-200" />

          <div className="mt-3 h-8 w-32 rounded bg-zinc-200" />

          <div className="mt-8 h-48 rounded-2xl bg-zinc-100" />

          <div className="mt-5 h-56 rounded-2xl bg-zinc-100" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1050px]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="w-full max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ae8954]">
          Account
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
          Profile
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
          Manage your personal information
          and account security from one
          place.
        </p>
      </div>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
          {error}
        </div>
      )}

      {/* =====================================================
          FORM
      ====================================================== */}

      <form
        onSubmit={saveProfile}
        className="mt-6 w-full space-y-4 sm:mt-8 sm:space-y-5"
      >
        {/* =================================================
            PERSONAL INFORMATION
        ================================================== */}

        <section className="w-full overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                <UserRound size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold">
                  Personal information
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Keep your account details
                  up to date.
                </p>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6">
            {/* Full Name */}

            <div className="min-w-0">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={15}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  value={form.name}
                  onChange={(event) =>
                    update(
                      "name",
                      event.target.value,
                    )
                  }
                  placeholder="Your name"
                  className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>

            {/* Email */}

            <div className="min-w-0">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={15}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    update(
                      "email",
                      event.target.value,
                    )
                  }
                  placeholder="you@example.com"
                  className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>

            {/* Mobile Number */}

            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Mobile number
              </label>

              <div className="relative">
                <Smartphone
                  size={15}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    update(
                      "phone",
                      event.target.value,
                    )
                  }
                  placeholder="+91 98765 43210"
                  className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            PASSWORD & SECURITY
        ================================================== */}

        <section className="w-full overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-4 sm:p-6">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                <LockKeyhole size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold">
                  Password & security
                </h2>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-zinc-500">
                  Update your password securely
                  through your account.
                </p>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6">
            {/* Current Password */}

            <div className="min-w-0">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Current password
              </label>

              <input
                type="password"
                value={form.currentPassword}
                onChange={(event) =>
                  update(
                    "currentPassword",
                    event.target.value,
                  )
                }
                placeholder="Current password"
                autoComplete="current-password"
                className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            {/* New Password */}

            <div className="min-w-0">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                New password
              </label>

              <input
                type="password"
                value={form.newPassword}
                onChange={(event) =>
                  update(
                    "newPassword",
                    event.target.value,
                  )
                }
                placeholder="New password"
                autoComplete="new-password"
                className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            {/* Confirm Password */}

            <div className="min-w-0">
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Confirm new password
              </label>

              <input
                type="password"
                value={form.confirmPassword}
                onChange={(event) =>
                  update(
                    "confirmPassword",
                    event.target.value,
                  )
                }
                placeholder="Confirm password"
                autoComplete="new-password"
                className="h-11 w-full min-w-0 rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            {/* Security Note */}

            <div className="flex min-w-0 items-start gap-3 rounded-xl bg-[#f6f3ed] p-4 sm:items-center">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#ae8954] sm:mt-0"
              />

              <p className="min-w-0 text-xs leading-5 text-zinc-600">
                Your password is securely
                hashed before it is stored.
              </p>
            </div>
          </div>

          {passwordError && (
            <div className="mx-4 mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium text-red-600 sm:mx-6">
              {passwordError}
            </div>
          )}

          <div className="flex flex-col gap-3 border-t border-[#eeeae3] p-4 sm:flex-row sm:items-center sm:justify-end sm:p-6">
            {passwordSaved && (
              <span className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-600">
                <Check size={14} />
                Password updated
              </span>
            )}

            <button
              type="button"
              onClick={handlePasswordChange}
              disabled={changingPassword}
              className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#111111] px-5 text-xs font-semibold text-white transition hover:bg-[#ae8954] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {changingPassword
                ? "Updating..."
                : "Update password"}
            </button>
          </div>
        </section>

        {/* =================================================
            NOTIFICATIONS
        ================================================== */}

        <section className="w-full rounded-2xl border border-[#e7e2d9] bg-white p-4 sm:p-6">
          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3f0ea] text-zinc-700">
                <Bell size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold">
                  Product notifications
                </h2>

                <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-500">
                  Receive important updates
                  about your workspace.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                update(
                  "notifications",
                  !form.notifications,
                )
              }
              className={[
                "relative h-6 w-11 shrink-0 self-start rounded-full transition sm:self-center",
                form.notifications
                  ? "bg-[#111111]"
                  : "bg-zinc-200",
              ].join(" ")}
              aria-label="Toggle notifications"
              aria-pressed={
                form.notifications
              }
            >
              <span
                className={[
                  "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition",
                  form.notifications
                    ? "left-6"
                    : "left-1",
                ].join(" ")}
              />
            </button>
          </div>
        </section>

        {/* =================================================
            SAVE
        ================================================== */}

        <div className="flex w-full flex-col gap-3 pb-2 sm:flex-row sm:items-center sm:justify-end">
          {saved && (
            <span className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-600 sm:justify-end">
              <Check size={14} />
              Changes saved
            </span>
          )}

          <button
            type="submit"
            disabled={savingProfile}
            className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#111111] px-6 text-xs font-semibold text-white transition hover:bg-[#ae8954] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {savingProfile
              ? "Saving..."
              : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;