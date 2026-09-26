import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole } from "lucide-react";
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
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
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
    <div className="min-h-[calc(100vh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[760px] items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-[460px]">
          <Link to="/login" className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-950">
            <ArrowLeft size={14} />
            Back to login
          </Link>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-9">
            {!success ? (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <LockKeyhole size={19} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
                  Secure your account
                </p>

                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                  Create a new password
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Choose a strong password for your account.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
                  <div>
                    <label htmlFor="reset-password" className="mb-1.5 block text-xs font-medium text-zinc-600">
                      New password
                    </label>

                    <div className="relative">
                      <LockKeyhole size={16} className="absolute left-3 top-3 text-zinc-400" />
                      <input
                        id="reset-password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(event) => updateField("password", event.target.value)}
                        placeholder="Enter new password"
                        autoComplete="new-password"
                        className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none focus:ring-2 focus:ring-zinc-900/5 ${
                          errors.password ? "border-red-300" : "border-stone-200 focus:border-zinc-900"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-zinc-400 hover:text-zinc-900"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {errors.password && <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="reset-confirm-password" className="mb-1.5 block text-xs font-medium text-zinc-600">
                      Confirm password
                    </label>

                    <div className="relative">
                      <LockKeyhole size={16} className="absolute left-3 top-3 text-zinc-400" />
                      <input
                        id="reset-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={(event) => updateField("confirmPassword", event.target.value)}
                        placeholder="Confirm new password"
                        autoComplete="new-password"
                        className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none focus:ring-2 focus:ring-zinc-900/5 ${
                          errors.confirmPassword
                            ? "border-red-300"
                            : "border-stone-200 focus:border-zinc-900"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((current) => !current)}
                        className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-zinc-400 hover:text-zinc-900"
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {errors.confirmPassword && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Updating..." : "Reset Password"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={23} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
                  Password updated
                </p>

                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                  You&apos;re ready to sign in
                </h1>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Your new password has been accepted by this frontend flow.
                </p>

                <p className="mt-3 text-xs leading-5 text-zinc-400">
                  Real password persistence will be connected when the backend
                  authentication API is integrated.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="mt-7 flex h-11 w-full items-center justify-center rounded-xl bg-zinc-950 text-sm font-semibold text-white hover:bg-zinc-800"
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
