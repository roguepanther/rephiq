import { DeviceFrame } from "./DeviceFrame";
import type { MobileVariant } from "./types";

export type ShowcaseScreen = {
  title: string;
  description: string;
  imageAlt: string;
  images: {
    ios: string;
    android: string;
  };
};

type ShowcaseCardProps = {
  screen: ShowcaseScreen;
  mobileVariant: MobileVariant;
};

export function ShowcaseCard({ screen, mobileVariant }: ShowcaseCardProps) {
  const src =
    mobileVariant === "ios" ? screen.images.ios : screen.images.android;

  return (
    <article className="flex flex-col items-center text-center">
      <DeviceFrame variant={mobileVariant} src={src} alt={screen.imageAlt} />
      <h3 className="mt-8 text-lg font-medium tracking-tight text-white sm:text-xl">
        {screen.title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400 sm:max-w-sm">
        {screen.description}
      </p>
    </article>
  );
}
