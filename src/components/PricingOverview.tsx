"use client";

import { motion } from "framer-motion";
import { FeeSchedule } from "@/types/global";
import { Briefcase, User } from "lucide-react";

export default function AccountTypesOverview({ fees }: { fees: FeeSchedule }) {
  const customerCategories = Object.keys(fees["Customer"] ?? {});
  const businessCategories = Object.keys(fees["Business"] ?? {});

  const handleViewFees = (mode: "Customer" | "Business") => {
    // update hash first
    window.location.hash =
      mode === "Customer" ? "#fees-customer" : "#fees-business";

    // then scroll smoothly
    const section = document.querySelector("#compare-plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            Account Types
          </h2>
          <p className="text-xl text-vital-gray font-poppins">
            See the main features and services available to each account type
            below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AccountTypeCard
              icon={<User className="w-12 h-12 text-vital-blue" />}
              title="Customer"
              highlights={customerCategories}
              buttonLabel="View Customer Fees"
              onClick={() => handleViewFees("Customer")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AccountTypeCard
              icon={<Briefcase className="w-12 h-12 text-vital-yellow" />}
              title="Business"
              highlights={businessCategories}
              buttonLabel="View Business Fees"
              onClick={() => handleViewFees("Business")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AccountTypeCard({
  icon,
  title,
  highlights,
  buttonLabel,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  highlights: string[];
  buttonLabel: string;
  onClick: () => void;
}) {
  return (
    <div className="h-[390px] rounded-[20px] bg-white shadow border p-8 flex flex-col gap-7 items-stretch relative">
      <div className="flex items-center gap-4 mb-5">
        {icon}
        <span className="text-2xl font-bold text-vital-dark-gray font-gilroy">
          {title}
        </span>
      </div>
      <ul className="space-y-3 flex-1">
        {highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-center text-vital-dark-gray text-base font-poppins"
          >
            <svg
              className="w-5 h-5 text-vital-blue mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClick}
          className="px-6 py-2 rounded-full bg-vital-blue text-white font-semibold font-poppins text-base shadow transition hover:bg-vital-blue-hover"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
