import Button from "../ui/Button";
import DynamicImage from "../ui/DynamicImage";

export default function CTA({ data }) {
  switch (data.variants?.trim()) {
    case "Centered":
      return (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {data.badge && (
              <p className="text-blue-600 font-medium mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold">
              {data.title}
            </h2>

            <p className="mt-6 text-slate-600">
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
          </div>
        </section>
      );

    case "Banner":
      return (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl border p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold">
                  {data.title}
                </h2>

                <p className="mt-3 text-slate-600">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {data.buttons?.map((button) => (
                  <Button
                    key={button.id}
                    data={button}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "Split":
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {data.badge && (
                  <p className="text-blue-600 font-medium mb-4">
                    {data.badge}
                  </p>
                )}

                <h2 className="text-4xl lg:text-5xl font-bold">
                  {data.title}
                </h2>

                <p className="mt-6 text-slate-600">
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
                <DynamicImage
                  data={data.image}
                />
              )}
            </div>
          </div>
        </section>
      );

    default:
      return (
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            {data.badge && (
              <p className="text-blue-600 font-medium mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold">
              {data.title}
            </h2>

            <p className="mt-6 text-slate-600">
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
          </div>
        </section>
      );
  }
}