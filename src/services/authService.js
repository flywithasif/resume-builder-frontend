import { apiRequest } from "./api";

/* =========================================================
   REGISTER
========================================================= */

export async function registerUser(payload) {
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   VERIFY EMAIL OTP
========================================================= */

export async function verifyEmailOtp(payload) {
  const result = await apiRequest("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result?.token) {
    localStorage.setItem("resumely_token", result.token);
  }

  if (result?.user) {
    localStorage.setItem(
      "resumely_user",
      JSON.stringify(result.user),
    );
  }

  return result;
}

/* =========================================================
   RESEND EMAIL OTP
========================================================= */

export async function resendEmailOtp(payload) {
  return apiRequest("/auth/resend-email-otp", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   LOGIN
========================================================= */

export async function loginUser(payload) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result?.token) {
    localStorage.setItem("resumely_token", result.token);
  }

  if (result?.user) {
    localStorage.setItem(
      "resumely_user",
      JSON.stringify(result.user),
    );
  }

  return result;
}

/* =========================================================
   FORGOT PASSWORD
========================================================= */

export async function forgotPassword(payload) {
  return apiRequest("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   VERIFY RESET OTP
========================================================= */

export async function verifyResetOtp(payload) {
  return apiRequest("/auth/verify-reset-otp", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   RESET PASSWORD
========================================================= */

export async function resetPassword(payload) {
  return apiRequest("/auth/reset-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   CURRENT USER
========================================================= */

export async function getCurrentUser() {
  return apiRequest("/auth/me");
}

/* =========================================================
   UPDATE PROFILE
========================================================= */

export async function updateProfile(payload) {
  const result = await apiRequest("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  if (result?.user) {
    localStorage.setItem(
      "resumely_user",
      JSON.stringify(result.user),
    );
  }

  return result;
}

/* =========================================================
   CHANGE PASSWORD
========================================================= */

export async function changePassword(payload) {
  return apiRequest("/auth/password", {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

/* =========================================================
   GET SETTINGS
========================================================= */

export async function getUserSettings() {
  return apiRequest("/auth/settings");
}

/* =========================================================
   UPDATE SETTINGS
========================================================= */

export async function updateUserSettings(settings) {
  return apiRequest("/auth/settings", {
    method: "PUT",
    body: JSON.stringify({
      settings,
    }),
  });
}

/* =========================================================
   LOGOUT
========================================================= */

export function logoutUser() {
  localStorage.removeItem("resumely_token");
  localStorage.removeItem("resumely_user");
  localStorage.removeItem("resumely_pending_email");
  localStorage.removeItem("resumely_reset_email");
}