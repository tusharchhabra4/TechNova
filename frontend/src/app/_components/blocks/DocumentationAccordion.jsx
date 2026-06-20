"use client";

import { useState } from "react";

export default function DocumentationAccordion({
  items,
}) {
  const [active, setActive] = useState(null);

  return (
    <div className="space-y-4">
      {items?.map((doc, index) => (
        <div
          key={doc.id}
          className="border rounded-2xl"
        >
          <button
            onClick={() =>
              setActive(
                active === index
                  ? null
                  : index
              )
            }
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <span className="font-medium">
              {doc.title}
            </span>

            <span>
              {active === index
                ? "−"
                : "+"}
            </span>
          </button>

          {active === index && (
            <div className="px-6 pb-6 text-slate-600">
              {doc.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}