"use client";

import { useState } from "react";
import { PlatformToggle } from "./showcase/PlatformToggle";
import { ShowcaseCard, type ShowcaseScreen } from "./showcase/ShowcaseCard";
import type { WebCarouselSlide } from "./showcase/WebCarousel";
import { WebCarousel } from "./showcase/WebCarousel";
import type { Platform } from "./showcase/types";

const showcaseScreens: ShowcaseScreen[] = [
  {
    title: "Active session",
    description:
      "Real-time logging and coaching cues on the floor—adaptive progression without losing focus.",
    imageAlt: "Rephiq active workout with live guidance",
    images: {
      ios: "/images/showcase/ios-workout.svg",
      android: "/images/showcase/android-workout.svg",
    },
  },
  {
    title: "Analytics that matter",
    description:
      "Premium charts for volume, consistency, and PRs—clarity over noise.",
    imageAlt: "Rephiq progress and analytics dashboard",
    images: {
      ios: "/images/showcase/ios-analytics.svg",
      android: "/images/showcase/android-analytics.svg",
    },
  },
  {
    title: "Programs built for you",
    description:
      "Personalized weekly structure so every block lines up with how you actually train.",
    imageAlt: "Rephiq personalized training program",
    images: {
      ios: "/images/showcase/ios-program.svg",
      android: "/images/showcase/android-program.svg",
    },
  },
  {
    title: "Body & progress",
    description:
      "Track composition and progress photos with the same restrained, dark UI.",
    imageAlt: "Rephiq body metrics and progress photos",
    images: {
      ios: "/images/showcase/ios-body.svg",
      android: "/images/showcase/android-body.svg",
    },
  },
];

const webSlides: WebCarouselSlide[] = [
  {
    title: showcaseScreens[0].title,
    description: showcaseScreens[0].description,
    imageSrc: "/images/showcase/web-workout.svg",
    imageAlt: "Rephiq web app active session",
  },
  {
    title: showcaseScreens[1].title,
    description: showcaseScreens[1].description,
    imageSrc: "/images/showcase/web-analytics.svg",
    imageAlt: "Rephiq web app analytics",
  },
  {
    title: showcaseScreens[2].title,
    description: showcaseScreens[2].description,
    imageSrc: "/images/showcase/web-program.svg",
    imageAlt: "Rephiq web app program",
  },
  {
    title: showcaseScreens[3].title,
    description: showcaseScreens[3].description,
    imageSrc: "/images/showcase/web-body.svg",
    imageAlt: "Rephiq web app body tracking",
  },
];

export default function AppShowcase() {
  const [platform, setPlatform] = useState<Platform>("ios");

  const tabId =
    platform === "ios"
      ? "tab-ios"
      : platform === "android"
        ? "tab-android"
        : "tab-web";

  return (
    <section
      id="showcase"
      className="border-t border-white/5 bg-zinc-950 px-6 py-24 text-white sm:py-32"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="showcase-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Rephiq on every surface.
          </h2>
          <p className="mt-4 text-zinc-400">
            The same coaching-first experience on iOS, Android, and web—dark,
            minimal, and built for serious training.
          </p>
          <div className="mt-8 flex justify-center">
            <PlatformToggle value={platform} onChange={setPlatform} />
          </div>
        </div>

        <div
          id="showcase-panel"
          role="tabpanel"
          aria-labelledby={tabId}
          className={
            platform === "web"
              ? "mt-14 sm:mt-16"
              : "mt-16 grid gap-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-20 lg:grid-cols-4 lg:gap-x-6"
          }
        >
          {platform === "web" ? (
            <WebCarousel slides={webSlides} />
          ) : (
            showcaseScreens.map((screen) => (
              <ShowcaseCard
                key={screen.title}
                screen={screen}
                mobileVariant={platform}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
