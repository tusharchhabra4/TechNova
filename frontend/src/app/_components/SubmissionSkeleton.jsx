export default function SubmissionSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse">

      {/* Title */}

      <div className="h-7 w-40 rounded bg-slate-200" />

      {/* Name */}

      <div className="mt-8 flex gap-3">
        <div className="h-5 w-16 rounded bg-slate-200" />
        <div className="h-5 flex-1 rounded bg-slate-200" />
      </div>

      {/* Email */}

      <div className="mt-5 flex gap-3">
        <div className="h-5 w-16 rounded bg-slate-200" />
        <div className="h-5 w-3/4 rounded bg-slate-200" />
      </div>

      {/* Button */}

      <div className="mt-8 h-5 w-24 rounded bg-slate-200" />

    </div>
  );
}