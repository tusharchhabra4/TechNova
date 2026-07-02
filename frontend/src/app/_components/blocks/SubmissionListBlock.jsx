import { getSubmissions } from "@/actions/submission";

import SubmissionSearch from "../SubmissionSearch";

export default async function SubmissionListBlock({ data }) {
  const submissions = await getSubmissions();

  {console.log("submission Data",submissions)}

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SubmissionSearch
          header={
            <>
              <h2 className="text-4xl font-bold">
                {data.Title}
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                {data.Description}
              </p>
            </>
          }
          submissions={submissions.data || []}
          responseFields={data.ResponseFields}
          initialVisibleFields={data.InitialVisibleFields}
          showMoreText={data.ShowMoreButtonText}
          modalTitle={data.ModalTitle}
          closeButtonText={data.CloseButtonText}
          emptyStateMessage={data.EmptyStateMessage}
          searchPlaceholder={data.SearchPlaceholder}
          searchIcon={data.SearchIcon}
        />
      </div>
    </section>
  );
}