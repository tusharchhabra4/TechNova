"use client";

import { useState } from "react";

export default function ContactForm({
  formFields,
  successMessage,
  submitButtonText,
}) {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const [form, setForm] =
    useState({});

  function validateForm() {
    const newErrors = {};

    formFields?.forEach((field) => {
      const value =
        form[field.Name.toLowerCase()]?.trim();

      if (
        field.Required &&
        !value
      ) {
        newErrors[field.Name] =
          `${field.Label} is required`;

        return;
      }

      if (
        field.Type === "email" &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          value
        )
      ) {
        newErrors[field.Name] =
          "Please enter a valid email address";
      }

      if (
        field.Type ===
          "phone number" &&
        value &&
        !/^[0-9]{10}$/.test(value)
      ) {
        newErrors[field.Name] =
          "Phone number must be 10 digits";
      }

      if (
        field.Name?.toLowerCase() ===
          "name" &&
        value &&
        value.length < 2
      ) {
        newErrors[field.Name] =
          "Name must be at least 2 characters";
      }

      if (
        field.Name?.toLowerCase() ===
          "message" &&
        value &&
        value.length < 10
      ) {
        newErrors[field.Name] =
          "Message must be at least 10 characters";
      }
    });

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  }

  async function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) return;

  console.log("Form Data:", form);

  setSuccess(true);

  setForm({});

  setTimeout(() => {
    setSuccess(false);
  }, 3000);
}

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Half Width Fields */}

        <div className="grid md:grid-cols-2 gap-6">
          {formFields
            ?.filter(
              (field) =>
                field.HalfWidth
            )
            .map((field) => (
              <div
                key={field.id}
              >
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  {field.Label}

                  {field.Required && (
                    <span className="text-red-500 ml-1">
                      *
                    </span>
                  )}
                </label>

                {field.Type ===
                "textarea" ? (
                  <textarea
                    rows={4}
                    placeholder={
                      field.Placeholder
                    }
                    value={
                      form[
                        field.Name
                      ] || ""
                    }
                    onChange={(
                      e
                    ) => {
                      setForm({
                        ...form,
                        [field.Name.toLowerCase()]: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        [field.Name]:
                          "",
                      });
                    }}
                    className={`w-full rounded-xl p-4 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors[
                        field.Name
                      ]
                        ? "border-red-500"
                        : "border-slate-300"
                    }`}
                  />
                ) : (
                  <input
                    type={
                      field.Type ===
                      "phone number"
                        ? "tel"
                        : field.Type
                    }
                    placeholder={
                      field.Placeholder
                    }
                    value={
                      form[
                        field.Name
                      ] || ""
                    }
                    onChange={(
                      e
                    ) => {
                      setForm({
                        ...form,
                        [field.Name.toLowerCase()]: e.target.value,
                      });

                      setErrors({
                        ...errors,
                        [field.Name]:
                          "",
                      });
                    }}
                    className={`w-full rounded-xl p-4 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors[
                        field.Name
                      ]
                        ? "border-red-500"
                        : "border-slate-300"
                    }`}
                  />
                )}

                {errors[
                  field.Name
                ] && (
                  <p className="text-red-500 text-sm mt-2">
                    {
                      errors[
                        field
                          .Name
                      ]
                    }
                  </p>
                )}
              </div>
            ))}
        </div>

        {/* Full Width Fields */}

        {formFields
          ?.filter(
            (field) =>
              !field.HalfWidth
          )
          .map((field) => (
            <div
              key={field.id}
            >
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                {field.Label}

                {field.Required && (
                  <span className="text-red-500 ml-1">
                    *
                  </span>
                )}
              </label>

              {field.Type ===
              "textarea" ? (
                <textarea
                  rows={6}
                  placeholder={
                    field.Placeholder
                  }
                  value={
                    form[
                      field.Name
                    ] || ""
                  }
                  onChange={(
                    e
                  ) => {
                    setForm({
                      ...form,
                      [field.Name.toLowerCase()]: e.target.value,
                    });

                    setErrors({
                      ...errors,
                      [field.Name]:
                        "",
                    });
                  }}
                  className={`w-full rounded-xl p-4 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors[
                      field.Name
                    ]
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />
              ) : (
                <input
                  type={
                    field.Type ===
                    "phone number"
                      ? "tel"
                      : field.Type
                  }
                  placeholder={
                    field.Placeholder
                  }
                  value={
                    form[
                      field.Name
                    ] || ""
                  }
                  onChange={(
                    e
                  ) => {
                    setForm({
                      ...form,
                      [field.Name.toLowerCase()]: e.target.value,
                    });

                    setErrors({
                      ...errors,
                      [field.Name]:
                        "",
                    });
                  }}
                  className={`w-full rounded-xl p-4 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors[
                      field.Name
                    ]
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />
              )}

              {errors[
                field.Name
              ] && (
                <p className="text-red-500 text-sm mt-2">
                  {
                    errors[
                      field
                        .Name
                    ]
                  }
                </p>
              )}
            </div>
          ))}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition"
        >
          {loading
            ? "Sending..."
            : submitButtonText ||
              "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 font-medium">
            {successMessage ||
              "Message sent successfully!"}
          </p>
        )}
      </form>
    </div>
  );
}