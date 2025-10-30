import CallToAction from "@/components/CallToAction";
import ComparePlans from "@/components/ComparePlans";
import Footer from "@/components/Footer";
import LiveCalculator from "@/components/LiveCalculator";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingOverview from "@/components/PricingOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FXSimulator from "@/components/FXSimulator";
import FeesLoader from "@/components/FeesLoader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FeesLoader />
      <Header />
      <HeroSection />
      <PricingOverview />
      <ComparePlans />
      <TestimonialsSection />
      <LiveCalculator />
      <FXSimulator />
      <CallToAction />
      <Footer />
    </main>
  );
}
