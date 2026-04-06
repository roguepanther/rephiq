"use client";

import type { Platform } from "./types";

type PlatformToggleProps = {
  value: Platform;
  onChange: (value: Platform) => void;
};

export function PlatformToggle({ value, onChange }: PlatformToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Preview platform"
      className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-zinc-950/90 p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md sm:flex-nowrap sm:gap-0"
    >
      {(
        [
          { id: "ios" as const, label: "iOS" },
          { id: "android" as const, label: "Android" },
          { id: "web" as const, label: "Web" },
        ] as const
      ).map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={value === tab.id}
          aria-controls="showcase-panel"
          onClick={() => onChange(tab.id)}
          className={`rounded-full px-4 py-2 text-xs font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:px-5 sm:text-sm ${
            value === tab.id
              ? "bg-white text-black shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
