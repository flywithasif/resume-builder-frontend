import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [form, setForm] = useState({
    identifier: "",
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

    if (!form.identifier.trim()) {
      nextErrors.identifier =
        "Email or mobile number is required.";
    }

    if (!form.password) {
      nextErrors.password =
        "Password is required.";
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

    const identifier = form.identifier.trim();

    try {

      const payload = {
        password: form.password,
      };

      if (identifier.includes("@")) {
        payload.email =
          identifier.toLowerCase();
      } else {
        payload.phone = identifier;
      }

      await login(payload);

      const destination =
        location.state?.from ||
        localStorage.getItem(
          "resumely_after_login",
        ) ||
        "/dashboard";

      localStorage.removeItem(
        "resumely_after_login",
      );

      navigate(destination, {
        replace: true,
      });
    } catch (error) {
      const errorMessage =
        error?.message ||
        "Unable to sign in. Please check your credentials.";

      if (
        errorMessage
          .toLowerCase()
          .includes("verify your email")
      ) {
        localStorage.setItem(
          "resumely_pending_email",
          identifier.trim(),
        );

        navigate("/verify-email", {
          state: {
            email: identifier.trim(),
          },
        });

        return;
      }

      setErrors({
        form: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[1440px] flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}

        <div className="hidden flex-col justify-between border-r border-stone-200 bg-zinc-950 p-8 text-white lg:flex xl:p-12">
          <Link
            to="/"
            className="flex w-fit items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
              R
            </span>

            <span className="text-lg font-semibold">
              Resume
              <span className="text-[#c6a36c]">
                ly
              </span>
            </span>
          </Link>

          <div className="my-12 max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6a36c]">
              Welcome back
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] xl:text-5xl">
              Continue building a resume you&apos;re proud to send.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Return to your workspace, continue an
              existing resume or start preparing a new
              version for your next opportunity.
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

        {/* RIGHT */}

        <div className="flex min-h-full items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="w-full max-w-[440px]">
            <div className="mb-6 lg:hidden">
              <Link
                to="/"
                className="flex w-fit items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
                  R
                </span>

                <span className="text-lg font-semibold">
                  Resume
                  <span className="text-[#b08d57]">
                    ly
                  </span>
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
                Account
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Use your email or mobile number.
              </p>

              {errors.form && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errors.form}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="login-identifier"
                    className="mb-1.5 block text-xs font-medium text-zinc-600"
                  >
                    Email or mobile number
                  </label>

                  <div className="relative">
                    {form.identifier.includes(
                      "@",
                    ) ? (
                      <Mail
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />
                    ) : (
                      <Phone
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />
                    )}

                    <input
                      id="login-identifier"
                      type="text"
                      value={form.identifier}
                      onChange={(event) =>
                        updateField(
                          "identifier",
                          event.target.value,
                        )
                      }
                      placeholder="Email or mobile number"
                      autoComplete="username"
                      disabled={loading}
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none ${
                        errors.identifier
                          ? "border-red-300"
                          : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>

                  {errors.identifier && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {errors.identifier}
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
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="login-password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={form.password}
                      onChange={(event) =>
                        updateField(
                          "password",
                          event.target.value,
                        )
                      }
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      disabled={loading}
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none ${
                        errors.password
                          ? "border-red-300"
                          : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (current) => !current,
                        )
                      }
                      className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-zinc-400"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-zinc-600">
                    <input
                      type="checkbox"
                      checked={form.remember}
                      onChange={(event) =>
                        updateField(
                          "remember",
                          event.target.checked,
                        )
                      }
                      className="h-4 w-4 accent-zinc-950"
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
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
                >
                  {loading
                    ? "Signing in..."
                    : "Sign In"}

                  {!loading && (
                    <ArrowRight size={16} />
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-zinc-500">
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