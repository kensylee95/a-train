"use client";
import styles from "./RateSection.module.scss";

export function RateSection() {
    return (
        <div className={styles.container}>
            
            <br />
            <div className={styles.calculatorSection}>
                <div className={styles.leftContent}>
                    <span className={styles.heading}>Live Calculator</span>
                    <span className={styles.subtitle}>Instantly estimate your swap costs and exchange rates.</span>
                    <button className={styles.calculateButton}>Calculate</button>
                </div>
                <div className={styles.rightContent}>
                <img src="/ui-snippet.svg" alt="calculator" className={styles.calculatorImage} />
                </div>
            </div>
            <br />
            <div className={`${styles.calculatorSection} ${styles.isReversed}`}>
                <div className={styles.leftContent}>
                    <span className={styles.heading}>FX Rate Simulation</span>
                    <span className={styles.subtitle}>View recent exchange rate trends and insights.</span>
                    <button className={`${styles.calculateButton} ${styles.useGoldBG}`}>Try out</button>
                </div>
                <div className={styles.rightContent}>
                    <img src="/ui-snippet2.svg" alt="calculator" className={styles.calculatorImage} />
                </div>
            </div>
        </div>
    )
}