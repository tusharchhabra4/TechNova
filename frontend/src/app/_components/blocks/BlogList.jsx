import Link from "next/link";
import DynamicImage from "../ui/DynamicImage";

export default function BlogList({ data }) {
  switch (data.variants) {
    case "Minimal":
      return (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">
              {data.title}
            </h2>

            <div className="mt-12 space-y-6">
              {data.blogs?.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/${blog.slug}`}
                  className="block border-b pb-4 transition-colors hover:text-blue-600"
                >
                  <h3 className="text-xl font-semibold">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    {blog.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );

    case "Featured":
      return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            {data.blogs?.[0] && (
              <Link
                href={`/${data.blogs[0].slug}`}
                className="block border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {data.blogs[0].image && (
                  <DynamicImage
                    data={data.blogs[0].image}
                  />
                )}

                <div className="p-8">
                  <h3 className="text-3xl font-bold">
                    {data.blogs[0].title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {data.blogs[0].excerpt}
                  </p>
                </div>
              </Link>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {data.blogs?.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/${blog.slug}`}
                  className="block border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {blog.image && (
                    <DynamicImage
                      data={blog.image}
                    />
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">
                      {blog.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {blog.excerpt}
                    </p>

                    <p className="mt-4 text-sm text-slate-500">
                      {blog.author}
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