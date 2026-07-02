export default function Loading() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl">
        {/* Animated Loader */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          Loading Page
        </h2>

        {/* Description */}

        <p className="mt-3 text-slate-600">
          Please wait while we prepare your content.
        </p>

        {/* Animated Dots */}

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600" />
        </div>
      </div>
    </section>
  );
}