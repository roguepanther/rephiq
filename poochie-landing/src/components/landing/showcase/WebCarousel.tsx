"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";

export type WebCarouselSlide = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type WebCarouselProps = {
  slides: WebCarouselSlide[];
};

export function WebCarousel({ slides }: WebCarouselProps) {
  const [index, setIndex] = useState(0);
  const safeLen = slides.length;
  const active = safeLen > 0 ? slides[Math.min(index, safeLen - 1)] : null;

  const go = useCallback(
    (delta: number) => {
      if (safeLen === 0) return;
      setIndex((i) => (i + delta + safeLen) % safeLen);
    },
    [safeLen]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!active) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <BrowserFrame>
        <div className="relative aspect-[16/10] w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.imageSrc}
              className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                i === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 896px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </BrowserFrame>

      <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          className="order-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:order-1"
          aria-label="Previous web screen"
        >
          Previous
        </button>

        <div
          role="tablist"
          aria-label="Web showcase slides"
          className="order-1 flex flex-wrap justify-center gap-2 sm:order-2"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${slide.title}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="order-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:border-white/15 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label="Next web screen"
        >
          Next
        </button>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium tracking-tight text-white sm:text-xl">
          {active.title}
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
          {active.description}
        </p>
      </div>
    </div>
  );
}
