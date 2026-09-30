import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-[calc(100dvh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] w-full max-w-[760px] items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="w-full max-w-[460px]">
          {/* BACK TO LOGIN */}
          <Link
            to="/login"
            className="mb-5 inline-flex min-h-8 items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950 sm:mb-7"
          >
            <ArrowLeft size={14} />
            Back to login
          </Link>

          {/* CARD */}
          <div className="w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-7 md:p-9">
            {!submitted ? (
              <>
                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <Mail size={19} />
                </div>

                {/* LABEL */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#987542] sm:mt-7 sm:text-xs">
                  Account recovery
                </p>

                {/* TITLE */}
                <h1 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-2xl">
                  Forgot your password?
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Enter the email associated with your account and we&apos;ll
                  prepare the password reset flow.
                </p>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 sm:mt-7"
                  noValidate
                >
                  <label
                    htmlFor="forgot-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-600"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      id="forgot-email"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setError("");
                      }}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={`h-11 w-full min-w-0 rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
                        error
                          ? "border-red-300"
                          : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>

                  {error && (
                    <p className="mt-1.5 text-xs leading-5 text-red-600">
                      {error}
                    </p>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Preparing..." : "Continue"}

                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center">
                {/* SUCCESS ICON */}
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={23} />
                </div>

                {/* LABEL */}
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#987542] sm:mt-6 sm:text-xs">
                  Check your inbox
                </p>

                {/* TITLE */}
                <h1 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-2xl">
                  Reset link prepared
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  A password reset message would be sent to{" "}
                  <span className="break-all font-medium text-zinc-800">
                    {email}
                  </span>
                  .
                </p>

                {/* INFO */}
                <p className="mt-3 text-xs leading-5 text-zinc-400">
                  Email delivery is not connected yet. This is the frontend
                  success state for the current stage.
                </p>

                {/* BACK BUTTON */}
                <Link
                  to="/login"
                  className="mt-6 flex min-h-11 w-full items-center justify-center rounded-xl border border-stone-200 px-4 text-sm font-semibold text-zinc-800 transition-colors hover:bg-stone-50 sm:mt-7"
                >
                  Back to login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;