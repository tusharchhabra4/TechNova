import { z } from "zod";

export function Schema(formFields = []) {
  const schemaFields = {};

  formFields.forEach((field) => {
    let validator = z.string().trim();

    // Email Validation
    if (field.Type?.toLowerCase() === "email") {
      validator = validator.email(
        field.ErrorMessage || "Please enter a valid email address."
      );
    }

    // Required Validation
    if (field.Required) {
      validator = validator.min(
        1,
        field.RequiredMessage || `${field.Label} is required.`
      );
    }

    // Minimum Length
    if (field.MinLength) {
      validator = validator.min(
        field.MinLength,
        field.MinLengthMessage ||
          `${field.Label} must be at least ${field.MinLength} characters.`
      );
    }

    // Maximum Length
    if (field.MaxLength) {
      validator = validator.max(
        field.MaxLength,
        field.MaxLengthMessage ||
          `${field.Label} must be at most ${field.MaxLength} characters.`
      );
    }

    // Regex Validation
    if (field.Pattern) {
      validator = validator.regex(
        new RegExp(field.Pattern),
        field.ErrorMessage || `Invalid ${field.Label}.`
      );
    }

    schemaFields[field.Name] = validator;
  });

  let schema = z.object(schemaFields);

  // Password Confirmation Validation
  const hasPassword = formFields.some(
    (field) => field.Name === "password"
  );

  const hasConfirmPassword = formFields.some(
    (field) => field.Name === "confirmPassword"
  );

  if (hasPassword && hasConfirmPassword) {
    schema = schema.refine(
      (data) => data.password === data.confirmPassword,
      {
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      }
    );
  }

  return schema;
}