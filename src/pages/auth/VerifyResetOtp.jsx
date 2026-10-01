import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import {
  forgotPassword,
  verifyResetOtp,
} from "../../services/authService";

export default function VerifyResetOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email =
    location.state?.email ||
    localStorage.getItem("resumely_reset_email") ||
    "";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleOtpChange = (event) => {
    const value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
    setError("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email) {
      setError(
        "Email address not found. Please start the forgot password process again.",
      );
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      await verifyResetOtp({
        email,
        otp,
      });

      localStorage.setItem(
        "resumely_reset_email",
        email,
      );

      navigate("/reset-password", {
        state: {
          email,
        },
      });
    } catch (err) {
      setError(
        err?.message ||
          "Unable to verify OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError(
        "Email address not found. Please start again.",
      );
      return;
    }

    try {
      setResending(true);

      const result = await forgotPassword({
        email,
      });

      setMessage(
        result?.message ||
          "A new OTP has been sent to your email.",
      );
    } catch (err) {
      setError(
        err?.message ||
          "Unable to resend OTP. Please try again.",
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#f7f7f5] px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-md">
        <div className="border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <ShieldCheck size={21} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ae8954]">
              Password recovery
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              Verify your OTP
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Enter the 6-digit verification code sent
              to your email address.
            </p>
          </div>

          {email ? (
            <div className="mb-5 flex items-center gap-3 border border-zinc-200 bg-zinc-50 px-4 py-3">
              <Mail
                size={17}
                className="shrink-0 text-[#ae8954]"
              />

              <p className="min-w-0 truncate text-sm font-medium text-zinc-700">
                {email}
              </p>
            </div>
          ) : null}

          {error ? (
            <div className="mb-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {message ? (
            <div className="mb-5 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {message}
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="otp"
                className="mb-2 block text-sm font-medium text-zinc-800"
              >
                Verification code
              </label>

              <input
                id="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otp}
                onChange={handleOtpChange}
                placeholder="000000"
                maxLength={6}
                className="h-12 w-full border border-zinc-300 bg-white px-4 text-center text-lg font-semibold tracking-[0.45em] text-zinc-950 outline-none transition focus:border-[#ae8954] focus:ring-2 focus:ring-[#ae8954]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-11 w-full items-center justify-center gap-2 bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-[#ae8954] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck size={16} />
                  Verify OTP
                </>
              )}
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-zinc-500">
              Didn't receive the code?
            </p>

            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resending}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#ae8954] transition hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {resending ? (
                <Loader2
                  size={14}
                  className="animate-spin"
                />
              ) : (
                <RotateCcw size={14} />
              )}

              {resending
                ? "Sending..."
                : "Resend OTP"}
            </button>
          </div>

          <div className="mt-7 border-t border-zinc-200 pt-5">
            <Link
              to="/forgot-password"
              className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
            >
              <ArrowLeft size={15} />
              Back to forgot password
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}