// Supabase REST API utility - no client library needed
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export interface FormSubmission {
  name: string;
  email?: string;
  company: string;
  website: string;
  stage: string;
  message: string;
  call_preference: boolean;
  offer_type: string;
}

export async function submitFormToSupabase(data: FormSubmission) {
  try {
    console.log("Submitting form data:", data);
    console.log("Supabase URL:", SUPABASE_URL);

    const response = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(data),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers));

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Supabase error: ${response.statusText} - ${errorText}`);
    }

    // Handle both JSON and non-JSON responses
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return await response.json();
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting form to Supabase:", error);
    throw error;
  }
}
