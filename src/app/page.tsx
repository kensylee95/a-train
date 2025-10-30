import CallToAction from "@/components/CallToAction";
import ComparePlans from "@/components/ComparePlans";
import Footer from "@/components/Footer";
import LiveCalculator from "@/components/LiveCalculator";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingOverview from "@/components/PricingOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FXSimulator from "@/components/FXSimulator";
import { getFees } from "@/lib/actions";
import FeesHydrator from "@/components/FeesHydrator";

export default async function Home() {
  const fees = await getFees();
  return (
    <main className="min-h-screen">
      <FeesHydrator initialFees={fees} />
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
