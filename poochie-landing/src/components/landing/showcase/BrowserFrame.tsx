import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  urlPath?: string;
};

export function BrowserFrame({
  children,
  urlPath = "app.rephiq.com",
}: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-zinc-800/60 via-zinc-900/80 to-zinc-950 p-[1px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      <div className="overflow-hidden rounded-[15px] bg-zinc-950 ring-1 ring-white/[0.05]">
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-zinc-900/95 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-zinc-600/90 ring-1 ring-white/5" />
            <span className="h-3 w-3 rounded-full bg-zinc-600/90 ring-1 ring-white/5" />
            <span className="h-3 w-3 rounded-full bg-zinc-600/90 ring-1 ring-white/5" />
          </div>
          <div className="min-w-0 flex-1 rounded-lg border border-white/[0.06] bg-black/50 px-3 py-1.5 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <p className="truncate text-[11px] text-zinc-500 sm:text-xs">
              <span className="text-zinc-600">https://</span>
              {urlPath}
            </p>
          </div>
        </div>
        <div className="bg-black">{children}</div>
      </div>
    </div>
  );
}
