"use client";
import styles from "./FeeFeature.module.scss";
import { Calculator } from "./components/calculator/Calculator";
import { HeroSection } from "./components/hero-section/HeroSection";
import { Testimonial } from "./components/testimonial/testimonial";
import { TopNav } from "./components/top-nav/TopNav";

export function FeeFeature() {
  //const [serviceFees, setServiceFees] = useState(fees);

  return <div className={styles.container}>
    <TopNav/>
    <HeroSection/>
    <Testimonial/>
    <Calculator/>
  </div>;
}
