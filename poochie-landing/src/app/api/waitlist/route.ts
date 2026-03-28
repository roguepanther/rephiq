import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { validateWaitlistEmail } from "@/lib/waitlistValidation";

const MAX_BODY_BYTES = 4096;

function parsePayload(body: unknown): {
  email: string;
  wantsLaunchUpdates: boolean;
} | null {
  if (!body || typeof body !== "object") {
    return null;
  }
  const o = body as Record<string, unknown>;
  if (typeof o.email !== "string" || typeof o.wantsLaunchUpdates !== "boolean") {
    return null;
  }
  return { email: o.email, wantsLaunchUpdates: o.wantsLaunchUpdates };
}

export async function POST(request: Request) {
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const payload = parsePayload(parsed);
  if (!payload) {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const trimmed = payload.email.trim();
  const validationError = validateWaitlistEmail(trimmed);
  if (validationError) {
    return NextResponse.json(
      { ok: false, message: validationError },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("waitlist_emails").insert([
      {
        email: trimmed,
        wants_launch_updates: payload.wantsLaunchUpdates,
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { ok: false, message: "This email is already on the waitlist." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { ok: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
