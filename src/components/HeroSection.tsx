"use client";

import svgPaths from "@libs/svgPaths";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-r from-vital-light-blue to-blue-100 overflow-hidden">
      {/* Decorative wavy line - positioned behind woman */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <svg viewBox="0 0 1024 400" className="w-full h-full" fill="none">
          <path
            d={svgPaths.p3abc6900}
            stroke="#ffbe1a"
            strokeWidth="8"
            fill="none"
            className="opacity-60"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-vital-dark-gray leading-tight font-gilroy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transparent Fees.
              <br />
              Smarter Swaps.
            </motion.h1>
            <motion.p
              className="text-xl text-vital-gray max-w-lg font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We keep our fees simple, clear, and easy to understand.
            </motion.p>
            <motion.button
              className="bg-vital-yellow text-vital-dark-gray px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try for free
            </motion.button>
          </motion.div>

          {/* Right Content - Woman with Smartphone */}
          <motion.div
            className="relative hidden sm:flex items-end justify-start lg:justify-start mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Woman Image Placeholder */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="/images/heroimage.png"
                  alt="Woman holding smartphone"
                  width={320}
                  height={400}
                  className="w-80 h-96 object-cover rounded-2xl "
                />
              </motion.div>

              {/* Notification Bubble */}
              <motion.div
                className="absolute top-3/4 -right-10 lg:-right-24 transform -translate-y-1/2 shadow-2xl bg-white/50 rounded-2xl p-4 max-w-xs"
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/vitalswap.png"
                    alt="VitalSwap Logo"
                    width={32}
                    height={32}
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-sm font-poppins"
                      style={{ color: "#1b1f28" }}
                    >
                      Vitalswap
                    </div>
                    <div
                      className="text-xs font-poppins"
                      style={{ color: "#1b1f28" }}
                    >
                      You received $250 from
                    </div>
                    <div
                      className="text-xs font-poppins"
                      style={{ color: "#1b1f28" }}
                    >
                      amokunbello
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
