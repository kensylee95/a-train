import React from "react"
import styles from "./PricingOverview.module.scss"
import PricingCard from "../pricing-card/PricingCard";

const PricingOverview = () => {
    return (
        <section className={styles.container}>
            <br />
            <div className={styles.pricingHeading}>
                <h1>Pricing Overview</h1>
                <br />
                <p>Choose the plan that best fits your needs.</p>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.PricingRow}>
                <PricingCard
                    type="basic"
                    price={15}
                    duration="month"
                    features={[
                        "0.3% Swap Fee",
                        "0.5% FX Conversion Margin",
                        "No Transfer Fee",
                        "Priority Support",
                        "Unlimited Swaps"
                    ]}
                />
                <PricingCard
                    type="pro"
                    price={15}
                    duration="month"
                    features={[
                        "0.3% Swap Fee",
                        "0.5% FX Conversion Margin",
                        "No Transfer Fee",
                        "Priority Support",
                        "Unlimited Swaps"
                    ]}
                />
                <PricingCard
                    type="business"
                    price={15}
                    duration="month"
                    features={[
                        "0.3% Swap Fee",
                        "0.5% FX Conversion Margin",
                        "No Transfer Fee",
                        "Priority Support",
                        "Unlimited Swaps"
                    ]}
                />
            </div>
        </section>
    )
}

export default PricingOverview;