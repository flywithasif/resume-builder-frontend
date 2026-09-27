import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
      form: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await login({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrors({
        form:
          error?.message ||
          "Unable to sign in. Please check your email and password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden flex-col justify-between border-r border-stone-200 bg-zinc-950 p-10 text-white lg:flex xl:p-14">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
              R
            </span>

            <span className="text-lg font-semibold tracking-tight">
              Resume<span className="text-[#c6a36c]">ly</span>
            </span>
          </Link>

          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6a36c]">
              Welcome back
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] xl:text-6xl">
              Continue building a resume you&apos;re proud to send.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Return to your workspace, continue an existing resume or start
              preparing a new version for your next opportunity.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Live resume editing",
                "Professional templates",
                "Multiple resume versions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-300"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#c6a36c]"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-zinc-600">
            Build clearly. Apply confidently.
          </p>
        </div>

        <div className="flex items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
                  R
                </span>

                <span className="text-lg font-semibold tracking-tight">
                  Resume<span className="text-[#b08d57]">ly</span>
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
                Account
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Continue building your professional resume.
              </p>

              {errors.form && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700">
                  {errors.form}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="login-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-600"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-3 text-zinc-400"
                    />

                    <input
                      id="login-email"
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      disabled={loading}
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-zinc-900/5 disabled:cursor-not-allowed disabled:bg-zinc-50 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="mb-1.5 block text-xs font-medium text-zinc-600"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={16}
                      className="absolute left-3 top-3 text-zinc-400"
                    />

                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(event) =>
                        updateField("password", event.target.value)
                      }
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      disabled={loading}
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-zinc-900/5 disabled:cursor-not-allowed disabled:bg-zinc-50 ${
                        errors.password
                          ? "border-red-300 focus:border-red-500"
                          : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      disabled={loading}
                      className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-zinc-400 hover:text-zinc-900 disabled:cursor-not-allowed"
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
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-xs text-zinc-600">
                    <input
                      type="checkbox"
                      checked={form.remember}
                      onChange={(event) =>
                        updateField(
                          "remember",
                          event.target.checked,
                        )
                      }
                      disabled={loading}
                      className="h-4 w-4 rounded border-stone-300 accent-zinc-950"
                    />

                    Remember me
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-zinc-700 hover:text-[#987542]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}

                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-zinc-500">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-zinc-900 hover:text-[#987542]"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;