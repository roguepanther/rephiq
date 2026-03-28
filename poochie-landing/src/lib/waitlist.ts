import type { WaitlistPayload } from "./waitlistValidation";

export type { WaitlistPayload } from "./waitlistValidation";
export { validateWaitlistEmail } from "./waitlistValidation";

export async function submitWaitlistEntry(
  payload: WaitlistPayload
): Promise<{ ok: true } | { ok: false; message: string }> {
  let response: Response;
  try {
    response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  if (!data || typeof data !== "object") {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  const obj = data as { ok?: unknown; message?: unknown };
  if (obj.ok === true) {
    return { ok: true };
  }

  const message =
    typeof obj.message === "string" &&
    obj.message.length > 0 &&
    obj.message.length <= 500
      ? obj.message
      : "Something went wrong. Please try again.";

  return { ok: false, message };
}
