import Link from "next/link";
import DynamicImage from "../ui/DynamicImage";

export default function ResourceList({ data }) {
  switch (data.variants) {
    case "List":
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

            <div className="mt-16 space-y-6">
              {data.resources?.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/${resource.slug}`}
                  className="block border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-semibold">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-blue-600 mt-2">
                    {resource.resourceType}
                  </p>

                  <p className="mt-4 text-slate-600">
                    {resource.description}
                  </p>
                </Link>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {data.resources?.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/${resource.slug}`}
                  className="
                    block
                    border
                    rounded-2xl
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {resource.image && (
                    <DynamicImage
                      data={resource.image}
                    />
                  )}

                  <div className="p-6">
                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        text-sm
                        bg-blue-100
                        text-blue-600
                        rounded-full
                        mb-4
                      "
                    >
                      {resource.resourceType}
                    </span>

                    <h3 className="text-xl font-semibold">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {resource.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
  }
}