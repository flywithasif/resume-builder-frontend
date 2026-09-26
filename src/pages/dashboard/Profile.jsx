import {
  Bell,
  Check,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    notifications: true,
  });

  const [saved, setSaved] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSaved(false);
  };

  const saveChanges = (event) => {
    event.preventDefault();
    setSaved(true);

    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="mx-auto max-w-[1000px]">
      <div>
        <p className="text-sm font-medium text-[#987542]">Account</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
          Profile & Settings
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Manage your personal information and account preferences.
        </p>
      </div>

      <form onSubmit={saveChanges} className="mt-7 space-y-5">
        <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white">
              <UserRound size={16} />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Personal information</h2>
              <p className="mt-1 text-xs text-zinc-500">
                Keep your account details up to date.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              ["name", "Full name", "Your name", "text"],
              ["email", "Email", "you@example.com", "email"],
              ["phone", "Mobile number", "+91 98765 43210", "tel"],
            ].map(([field, label, placeholder, type]) => (
              <div key={field}>
                <label
                  htmlFor={`profile-${field}`}
                  className="mb-1.5 block text-xs font-medium text-zinc-600"
                >
                  {label}
                </label>
                <div className="relative">
                  {field === "email" ? (
                    <Mail
                      size={15}
                      className="absolute left-3 top-3 text-zinc-400"
                    />
                  ) : (
                    <UserRound
                      size={15}
                      className="absolute left-3 top-3 text-zinc-400"
                    />
                  )}
                  <input
                    id={`profile-${field}`}
                    type={type}
                    value={form[field]}
                    onChange={(event) => update(field, event.target.value)}
                    placeholder={placeholder}
                    className="h-10 w-full rounded-lg border border-stone-200 pl-9 pr-3 text-sm outline-none focus:border-zinc-900"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white">
              <LockKeyhole size={16} />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Password</h2>
              <p className="mt-1 text-xs text-zinc-500">
                Change your password whenever you need to.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              ["currentPassword", "Current password"],
              ["newPassword", "New password"],
              ["confirmPassword", "Confirm new password"],
            ].map(([field, label]) => (
              <div key={field}>
                <label
                  htmlFor={`profile-${field}`}
                  className="mb-1.5 block text-xs font-medium text-zinc-600"
                >
                  {label}
                </label>
                <input
                  id={`profile-${field}`}
                  type="password"
                  value={form[field]}
                  onChange={(event) => update(field, event.target.value)}
                  placeholder="••••••••"
                  className="h-10 w-full rounded-lg border border-stone-200 px-3 text-sm outline-none focus:border-zinc-900"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white">
              <Bell size={16} />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Preferences</h2>
              <p className="mt-1 text-xs text-zinc-500">
                Choose how you want to receive product updates.
              </p>
            </div>
          </div>

          <label className="mt-6 flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-stone-50 p-4">
            <div>
              <p className="text-xs font-semibold">Product notifications</p>
              <p className="mt-1 text-[10px] leading-5 text-zinc-500">
                Receive important updates about your resumes and account.
              </p>
            </div>

            <input
              type="checkbox"
              checked={form.notifications}
              onChange={(event) =>
                update("notifications", event.target.checked)
              }
              className="h-4 w-4 accent-zinc-950"
            />
          </label>
        </section>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck size={14} />
            Your account settings are ready for backend integration.
          </div>

          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-xs font-semibold text-white hover:bg-zinc-800"
          >
            {saved ? <Check size={15} /> : null}
            {saved ? "Changes Saved" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
