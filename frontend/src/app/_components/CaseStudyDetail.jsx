import DynamicImage from "./ui/DynamicImage";

export default function CaseStudyDetail({
  caseStudy,
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">

        {caseStudy.image && (
          <div className="mb-10">
            <DynamicImage data={caseStudy.image} />
          </div>
        )}

        <h1 className="mb-10 text-5xl font-bold">
          {caseStudy.title}
        </h1>

        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">
            Challenge
          </h2>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: caseStudy.challenge,
            }}
          />
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-semibold">
            Results
          </h2>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: caseStudy.results,
            }}
          />
        </div>
      </div>
    </section>
  );
}