import { getSubmissions } from "@/actions/submission";
import SubmissionCard from "../SubmissionCard";

export default async function SubmissionListBlock({ data }) {
  const submissions = await getSubmissions();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold">{data.Title}</h2>

            <p className="mt-3 text-slate-600 max-w-2xl">{data.Description}</p>
          </div>

          <div className="w-full md:w-96">
            <div className="relative">
              {data.SearchIcon && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.SearchIcon.url}`}
                  alt={data.SearchIcon.alternativeText || "Search"}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    object-contain
                  "
                />
              )}

              <input
                type="text"
                placeholder={data.SearchPlaceholder}
                className="
                  w-full
                  rounded-full
                  border
                  border-slate-300
                  py-3
                  pl-12
                  pr-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                "
              />
            </div>
          </div>
        </div>

        {/* Response Cards */}

        <div className="mt-10">
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {submissions.data.length > 0 ? (
              submissions.data.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  responseFields={data.ResponseFields}
                  initialVisibleFields={data.InitialVisibleFields}
                  showMoreText={data.ShowMoreButtonText}
                  modalTitle={data.ModalTitle}
                  closeButtonText={data.CloseButtonText}
                />
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
                <h3 className="text-xl font-semibold text-slate-700">
                  {data.EmptyStateMessage}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
