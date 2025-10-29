"use client";
import styles from "./FeeFeature.module.scss";
import { HeroSection } from "./components/hero-section/HeroSection";
import { TopNav } from "./components/top-nav/TopNav";

export function FeeFeature() {
  //const [serviceFees, setServiceFees] = useState(fees);

  return <div className={styles.container}>
    <TopNav/>
    <HeroSection/>
  </div>;
}
