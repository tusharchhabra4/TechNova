import ContactForm from "../ContactForm";

export default function ContactFormBlock({
  data,
}) {
  return (
    <section className="py-14">
      <div className="max-w-4xl mx-auto px-6">
        {data.title && (
          <h2 className="text-4xl font-bold text-center">
            {data.title}
          </h2>
        )}

        {data.description && (
          <p className="text-slate-600 text-center mt-4">
            {data.description}
          </p>
        )}

        <div className="mt-12">
          <ContactForm
            formFields={
              data.formfields
            }
            successMessage={
              data.successMessage
            }
            submitButtonText={
              data.submitButtonText
            }
          />
        </div>
      </div>
    </section>
  );
}