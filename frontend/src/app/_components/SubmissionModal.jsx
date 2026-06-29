"use client";

export default function SubmissionModal({
  submission,
  modalTitle,
  closeButtonText,
  onClose,
}) {
  if (!submission) return null;

  const responseData =
    submission.data?.data ??
    submission.data ??
    {};

  const formatLabel = (key) =>
    key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-900 p-6">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {modalTitle}
            </h2>

            <p className="mt-1 uppercase tracking-wide text-sm text-slate-500">
              {submission.form_name.replace(
                /-/g,
                " "
              )}
            </p>
          </div>
        </div>

        {/* Body */}

        <div className="max-h-[70vh] overflow-y-auto px-8 py-6">

          {Object.entries(responseData).map(
            ([key, value]) => {
              const isLongText =
                typeof value === "string" &&
                value.length > 60;

              return (
                <div
                  key={key}
                  className="border-b border-slate-200 py-5 last:border-none"
                >
                  {isLongText ? (
                    <>
                      <p className="font-semibold text-slate-700 mb-3">
                        {formatLabel(key)}
                      </p>

                      <p className="leading-7 text-slate-600 whitespace-pre-wrap">
                        {value || "-"}
                      </p>
                    </>
                  ) : (
                    <div className="grid grid-cols-3 gap-6 items-start">
                      <p className="font-semibold text-slate-700">
                        {formatLabel(key)}
                      </p>

                      <p className="col-span-2 text-slate-600 break-words">
                        {value
                          ? String(value)
                          : "-"}
                      </p>
                    </div>
                  )}
                </div>
              );
            }
          )}

        </div>

        {/* Footer */}

        <div className="flex justify-end border-t border-slate-200 px-8 py-5">
          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-white
              font-medium
              hover:bg-blue-700
              transition
            "
          >
            {closeButtonText}
          </button>
        </div>

      </div>
    </div>
  );
}