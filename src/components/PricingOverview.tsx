"use client";

import svgPaths from "@libs/svgPaths";
import { motion } from "framer-motion";

export default function PricingOverview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-vital-dark-gray mb-4 font-gilroy">
            Pricing Overview
          </h2>
          <p className="text-xl text-vital-gray font-poppins">
            Choose the plan that best fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <PlanCard
              left={40}
              title="Basic"
              price="₦5,000"
              period="per month"
              subtitle="For individuals"
              bgColor="rgba(37,70,126,0.09)"
              buttonText="Select Basic"
              buttonVariant="outlined"
              features={[
                "0.5% Swap Fee",
                "1% FX Conversion Margin",
                "No Transfer Fee",
                "Basic Support",
                "Limited Swaps",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <PlanCard
              left={530}
              title="Pro"
              price="₦15,000"
              period="per month"
              subtitle="For professionals"
              bgColor="rgba(0,64,173,0.16)"
              buttonText="Start with Plus"
              buttonVariant="filled"
              borderColor="#001f54"
              titleColor="#001f54"
              priceColor="#001f54"
              subtitleColor="#1b1f28"
              features={[
                "0.3% Swap Fee",
                "0.5% FX Conversion Margin",
                "No Transfer Fee",
                "Priority Support",
                "Unlimited Swaps",
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <PlanCard
              left={1020}
              title="Business"
              price="₦30,000"
              period="per month"
              subtitle="For enterprises"
              bgColor="rgba(37,70,126,0.09)"
              buttonText="Select Business"
              buttonVariant="outlined"
              features={[
                "0.1% Swap Fee",
                "0.2% FX Conversion Margin",
                "No Transfer Fee",
                "Dedicated Support",
                "Custom Solutions",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface PlanCardProps {
  left: number;
  title: string;
  price: string;
  period: string;
  subtitle: string;
  bgColor: string;
  buttonText: string;
  buttonVariant: "outlined" | "filled";
  borderColor?: string;
  titleColor?: string;
  priceColor?: string;
  subtitleColor?: string;
  features: string[];
}

function PlanCard({
  left,
  title,
  price,
  period,
  subtitle,
  bgColor,
  buttonText,
  buttonVariant,
  borderColor,
  titleColor = "#1b1f28",
  priceColor = "#1b1f28",
  subtitleColor = "rgba(20,30,46,0.62)",
  features,
}: PlanCardProps) {
  return (
    <div
      className=" h-[468px] rounded-[20px]"
      style={{
        left: `${left}px`,
        backgroundColor: bgColor,
        border: borderColor ? `1.5px solid ${borderColor}` : "none",
      }}
    >
      <div className="h-[468px] overflow-clip relative rounded-[inherit]">
        <div className="absolute h-[124px] left-[32px] not-italic text-nowrap top-[32px] w-[336px] whitespace-pre">
          <p
            className="absolute font-poppins font-semibold leading-[24px] left-0 text-[17px] top-[2px] tracking-[-0.085px]"
            style={{ color: titleColor }}
          >
            {title}
          </p>
          <div className="absolute h-[52px] left-0 top-[40px]">
            <p
              className="absolute font-poppins font-semibold leading-[52px] left-0 text-[48px] top-0 tracking-[-1.2px]"
              style={{ color: priceColor }}
            >
              {price}
            </p>
            <p
              className="absolute font-poppins font-regular leading-[24px] text-[20px] top-[24px] tracking-[-0.1px]"
              style={{
                color: priceColor,
                left:
                  price === "₦5,000"
                    ? "155px"
                    : price === "₦15,000"
                    ? "180px"
                    : "180px",
              }}
            >
              {period}
            </p>
          </div>
          <p
            className="absolute font-poppins font-regular leading-[16px] left-0 text-[13px] top-[108px] tracking-[-0.065px]"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        </div>

        <div className="absolute left-[32px] right-[32px] top-[188px]">
          {buttonVariant === "outlined" ? (
            <button className="w-full h-[40px] rounded-[16px] border-[1.5px] border-[rgba(73,87,110,0.2)] border-solid bg-transparent flex items-center justify-center">
              <span className="font-poppins font-medium text-[15px] text-[#1b1f28]">
                {buttonText}
              </span>
            </button>
          ) : (
            <button className="w-full h-[40px] rounded-[16px] bg-vital-blue hover:bg-vital-blue-hover transition-colors flex items-center justify-center">
              <span className="font-poppins font-medium text-[15px] text-[#fafcff]">
                {buttonText}
              </span>
            </button>
          )}
        </div>

        <div className="absolute h-0 left-[32px] top-[260px] w-[336px]">
          <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 336 2"
            >
              <path
                d="M0 0.75H336"
                stroke="var(--stroke-0, #49576E)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <div className="absolute h-[144px] left-[32px] top-[292px] w-[336px]">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature}
              top={index * 30}
              textColor={
                buttonVariant === "filled" ? "#1b1f28" : "rgba(20,30,46,0.62)"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  text,
  top,
  textColor,
}: {
  text: string;
  top: number;
  textColor: string;
}) {
  return (
    <div
      className="absolute h-[24px] left-0 w-[336px]"
      style={{ top: `${top}px` }}
    >
      <div className="absolute left-0 size-[24px] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d={svgPaths.pe247580}
              stroke="var(--stroke-0, #1B1F28)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <p
        className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[32px] not-italic text-[13px] text-nowrap top-[4px] tracking-[-0.065px] whitespace-pre"
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
}
