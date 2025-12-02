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
  console.log("=== Supabase Form Submission Debug ===");
  console.log("SUPABASE_URL:", SUPABASE_URL);
  console.log("SUPABASE_KEY exists:", !!SUPABASE_KEY);
  console.log("SUPABASE_KEY length:", SUPABASE_KEY?.length);

  if (!SUPABASE_URL) {
    throw new Error("VITE_SUPABASE_URL environment variable is not set");
  }
  if (!SUPABASE_KEY) {
    throw new Error("VITE_SUPABASE_KEY environment variable is not set");
  }

  const apiUrl = `${SUPABASE_URL}/rest/v1/form_submissions`;
  console.log("Full API URL:", apiUrl);
  console.log("Form data:", data);

  try {
    const response = await fetch(apiUrl, {
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
    console.log("Response status text:", response.statusText);
    console.log("Response headers:", {
      contentType: response.headers.get("content-type"),
      contentLength: response.headers.get("content-length"),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response body:", errorText.substring(0, 500));
      throw new Error(`Supabase error: ${response.status} ${response.statusText}`);
    }

    // Handle both JSON and non-JSON responses
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const jsonResponse = await response.json();
      console.log("Success response (JSON):", jsonResponse);
      return jsonResponse;
    } else {
      console.log("Success response (non-JSON)");
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting form to Supabase:", error);
    throw error;
  }
}
