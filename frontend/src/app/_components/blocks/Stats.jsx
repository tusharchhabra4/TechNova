export default function Stats({ data }) {
  switch (data.variants) {
    case "Cards":
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {data.items?.map((item) => (
                <div
                  key={item.id}
                  className="
                    border
                    rounded-2xl
                    p-8
                    text-center
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                  "
                >
                  <div className="text-5xl font-bold text-blue-600">
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "Minimal":
      return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {data.items?.map((item) => (
                <div key={item.id}>
                  <div className="text-5xl font-bold">
                    {item.number}
                  </div>

                  <p className="mt-2 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "Grid":
    default:
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {data.items?.map((item) => (
                <div
                  key={item.id}
                  className="text-center"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-blue-600">
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}