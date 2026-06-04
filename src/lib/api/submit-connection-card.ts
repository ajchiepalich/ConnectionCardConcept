import type {
  ConnectionCardPayload,
  SubmitResult,
} from "@/types/connection-card";

/**
 * Submit connection card payload.
 *
 * CMS/API integration point:
 * - Replace the mock delay + console.log with fetch/POST to your backend
 * - Example: POST /api/connection-card with JSON body
 * - Add auth headers, campus context, service time metadata as needed
 */
export async function submitConnectionCard(
  payload: ConnectionCardPayload
): Promise<SubmitResult> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.group("Connection Card Submission");
  console.log("Payload:", JSON.stringify(payload, null, 2));
  console.groupEnd();

  // TODO: const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/connection-card`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error("Submission failed");

  return { success: true, message: "Thank you! We've received your connection card." };
}
