import DynamicImage from "../ui/DynamicImage";

export default function CaseStudyList({ data }) {
  switch (data.variants) {
    case "Timeline":
      return (
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            {data.case_studies?.map(
              (study) => (
                <div
                  key={study.id}
                  className="border-l-4 pl-8 mb-12"
                >
                  <h3 className="text-2xl font-bold">
                    {study.title}
                  </h3>

                  <p className="mt-4">
                    <strong>
                      Challenge:
                    </strong>{" "}
                    {study.challenge}
                  </p>

                  <p className="mt-4">
                    <strong>
                      Results:
                    </strong>{" "}
                    {study.results}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      );

    case "Featured":
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            {data.case_studies?.[0] && (
              <div className="border rounded-3xl overflow-hidden">
                {data.case_studies[0]
                  .image && (
                  <DynamicImage
                    data={
                      data.case_studies[0]
                        .image
                    }
                  />
                )}

                <div className="p-8">
                  <h3 className="text-3xl font-bold">
                    {
                      data.case_studies[0]
                        .title
                    }
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {
                      data.case_studies[0]
                        .excerpt
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      );

    case "Grid":
    default:
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 text-center mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl font-bold text-center">
              {data.title}
            </h2>

            <p className="text-center text-slate-600 mt-6">
              {data.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {data.case_studies?.map(
                (study) => (
                  <div
                    key={study.id}
                    className="border rounded-2xl overflow-hidden"
                  >
                    {study.image && (
                      <DynamicImage
                        data={
                          study.image
                        }
                      />
                    )}

                    <div className="p-6">
                      <h3 className="text-xl font-semibold">
                        {study.title}
                      </h3>

                      <p className="mt-3 text-slate-600">
                        {study.excerpt}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      );
  }
}