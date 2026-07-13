import DynamicImage from "./ui/DynamicImage";

export default function ResourceDetail({ resource }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">

        {resource.image && (
          <div className="mb-10">
            <DynamicImage data={resource.image} />
          </div>
        )}

        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          {resource.resourceType}
        </span>

        <h1 className="mb-8 text-5xl font-bold">
          {resource.title}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: resource.description,
          }}
        />
      </div>
    </section>
  );
}