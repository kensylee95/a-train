"use client";

import { FeeSchedule } from "@/types/global";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ComparePlans({ fees }: { fees: FeeSchedule }) {
  const products = Object.keys(fees) as Array<keyof typeof fees>;
  const defaultProduct = products[0] ?? "Customer";

  const getInitialProduct = (): "Customer" | "Business" => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("#fees-business")) return "Business";
      if (hash.includes("#fees-customer")) return "Customer";
    }
    return defaultProduct as "Customer" | "Business";
  };

  const [activeProduct, setActiveProduct] = useState(getInitialProduct);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("#fees-business")) setActiveProduct("Business");
      else if (hash.includes("#fees-customer")) setActiveProduct("Customer");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleProductChange = (product: "Customer" | "Business") => {
    setActiveProduct(product);
    // remove hash, avoid hashchange collision
    history.replaceState(null, "", " ");
  };

  const categories = Object.keys(fees[activeProduct] ?? {});
  // Always use a valid category: current state if it's valid, otherwise first
  const currentCategory = categories.includes(activeCategory)
    ? activeCategory
    : categories[0] ?? "";
  const selectedRows = fees[activeProduct]?.[currentCategory] || [];

  return (
    <section id="compare-plans" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="font-poppins font-semibold mb-6 sm:mb-8 lg:mb-10 text-[#28241b] text-[32px] sm:text-[40px] lg:text-[48px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fees
        </motion.p>
        {/* Top-level (Product) tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {products.map((p) => (
              <button
                key={String(p)}
                onClick={() =>
                  handleProductChange(p as "Customer" | "Business")
                }
                className={`px-6 py-2 rounded-lg text-lg font-semibold focus:outline-none min-w-[110px] transition-all
                  ${
                    activeProduct === p
                      ? "bg-white text-vital-dark-gray font-bold shadow"
                      : "text-gray-400 hover:bg-white/80"
                  }`}
                type="button"
              >
                {String(p)}
              </button>
            ))}
          </div>
        </div>
        {/* Categories and table layout */}
        <div className="flex flex-col md:flex-row gap-6 mt-7">
          {/* Category tabs/pills */}
          {/* Mobile: horizontal scroll, no wrap. Desktop: vertical list. */}
          <div className="w-full md:w-60">
            <div className="flex flex-row md:flex-col gap-2 md:pr-0 md:mr-6 overflow-x-auto md:overflow-x-visible flex-nowrap whitespace-nowrap w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-lg text-base md:text-lg font-semibold transition-colors border shadow-sm text-center lg:text-left w-full md:w-full
                    ${
                      currentCategory === cat
                        ? "bg-vital-blue text-white border-vital-blue"
                        : "bg-gray-50 text-vital-gray border-gray-200 hover:bg-white"
                    }
                    min-w-max md:min-w-0`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Selected category's table */}
          <div className="flex-1 md:pl-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm min-w-0">
              <div className="divide-y divide-gray-200">
                {selectedRows.map((it, idx) => (
                  <div
                    key={idx}
                    className="py-3 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-vital-dark-gray">
                        {it.Service}
                      </p>
                      {it.Description && (
                        <p className="text-xs text-vital-gray mt-1">
                          {it.Description}
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-vital-dark-gray whitespace-nowrap">
                      {it.Fee}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
