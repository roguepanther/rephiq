import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Intelligent progression",
    description:
      "Adaptive targets and recovery-aware suggestions so every session moves you forward without guesswork.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.25 11.25 0 0 0 15.965-1.045L21.75 10.5M21.75 10.5l-4.5-4.5m4.5 4.5H12.75"
        />
      </svg>
    ),
  },
  {
    title: "Clean workout logging",
    description:
      "Log sets, reps, and rest in seconds. A focused surface that stays out of your way between sets.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 4.5h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 4.5h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Analytics & insight",
    description:
      "Volume trends, consistency, and personal records distilled into charts you can understand at a glance.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v1.5m-16.5 0v1.5m14.25-9v5.25m-14.25 0v5.25m6.75-5.25v5.25m3.75-5.25v5.25"
        />
      </svg>
    ),
  },
];

function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.02] p-3.5 text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-900/50 px-6 py-24 text-white sm:scroll-mt-28 sm:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="features-heading"
            className="text-3xl font-semibold sm:text-4xl"
          >
            Built for serious training
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Everything you need to train smarter, track progress, and stay
            consistent.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="opacity-100">
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent p-9 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_24px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.08] hover:from-white/[0.1] hover:via-white/[0.04] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_32px_64px_-16px_rgba(0,0,0,0.55)] sm:p-11">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-44 w-44 rounded-full bg-white/[0.06] blur-3xl"
                />
                <div className="relative flex flex-1 flex-col">
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <h3 className="text-lg font-medium tracking-tight text-white sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-400 sm:text-base sm:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
