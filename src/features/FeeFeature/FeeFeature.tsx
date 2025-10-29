"use client";
import styles from "./FeeFeature.module.scss";
import ComparePlans from "./components/compare-plans/ComparePlans";
import { HeroSection } from "./components/hero-section/HeroSection";
import PricingOverview from "./components/pricing-overview/PricingOverview";
import { Testimonial } from "./components/testimonial/testimonial";
import { Footer } from "./components/footer/Footer";
import { TopNav } from "./components/top-nav/TopNav";
import { RateSection } from "./components/rate-section/RateSection";
  
export function FeeFeature() {
  //const [serviceFees, setServiceFees] = useState(fees);

  return <div className={styles.container}>
    <TopNav/>
    <HeroSection/>
    <PricingOverview />
    <ComparePlans />
    <Testimonial /> 
    <RateSection />
    <Footer />
  </div>;
}
