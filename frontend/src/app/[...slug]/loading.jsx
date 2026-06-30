import SubmissionSkeleton from "../_components/SubmissionSkeleton";

export default function Loading() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">

          <div>

            <div className="h-10 w-72 rounded bg-slate-200 animate-pulse" />

            <div className="mt-4 h-5 w-[520px] rounded bg-slate-200 animate-pulse" />

          </div>

          {/* Search */}

          <div className="h-12 w-full md:w-96 rounded-full bg-slate-200 animate-pulse" />

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 9 }).map((_, index) => (
            <SubmissionSkeleton key={index} />
          ))}

        </div>

      </div>
    </section>
  );
}