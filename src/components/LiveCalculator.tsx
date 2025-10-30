"use client";

import { motion } from "framer-motion";
import CalculatorMockup from "@/components/CalculatorMockup";
import { useAppSelector } from "@/lib/hooks";
import { FeeSchedule } from "@/types/global";

export default function LiveCalculator() {
  const fees = useAppSelector((state) => state.fees.fees);

  if (!fees) {
    return null;
  }
  return (
    <section
      id="live-calculator"
      className="bg-linear-to-tl from-vital-yellow via-white to-vital-blue/5 py-0 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FeatureBlock
            title="Live Calculator"
            description="Quickly estimate your transaction fees and see transparent swap rates for every transfer with our intuitive calculator. Experience real clarity before you send."
            buttonText="Get Started"
            imageLeft={false}
            onButtonClick={() => {
              window.open("https://app.vitalswap.com?r=TIMO8544", "_blank");
            }}
            fees={fees}
            type="calculator"
          />
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureBlockProps {
  title: string;
  description: string;
  buttonText: string;
  imageLeft: boolean;
  onButtonClick?: () => void;
  fees: FeeSchedule;
  type: "calculator" | "fx";
}

function FeatureBlock({
  title,
  description,
  buttonText,
  imageLeft,
  onButtonClick,
  fees,
  type,
}: FeatureBlockProps) {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={`${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <h2 className="text-4xl font-bold text-vital-dark-gray mb-6 font-gilroy">
            {title}
          </h2>
          <p className="text-xl text-vital-gray mb-8 font-poppins">
            {description}
          </p>
          <motion.button
            onClick={onButtonClick}
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-colors font-poppins button-main`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {buttonText}
          </motion.button>
        </div>
        {/* Image and Snippets */}
        <div className={`${imageLeft ? "lg:order-1" : "lg:order-2"} relative`}>
          <div className="relative w-full max-w-sm mx-auto">
            {type === "calculator" && <CalculatorMockup fees={fees} />}
          </div>
        </div>
      </div>
    </div>
  );
}
