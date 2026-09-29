import { apiRequest } from "./api";

export function createResume(payload) {
  return apiRequest("/resumes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getResumesFromApi() {
  return apiRequest("/resumes");
}

export function getResumeFromApi(id) {
  return apiRequest(`/resumes/${encodeURIComponent(id)}`);
}

export function updateResumeOnApi(id, payload) {
  return apiRequest(`/resumes/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deleteResumeFromApi(id) {
  return apiRequest(`/resumes/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function duplicateResumeOnApi(id) {
  return apiRequest(
    `/resumes/${encodeURIComponent(id)}/duplicate`,
    {
      method: "POST",
    },
  );
}