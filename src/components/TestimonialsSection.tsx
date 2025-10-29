"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Zuna Nyc",
      location: "New York",
      quote: "Vita Swap made international transfers a breeze!",
      avatar: "ZN",
    },
    {
      name: "Sumario",
      location: "London",
      quote: "Transparent fees and great customer service",
      avatar: "S",
    },
    {
      name: "Javu Lark",
      location: "Tokyo",
      quote: "Reliable and fast swaps every time",
      avatar: "JL",
    },
    {
      name: "Ka Ren",
      location: "Singapore",
      quote: "Vita Swap is my go-to for all currency needs",
      avatar: "KR",
    },
  ];

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
            Trusted by 10,000+ users
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-vital-blue rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-vital-dark-gray font-poppins">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-vital-gray font-poppins">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <p className="text-vital-dark-gray italic font-poppins">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
