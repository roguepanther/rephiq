import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import LegalPageHeader from "@/components/landing/LegalPageHeader";
import PrivacyPolicy from "@/components/landing/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Rephiq",
  description:
    "How Rephiq collects, uses, stores, shares, and protects your personal information when you use the Rephiq app.",
  alternates: {
    canonical: "https://www.rephiq.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Rephiq",
    description:
      "How Rephiq collects, uses, stores, shares, and protects your personal information.",
    url: "https://www.rephiq.com/privacy",
    siteName: "Rephiq",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalPageHeader />
      <main className="flex-1 bg-zinc-950 px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <PrivacyPolicy />
        </div>
      </main>
      <Footer />
    </>
  );
}
