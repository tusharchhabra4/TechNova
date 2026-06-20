import Button from "../ui/Button";
import DynamicImage from "../ui/DynamicImage";

export default function Hero({ data }) {
  switch (data.variants) {
    case "Centered":
      return (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {data.badge && (
              <p className="text-blue-600 font-medium mb-4">
                {data.badge}
              </p>
            )}

            <h1 className="text-5xl lg:text-7xl font-bold">
              {data.title}
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              {data.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {data.buttons?.map((button) => (
                <Button
                  key={button.id}
                  data={button}
                />
              ))}
            </div>

            {data.image && (
              <div className="mt-12">
                <DynamicImage data={data.image} />
              </div>
            )}
          </div>
        </section>
      );

    case "Dark":
      return (
        <section className="py-24 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {data.badge && (
                  <p className="text-blue-400 font-medium mb-4">
                    {data.badge}
                  </p>
                )}

                <h1 className="text-5xl lg:text-7xl font-bold">
                  {data.title}
                </h1>

                <p className="mt-6 text-lg text-slate-300">
                  {data.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  {data.buttons?.map((button) => (
                    <Button
                      key={button.id}
                      data={button}
                    />
                  ))}
                </div>
              </div>

              {data.image && (
                <DynamicImage data={data.image} />
              )}
            </div>
          </div>
        </section>
      );

    case "Split":
      return (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {data.badge && (
                  <p className="text-blue-600 font-medium mb-4">
                    {data.badge}
                  </p>
                )}

                <h1 className="text-5xl lg:text-7xl font-bold">
                  {data.title}
                </h1>

                <p className="mt-6 text-lg text-slate-600">
                  {data.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  {data.buttons?.map((button) => (
                    <Button
                      key={button.id}
                      data={button}
                    />
                  ))}
                </div>
              </div>

              {data.image && (
                <DynamicImage data={data.image} />
              )}
            </div>
          </div>
        </section>
      );

    case "Default":
    default:
      return (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 font-medium mb-4">
                {data.badge}
              </p>
            )}

            <h1 className="text-5xl lg:text-7xl font-bold max-w-4xl">
              {data.title}
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {data.buttons?.map((button) => (
                <Button
                  key={button.id}
                  data={button}
                />
              ))}
            </div>

            {data.image && (
              <div className="mt-12 max-w-5xl">
                <DynamicImage data={data.image} />
              </div>
            )}
          </div>
        </section>
      );
  }
}