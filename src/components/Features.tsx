"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CalculatorMockup from "./CalculatorMockup";
import Image from "next/image";

export default function Features() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  return (
    <section className="py-0 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FeatureBlock
            title="Live Calculator"
            description="Instantly estimate your swap costs and exchange rates."
            buttonText="Calculate"
            imageLeft={false}
            primaryImage="/images/calculator.png"
            headerBg="#001f54"
            snippets={[
              { icon: "placeholder", label: "Amount Input", top: 200 },
              { icon: "menu", label: "Currency Dro...", top: 100 },
            ]}
            onButtonClick={() => setIsCalculatorOpen(true)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureBlock
            title="FX Rate Simulation"
            description="View recent exchange rate trends and insights."
            buttonText="Try out"
            imageLeft={true}
            primaryImage="/images/fx.png"
            headerBg="rgba(27,31,40,0.2)"
            snippets={[
              { icon: "edit", label: "Real-Time U...", top: 100 },
              { icon: "bar-chart", label: "Trend Chart", top: 200 },
            ]}
          />
        </motion.div>
      </div>

      {/* Calculator Modal */}
      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-vital-dark-gray font-gilroy">
              Live Calculator
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <CalculatorMockup />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface FeatureBlockProps {
  title: string;
  description: string;
  buttonText: string;
  imageLeft: boolean;
  primaryImage: string;
  headerBg: string;
  snippets: Array<{ icon: string; label: string; top: number }>;
  onButtonClick?: () => void;
}

function FeatureBlock({
  title,
  description,
  buttonText,
  imageLeft,
  primaryImage,
  headerBg,
  snippets,
  onButtonClick,
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
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-colors font-poppins ${
              imageLeft
                ? "bg-vital-blue text-white hover:bg-vital-blue-hover"
                : "bg-vital-yellow text-vital-dark-gray hover:bg-yellow-500"
            }`}
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
        <div
          className={`${
            imageLeft ? "lg:order-1" : "lg:order-2"
          } relative hidden sm:block`}
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative h-[404px] rounded-[20px] bg-white shadow-2xl">
              <div className="h-[404px] overflow-clip relative rounded-[inherit]"></div>
              <div
                className="absolute h-[32px] left-[28px] rounded-[16px] top-[28px] w-[142px]"
                style={{ backgroundColor: headerBg }}
              />
              <div className="absolute h-[296px] left-[42px] rounded-[16px] top-[80px] w-[300px]">
                <Image
                  alt="Feature Image"
                  width={300}
                  height={296}
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full"
                  src={primaryImage}
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border-[1.5px] border-[rgba(73,87,110,0.2)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[15px_128px_36px_0px_rgba(0,0,0,0),10px_82px_33px_0px_rgba(0,0,0,0.01),5px_46px_28px_0px_rgba(0,0,0,0.04),2px_20px_21px_0px_rgba(0,0,0,0.06),1px_5px_11px_0px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* Feature Snippets */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            {snippets.map((snippet, index) => (
              <FeatureSnippet
                key={index}
                icon={snippet.icon}
                label={snippet.label}
                left={
                  index === 0 ? (imageLeft ? -20 : 350) : imageLeft ? 350 : -20
                }
                top={snippet.top}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureSnippet({
  icon,
  label,
  left,
  top,
}: {
  icon: string;
  label: string;
  left: number;
  top: number;
}) {
  return (
    <div
      className="absolute h-[48px] rounded-full w-[160px] bg-white border border-gray-300 shadow-lg"
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      <div className="h-[48px] overflow-clip relative rounded-full w-[160px] flex items-center px-4">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {icon === "placeholder" && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              )}
              {icon === "menu" && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
              {icon === "bar-chart" && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              )}
              {icon === "edit" && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              )}
            </svg>
          </div>
          <span className="text-sm font-medium text-vital-dark-gray truncate">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
