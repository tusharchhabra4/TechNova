"use client";

import { useState } from "react";

import SubmissionModal from "./SubmissionModal";

export default function SubmissionCard({
  submission,
  responseFields,
  initialVisibleFields,
  showMoreText,
  modalTitle,
  closeButtonText,
}) {
  const [open, setOpen] = useState(false);

  const responseData = submission.data ;

  const previewFields = responseFields.slice(0, initialVisibleFields);

  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
        {/* Form Name */}

        <h3 className="text-lg font-bold uppercase mb-5">
          {submission.form_name.replace(/-/g, " ")}
        </h3>

        {/* Preview Fields */}

        <div className="space-y-3">
          {previewFields.map((field) => (
            <div key={field.id} className="flex gap-2">
              <span className="font-semibold">{field.Label}:</span>

              <span>{responseData[field.APIkey] || "-"}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 text-blue-600 font-medium hover:underline"
        >
          {showMoreText}
        </button>
      </div>

      {open && (
        <SubmissionModal
          submission={submission}
          modalTitle={modalTitle}
          closeButtonText={closeButtonText}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
