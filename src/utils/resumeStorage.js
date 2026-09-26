const STORAGE_KEY = "resumely_resumes";

const clone = (value) => JSON.parse(JSON.stringify(value));

export function getResumes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveResumes(resumes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));

  return resumes;
}

export function getResumeById(id) {
  if (!id) return null;

  return (
    getResumes().find(
      (resume) => String(resume.id) === String(id)
    ) || null
  );
}

export function calculateResumeProgress(resume) {
  if (!resume) return 0;

  const checks = [
    Boolean(
      resume.personal?.firstName &&
        resume.personal?.lastName &&
        resume.personal?.email &&
        resume.personal?.title
    ),

    Boolean(resume.summary?.trim()),

    Array.isArray(resume.experience) &&
      resume.experience.length > 0,

    Array.isArray(resume.education) &&
      resume.education.length > 0,

    Array.isArray(resume.skills) &&
      resume.skills.filter(Boolean).length >= 3,

    Array.isArray(resume.projects) &&
      resume.projects.length > 0,

    Array.isArray(resume.certifications) &&
      resume.certifications.length > 0,

    Array.isArray(resume.languages) &&
      resume.languages.length > 0,
  ];

  return Math.round(
    (checks.filter(Boolean).length / checks.length) * 100
  );
}

export function makeResumeTitle(resume) {
  const firstName =
    resume?.personal?.firstName?.trim();

  const lastName =
    resume?.personal?.lastName?.trim();

  const title =
    resume?.personal?.title?.trim();

  const name = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

  if (name && title) {
    return `${name} — ${title}`;
  }

  if (name) {
    return `${name} Resume`;
  }

  if (title) {
    return `${title} Resume`;
  }

  return "Untitled Resume";
}

export function createResumeRecord({
  data,
  template = "executive",
}) {
  const now = new Date().toISOString();

  return {
    id: `resume_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 8)}`,

    title: makeResumeTitle(data),

    template,

    progress: calculateResumeProgress(data),

    updatedAt: now,

    createdAt: now,

    data: clone(data),
  };
}

export function duplicateResumeRecord(resume) {
  const copy = clone(resume);

  const now = new Date().toISOString();

  return {
    ...copy,

    id: `resume_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 8)}`,

    title: `${resume.title} Copy`,

    progress: resume.progress || 0,

    updatedAt: now,

    createdAt: now,
  };
}

export function formatUpdatedAt(value) {
  if (!value) {
    return "Recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  const diff =
    Date.now() - date.getTime();

  const minutes =
    Math.floor(diff / 60000);

  const hours =
    Math.floor(diff / 3600000);

  const days =
    Math.floor(diff / 86400000);

  if (minutes < 1) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  if (hours < 24) {
    return `${hours} hr ago`;
  }

  if (days === 1) {
    return "Yesterday";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}