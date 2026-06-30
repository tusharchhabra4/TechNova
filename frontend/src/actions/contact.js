"use server";

export async function submitContact({ formName, data }) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/public/forms`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        form_name: formName,
        ...data,
      }),

      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to submit form.",
      };
    }

    return {
      success: true,
      message: result.message || "Form submitted successfully.",
      data: result,
    };
  } catch (error) {
    console.error("Server Action Error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
}
