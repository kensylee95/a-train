import CallToAction from "@/components/CallToAction";
import ComparePlans from "@/components/ComparePlans";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingOverview from "@/components/PricingOverview";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingOverview />
      <ComparePlans />
      <TestimonialsSection />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
