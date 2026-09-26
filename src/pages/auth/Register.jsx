import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 2) {
      nextErrors.name = "Enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
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
      navigate("/login");
    }, 700);
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
              Get started
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] xl:text-6xl">
              Turn your experience into a resume that feels like you.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Create your account and build a polished resume with a focused
              editor and professional templates.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Start with professional templates",
                "Edit with a live preview",
                "Create multiple resume versions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-[#c6a36c]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-zinc-600">
            Your career story starts here.
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
                Create account
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Build your first professional resume.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4" noValidate>
                <div>
                  <label htmlFor="register-name" className="mb-1.5 block text-xs font-medium text-zinc-600">
                    Full name
                  </label>
                  <div className="relative">
                    <UserRound size={16} className="absolute left-3 top-3 text-zinc-400" />
                    <input
                      id="register-name"
                      type="text"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="John Doe"
                      autoComplete="name"
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
                        errors.name ? "border-red-300" : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="register-email" className="mb-1.5 block text-xs font-medium text-zinc-600">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-zinc-400" />
                    <input
                      id="register-email"
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
                        errors.email ? "border-red-300" : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="register-password" className="mb-1.5 block text-xs font-medium text-zinc-600">
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole size={16} className="absolute left-3 top-3 text-zinc-400" />
                    <input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(event) => updateField("password", event.target.value)}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
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
                  <label htmlFor="register-confirm-password" className="mb-1.5 block text-xs font-medium text-zinc-600">
                    Confirm password
                  </label>
                  <div className="relative">
                    <LockKeyhole size={16} className="absolute left-3 top-3 text-zinc-400" />
                    <input
                      id="register-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={(event) => updateField("confirmPassword", event.target.value)}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
                        errors.confirmPassword ? "border-red-300" : "border-stone-200 focus:border-zinc-900"
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
                  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Account"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-zinc-500">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-zinc-900 hover:text-[#987542]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
