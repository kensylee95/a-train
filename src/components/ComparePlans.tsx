"use client";

import svgPaths from "../libs/svgPaths";
import { motion } from "framer-motion";

export default function ComparePlans() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-poppins font-semibold mb-6 sm:mb-8 lg:mb-10 leading-[36px] sm:leading-[44px] lg:leading-[52px] min-w-full not-italic relative shrink-0 text-[#28241b] text-[32px] sm:text-[40px] lg:text-[48px] text-center tracking-[-0.64px] sm:tracking-[-0.8px] lg:tracking-[-0.96px] w-min mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Compare plans
        </motion.p>

        {/* Desktop Table View */}
        <motion.div
          className="hidden md:block content-stretch flex flex-col gap-[1.5px] items-start relative shrink-0 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PlanHeader />
          <PlanFeatureRow featureName="Swap Fees" basic="0.5%" pro="0.3%" />
          <PlanFeatureCheck featureName="FX Conversions" />
          <PlanFeatureRow featureName="Transfers" basic="1%" pro="0.5%" />
        </motion.div>

        {/* Mobile Card View */}
        <motion.div
          className="md:hidden space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MobilePlanCard
            title="Basic"
            price="₦5,000"
            period="per month"
            subtitle="For individuals"
            buttonText="Choose Basic"
            buttonVariant="outlined"
            features={[
              { name: "Swap Fees", value: "0.5%" },
              { name: "FX Conversions", value: "✓" },
              { name: "Transfers", value: "1%" },
            ]}
          />
          <MobilePlanCard
            title="Pro"
            price="₦15,000"
            period="per month"
            subtitle="For professionals"
            buttonText="Start with Plus"
            buttonVariant="filled"
            isHighlighted={true}
            features={[
              { name: "Swap Fees", value: "0.3%" },
              { name: "FX Conversions", value: "✓" },
              { name: "Transfers", value: "0.5%" },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

function PlanHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid bottom-[-1.5px] left-0 pointer-events-none right-0 top-0"
      />
      <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" />

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none"
        />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] items-start p-[16px] sm:p-[20px] lg:p-[28px] relative w-full">
            <div className="content-stretch flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-start relative shrink-0 w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[20px] sm:leading-[22px] lg:leading-[24px] not-italic relative shrink-0 text-[#28241b] text-[14px] sm:text-[15px] lg:text-[17px] text-center tracking-[-0.07px] sm:tracking-[-0.075px] lg:tracking-[-0.085px] w-full">
                Basic
              </p>
              <div className="content-stretch flex gap-[2px] sm:gap-[3px] lg:gap-[4px] items-baseline justify-center relative shrink-0 w-full">
                <p className="font-['Poppins:Bold',sans-serif] leading-[24px] sm:leading-[28px] lg:leading-[32px] not-italic relative shrink-0 text-[#28241b] text-[20px] sm:text-[24px] lg:text-[28px] text-nowrap tracking-[-0.4px] sm:tracking-[-0.48px] lg:tracking-[-0.56px] whitespace-pre">
                  ₦5,000
                </p>
              </div>
            </div>
            <div className="relative rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[1px] sm:border-[1.25px] lg:border-[1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]"
              />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex items-center justify-center px-[12px] sm:px-[15px] lg:px-[18px] py-[6px] sm:py-[7px] lg:py-[8px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[16px] sm:leading-[18px] lg:leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#28241b] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-nowrap">
                    Choose Basic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none"
        />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] items-start p-[16px] sm:p-[20px] lg:p-[28px] relative w-full">
            <div className="content-stretch flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] items-start relative shrink-0 w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[20px] sm:leading-[22px] lg:leading-[24px] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.07px] sm:tracking-[-0.075px] lg:tracking-[-0.085px] w-full">
                Pro
              </p>
              <div className="content-stretch flex gap-[2px] sm:gap-[3px] lg:gap-[4px] items-baseline justify-center relative shrink-0 w-full">
                <p className="font-['Poppins:Bold',sans-serif] leading-[24px] sm:leading-[28px] lg:leading-[32px] not-italic relative shrink-0 text-[20px] sm:text-[24px] lg:text-[28px] text-black text-nowrap tracking-[-0.4px] sm:tracking-[-0.48px] lg:tracking-[-0.56px] whitespace-pre">
                  ₦15,000
                </p>
              </div>
            </div>
            <div className="bg-vital-yellow relative rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex items-center justify-center px-[12px] sm:px-[15px] lg:px-[18px] py-[6px] sm:py-[7px] lg:py-[8px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Medium',sans-serif] grow leading-[16px] sm:leading-[18px] lg:leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001f54] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-nowrap">
                    Start with Plus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanFeatureRow({
  featureName,
  basic,
  pro,
}: {
  featureName: string;
  basic: string;
  pro: string;
}) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid bottom-[-1.5px] left-0 pointer-events-none right-0 top-0"
      />

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] items-start px-[20px] sm:px-[28px] lg:px-[36px] py-[16px] sm:py-[20px] lg:py-[28px] relative w-full">
            <p className="[white-space-collapse:collapse] font-['Poppins:Regular',sans-serif] leading-[18px] sm:leading-[21px] lg:leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#28241b] text-[14px] sm:text-[16px] lg:text-[20px] text-nowrap tracking-[-0.07px] sm:tracking-[-0.08px] lg:tracking-[-0.1px] w-full">
              {featureName}
            </p>
          </div>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] sm:p-[20px] lg:p-[28px] relative w-full">
            <p className="font-['Poppins:Regular',sans-serif] leading-[18px] sm:leading-[21px] lg:leading-[24px] not-italic relative shrink-0 text-[#28241b] text-[14px] sm:text-[16px] lg:text-[20px] text-center tracking-[-0.07px] sm:tracking-[-0.08px] lg:tracking-[-0.1px] w-full">
              {basic}
            </p>
          </div>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] sm:p-[20px] lg:p-[28px] relative w-full">
            <p className="font-['Poppins:Regular',sans-serif] leading-[18px] sm:leading-[21px] lg:leading-[24px] not-italic relative shrink-0 text-[#28241b] text-[14px] sm:text-[16px] lg:text-[20px] text-center tracking-[-0.07px] sm:tracking-[-0.08px] lg:tracking-[-0.1px] w-full">
              {pro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanFeatureCheck({ featureName }: { featureName: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid bottom-[-1.5px] left-0 pointer-events-none right-0 top-0"
      />

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] items-start px-[20px] sm:px-[28px] lg:px-[36px] py-[16px] sm:py-[20px] lg:py-[28px] relative w-full">
            <p className="[white-space-collapse:collapse] font-['Poppins:Regular',sans-serif] leading-[18px] sm:leading-[21px] lg:leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#28241b] text-[14px] sm:text-[16px] lg:text-[20px] text-nowrap tracking-[-0.07px] sm:tracking-[-0.08px] lg:tracking-[-0.1px] w-full">
              {featureName}
            </p>
          </div>
        </div>
      </div>

      {[1, 2].map((i) => (
        <div
          key={i}
          className="basis-0 grow min-h-px min-w-px relative shrink-0"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0px_1.5px] border-[rgba(0,31,84,0.2)] border-solid inset-0 pointer-events-none"
          />
          <div className="flex flex-col items-center justify-center size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] sm:p-[20px] lg:p-[28px] relative w-full">
              <div className="h-[18px] sm:h-[21px] lg:h-[24px] relative shrink-0 w-full">
                <div className="absolute left-[calc(50%+0.4px)] size-[24px] sm:size-[28px] lg:size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 32 32"
                  >
                    <g>
                      <path
                        d={svgPaths.p27037440}
                        stroke="var(--stroke-0, #28241B)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobilePlanCard({
  title,
  price,
  period,
  subtitle,
  buttonText,
  buttonVariant,
  isHighlighted = false,
  features,
}: {
  title: string;
  price: string;
  period: string;
  subtitle: string;
  buttonText: string;
  buttonVariant: "outlined" | "filled";
  isHighlighted?: boolean;
  features: Array<{ name: string; value: string }>;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl p-6 ${
        isHighlighted
          ? "bg-gradient-to-br from-vital-blue/5 to-vital-blue/10 border-2 border-vital-blue"
          : "bg-white border border-gray-200"
      } shadow-lg`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Highlight Badge */}
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-vital-yellow text-vital-dark-gray px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-vital-dark-gray mb-2 font-gilroy">
          {title}
        </h3>
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-4xl font-bold text-vital-dark-gray font-poppins">
            {price}
          </span>
          <span className="text-lg text-vital-gray ml-2 font-poppins">
            {period}
          </span>
        </div>
        <p className="text-vital-gray font-poppins">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-vital-dark-gray font-poppins">
              {feature.name}
            </span>
            <span
              className={`font-semibold font-poppins ${
                feature.value === "✓"
                  ? "text-green-600 text-xl"
                  : "text-vital-dark-gray"
              }`}
            >
              {feature.value}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className={`w-full py-3 px-6 rounded-xl font-semibold font-poppins transition-colors ${
          buttonVariant === "filled"
            ? "bg-vital-yellow text-vital-dark-gray hover:bg-yellow-500"
            : "border-2 border-vital-blue text-vital-blue hover:bg-vital-blue hover:text-white"
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}
