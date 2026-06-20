import FAQAccordion from "./FAQAccordion";

export default function FAQ({ data }) {
  switch (data.variants) {
    case "Accordion":
      return <FAQAccordion data={data} />;

    case "TwoColumn":
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

            <p className="text-slate-600 text-center max-w-3xl mx-auto mt-6">
              {data.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {data.items?.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {item.question}
                  </h3>

                  <p className="text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "Simple":
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

            <p className="text-slate-600 text-center max-w-3xl mx-auto mt-6">
              {data.description}
            </p>

            <div className="mt-16 space-y-8">
              {data.items?.map((item) => (
                <div key={item.id}>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.question}
                  </h3>

                  <p className="text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}