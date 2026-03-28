export type WaitlistPayload = {
  email: string;
  wantsLaunchUpdates: boolean;
};

export function validateWaitlistEmail(raw: string): string | null {
  const email = raw.trim();
  if (!email) {
    return "Enter your email address.";
  }
  if (email.length > 254) {
    return "Email must be 254 characters or fewer.";
  }
  if (email.includes(" ") || email.split("@").length !== 2) {
    return "Enter a valid email address.";
  }
  const [local, domain] = email.split("@") as [string, string];
  if (!local || !domain || local.length > 64 || domain.length > 253) {
    return "Enter a valid email address.";
  }
  const localOk = /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?$/.test(local);
  const domainOk =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(
      domain
    );
  if (!localOk || !domainOk) {
    return "Enter a valid email address.";
  }
  return null;
}
