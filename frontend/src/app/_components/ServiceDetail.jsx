import DynamicImage from "./ui/DynamicImage";
import Button from "./ui/Button";

export default function ServiceDetail({
  service,
}) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold">
              {service.title}
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              {service.shortDescription}
            </p>

            <p className="mt-8 text-slate-600">
              {service.description}
            </p>

            
          </div>

          <div>
            <DynamicImage
              data={service.image}
            />
          </div>

        </div>

      </div>
    </section>
  );
}