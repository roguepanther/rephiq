"use client";

import {
  type FormEvent,
  useId,
  useState,
} from "react";
import {
  submitWaitlistEntry,
  validateWaitlistEmail,
} from "@/lib/waitlist";

export default function Waitlist() {
  const emailFieldId = useId();
  const updatesFieldId = useId();
  const errorId = useId();

  const [email, setEmail] = useState("");
  const [wantsLaunchUpdates, setWantsLaunchUpdates] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    const validationMessage = validateWaitlistEmail(trimmed);
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setSubmitting(true);
    const payload = {
      email: trimmed,
      wantsLaunchUpdates,
    };

    const result = await submitWaitlistEntry(payload);
    setSubmitting(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSuccess(true);
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-950 px-6 py-24 text-white sm:scroll-mt-28 sm:py-32"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-lg">
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id="waitlist-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Join the waitlist
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              Be first to know when spots open. One email field—no spam.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_24px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />

            {success ? (
              <p
                className="relative text-center text-base text-zinc-200"
                role="status"
                aria-live="polite"
              >
                You&apos;re on the list. We&apos;ll be in touch at the address
                you provided.
              </p>
            ) : (
              <form
                className="relative flex flex-col gap-6"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={emailFieldId}
                    className="text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id={emailFieldId}
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    disabled={submitting}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 transition duration-200 focus-visible:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 disabled:cursor-not-allowed disabled:opacity-60"
                    placeholder="you@example.com"
                  />
                  {error ? (
                    <p
                      id={errorId}
                      className="text-sm text-rose-400/95"
                      role="alert"
                    >
                      {error}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id={updatesFieldId}
                    name="wantsLaunchUpdates"
                    type="checkbox"
                    checked={wantsLaunchUpdates}
                    onChange={(ev) =>
                      setWantsLaunchUpdates(ev.target.checked)
                    }
                    disabled={submitting}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 text-white accent-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                  <label
                    htmlFor={updatesFieldId}
                    className="cursor-pointer text-sm leading-relaxed text-zinc-400"
                  >
                    Send me updates when Poochie Fitness officially launches.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                >
                  {submitting ? "Submitting…" : "Request access"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
