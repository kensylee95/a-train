import CallToAction from "@/components/CallToAction";
import ComparePlans from "@/components/ComparePlans";
import Footer from "@/components/Footer";
import LiveCalculator from "@/components/LiveCalculator";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingOverview from "@/components/PricingOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getFees } from "@/lib/actions";
import FXSimulator from "@/components/FXSimulator";

export default async function Home() {
  const fees = await getFees();

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingOverview fees={fees} />
      <ComparePlans fees={fees} />
      <TestimonialsSection />
      <LiveCalculator fees={fees} />
      <FXSimulator initialRate={1445.62} />
      <CallToAction />
      <Footer />
    </main>
  );
}
