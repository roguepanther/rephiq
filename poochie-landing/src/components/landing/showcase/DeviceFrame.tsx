import Image from "next/image";
import type { MobileVariant } from "./types";

type DeviceFrameProps = {
  variant: MobileVariant;
  src: string;
  alt: string;
};

export function DeviceFrame({ variant, src, alt }: DeviceFrameProps) {
  const isIos = variant === "ios";

  return (
    <div
      className={`relative mx-auto w-full max-w-[min(100%,288px)] transition-all duration-500 ease-out ${
        isIos
          ? "rounded-[2.65rem] border border-white/[0.1] bg-gradient-to-b from-zinc-800/95 to-zinc-950 p-[11px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.07)]"
          : "rounded-[1.45rem] border border-white/[0.08] bg-gradient-to-b from-zinc-800/85 to-black p-[9px] shadow-[0_28px_56px_-14px_rgba(0,0,0,0.62)]"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-black ring-1 ring-white/[0.05] transition-all duration-500 ease-out ${
          isIos ? "rounded-[2.05rem]" : "rounded-[1.1rem]"
        }`}
      >
        <div className="relative aspect-[390/844] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 85vw, 288px"
            unoptimized
          />
          {isIos ? (
            <div
              className="pointer-events-none absolute inset-x-0 top-0 flex h-14 items-start justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent px-5 pt-3"
              aria-hidden
            >
              <span className="text-[13px] font-semibold tabular-nums text-white">
                9:41
              </span>
              <div className="absolute left-1/2 top-2.5 h-7 w-[100px] -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-800" />
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="h-2.5 w-4 rounded-sm bg-zinc-700/90" />
                <span className="h-2.5 w-6 rounded border border-zinc-600 bg-zinc-800/80" />
              </div>
            </div>
          ) : (
            <div
              className="pointer-events-none absolute inset-x-0 top-0 flex h-11 items-center gap-2 border-b border-white/[0.06] bg-gradient-to-b from-zinc-950/95 to-zinc-950/40 px-3.5"
              aria-hidden
            >
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 ring-2 ring-zinc-900" />
              <span className="text-[11px] font-medium tabular-nums text-zinc-400">
                9:41
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-[1px] bg-zinc-500" />
                <span className="h-2.5 w-3.5 rounded-sm border border-zinc-600" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
