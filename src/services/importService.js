import { apiRequest } from "./api";

export async function importResume(file) {
  const formData = new FormData();

  formData.append("file", file);

  return apiRequest("/import/resume", {
    method: "POST",
    body: formData,
  });
}

export async function importCoverLetter(file) {
  const formData = new FormData();

  formData.append("file", file);

  return apiRequest("/import/cover-letter", {
    method: "POST",
    body: formData,
  });
}