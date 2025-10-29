"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/vitalswap.png"
                alt="VitalSwap"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-vital-blue font-gilroy">
                VitalSwap
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="flex items-center space-x-1 text-vital-gray hover:text-vital-blue cursor-pointer">
              <span>Home</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-vital-gray hover:text-vital-blue cursor-pointer">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-vital-gray hover:text-vital-blue cursor-pointer">
              <span>Pricing</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-vital-gray hover:text-vital-blue cursor-pointer">
              <span>Contact</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-vital-gray hover:text-vital-blue">
              Log in
            </button>
            <button className="bg-vital-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-poppins">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-vital-gray hover:text-vital-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.4,
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/vitalswap.png"
                      alt="VitalSwap"
                      width={32}
                      height={32}
                    />
                    <span className="text-xl font-bold text-vital-blue font-gilroy">
                      VitalSwap
                    </span>
                  </div>
                  <button
                    className="p-2 text-vital-gray hover:text-vital-blue"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-vital-gray hover:text-vital-blue cursor-pointer py-3 border-b border-gray-100">
                      <span className="text-lg font-medium">Home</span>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between text-vital-gray hover:text-vital-blue cursor-pointer py-3 border-b border-gray-100">
                      <span className="text-lg font-medium">Features</span>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between text-vital-gray hover:text-vital-blue cursor-pointer py-3 border-b border-gray-100">
                      <span className="text-lg font-medium">Pricing</span>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between text-vital-gray hover:text-vital-blue cursor-pointer py-3 border-b border-gray-100">
                      <span className="text-lg font-medium">Contact</span>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </nav>

                {/* Action Buttons */}
                <div className="p-4 border-t space-y-4">
                  <button className="w-full text-left text-vital-gray hover:text-vital-blue py-3 text-lg font-medium">
                    Log in
                  </button>
                  <button className="w-full bg-vital-blue text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-poppins text-lg font-medium">
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
