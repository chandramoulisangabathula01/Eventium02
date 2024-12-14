/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function faq() {
    const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  // const controls = motion.useAnimation();

  // const handleValueChange = (value: string) => {
  //   router.push(`/${value}`);
  // };

  const fadeInUp = {
    hidden: { opacity: 1, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <motion.section 
        initial="hidden"
        // animate={controls}
        variants={staggerChildren}
        className="py-20 bg-[#f4f2ef]"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              { 
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 6-12 months in advance for premium dates and venues. This ensures you get your preferred choices and allows adequate time for planning."
              },
              { 
                question: "What's included in your packages?",
                answer: "Our packages are customizable but typically include venue selection, decor, catering, photography, and event coordination. The specific inclusions vary by package level."
              },
              { 
                question: "Can you accommodate destination weddings?",
                answer: "Yes! We specialize in organizing destination weddings across India's most prestigious venues and can handle all logistics including guest accommodations."
              },
              { 
                question: "How do you handle cultural traditions?",
                answer: "Our team is well-versed in various cultural wedding traditions and ceremonies. We work closely with you to ensure all customs are properly incorporated and respected."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-black rounded-lg overflow-hidden bg-[#FBF9F6]"
              >
                <motion.button
                  className="w-full px-6 py-4 text-left hover:bg-[#afb4a5] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-[Cinzel] font-bold text-lg text-black">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-4 text-black font-[Rajdhani]">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



  )
}
