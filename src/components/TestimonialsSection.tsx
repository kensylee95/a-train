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
              {/* Add 5 yellow stars above the quote */}
              <div className="flex mb-2" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400 inline-block mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>Star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.175c.969 0 1.372 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.96c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.285-3.96a1 1 0 00-.364-1.118L2.049 9.388c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.96z" />
                  </svg>
                ))}
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
