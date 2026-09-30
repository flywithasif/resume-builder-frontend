import { apiRequest } from "./api";

/* =========================================================
   REGISTER
========================================================= */

export async function registerUser(payload) {
  const result = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result.token) {
    localStorage.setItem(
      "resumely_token",
      result.token,
    );

    localStorage.setItem(
      "resumely_user",
      JSON.stringify(result.user),
    );
  }

  return result;
}

/* =========================================================
   LOGIN
========================================================= */

export async function loginUser(payload) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result.token) {
    localStorage.setItem(
      "resumely_token",
      result.token,
    );

    localStorage.setItem(
      "resumely_user",
      JSON.stringify(result.user),
    );
  }

  return result;
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
  const result = await apiRequest(
    "/auth/profile",
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  );

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
  return apiRequest(
    "/auth/password",
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  );
}

/* =========================================================
   GET SETTINGS
========================================================= */

export async function getUserSettings() {
  return apiRequest(
    "/auth/settings",
  );
}

/* =========================================================
   UPDATE SETTINGS
========================================================= */

export async function updateUserSettings(
  settings,
) {
  return apiRequest(
    "/auth/settings",
    {
      method: "PUT",
      body: JSON.stringify({
        settings,
      }),
    },
  );
}

/* =========================================================
   LOGOUT
========================================================= */

export function logoutUser() {
  localStorage.removeItem(
    "resumely_token",
  );

  localStorage.removeItem(
    "resumely_user",
  );
}