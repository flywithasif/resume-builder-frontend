import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import {
  resendEmailOtp,
  verifyEmailOtp,
} from "../../services/authService";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();

  const email =
    location.state?.email ||
    localStorage.getItem(
      "resumely_pending_email",
    ) ||
    "";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/register", {
        replace: true,
      });
    }
  }, [email, navigate]);

  const handleVerify = async (event) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result = await verifyEmailOtp({
        email,
        otp,
      });

      localStorage.removeItem(
        "resumely_pending_email",
      );

      const destination =
        location.state?.from || "/dashboard";

      navigate(destination, {
        replace: true,
      });

      return result;
    } catch (error) {
      setError(
        error?.message ||
          "Unable to verify OTP.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setError("");
    setMessage("");

    try {
      await resendEmailOtp({
        email,
      });

      setMessage(
        "A new verification OTP has been sent to your email.",
      );
    } catch (error) {
      setError(
        error?.message ||
          "Unable to resend OTP.",
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-[calc(100dvh-72px)] bg-[#f8f8f6]">
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] w-full max-w-[760px] items-center justify-center px-4 py-8">
        <div className="w-full max-w-[460px]">
          <Link
            to="/register"
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-950"
          >
            <ArrowLeft size={14} />
            Back to registration
          </Link>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.07)] sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Mail size={19} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
              Verify your email
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              Enter your verification code
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              We sent a 6-digit OTP to{" "}
              <span className="font-medium text-zinc-800">
                {email}
              </span>
              .
            </p>

            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {message && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {message}
              </div>
            )}

            <form
              onSubmit={handleVerify}
              className="mt-6"
            >
              <label
                htmlFor="verify-email-otp"
                className="mb-1.5 block text-xs font-medium text-zinc-600"
              >
                Verification code
              </label>

              <input
                id="verify-email-otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={otp}
                onChange={(event) => {
                  const value =
                    event.target.value.replace(
                      /\D/g,
                      "",
                    );

                  setOtp(value);
                  setError("");
                }}
                placeholder="000000"
                className="h-12 w-full rounded-xl border border-stone-200 bg-white px-4 text-center text-lg font-semibold tracking-[0.4em] outline-none focus:border-zinc-900"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
              >
                {loading
                  ? "Verifying..."
                  : "Verify Email"}

                {!loading && (
                  <CheckCircle2 size={16} />
                )}
              </button>
            </form>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm">
              <span className="text-zinc-400">
                Didn't receive the code?
              </span>

              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="font-semibold text-zinc-900 hover:text-[#987542] disabled:opacity-50"
              >
                {resending
                  ? "Sending..."
                  : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;