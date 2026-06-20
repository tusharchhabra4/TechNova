import DocumentationAccordion from "./DocumentationAccordion";

export default function DocumentationList({ data }) {
  switch (data.variants) {
    case "Accordion":
      return (
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 font-medium text-center mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold text-center">
              {data.title}
            </h2>

            <p className="text-slate-600 text-center max-w-3xl mx-auto mt-6 mb-16">
              {data.description}
            </p>

            <DocumentationAccordion
              items={data.documentations}
            />
          </div>
        </section>
      );

    case "Sidebar":
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 font-medium text-center mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold text-center">
              {data.title}
            </h2>

            <p className="text-slate-600 text-center max-w-3xl mx-auto mt-6 mb-16">
              {data.description}
            </p>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="border rounded-2xl p-6">
                {data.documentations?.map((doc) => (
                  <div
                    key={doc.id}
                    className="py-3 border-b last:border-0"
                  >
                    {doc.title}
                  </div>
                ))}
              </div>

              <div className="lg:col-span-3 border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold">
                  Documentation
                </h3>

                <p className="text-slate-600 mt-4">
                  Select a document from the left panel.
                </p>
              </div>
            </div>
          </div>
        </section>
      );

    case "List":
    default:
      return (
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 font-medium text-center mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold text-center">
              {data.title}
            </h2>

            <p className="text-slate-600 text-center max-w-3xl mx-auto mt-6 mb-16">
              {data.description}
            </p>

            <div className="space-y-6">
              {data.documentations?.map((doc) => (
                <div
                  key={doc.id}
                  className="border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold">
                    {doc.title}
                  </h3>

                  {doc.category && (
                    <p className="text-blue-600 text-sm mt-2">
                      {doc.category}
                    </p>
                  )}

                  <p className="text-slate-600 mt-4">
                    {doc.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}