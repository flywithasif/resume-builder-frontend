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
    <div className="min-h-[calc(100vh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[760px] items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-[460px]">
          <Link to="/login" className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-950">
            <ArrowLeft size={14} />
            Back to login
          </Link>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-9">
            {!submitted ? (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <Mail size={19} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
                  Account recovery
                </p>

                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                  Forgot your password?
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Enter the email associated with your account and we&apos;ll
                  prepare the password reset flow.
                </p>

                <form onSubmit={handleSubmit} className="mt-7" noValidate>
                  <label htmlFor="forgot-email" className="mb-1.5 block text-xs font-medium text-zinc-600">
                    Email
                  </label>

                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-zinc-400" />
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
                      className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-900/5 ${
                        error ? "border-red-300" : "border-stone-200 focus:border-zinc-900"
                      }`}
                    />
                  </div>

                  {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Preparing..." : "Continue"}
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
                  Check your inbox
                </p>

                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                  Reset link prepared
                </h1>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  A password reset message would be sent to{" "}
                  <span className="font-medium text-zinc-800">{email}</span>.
                </p>

                <p className="mt-3 text-xs leading-5 text-zinc-400">
                  Email delivery is not connected yet. This is the frontend
                  success state for the current stage.
                </p>

                <Link
                  to="/login"
                  className="mt-7 flex h-11 items-center justify-center rounded-xl border border-stone-200 text-sm font-semibold text-zinc-800 hover:bg-stone-50"
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
