import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  Upload,
  X,
} from "lucide-react";

import { useRef, useState } from "react";

import {
  importCoverLetter,
  importResume,
} from "../../services/importService";

function DocumentImportModal({
  open,
  type = "resume",
  onClose,
  onImported,
}) {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!open) {
    return null;
  }

  const isResume = type === "resume";

  const title = isResume
    ? "Import Existing Resume"
    : "Import Existing Cover Letter";

  const description = isResume
    ? "Upload your existing resume and let AI extract your information automatically."
    : "Upload your existing cover letter and let AI extract the content automatically.";

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    setError("");
    setSuccess("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    const fileName = selectedFile.name.toLowerCase();

    const isPdf = fileName.endsWith(".pdf");
    const isDocx = fileName.endsWith(".docx");

    if (!isPdf && !isDocx) {
      setFile(null);
      setError("Only PDF and DOCX files are supported.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setFile(null);
      setError("File size must be less than 5 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleImport = async () => {
    if (!file) {
      setError("Please select a PDF or DOCX file first.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = isResume
        ? await importResume(file)
        : await importCoverLetter(file);

      if (!result?.success || !result?.data) {
        throw new Error(
          result?.message ||
            "Unable to analyze this document.",
        );
      }

      setSuccess(
        isResume
          ? "Resume analyzed successfully."
          : "Cover letter analyzed successfully.",
      );

      if (typeof onImported === "function") {
        onImported(result.data);
      }
    } catch (importError) {
      console.error(
        "Document import failed:",
        importError,
      );

      setError(
        importError?.message ||
          "Something went wrong while analyzing the document.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading) {
      return;
    }

    setFile(null);
    setError("");
    setSuccess("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    onClose?.();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) {
      return;
    }

    const fakeEvent = {
      target: {
        files: [droppedFile],
      },
    };

    handleFileChange(fakeEvent);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.20)]">
        {/* HEADER */}

        <div className="flex items-start justify-between gap-4 border-b border-stone-100 px-5 py-5 sm:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#987542]/10 text-[#987542]">
              <FileText size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-base font-semibold text-zinc-950 sm:text-lg">
                {title}
              </h2>

              <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                {description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-stone-100 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <X size={17} />
          </button>
        </div>

        {/* CONTENT */}

        <div className="p-5 sm:p-6">
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* UPLOAD AREA */}

          <button
            type="button"
            disabled={loading}
            onClick={() => inputRef.current?.click()}
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={handleDrop}
            className="
              group
              flex
              min-h-[190px]
              w-full
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-stone-300
              bg-stone-50/70
              px-5
              py-8
              text-center
              transition
              hover:border-[#987542]
              hover:bg-[#987542]/5
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#987542] shadow-sm ring-1 ring-stone-200 transition group-hover:scale-105">
              <Upload size={20} />
            </div>

            <p className="mt-4 text-sm font-semibold text-zinc-900">
              {file
                ? file.name
                : "Choose a PDF or DOCX file"}
            </p>

            <p className="mt-1.5 text-xs text-zinc-500">
              Click to browse or drag & drop
            </p>

            <p className="mt-3 text-[11px] text-zinc-400">
              Maximum file size: 5 MB
            </p>
          </button>

          {/* SELECTED FILE */}

          {file && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#987542]/10 text-[#987542]">
                <FileText size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-zinc-900">
                  {file.name}
                </p>

                <p className="mt-0.5 text-[10px] text-zinc-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              {!loading && (
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);

                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                  }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-400 transition hover:bg-stone-100 hover:text-zinc-900"
                  aria-label="Remove file"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          )}

          {/* ERROR */}

          {error && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-3 text-xs text-red-700">
              <AlertCircle
                size={15}
                className="mt-0.5 shrink-0"
              />

              <p className="leading-5">
                {error}
              </p>
            </div>
          )}

          {/* SUCCESS */}

          {success && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50 px-3.5 py-3 text-xs text-emerald-700">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0"
              />

              <p className="leading-5">
                {success}
              </p>
            </div>
          )}

          {/* AI INFO */}

          <div className="mt-4 rounded-xl border border-stone-100 bg-stone-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
              AI Import
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Your document will be analyzed and its available
              information will be placed into the editor. Missing
              information will remain empty.
            </p>
          </div>
        </div>

        {/* FOOTER */}

        <div className="flex flex-col-reverse gap-2 border-t border-stone-100 bg-stone-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="h-10 rounded-lg border border-stone-200 bg-white px-4 text-xs font-semibold text-zinc-700 transition hover:border-stone-300 hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleImport}
            disabled={!file || loading}
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-zinc-950
              px-5
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-[#987542]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={15}
                  className="animate-spin"
                />

                <span>
                  Analyzing document...
                </span>
              </>
            ) : (
              <>
                <Upload size={15} />

                <span>
                  Analyze & Import
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentImportModal;
