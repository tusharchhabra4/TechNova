import { z } from "zod";

export function Schema(
  formFields = []
) {
  const schemaFields = {};

  formFields.forEach((field) => {
    let validator = z.string();

    if (
      field.Type?.toLowerCase() ===
      "email"
    ) {
      validator = z
        .string()
        .email(
          field.ErrorMessage 
        );
    }

    if (field.Required) {
      validator = validator.min(
        1,
        field.RequiredMessage 
      );
    }

    if (field.MinLength) {
      validator = validator.min(
        field.MinLength,
        field.MinLengthMessage 
      );
    }

    if (field.MaxLength) {
      validator = validator.max(
        field.MaxLength,
        field.MaxLengthMessage 
      );
    }

    if (field.Pattern) {
      validator = validator.regex(
        new RegExp(field.Pattern),
        field.ErrorMessage 
      );
    }

    schemaFields[field.Name] =
      validator;
  });

  return z.object(schemaFields);
}