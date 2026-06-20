import Button from "../ui/Button";
import DynamicImage from "../ui/DynamicImage";

export default function Services({ data }) {
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

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {data.services?.map((service) => (
                <div
                  key={service.id}
                  className="
                    border
                    rounded-3xl
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    flex
                    flex-col
                  "
                >
                  {service.image && (
                    <div className="mb-6">
                      <DynamicImage data={service.image} />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-slate-600">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <Button data={service.buttons} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      );

    case "Minimal":
      return (
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">

            {data.badge && (
              <p className="text-blue-600 font-semibold text-center mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-6xl font-bold text-center">
              {data.title}
            </h2>

            <p className="text-slate-600 text-center max-w-4xl mx-auto mt-6 text-lg">
              {data.description}
            </p>

            <div className="mt-16 divide-y divide-slate-300">

              {data.services?.map((service) => (
                <div
                  key={service.id}
                  className="
                    py-8
                    px-4
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-6
                    hover:bg-white
                    rounded-xl
                    transition-all
                  "
                >
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    {service.shortDescription && (
                      <p className="text-slate-600 mt-2 max-w-2xl">
                        {service.shortDescription}
                      </p>
                    )}
                  </div>

                  {service.buttons && (
                    <div className="shrink-0">
                      <Button data={service.buttons} />
                    </div>
                  )}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

              {data.services?.map((service) => (
                <div
                  key={service.id}
                  className="
                    border
                    rounded-2xl
                    p-6
                    hover:shadow-xl
                    transition-all
                    flex
                    flex-col
                    h-full
                  "
                >
                  {service.image && (
                    <div className="mb-4">
                      <DynamicImage data={service.image} />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <Button data={service.buttons} />
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>
      );
  }
}