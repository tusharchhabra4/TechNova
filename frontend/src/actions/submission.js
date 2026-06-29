"use server";

export async function getSubmissions() {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/public/forms`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message ||
          "Failed to fetch submissions."
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Submission Fetch Error:",
      error
    );

    return {
      data: [],
      total: 0,
      page: 1,
      limit: 10,
      pages: 1,
    };
  }
}