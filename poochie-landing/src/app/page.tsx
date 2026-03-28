import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Waitlist from "@/components/landing/Waitlist";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  );
}