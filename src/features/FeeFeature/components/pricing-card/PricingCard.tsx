import React from "react";
import styles from "./PricingCard.module.scss";

export type PlanType = "basic" | "pro" | "business";
export type Duration = "month" | "year";

export interface PricingCardProps {
    type: PlanType;
    price: number;
    duration?: Duration;
    features: string[];
    targetAudience?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    type,
    price,
    duration = "month",
    features,
    targetAudience,
}) => {
    const getButtonText = () => {
        switch (type) {
            case "basic":
                return "Select Basic";
            case "pro":
                return "Start with Plus";
            case "business":
                return "Select Business";
            default:
                return "Select Plan";
        }
    };

    const getDefaultTargetAudience = () => {
        switch (type) {
            case "basic":
                return "For individuals";
            case "pro":
                return "For professionals";
            case "business":
                return "For enterprises";
            default:
                return "";
        }
    };

    return (
        <div className={`${styles.card} ${styles[type]}`}>
            <div className={styles.planType}>{type.charAt(0).toUpperCase() + type.slice(1)}</div>
            
            <div className={styles.pricingSection}>
                <span className={styles.price}>${price}</span>
                <span className={styles.duration}>per {duration}</span>
            </div>

            {targetAudience && (
                <div className={styles.targetAudience}>{targetAudience}</div>
            )}
            {!targetAudience && (
                <div className={styles.targetAudience}>
                    {getDefaultTargetAudience()}
                </div>
            )}

            <button className={styles.button}>{getButtonText()}</button>

            <div className={styles.separator}></div>

            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                        <span className={styles.checkmark}><div className={styles.checkIcon} /></span>
                        <span className={styles.featureText}>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;

