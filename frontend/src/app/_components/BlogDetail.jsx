import DynamicImage from "./ui/DynamicImage";

export default function BlogDetail({ blog }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        
        {blog.image && (
          <div className="mb-10">
            <DynamicImage data={blog.image} />
          </div>
        )}

        <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
          {blog.author && <span>{blog.author}</span>}

          {blog.publishedDate && (
            <span>
              {new Date(blog.publishedDate).toLocaleDateString()}
            </span>
          )}
        </div>

        <h1 className="mb-8 text-5xl font-bold">
          {blog.title}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>
    </section>
  );
}