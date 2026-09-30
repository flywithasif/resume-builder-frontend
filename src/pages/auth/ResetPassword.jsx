import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.password) {
      nextErrors.password = "New password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Use at least 8 characters.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <div className="min-h-[calc(100dvh-64px)] bg-[#f8f8f6] sm:min-h-[calc(100dvh-72px)]">
      <div className="mx-auto flex min-h-[calc(100dvh-64px)] w-full max-w-[760px] items-center justify-center px-4 py-8 sm:min-h-[calc(100dvh-72px)] sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="w-full max-w-[460px]">
          {/* BACK TO LOGIN */}
          <Link
            to="/login"
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950 sm:mb-7"
          >
            <ArrowLeft size={14} />
            <span>Back to login</span>
          </Link>

          {/* CARD */}
          <div className="w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-7 md:p-9">
            {!success ? (
              <>
                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <LockKeyhole size={19} />
                </div>

                {/* HEADING */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#987542] sm:mt-7 sm:text-xs">
                  Secure your account
                </p>

                <h1 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-2xl">
                  Create a new password
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Choose a strong password for your account.
                </p>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-5 sm:mt-7"
                  noValidate
                >
                  {/* NEW PASSWORD */}
                  <div>
                    <label
                      htmlFor="reset-password"
                      className="mb-1.5 block text-xs font-medium text-zinc-600"
                    >
                      New password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />

                      <input
                        id="reset-password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(event) =>
                          updateField("password", event.target.value)
                        }
                        placeholder="Enter new password"
                        autoComplete="new-password"
                        className={`h-11 w-full min-w-0 rounded-xl border bg-white pl-10 pr-11 text-sm outline-none transition-colors focus:ring-2 focus:ring-zinc-900/5 ${
                          errors.password
                            ? "border-red-300"
                            : "border-stone-200 focus:border-zinc-900"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((current) => !current)
                        }
                        className="absolute right-0 top-0 flex h-11 w-11 shrink-0 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-900"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>

                    {errors.password && (
                      <p className="mt-1.5 text-xs leading-5 text-red-600">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div>
                    <label
                      htmlFor="reset-confirm-password"
                      className="mb-1.5 block text-xs font-medium text-zinc-600"
                    >
                      Confirm password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />

                      <input
                        id="reset-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={(event) =>
                          updateField(
                            "confirmPassword",
                            event.target.value
                          )
                        }
                        placeholder="Confirm new password"
                        autoComplete="new-password"
                        className={`h-11 w-full min-w-0 rounded-xl border bg-white pl-10 pr-11 text-sm outline-none transition-colors focus:ring-2 focus:ring-zinc-900/5 ${
                          errors.confirmPassword
                            ? "border-red-300"
                            : "border-stone-200 focus:border-zinc-900"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            (current) => !current
                          )
                        }
                        className="absolute right-0 top-0 flex h-11 w-11 shrink-0 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-900"
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>

                    {errors.confirmPassword && (
                      <p className="mt-1.5 text-xs leading-5 text-red-600">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {loading ? "Updating..." : "Reset Password"}
                    </span>

                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={23} />
                </div>

                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#987542] sm:mt-6 sm:text-xs">
                  Password updated
                </p>

                <h1 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-2xl">
                  You&apos;re ready to sign in
                </h1>

                <p className="mx-auto mt-3 max-w-[360px] text-sm leading-6 text-zinc-500">
                  Your new password has been accepted by this frontend flow.
                </p>

                <p className="mx-auto mt-3 max-w-[360px] text-xs leading-5 text-zinc-400">
                  Real password persistence will be connected when the
                  backend authentication API is integrated.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="mt-6 flex h-11 w-full items-center justify-center rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:mt-7"
                >
                  Continue to login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;