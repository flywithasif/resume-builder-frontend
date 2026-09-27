import {
  Bell,
  Check,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function Profile() {
  const storedUser = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("resumely_user") || "null",
      );
    } catch {
      return null;
    }
  })();

  const [form, setForm] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: true,
  });

  const [saved, setSaved] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const saveChanges = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "resumely_user",
      JSON.stringify({
        ...storedUser,
        name: form.name,
        email: form.email,
      }),
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-[1050px]">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ae8954]">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">
          Profile
        </h1>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Manage your personal information and account security
          from one place.
        </p>
      </div>

      <form onSubmit={saveChanges} className="mt-8 space-y-5">
        {/* Personal */}
        <section className="overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                <UserRound size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Personal information
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Keep your account details up to date.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  value={form.name}
                  onChange={(event) =>
                    update("name", event.target.value)
                  }
                  placeholder="Your name"
                  className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    update("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                Mobile number
              </label>

              <div className="relative">
                <Smartphone
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) =>
                    update("phone", event.target.value)
                  }
                  placeholder="+91 98765 43210"
                  className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] pl-10 pr-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="overflow-hidden rounded-2xl border border-[#e7e2d9] bg-white">
          <div className="border-b border-[#eeeae3] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                <LockKeyhole size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Password & security
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Password changes will be connected to the backend
                  security flow.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div>
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
                className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-600">
                New password
              </label>

              <input
                type="password"
                value={form.newPassword}
                onChange={(event) =>
                  update("newPassword", event.target.value)
                }
                placeholder="New password"
                className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            <div>
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
                className="h-11 w-full rounded-xl border border-[#e5e0d8] bg-[#fbfaf8] px-3 text-sm outline-none focus:border-zinc-900"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#f6f3ed] p-4">
              <ShieldCheck
                size={18}
                className="shrink-0 text-[#ae8954]"
              />

              <p className="text-xs leading-5 text-zinc-600">
                Your password update will be handled securely
                through the API in the next backend stage.
              </p>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-2xl border border-[#e7e2d9] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3f0ea] text-zinc-700">
                <Bell size={17} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Product notifications
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Receive important updates about your workspace.
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
                "relative h-6 w-11 shrink-0 rounded-full transition",
                form.notifications
                  ? "bg-[#111111]"
                  : "bg-zinc-200",
              ].join(" ")}
              aria-label="Toggle notifications"
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

        {/* Save */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          {saved && (
            <span className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-600">
              <Check size={14} />
              Changes saved
            </span>
          )}

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#111111] px-6 text-xs font-semibold text-white transition hover:bg-[#ae8954]"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;