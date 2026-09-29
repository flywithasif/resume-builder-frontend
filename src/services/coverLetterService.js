import { apiRequest } from "./api";

export function createCoverLetter(payload) {
  return apiRequest("/cover-letters", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getCoverLettersFromApi() {
  return apiRequest("/cover-letters");
}

export function getCoverLetterFromApi(id) {
  return apiRequest(`/cover-letters/${encodeURIComponent(id)}`);
}

export function updateCoverLetterOnApi(id, payload) {
  return apiRequest(`/cover-letters/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deleteCoverLetterFromApi(id) {
  return apiRequest(`/cover-letters/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function duplicateCoverLetterOnApi(id) {
  return apiRequest(
    `/cover-letters/${encodeURIComponent(id)}/duplicate`,
    {
      method: "POST",
    },
  );
}