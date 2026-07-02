"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Schema } from "@/lib/validation/Schema";
import { submitContact } from "@/actions/contact";
import Button from "./ui/Button";

export default function ContactForm({
  formName,
  formFields,
  successMessage,
  button,
}) {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [serverMessage, setServerMessage] = useState("");

  const schema = Schema(formFields || []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    setLoading(true);
    setSuccess(false);
    setServerMessage("");

    try {
      const result = await submitContact({
        formName,
        data,
      });

      if (!result.success) {
        setSuccess(false);
        setServerMessage(result.message);
        return;
      }

      setSuccess(true);

      setServerMessage(successMessage || "Form submitted successfully.");

      reset();

      setTimeout(() => {
        setSuccess(false);
        setServerMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);

      setServerMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function renderField(field) {
    const commonClasses = `
      w-full
      rounded-xl
      p-4
      border
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      ${errors[field.Name] ? "border-red-500" : "border-slate-300"}
    `;

    if (field.Type === "textarea") {
      return (
        <textarea
          rows={6}
          placeholder={field.Placeholder}
          {...register(field.Name)}
          className={commonClasses}
        />
      );
    }

    if (field.Type === "select") {
      return (
        <select {...register(field.Name)} className={commonClasses}>
          <option value="">
            {field.Placeholder || `Select ${field.Label}`}
          </option>

          {field.Options?.map((option) => (
            <option key={option.id} value={option.Value}>
              {option.Label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={field.Type === "phone number" ? "tel" : field.Type}
        placeholder={field.Placeholder}
        {...register(field.Name)}
        className={commonClasses}
      />
    );
  }

  function renderFieldGroup(fields) {
    return fields?.map((field) => (
      <div key={field.id}>
        <label className="block mb-2 text-sm font-semibold text-slate-700">
          {field.Label}

          {field.Required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {renderField(field)}

        {errors[field.Name] && (
          <p className="text-red-500 text-sm mt-2">
            {errors[field.Name]?.message}
          </p>
        )}
      </div>
    ));
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {renderFieldGroup(formFields?.filter((field) => field.HalfWidth))}
        </div>

        {renderFieldGroup(formFields?.filter((field) => !field.HalfWidth))}

        <Button data={button} type="submit" disabled={loading}>
          {loading ? "Sending..." : button.text}
        </Button>

        {serverMessage && (
          <p
            className={`font-medium ${
              success ? "text-green-600" : "text-red-600"
            }`}
          >
            {serverMessage}
          </p>
        )}
      </form>
    </div>
  );
}
