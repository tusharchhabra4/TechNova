"use server";

import { submitContact } from "./contact";
import { registerUser } from "./register";
import { loginUser } from "./login";


export async function submitForm(formName, data) {
  switch (formName) {
    case "contact":
      return await submitContact({
        formName,
        data,
      });

    case "register":
      return await registerUser(data);

    case "login":
      return await loginUser(data);


    default:
      return {
        success: false,
        message: "Unknown form type.",
      };
  }
}