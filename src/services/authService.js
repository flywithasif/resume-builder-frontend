import { apiRequest } from "./api";

export async function registerUser(payload) {
  const result = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result?.token) {
    localStorage.setItem("resumely_token", result.token);

    if (result.user) {
      localStorage.setItem(
        "resumely_user",
        JSON.stringify(result.user),
      );
    }
  }

  return result;
}

export async function loginUser(payload) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (result?.token) {
    localStorage.setItem("resumely_token", result.token);

    if (result.user) {
      localStorage.setItem(
        "resumely_user",
        JSON.stringify(result.user),
      );
    }
  }

  return result;
}

export async function getCurrentUser() {
  return apiRequest("/auth/me", {
    method: "GET",
  });
}

export function logoutUser() {
  localStorage.removeItem("resumely_token");
  localStorage.removeItem("resumely_user");
}