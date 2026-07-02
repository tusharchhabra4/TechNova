"use server";

export async function getSubmissions() {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/public/forms?page=1&limit=100`,
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
    };
  }
}

export async function searchSubmissions(
  search
) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/public/forms?search=${encodeURIComponent(
        search
      )}&page=1&limit=10`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);

    return {
      data: [],
      total: 0,
    };
  }
}