"use client";

import { useState } from "react";

export default function FAQAccordion({ data }) {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

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

        <div className="mt-16 space-y-4">
          {data.items?.map((item, index) => (
            <div
              key={item.id}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
                className="w-full flex items-center justify-between p-6 text-left font-semibold"
              >
                <span>{item.question}</span>

                <span>
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-96 p-6 pt-0"
                    : "max-h-0"
                }`}
              >
                <p className="text-slate-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}