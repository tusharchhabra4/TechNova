import Button from "../ui/Button";
import DynamicImage from "../ui/DynamicImage";

export default function Content({ data }) {
  switch (data.variants) {
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

            <p className="mt-6 text-slate-600 whitespace-pre-line">
              {data.description}
            </p>

            {data.buttons?.length > 0 && (
              <div className="flex justify-center gap-4 mt-8">
                {data.buttons.map((button) => (
                  <Button
                    key={button.id}
                    data={button}
                  />
                ))}
              </div>
            )}

            {data.image && (
              <div className="mt-12">
                <DynamicImage data={data.image} />
              </div>
            )}
          </div>
        </section>
      );

    case "Split":
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div>
                {data.badge && (
                  <p className="text-blue-600 font-medium mb-4">
                    {data.badge}
                  </p>
                )}

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {data.title}
                </h2>

                <p className="mt-6 text-slate-600 whitespace-pre-line">
                  {data.description}
                </p>

                {data.buttons?.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-8">
                    {data.buttons.map((button) => (
                      <Button
                        key={button.id}
                        data={button}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                {data.image && (
                  <DynamicImage data={data.image} />
                )}
              </div>

            </div>
          </div>
        </section>
      );

    case "Default":
    default:
      return (
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            {data.badge && (
              <p className="text-blue-600 font-medium mb-4">
                {data.badge}
              </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold">
              {data.title}
            </h2>

            <p className="mt-6 text-slate-600 whitespace-pre-line">
              {data.description}
            </p>

            {data.buttons?.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-8">
                {data.buttons.map((button) => (
                  <Button
                    key={button.id}
                    data={button}
                  />
                ))}
              </div>
            )}

            {data.image && (
              <div className="mt-12">
                <DynamicImage data={data.image} />
              </div>
            )}
          </div>
        </section>
      );
  }
}